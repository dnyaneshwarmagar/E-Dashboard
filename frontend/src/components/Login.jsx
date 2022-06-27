import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [data,setData] = useState({
        email:"",
        password:""
    })
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setData({...data,[name] :value})
        console.log(name, value);
    }
   const handleLogin = async ()=>{
  
    const res = await fetch("http://localhost:8080/users/login",{
      method:"post",
      body:JSON.stringify({...data}),
      headers:{
        'Content-Type':'application/json'
      }
    }).catch(err=>console.log(err))
    let result =await res.json();
    if(result.name){
        localStorage.setItem("user",JSON.stringify(result));
        navigate("/")
    }else{
        alert("Please Enter Valid Details!")
    }
    console.log(result)
   }
  return (
    <div className="inputBox">
        <h1>Login</h1>
        <input placeholder="Enter Email" onChange={(e)=>handleChange(e)} name={"email"}/>
        <input placeholder="Enter Password" onChange={(e)=>handleChange(e)} name={"password"}/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login