import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const URL = "http://localhost:5000/api/auth/login";

function Login() {
 
  const [user ,setUser] = useState({
    email:"",
    password:"",
  })
const navigate = useNavigate();
const {storeTokenInLS}=useAuth();
//hadling input values

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]:value,
    });
  };

  //handling form submiision
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL,{
        method:"POST",
        headers: {
          "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
      });
      


      const res_data = await response.json();
      
      if(response.ok){
        console.log('res from server',res_data);
        storeTokenInLS(res_data.token);
        setUser({email:"",password:"",});
        toast.success("login successful")
        navigate("/");
      }else{
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }

      console.log(response);
    } catch (error) {
      console.log("register",error);
    }
  };
  
  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className="container grid grid-two-cols">
              <div className="login-image">
                <img src="/images/login.png" 
                alt="none" 
                width={500}
                height={500}/>
              </div>
              
              {/* login form */}
              <div className="login-form">
                <h1 className='main-heading mb-3'> Login</h1>
                <br />

                <form action="" onSubmit={handleSubmit}>

                  <div>
                    <label htmlFor="email">email</label>
                    <input 
                    type="email" 
                    name="email"
                    placeholder='enter your email' 
                    id="email" 
                    required
                    autoComplete='off'
                    value={user.email}
                    onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    name="password"
                    placeholder='password' 
                    id="password" 
                    required
                    autoComplete='off'
                    value={user.password}
                    onChange={handleInput}
                    />
                  </div>

                  <br />
                  
                  <button type='submit' className='btn btn-submit'>Login Now</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>

  )
}

export default Login
