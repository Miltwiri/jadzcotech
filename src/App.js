import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to send the email
    // For now, let's just simulate a successful email sent
    setIsEmailSent(true);
    setTimeout(() => {
      setIsEmailSent(false);
      setEmail('');
      setMessage('');
    }, 2000);
  };

  return (
    <div className="app">
      <header>
        <nav>
          <p style={{ color: "white", fontSize: 27, fontWeight: "bold" }}>Jadzcotech Solutions</p>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home">
        <h2 style={{ color: "white" }}>Welcome to Jadzcotech Solutions</h2>
        <h1 style={{ color: "white", fontWeight: "bold" }}>Your partner for innovative software development and online services.</h1>
        <p>Welcome to Jadzcotech Solutions, your go-to destination for cutting-edge software development and a wide range of online services.</p>
        <p>Immerse yourself in a world where technology meets creativity.</p>
        <p>Explore our diverse offerings that cater to businesses, startups, and individuals seeking top-notch digital solutions.</p>
      </section>

      <section id="about">

        <p>Discover the heart behind Jadzcotech Solutions. Our story is woven with innovation,</p>
        <p>dedication, and a commitment to delivering top-notch software solutions and online services. Learn about our</p>
        <p>journey, values, and the driving force that propels us into the future.</p>
      </section>

      <section id="services">
        <h2>Services</h2>
        <p>Jadzcotech Solutions offers a range of services to meet your software development and online needs.</p>
        <p>From custom software solutions to web and mobile app development, and innovative online services,</p>
        <p>we are dedicated to delivering excellence in every project.</p>
        <p style={{ fontWeight: "bold" }}>Explore our services: Software Development, Web & Mobile App Development, Online Solutions.</p>
      </section>

      <section id="contact">
        <h2 style={{ fontWeight: "bold", color:"white"}}>Contact Us</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={handleMessageChange} required />

          <button type="submit">Submit</button>
        </form>
        {isEmailSent && <p>Email sent!</p>}
      </section>

      <footer>
        <p>Phone: +254748678138</p>
        <p>jadielkoome9@gmail.com</p>
        <p>© Jadzcotech Solutions 2023</p>
      </footer>
    </div>
  );
};

export default App;
