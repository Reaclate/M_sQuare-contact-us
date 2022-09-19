import React, {useState} from "react";
import logo from '../assets/img/logo-bg.png'
import illustrator from '../assets/img/illustrator.svg'
import './contact.css';

export default function Contact (){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    return(
        <>
        <div className="container bg-white mt-5 rounded text-center">
           
        <div className="row">
            <div className="col-sm-6">
                <img src={illustrator} alt="logo" className="illus-img mb-5" />
            </div>
        <div className="col-sm-6">
        <img src={logo} alt="logo" className="img-fluid" />
            <h2 className ="text-decoration-underline text-black" > 
            Contact Us 
            </h2>
            <form className="container bg-white mt-4 w-100 text-center rounded">
            
            <input type="text" placeholder="Enter your Full Name" 
            className="w-75 my-4 border rounded border-secondary p-2" onChange={setName} />

            <input type="text" placeholder="Enter your Email" 
            className="w-75 mb-4 border rounded border-secondary p-2" onChange={setEmail} />

            <textarea type="text" placeholder="Message" rows={5} cols={50} 
            className="textarea w-75 mb-3 border rounded border-secondary p-2 mw-100 mh-25 m "
            onChange={setMessage}
            >
            </textarea>
          

            <button type="submit" className="btn w-75 mb-3" style={{backgroundColor:'#FF9900', color:'white'}}>
                Submit
            </button>
            </form>
        </div>

        </div>
        </div>
        </>
    )
}