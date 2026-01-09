
 //React'ı import eder

import React from "react";

  //Sosyal medya ikonları için react-icons'tan import eder

import { FaLinkedin, FaMedium, FaGithub } from "react-icons/fa";


 //Link türlerine göre ikon eşlemesi
 
const iconMap = {
  linkedin: FaLinkedin,
  medium: FaMedium,
  github: FaGithub,
};


// LinksSection bileşeni: sosyal medya linklerini gösterir
 
const LinksSection = ({ links }) => {
  
    //JSX return eder
   
  return (
    
     //Ana section elementi
     
    <section className="links-section">
      
        {/* Bölüm başlığı */}
       
      <h2 className="links-section__title">Links and More</h2>

      
       {/* Linklerin grid düzeni */}
       
      <div className="links-section__grid">
        {/* Her link için döngü */}
        {links.map((link) => {
          /*
           * İkonu link türüne göre seçer
           */
          const Icon = iconMap[link.type];
          /*
           * Link elementi return eder
           */
          return (
            /*
             * Harici link
             */
            <a
              key={link.id}
              href={link.href}
              className="link-badge"
              target="_blank"
              rel="noreferrer"
            >
              {/* İkon wrapper'ı */}
              <div className="link-badge__icon-wrapper">
                <Icon className="link-badge__icon" />
              </div>
              {/* Link etiketi */}
              <span className="link-badge__label">{link.label}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
};

/*
 * LinksSection bileşenini export eder
 */
export default LinksSection;
