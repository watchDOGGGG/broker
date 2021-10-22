const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const server = require('http').Server(app)
const Users = require('./Schema/Users')
const Bank = require('./Schema/Bank')
const Upload = require('./Schema/Upload')
const Deposit = require('./Schema/Deposit')
const bcrypt = require('bcrypt')
const jwT = require('./GenerateJtoken/jwtgen')
const Authorization = require('./Authorization/authorization')
const randomId = require('random-id')
const { hash } = require('bcrypt')
const fileUpload = require('express-fileupload');
const Path = require('path')
const authorization = require('./Authorization/authorization')
const { ADDRCONFIG } = require('dns')
require('dotenv').config()


// CONNECT MONGODB
try {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  mongoose.connection.on("error", err => {
    console.log("err", err)
  })
  mongoose.connection.on("connected", (err, res) => {
    console.log("Connection establish")
  })
} catch (error) {
  console.log(error.message)
}
// END CONNECT

// //SET EXPRESS HANDLEBARS MIDDLEWARE
// //MIDDLEWARE
app.use(express.json())
app.use(fileUpload());
app.use(cors())
app.use('/Image',express.static('uploads'))
//ROUTE

try {
  //Registration
  app.post('/register',async(req,res)=>{
    const {fname,lname,email,phone,password,cpass,country,currency} = req.body
   if(fname && lname && email && phone && password && cpass && country && currency){

    if(cpass != password){
      res.json({error:`password doesn't match`})
    }else{
      const CheckUserExist = await Users.findOne({email:email})
    if(CheckUserExist){
      res.json({error:'User with this email already exist'})
    }else{
        var v_len = 5;
        var v_pattern = 'Az0aZ'
        let v_link = randomId(v_len, v_pattern)
      const Salt = await bcrypt.genSalt(10)
      const bcryptpass = await bcrypt.hash(password,Salt)

      const InsertUser = await new Users({
        firstname:fname,
        lastname:lname,
        email:email,
        phone:phone,
        password:bcryptpass,
        country:country,
        refered_by:'',
        refered_link:`https://coinrector/ref/${v_link}`,
        active:0,
        balance:"0.00000005",
        deposit:"0.00000000",
        currency:currency,
        bonus:"0.00000005"
      })

      const NewUser = await InsertUser.save()
      if(NewUser){
        res.status(200).json({done:'Account created successfully'})
      }else{
        res.status(500).json({error:'registration failed'})
      }
    }
    }
  }else{
    res.status(500).json({error:'fill all fields'})
  }
  })

  //Login
app.post('/Login',async(req,res)=>{
  const {email,password} = req.body
  if(email && password){
    const checkEmail = await Users.findOne({email:email})
    if(checkEmail){
      const checkPassword = await bcrypt.compare(password,checkEmail.password)
      if(checkPassword){
        const token = jwT(checkEmail._id)
        const UpdateActive = await Users.updateOne({_id:checkEmail._id},{$set:{active:1}}) 
        res.json({token:token})
      }else{
        res.status(500).json({error:'password incorrect'})
      }
    }else{
      res.status(404).json({error:'user with this email not found'})
    }
  }else{
    res.status(500).json({error:'fill all field'})
  }
 
})

//verifyToken 
app.get('/verifyJwt',Authorization,async(req,res)=>{
  try {
      res.json({true:true})
  } catch (error) {
     console.log(error.message)
  }
})

//GetUser details
app.get('/GetDetails',Authorization,async(req,res)=>{
  const getDetails = await Users.findOne({_id:req.user})
 res.json({data:getDetails})
})
app.get('/GetDetails/:user',async(req,res)=>{
  const getDetails = await Users.findOne({_id:req.params.user})
 res.json({data:getDetails})
})


//GetUser details
app.patch('/UpdateUserInfo',Authorization,async(req,res)=>{
  const {firstname,lastname,phone,address,Dob} = req.body
  if(firstname){
    const UpdateInfo = await Users.updateOne({_id:req.user},{$set:{firstname:firstname}})
  }
   if(lastname){
    const UpdateInfo = await Users.updateOne({_id:req.user},{$set:{lastname:lastname}})
  }
   if(phone){
    const UpdateInfo = await Users.updateOne({_id:req.user},{$set:{phone:phone}})
  }
   if(address){
    const UpdateInfo = await Users.updateOne({_id:req.user},{$set:{address:address}})
  }
 
 res.json({data:1})
})

app.post('/InsertBank',Authorization,async(req,res)=>{
  const {bankName,AcctNum,AcctName,btc,eth,ltc} = req.body
  if(bankName && AcctNum && AcctName || btc || eth || ltc){
    const checkIfUserAdded = await Bank.findOne({User:req.user})
    if(!checkIfUserAdded){
      const AddBank = await new Bank({
        BankName:bankName,
        AcctNum:AcctNum,
        AcctName:AcctName,
        Btc:btc,
        Eth:eth,
        Ltc:ltc,
        User:req.user
      })
      const newBank = await AddBank.save()
      if(newBank){
        res.json({data:'bank info updated successfully'})
      }else{
        res.status(500).json({error:'error updating bank info'})
      }
    }else{
      if(bankName && AcctNum && AcctName){
        const UpdateBankD = await Bank.updateOne({User:req.user},{$set:{BankName:bankName,AcctNum:AcctNum,AcctName:AcctName}})
      }else if(btc){
        const UpdateBankD = await Bank.updateOne({User:req.user},{$set:{Btc:btc}})
        
      }else if(eth){
        const UpdateBankD = await Bank.updateOne({User:req.user},{$set:{Eth:eth}})
      }else if(ltc){
        const UpdateBankD = await Bank.updateOne({User:req.user},{$set:{Ltc:ltc}})
      }
      res.json({data:'your data was updated successfully'})
    }
   
  }
})

//Get user Bankinfo
app.get('/GetBankD',Authorization,async(req,res)=>{
  const GetUserBankInfo = await Bank.findOne({User:req.user})
  if(GetUserBankInfo){
    res.json({data:GetUserBankInfo})
  }else{
    res.status(404).json({error:'you have no withdrawal info yet.'})
  }
})

//Request 
app.post('/Requestwithdraw',Authorization,async(req,res)=>{
  const {amount} = req.body
  const CheckBalance = await Users.findOne({_id:req.user})
  if(amount > CheckBalance.balance){
    res.status(500).json({error:'your account balance is lower than the requested amount'})
  }else{
    res.json({data:'you have to pay fifteen percent fee of your profit amount to process your withdrawal.'})
  }
})

//Upload payment of prof
app.post('/Upload',Authorization, async(req, res)=>{
  const {from,amount,Ptype,plan} = req.body
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  } else {

    const filenewName = `${Date.now()}${Path.extname(req.files.avatar.name)}`
    uploadPath = __dirname + '/uploads/' + filenewName;

    // Use the mv() method to place the file somewhere on your server
    req.files.avatar.mv(uploadPath, async function (err) {
      if (err)
        return res.status(500).send(err);

        const InsertIntoDB = await new Upload({
          User: req.user,
          url: `http://localhost:4000/Image/${filenewName}`,
          from:from
        })
        const newInser = await InsertIntoDB.save()
        if(newInser){
          if(from === 'deposit'){
            const InsertDeposit = await new Deposit({
              user:req.user,
              amount: amount,
              Ptype:Ptype,
              plan:plan,
              status: 'pending'
            })
            const newDeposit = await InsertDeposit.save()
          }
         res.json({data:'image uploaded successfully'})
        }
    });
    
   
  }
});

