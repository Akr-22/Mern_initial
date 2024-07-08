import {React,useState} from 'react'
import { useAuth } from '../store/auth';

const defaultContactFormData = {
  username:"",
  email:"",
  message:"",
};
function Contact() {

  const [contact ,setContact] = useState(defaultContactFormData);

  const[userData,setUserData]=useState(true);
  const {user} =useAuth();
  
  if(userData && user){
    setContact({
      username:user.username,
      email:user.email,
      message:"",
    })
    setUserData(false);
  }


//hadling input values

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]:value,
    });
  };

  //handling form submiision
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/form/contact" ,{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (response.ok){
        setContact(defaultContactFormData);
        alert("Message sent successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <section>
      <main>
        <div className="section-contact">
          <div className="container grid grid-two-cols">
            <div className="contact-img">
              <img src="/images/support.png" 
              alt="none" 
              width={500}
              height={500}/>
            </div>
            
            {/* contact form*/}
            <div className="section-form">
          <div className="contact-content container">
              <h1 className='main-heading'> Contact us</h1>
          </div>
              <form action="" onSubmit={handleSubmit}>

              <div>
                    <label htmlFor="username">Username</label>
                    <input 
                    type="text" 
                    name="username"
                    placeholder='username' 
                    id="username" 
                    required
                    autoComplete='off'
                    value={contact.username}
                    onChange={handleInput}
                    />
                </div>

                <div>
                  <label htmlFor="email">email</label>
                  <input 
                  type="email" 
                  name="email"
                  placeholder='enter your email' 
                  id="email" 
                  required
                  autoComplete='off'
                  value={contact.email}
                  onChange={handleInput}
                  />
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <textarea 
                  name="message" 
                  id="message" 
                  cols="30" 
                  rows="6"
                  autoComplete='off'
                  value={contact.message}
                  onChange={handleInput}>
                  </textarea>
                </div>

                <br />
                
                <button type='submit' className='btn btn-submit'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  </>

  )
}

export default Contact
