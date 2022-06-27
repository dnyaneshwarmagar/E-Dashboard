import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    let auth = localStorage.getItem("user");
    if(auth){
      navigate("/")
    }
  },[])
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleData = (e) => {
    let { name, value } = e.target;

    // console.log({ [name]: value }, name, value, data[name]);

    setData({ ...data, [name]: value });
  };
  
  const collectData = async () =>{
    console.log(data);
    const res = await fetch("http://localhost:8080/users/register",{
      method:"post",
      body:JSON.stringify({...data}),
      headers:{
        'Content-Type':'application/json'
      }
    }).catch(err=>console.log(err))
    let result =await res.json();
    console.log(result)
    localStorage.setItem("user",JSON.stringify(result))
    if(result){
      navigate("/")
    }
  }
  return (
    <div className="inputBox">
      <h1>Register</h1>

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => handleData(e)}
        name={"name"}
      />
      <input
        type="text"
        placeholder="Enter Email"
        onChange={(e) => handleData(e)}
        name={"email"}
      />
      <input
        type="text"
        placeholder="Enter Password"
        onChange={(e) => handleData(e)}
        name={"password"}
      />
      <button type="submit" onClick={collectData}>Sing Up</button>
    </div>
  );
};
export default Signup;