//Get user profile Image
app.get('/profileImg',Authorization,async(req,res)=>{
  const GetUserImage = await Upload.findOne({User:req.user,from:'profile'})
  if(GetUserImage){
    res.json({data:GetUserImage})
  }else{
    res.status(404).json({error:0})
  }
})

//Get all user Data
app.get('/FetchAllUsers',async(req,res)=>{
  const GetAllUser = await Users.find()
  if(GetAllUser){
    res.json({data:GetAllUser})
  }else{
    res.status(4000).json()
  }
})

//Admin//

//Delete user
app.get('/DeleteUser/:id',async(req,res)=>{
 
  const DeleteUser = await Users.deleteOne({_id:req.params.id})
  if(DeleteUser){
    res.json({data:'deleted'})
  }else{
    res.status(500).json({error:'error deleting'})
  }
})

//Update User
app.patch('/UpdateUser/:id',async(req,res)=>{
  try {
    const {profit,bonus,deposit} = req.body
    const newProfit = parseFloat(profit)
    const newBonus = parseFloat(bonus)
    const newDeposit = parseFloat(deposit)

  const getBalance = await Users.findOne({_id:req.params.id})
  
   if(bonus){
    //cal for balnace
    let newBalance = getBalance.balance + newBonus 
    if(newBalance < 1){
     let newBalance = 0 
    }

    // cal for bonus
    let setBonus = getBalance.bonus + newBonus 
    if(setBonus < 1){
      let setBonus = 0 
     }
    const UpdateUser = await Users.updateOne({_id:req.params.id},{$set:{bonus:setBonus,balance:newBalance}})
  }
   if(deposit){
      //cal for balnace
      let newBalance = parseFloat(getBalance.balance) + newDeposit 
      if(newBalance < 0.00000001){
       let newBalance = 0 
      }
  
      // cal for deposit
      let setDeposit = parseFloat(getBalance.deposit) + newDeposit 
      let initialBalance = newBalance.toString()
      let initialDeposit = setDeposit.toString()
      if(setDeposit < 0.00000001){
        let setDeposit = 0 
       }
    const UpdateUser = await Users.updateOne({_id:req.params.id},{$set:{deposit:initialDeposit,balance:initialBalance}})
    // Update coin amount
    setInterval(async() => {
      const UpdateCoin = await Users.findOne({_id:req.params.id})
   
      const Amount = parseFloat(UpdateCoin.coinamount)
      let initialAmount = 0.0000005
      let newAmount = Amount + initialAmount
      
      Addcoin(req.params.id,newAmount)
      }, 1000);
  }
res.json({data:'updated successfully'})
  } catch (error) {
    console.log(error.message)
  }
 
})

