import React from "react";
import "../components/style.css";
import "../Components/Footer.jsx";

function Contact() {
  return (
    <div className="contact-page">
 
 

      {/* === Main content === */}
      <main className="main-content">
        <h1>Contact Me</h1>

        <div className="contact-box">
          <form className="contact-form">
            <input type="text" placeholder="first - Lastname" />

            <div className="row">
              <input type="email" placeholder="E-mail" />
              <input type="tel" placeholder="Phone" />
            </div>

            <textarea placeholder="message"></textarea>
          </form>
        </div>
      </main>

  
    </div>
  );
}

export default Contact;
