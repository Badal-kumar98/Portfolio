import React, { useState } from "react";
import "./contact.css";
import { Loading } from "../loading/Loading";
import { auth, fireDB } from "../../fireBase/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import { signInAnonymously } from "firebase/auth";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const user = {
      name,
      email,
      message,
      timestamp: new Date(),
    };

    try {
      await signInAnonymously(auth);
      await addDoc(collection(fireDB, "messages"), user);
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setLoading(false);
    } catch (error) {
      console.error("Error saving message:", error);
      toast.error("Something went wrong. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <div>
      <div name="Contact" className="contact-header">
        <h1 className="contact-head">Contact</h1>
        <div className="contact-line"></div>
        <p className="contact-description">
          Please fill out the form below to contact me
        </p>
      </div>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 className="contact-title">Send Your Message</h2>
          <div className="contact-flex">
            <label>
              <h2 className="contact-names">Full Name</h2>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="contact-input"
                required
              />
            </label>
          </div>
          <label>
            <h2 className="contact-names">Email Address</h2>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="contact-input"
              required
            />
          </label>
          <label>
            <h2 className="contact-names">Message</h2>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="contact-input"
              placeholder="Enter your Query"
              required
            ></textarea>
          </label>
          <button className="contact-submit" type="submit">
            {loading ? <Loading /> : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