//Deposit 
app.get('/getDeposit',Authorization,async(req,res)=>{
  const getAllDeposit = await Deposit.find({user:req.user})
  if(getAllDeposit){
   res.json({data:getAllDeposit})
  }
})

app.get('/getAllDeposit',async(req,res)=>{
  const getAllDeposit = await Deposit.find()
  if(getAllDeposit){
   res.json({data:getAllDeposit})
  }
})

app.get('/updateDepositStatus/:user/:set/:id/:plan/:type/:amount',async(req,res)=>{
  const newDeposit = parseFloat(req.params.amount)

  const btc_starter = {
    plan:'starter level',
    profit:0.0001,
    timeout:2592000
  }
  const btc_vip = {
    profit:0.001,
    timeout:1814400
  }
  const btc_boss = {
    profit:0.0001,
    timeout:1209600 
  }
  const eth_starter = {
    plan:'starter level',
    profit:0.0001,
    timeout:2592000
  }
  const eth_vip = {
    profit:0.01,
    timeout:1814400
  }
  const eth_boss = {
    profit:0.0001,
    timeout:1209600
  }
  const ltc_starter = {
    plan:'starter level',
    profit:0.0001,
    timeout:2592000
  }
  const ltc_vip = {
    profit:0.0001,
    timeout:1814400
  }
  const ltc_boss = {
    profit:0.0001,
    timeout:1209600
  }


  const UpdateStatus = await Deposit.updateOne({ _id: req.params.id }, { $set: { status: req.params.set } })

  if (UpdateStatus && req.params.set == 'approve') {
    const getBalance = await Users.findOne({ _id: req.params.user })
    //Update deposit
    let newBalance = parseFloat(getBalance.balance) + newDeposit 
    let UserDeposit = parseFloat(getBalance.deposit) + newDeposit
    const initialBalance = newBalance.toString()
    const UpdateUser = await Users.updateOne({_id:req.params.user},{$set:{deposit:UserDeposit,balance:initialBalance}})
    //Calculate and update user balance

      if (req.params.plan == btc_starter.plan && req.params.type == 'bitcoin') {
        
          setInterval(async() => {
            const getBalance = await Users.findOne({ _id: req.params.user })

            let newBalance = parseFloat(getBalance.balance) + btc_starter.profit
            Addcoin(req.params.user,newBalance)
            }, 1440);
      }else if(req.params.plan == btc_vip.plan && req.params.type == 'bitcoin'){
        etInterval(async() => {
          const getBalance = await Users.findOne({ _id: req.params.user })

          let newBalance = parseFloat(getBalance.balance) + btc_vip.profit
          Addcoin(req.params.user,newBalance)
          }, 1440);
      }else if(req.params.plan == btc_boss.plan && req.params.type == 'bitcoin'){
        etInterval(async() => {
          const getBalance = await Users.findOne({ _id: req.params.user })

          let newBalance = parseFloat(getBalance.balance) + btc_boss.profit
          Addcoin(req.params.user,newBalance)
          }, 1440);
      }else if(req.params.plan == eth_starter.plan && req.params.type == 'ethereum'){
        etInterval(async() => {
          const getBalance = await Users.findOne({ _id: req.params.user })

          let newBalance = parseFloat(getBalance.balance) + eth_starter.profit
          Addcoin(req.params.user,newBalance)
          }, 1440);
      }else if(req.params.plan == eth_vip.plan && req.params.type == 'ethereum'){
        etInterval(async() => {
          const getBalance = await Users.findOne({ _id: req.params.user })

          let newBalance = parseFloat(getBalance.balance) + eth_vip.profit
          Addcoin(req.params.user,newBalance)
          }, 1440);
      }else if(req.params.plan == eth_boss.plan && req.params.type == 'ethereum'){
        etInterval(async() => {
          const getBalance = await Users.findOne({ _id: req.params.user })

          let newBalance = parseFloat(getBalance.balance) + eth_boss.profit
          Addcoin(req.params.user,newBalance)
          }, 1440);
      }else if(req.params.plan == ltc_starter.plan && req.params.type == 'litcoin'){
        etInterval(async() => {
          const getBalance = await Users.findOne({ _id: req.params.user })

          let newBalance = parseFloat(getBalance.balance) + ltc_starter.profit
          Addcoin(req.params.user,newBalance)
          }, 1440);
      }else if(req.params.plan == ltc_vip.plan && req.params.type == 'litcoin'){
        etInterval(async() => {
          const getBalance = await Users.findOne({ _id: req.params.user })

          let newBalance = parseFloat(getBalance.balance) + ltc_vip.profit
          Addcoin(req.params.user,newBalance)
          }, 1440);
      }else if(req.params.plan == ltc_boss.plan && req.params.type == 'litcoin'){
        etInterval(async() => {
          const getBalance = await Users.findOne({ _id: req.params.user })

          let newBalance = parseFloat(getBalance.balance) + ltc_boss.profit
          Addcoin(req.params.user,newBalance)
          }, 1440);
      }
    
 }
  res.json({data:UpdateStatus})

  
})

async function Addcoin(user,newAmount){
  let StringAmount = newAmount.toString()
  const addCoinToUser = await Users.updateOne({_id:user},{$set:{balance:newAmount}})
  
}

app.get('/cal',(req,res)=>{
  const x = "0.2"
  const y = 0.3
  console.log(parseFloat(x)+y)
})

app.get('/getBalance',Authorization,async(req,res)=>{
  const getBalance = await Users.findOne({ _id: req.user })
  res.json({data:getBalance.balance})
})
} catch (error) {
  console.log(error.message)
}
//ROUTE END

const PORT  =  process.env.PORT || 4000

server.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})