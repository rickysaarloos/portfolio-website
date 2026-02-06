import { useState } from "react";

import Layout from "../components/Layout";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "d683d353-491e-4323-8763-2db65ceb245c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully.");
        event.target.reset();
      } else {
        setResult("Something went wrong, Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("⚠️ Error sending message. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (<Layout>
    <div className="contact-container">
      <h1 className="namecontact">Ricky Saarloos</h1>
      <h2>Contact Me</h2>

      <form className="contact-form" onSubmit={onSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="first_name" required />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="last_name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>

        <p className="result-message">{result}</p>
      </form>
    </div>
  </Layout>
  );
};

export default Contact;
