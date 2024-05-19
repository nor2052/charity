import { useEffect, useRef, useState } from "react"
import { LOGIN, baseURL } from "../../Api/Api";
import axios from "axios";
import LoadingSubmit from "../../Components/Loading/Loading";
import Cookie from "cookie-universal";
import {Form} from 'react-bootstrap';
import { Navigate, useNavigate } from "react-router-dom";
export default function Login(){
    //States
    const[form, setForm] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate(); 
     //Loading
     const [loading , setLoading] = useState(false); // I want it to run when I send data and stop when he finifh sending data

     //Cookies
     const cookie = Cookie();

    //Err
    const [err,setErr] = useState("");

    //Ref
    const focus = useRef(null);

   //  Handle Form change
    function handleChange(e){
    //    e.preventDefault();
       setForm({ ...form, [e.target.name]: e.target.value });
    }
    //Handle focus
    useEffect(() =>{
        focus.current.focus();
    } , []);

    // Handle Submit
    async function handleSubmit(e){
       e.preventDefault();
       setLoading(true);
       try {
        const res = await axios.post(`${baseURL}/${LOGIN}` , form);
         setLoading(false);
         const token = res.data.token; 
         const role = res.data.user.role;
        //  console.log(role);
         const go = role === '1995' ? 'users' : 'writer';
         cookie.set('e-commerce', token);
        // navigate("/dashboard/users" , {replace: true});
        //  it route to another place and we use it instead of window.location.pathname
        // replace will delete the path witch i was in .. it doesn't return to the last place where i was and take me to the before path   
         window.location.pathname = `/dashboard/${go}`;
          console.log(res);
       }catch(err){
        setLoading(false);
        console.log(err);
        if(err.response.status === 401){
            setErr("wrong Email or password");
        } else{
            setErr("Internal Server Err");
        }
       }
    }
    console.log(form);
    return (
        <>
        {loading && <LoadingSubmit/>}
        <div className="container">
    <div className="row" style={{height: "100vh"}}>
     <Form className="form" onSubmit={handleSubmit}>
        <div className="custom-form">
            <h1 className="mb-5">Login Now</h1>
     <Form.Group 
     className="form-custom" 
     controlId="exampleForm.ControlInput1">
        <Form.Control
         type="email" 
         name="email"
        value={form.email}
        onChange={handleChange}
         placeholder="Enter your email" 
         required
         ref={focus}
         />
        <Form.Label>Email:</Form.Label>
      </Form.Group>
        <Form.Group 
         className="form-custom"
        controlId="exampleForm.ControlInput2"
        >
        <Form.Control
        type="password"
        name="password"
         value={form.password} 
         onChange={handleChange}   
         placeholder="Enter your Password.." 
         minLength="6"
         required
         />
        <Form.Label>Password:</Form.Label>
      </Form.Group>
        <button className="btn btn-primary">Login</button>
       <div className="google-btn">
        <a href={`http://127.0.0.1:8000/login-google`}>
            <div className="google-icon-wrapper">
                <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="sign in with google"
                />
            </div>
            <p className="btn-text">
                <b>sign in with google</b>
            </p>
        </a>
       </div>

        {err !=="" && <span className="error">{err}</span> }
        </div>
        </Form>
        </div>
        </div>
        </>
    )
}