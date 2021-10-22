import React from 'react'

class ImageUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: '',message:'',selectVal:''};
    }
  
    async _handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData();
      formData.set('from',this.props.from)
      formData.set('Ptype',this.state.selectVal)
      formData.set('amount',this.props.amount)
      formData.set('plan',this.props.plan)
      formData.append('avatar', this.state.file)
      const senData = await fetch('http://localhost:4000/Upload',{
        method:'POST',
        headers:{token:localStorage.token},
        body:formData,
      })

      const res = await senData.json()
      if(res.data){
        this.setState({message:res.data,file:'',imagePreviewUrl:''})
        }
    }
  
    _handleImageChange(e) {
      e.preventDefault();
      
      
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }

    setType = (e)=>{
      this.setState({selectVal:e.target.value})
    }
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">image view</div>);
      }
      const {message} = this.state
      return (
        <div>
          <div><span>{message}</span></div>
          <div className="previewComponent">
          <form onSubmit={(e)=>this._handleSubmit(e)} className="w-80">
           <div className="db mb3">
           <select name="" id="" className="form-control" onChange={this.setType}>
              <option value="">Select payment type</option>
              <option value="bitcoin">Bitcoin</option>
              <option value="ethereum">Ethereum</option>
              <option value="litcoin">Litcoin</option>
            </select>
           </div>
            <input className="fileInput form-control" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} />
            <button className="submitButton db mt1 btn btn-primary" 
              type="submit" 
              onClick={(e)=>this._handleSubmit(e)}>{this.props.title}</button>

<div className="imgPreview w-50 db">
            {$imagePreview}
          </div>
          </form>
          
        </div>
        </div>
      )
    }
  }
    
export default ImageUpload