import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:8000/api/v1/message/send",
        {
          name,
          email,
          subject,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

 return (
    
     <div className="contact container">

         <div className="banner flex items-center flex-col ">
             <div className="text-white font-bold text-2xl">Registration</div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Roll-Number"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                     />
               <input
                type="text"
                placeholder="Select Event"
                value={message}
                onChange={(e) => setSubject(e.target.value)}
              />
             
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    
  )
};

export default Signup;

