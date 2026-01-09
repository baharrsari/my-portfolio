// React'ı import eder
import React from "react";
// FiMail ikonunu react-icons'tan import eder
import { FiMail } from "react-icons/fi";

// En alttaki iletişim barı bileşeni
const ContactBar = ({ email }) => {
  // JSX return eder
  return (
    // Footer elementi, contact-bar sınıfı ile
    <footer className="contact-bar">
      
      <h2 className="contact-bar__title">Contact</h2>   {/* Başlık elementi*/}
      {/*Email linki elementi*/}
      <a
        // Gmail compose linki oluşturur
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
       
        // CSS sınıfı
        className="contact-bar__email"
        // Tooltip metni
        title="Send me an email"
      >
        {/* Mail ikonu */}
        <FiMail className="contact-bar__icon" />
        {/* Email adresi span elementi */}
        <span>{email}</span>
      </a>
    </footer>
  );
};

// Bileşeni export eder
export default ContactBar;
