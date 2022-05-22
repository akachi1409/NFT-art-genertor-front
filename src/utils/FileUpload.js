import React from 'react';
import { RiDownload2Line } from 'react-icons/ri';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { BsCheck2Circle } from 'react-icons/bs';
import axios from 'axios';
import {Link, Redirect } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { GiCrossMark } from 'react-icons/gi';


class FileUpload extends React.Component {

  constructor(props) {
      super(props);

      this.inputRef = React.createRef();
      this.displayData = [];
      this.imgTemp = new Map();
      this.characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      this._id = "";

      this.state = {
        showdata : this.displayData,
        file: null,
        preview: "",
        option: "common",
        files:[],

        // img: new Map(),
        notify: false
      }

      this.pushData = this.pushData.bind(this);
      this.popData = this.popData.bind(this);
  };

  uploadFile = async (e) => {
    const { files } = this.state;    
    files.push(e.target.files[0]) 
    // this.setState({file: e.target.files[0]});
    // this.imgTemp.set(e.target.id, e.target.files[0]);
    // console.log("temp:", this.imgTemp);
    // this._id = e.target.id;
    // console.log(this.imgTemp.get(e.target.id));
    // const formData = new FormData();

    //     formData.append("file", e.target.files[0]);
    //     formData.append("fileName", e.target.files[0].name);
    //     formData.append("option", this.state.option);
    //     formData.append("traitId", localStorage.getItem("traitId"));
    //     try {
    //       const res = await axios.post(
    //         "http://localhost:3000/upload",
    //         formData
    //       );
    //       this.setState({notify: !notify})
    //       console.log(res);
    //     } catch (ex) {
    //       console.log(ex);
    //   }
  }

  pushData() {
    const _id = this.generateString(6);
    const img_id = "img_" + _id;

    console.log("render:", this.imgTemp.get(img_id));
        this.displayData.push(
          <div key={_id + "all"} id="createdMain">
            <div className="d-flex">
              <div className="">

                <label htmlFor={img_id}>
                  {this.imgTemp.get({img_id}) ? (
                    <img src={URL.createObjectURL(this.imgTemp.get({img_id}))} alt='Image Preview' width="100" height="100" />
                  ) : ( 
                      <RiDownload2Line className="lg-bt"/>
                  )}
                </label>

                <input id={img_id} ref={this.inputRef} onChange={this.uploadFile} className="d-none" type="file" accept="image/*">
                </input>
             </div>
             <div className="mx-2">
                <div className="mb-2">
                  <button className="btn btn-primary zoom-button" onClick={this.pushData}><AiOutlinePlusCircle className=" " /></button>
                </div>
                <div>
                  <button className="btn btn-primary zoom-button"><AiOutlineMinusCircle className="md-bt" onClick={this.popData}/></button>
                </div>
            </div>
          </div>
          <div>
              <select className="btn btn-outline-primary" onChange={(e) => this.setState({option: e.target.value})}>
                  <option>common</option>
                  <option>uncommon</option>
              </select>
          </div>
        </div>
      );

      this.setState({
          showdata : this.displayData,
      });
    }

  popData() {
    this.displayData.pop();
    this.setState({
      showdata : this.displayData
    });
  }

  handleCancel(e) {
    let text = "Do you want to cancel?";
    if(window.confirm(text) == true) {
      const formData = new FormData();
      formData.append("traitId", localStorage.getItem("traitId"));
      axios.post("/trait/cancel", formData);
      window.location.href = '/';
    }
  }
  
  handleDelete(e) {
      const formData = new FormData();
      formData.append("traitId", localStorage.getItem("traitId"));
      axios.post("/trait/cancel", formData);
  }
  

generateString(length) {
    let result = '';
    const charactersLength = this.characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += this.characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

  render() {
    return (
      <div id="all">
        
      <div>
        <div id='cancel'>
                <FaRegArrowAltCircleLeft className="cn-bt" onClick={this.handleCancel}/>
        </div>
        <div id='confirm'>
          <Link to="/">
                <BsCheck2Circle className="ch-bt" onClick={(e) => alert("Upload success!")}/>
          </Link>
        </div>
        <div id='title'>
          {
            localStorage.getItem("traitId")
          }
        </div>
        <div id='main'>
          <div className="d-flex">
            <div className="">
              <label htmlFor="file-input" id='img'>
                {this.imgTemp.get("file-input") ? (
                  <img src={URL.createObjectURL(this.imgTemp.get("file-input"))} alt='Image Preview' width="100" height="100" />
                ) : (
                    <RiDownload2Line className="lg-bt"/>
                )}
              </label>
              <input id="file-input" ref={this.inputRef} onChange={this.uploadFile} className="d-none" type="file" accept="image/*"/>
            </div>
            <div className="mx-2">
              <div className="mb-2">
                <button className="btn btn-primary zoom-button" onClick={this.pushData}><AiOutlinePlusCircle className="md-bt" /></button>
              </div>
              <div>
                <button className="btn btn-primary zoom-button"><AiOutlineMinusCircle className="md-bt" onClick={this.popData}/></button>
              </div>
            </div>
          </div>
          <div className='mx-2'>
              <select className="btn btn-outline-primary mt-2" onChange={(e) => this.setState({option: e.target.value})}>
                  <option>common</option>
                  <option>uncommon</option>
              </select>
          </div>
      </div>
  </div>
  <div>
      {this.displayData}
  </div> 
  <div id='reset' onClick={this.handleDelete}>
      <GiCrossMark className='cs-bt'/>
  </div>
  </div>
      );
  }
}


export default FileUpload;