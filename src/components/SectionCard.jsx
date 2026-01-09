/*
 * React'ı import eder
 */
import React from "react";

/*
 * SectionCard bileşeni: sol menüdeki bölüm kartları için
 */
const SectionCard = ({ title, Icon, isActive, onHover, onClick }) => {
  /*
   * İkon için dinamik className oluşturur
   */
  const iconClassName = `section-card__icon ${
    isActive ? "section-card__icon--to-panel" : ""
  }`;

  /*
   * JSX return eder
   */
  return (
    /*
     * Buton elementi
     */
    <button
      type="button"
      className={`section-card section-card--compact ${
        isActive ? "section-card--active" : ""
      }`}
      onMouseEnter={onHover}
      onFocus={onHover}
      onClick={onClick}
    >
      {/* İkon wrapper'ı */}
      <div className="section-card__icon-wrapper">
        {/*
         * Animasyon class'ı ile ikon
         */}
        <Icon className={iconClassName} />
      </div>

        {/* Başlık metni */}

      <span className="section-card__title">{title}</span>
    </button>
  );
};

/*
 * SectionCard bileşenini export eder
 */
export default SectionCard;
