import React, { useState } from 'react';
import './Hire.css'
import {toast} from 'react-toastify'
import axios from 'axios'
const Hire = () => {
    const [form, setForm] = useState({
        userName : '',
        email:'',
        message:''
    });
    const [state, setstate] = useState(false);
const handleForm =(e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleFormData = async (e)=>{
    e.preventDefault()
    setstate(true)
if (!form.userName || !form.message || !form.email) {
    toast.error("Please fill the form ! ")
    setForm({
      userName : '',
      email:'',
      message:''
  })
  setstate(false)
}
else{
  try {
    const mail = await axios.post('http://localhost:8080/api/mail',{form})
    console.log(mail);
    toast.success(mail.data.message)
    setForm({
      userName : '',
      email:'',
      message:''
    })
    setstate(false)
  } catch (error) {
    setForm({
      userName : '',
      email:'',
      message:''
    })
    toast.error(error.message)
    setstate(false)
    }
}
}
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hire Me !</h1>
          <p></p>
          <div class="container">
        <h1></h1>
      <form >
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name"  placeholder='Enter your name ...' name="userName"  value={form.userName} onChange={handleForm} required/>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email"  placeholder='Enter your email ...' id="email" name="email" value={form.email} onChange={handleForm}  required/>
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message"  placeholder='Enter your message ...' name="message" value={form.message}  onChange={handleForm} required></textarea>
            </div>
            <div class="form-group">
                <button onClick={handleFormData}>{state?'Please wait ... ':'Submit'}</button>
            </div>
      </form>
    </div>
      </div>
      </div>
    </div>
  )
}

export default Hire