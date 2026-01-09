
 // React'ı import eder
 
import React from "react";

// Tema ikonları ve konum ikonu için react-icons'tan import eder
 
import { FiSun, FiMoon,FiMapPin } from "react-icons/fi";

// Profil fotoğrafını assets'ten import eder
 
import profileImg from "../assets/bhr.jpeg";


 //Header bileşeni: sayfanın üst kısmındaki temel görünüm
 
const Header = ({ theme, onToggleTheme }) => {
  
   //Tema durumunu kontrol eder
   
  const isDark = theme === "dark";

  
   //JSX return eder
  
  return (
    
      //Ana header elementi
     
    <header className="hero">
      {/* Sol taraf: isim, unvan, konum ve tema anahtarı*/}
      <div className="hero__left">
        {/* Başlık bloğu: isim ve unvan */}
        <div className="hero__title-block">
          
          {/*Ana isim başlığı*/}
          <h1 className="hero__name">Bahar Sarımehmetoğlu</h1>
          
           {/*Rol/unvan*/}
           
          <p className="hero__role">Computer Engineer</p>
          {/*Konum bilgisi*/}
          <div className="hero__location">
          <FiMapPin className="hero__location-icon" />
            <span> Ankara, Türkiye</span>
              </div>

        </div>


        {/*Tema değiştirme butonu*/}
        <button
          type="button"
          className="hero__theme-toggle hero__theme-toggle--floating"
          onClick={onToggleTheme}
          aria-label="Toggle dark mode"
        >
          {/*Tema ikonunu koşullu gösterir*/}
          {isDark ? (
            <FiSun className="hero__theme-icon" />
          ) : (
            <FiMoon className="hero__theme-icon" />
          )}
          {/*Tema etiketi*/}
          <span className="hero__theme-label">
            {isDark ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </div>

      {/*Sağ taraf: profil fotoğrafı*/}
      <div className="hero__photo-wrapper">
        {/*Profil fotoğrafı*/}
        <img
          src={profileImg}
          alt="Bahar Sarimehmetoğlu portrait"
          className="hero__photo"
        />
      </div>
    </header>
  );
};


 //Header bileşenini export eder
 
export default Header;
