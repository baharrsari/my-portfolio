import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import SectionCard from "./components/SectionCard";
import LinksSection from "./components/LinksSection";
import ContactBar from "./components/ContactBar";
import aboutPhoto from "./assets/aboutMe.jpeg";

import teduLogo from "./assets/tedu.jpeg";
import ankuLogo from "./assets/anku.jpeg";
import portakalLogo from "./assets/portakal.jpeg";
import abbcyberLogo from "./assets/abbcyber.jpeg";
import aselsanLogo from "./assets/aselsan.jpeg";

import {
  sections,
  externalLinks,
  contactInfo,
  aboutPanel,
} from "./data/sections";

// Logo eşleştirme tablosu
const companyLogos = {
  tedu: teduLogo,
  anku: ankuLogo,
  portakal: portakalLogo,
  abbcyber: abbcyberLogo,
  aselsan: aselsanLogo,
};

const App = () => {
  const [theme, setTheme] = useState("light");
  const [activeSectionId, setActiveSectionId] = useState(null);

  // Tıklamadan sonra 180 sn hareketsizlik için timer
  const inactivityTimeoutRef = useRef(null);

  useEffect(() => {
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  const handleToggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // Aktif section
  const activeSection = activeSectionId
    ? sections.find((s) => s.id === activeSectionId) || sections[0]
    : aboutPanel;

  const isAbout = activeSectionId === null || activeSection.id === "about";
  const isExperience = activeSection.id === "professional-experience";
  const isEducation = activeSection.id === "education";
  const isInternships = activeSection.id === "internships";
  const isSkillsLanguages = activeSection.id === "skills-languages";

  // Skills & Languages için verileri ayır (0: skills, 1: languages)
  let skillsItem = null;
  let languagesItem = null;
  if (isSkillsLanguages && activeSection.items && activeSection.items.length) {
    skillsItem = activeSection.items[0] || null;
    languagesItem = activeSection.items[1] || null;
  }

  const startInactivityTimer = () => {
    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
    }
    inactivityTimeoutRef.current = setTimeout(() => {
      setActiveSectionId(null); // About Me'ye döner
      inactivityTimeoutRef.current = null;
    }, 180000); // 180 sn
  };

  const clearInactivityTimer = () => {
    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
      inactivityTimeoutRef.current = null;
    }
  };

  const handleSectionClick = (sectionId) => {
    setActiveSectionId(sectionId);
    startInactivityTimer();
  };

  const handleSplitMouseLeave = () => {
    setActiveSectionId(null); // About Me
    clearInactivityTimer();
  };

  // Tıklamadan sonra mouse hareket ettikçe süreyi yenile
  useEffect(() => {
    const handleGlobalMouseMove = () => {
      if (inactivityTimeoutRef.current) {
        startInactivityTimer();
      }
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      clearInactivityTimer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`page theme-${theme}`}>
      <Header theme={theme} onToggleTheme={handleToggleTheme} />

      <main className="page__content">
        <div className="page__split" onMouseLeave={handleSplitMouseLeave}>
          {/* Sol liste */}
          <div className="page__list">
            {sections.map((section) => (
              <SectionCard
                key={section.id}
                title={section.title}
                Icon={section.Icon}
                isActive={section.id === activeSectionId}
                onHover={() => setActiveSectionId(section.id)} // hover
                onClick={() => handleSectionClick(section.id)} // tıklama - 180 sn logic
              />
            ))}
          </div>

          {/* Sağ panel */}
          <section className="detail-panel">
            <div
              className="detail-panel__content detail-panel__content--enter"
              key={activeSection.id}
            >
              <header className="detail-panel__header">
                <div className="detail-panel__icon-wrapper">
                  <activeSection.Icon className="detail-panel__icon" />
                </div>
                <div>
                  <h2 className="detail-panel__title">{activeSection.title}</h2>
                  <p className="detail-panel__subtitle">
                    {isAbout
                      ? "A short introduction about who I am and what I do."
                      : "Hover over a section on the left to see more details here."}
                  </p>
                </div>
              </header>

              <div
                className={
                  "detail-panel__body" +
                  (isExperience ? " detail-panel__body--scroll" : "")
                }
              >
                {isAbout ? (
                  // ABOUT ME
                  <div className="about-two-col">
                    <div className="about-two-col__left">
                      {activeSection.items.map((item, index) => (
                        <article key={index} className="detail-panel__item">
                          {item.heading && (
                            <h3 className="detail-panel__item-heading">
                              {item.heading}
                            </h3>
                          )}
                          {item.description && (
                            <p className="detail-panel__item-description">
                              {item.description}
                            </p>
                          )}
                        </article>
                      ))}
                    </div>

                    <div className="about-two-col__right">
                      <img
                        src={aboutPhoto}
                        alt="About Me"
                        className="about-two-col__photo"
                      />
                    </div>
                  </div>
                ) : isSkillsLanguages ? (
                  // SKILLS + LANGUAGES ÖZEL LAYOUT - YAN YANA
                  <div className="skills-layout">
                    {/* Sol: Tech Skills & Tools */}
                    <div className="skills-column">
                      {skillsItem && (
                        <>
                          {skillsItem.heading && (
                            <h3 className="detail-panel__item-heading">
                              {skillsItem.heading}
                            </h3>
                          )}
                          {skillsItem.skills &&
                            skillsItem.skills.map((s, i) => (
                              <div key={i} className="skill-row">
                                <span className="skill-name">{s.name}</span>
                                <div className="skill-bar">
                                  <div
                                    className="skill-bar__fill"
                                    style={{ width: `${s.level}%` }}
                                  />
                                </div>
                              </div>
                            ))}
                        </>
                      )}
                    </div>

                    {/* Sağ: Languages */}
                    <div className="languages-column">
                      {languagesItem && (
                        <>
                          {languagesItem.heading && (
                            <h3 className="detail-panel__item-heading">
                              {languagesItem.heading}
                            </h3>
                          )}

                          {languagesItem.languages &&
                            languagesItem.languages.map((lang) => (
                              <div className="language-row" key={lang.name}>
                                <span>{lang.name}</span>
                                <div className="language-dots">
                                  {Array.from({ length: 5 }).map((_, idx) => (
                                    <span
                                      key={idx}
                                      className={
                                        "dot" +
                                        (idx < (lang.level || 0)
                                          ? " dot--filled"
                                          : "")
                                      }
                                    />
                                  ))}
                                </div>
                              </div>
                            ))}

                          {/* En altta Turkish, noktasız */}
                          <div className="language-row">
                            <span>Turkish</span>
                            <span
                              style={{
                                fontSize: "0.8rem",
                                color: "var(--text-muted)",
                                marginLeft: "10px",
                              }}
                            >
                              (Mother Tongue)
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ) : activeSection.id === "certificates" ? (
                  // CERTIFICATES - çok kolonlu grid + tıklanabilir link
                  <div className="cert-list">
                    {activeSection.items.map((c, i) => (
                      <a
                        key={i}
                        className="detail-panel__item-description cert-link"
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        🔗 {c.heading}
                      </a>
                    ))}
                  </div>
                ) : (
                  // DİĞER TÜM SECTIONS (Experience, Education, Projects)
                  activeSection.items.map((item, index) => {
                    const hasCompany = !!item.company;
                    const hasLinks =
                      hasCompany && (item.companyUrl || item.linkedinUrl);

                    return (
                      <article
                        key={index}
                        className={
                          "detail-panel__item" +
                          (hasCompany ? " experience-row" : "")
                        }
                      >
                        {hasCompany ? (
                          <>
                            <div className="experience-header">
                              <div className="experience-header__titles">
                                {(item.role || item.type) && (
                                  <h3 className="detail-panel__item-heading">
                                    {item.role} {item.type}
                                  </h3>
                                )}

                                <h4
                                  className="detail-panel__item-heading"
                                  style={{ fontWeight: 600, opacity: 0.9 }}
                                >
                                  {item.company}
                                </h4>
                              </div>

                              {hasLinks && (
                                <div className="experience-header__links">
                                  {/* EDUCATION - butonlar solda, büyük yuvarlak logo sağda */}
                                  {isEducation ? (
                                    <div className="education-links-row">
                                      {item.companyUrl && (
                                        <a
                                          href={item.companyUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="exp-link-btn"
                                        >
                                          🌐 Website
                                        </a>
                                      )}

                                      {item.linkedinUrl && (
                                        <a
                                          href={item.linkedinUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="exp-link-btn"
                                        >
                                          🔗 LinkedIn
                                        </a>
                                      )}

                                      {item.logo &&
                                        companyLogos[item.logo] && (
                                          <img
                                            src={companyLogos[item.logo]}
                                            alt={item.company}
                                            className="education-logo"
                                          />
                                        )}
                                    </div>
                                  ) : isInternships ? (
                                    <>
                                      {item.companyUrl && (
                                        <a
                                          href={item.companyUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="exp-link-btn"
                                        >
                                          🌐 Website
                                        </a>
                                      )}

                                      {item.linkedinUrl && (
                                        <a
                                          href={item.linkedinUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="exp-link-btn"
                                        >
                                          🔗 LinkedIn
                                        </a>
                                      )}

                                      {item.logo &&
                                        companyLogos[item.logo] && (
                                          <img
                                            src={companyLogos[item.logo]}
                                            alt={item.company}
                                            className="company-logo internship-logo"
                                          />
                                        )}
                                    </>
                                  ) : (
                                    <>
                                      {/* Experience - logo solda */}
                                      {item.logo && companyLogos[item.logo] && (
                                        <img
                                          src={companyLogos[item.logo]}
                                          alt={item.company}
                                          className="company-logo"
                                        />
                                      )}

                                      {item.companyUrl && (
                                        <a
                                          href={item.companyUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="exp-link-btn"
                                        >
                                          🌐 Website
                                        </a>
                                      )}

                                      {item.linkedinUrl && (
                                        <a
                                          href={item.linkedinUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="exp-link-btn"
                                        >
                                          🔗 LinkedIn
                                        </a>
                                      )}
                                    </>
                                  )}
                                </div>
                              )}
                            </div>

                            {item.period && (
                              <p className="detail-panel__item-period">
                                {item.period}
                              </p>
                            )}

                            {item.description && (
                              <p className="detail-panel__item-description">
                                {item.description}
                              </p>
                            )}
                          </>
                        ) : (
                          <>
                            {/* PROJECTS (ve company olmayan diğer itemler) için:
                               heading + (varsa) Website/GitHub butonları aynı satırda */}
                            {item.heading && (item.websiteUrl || item.githubUrl) ? (
                              <div className="experience-header">
                                <h3 className="detail-panel__item-heading">
                                  {item.heading}
                                </h3>

                                <div className="experience-header__links">
                                  {item.websiteUrl && (
                                    <a
                                      href={item.websiteUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="exp-link-btn"
                                    >
                                      🌐 Website
                                    </a>
                                  )}

                                  {item.githubUrl && (
                                    <a
                                      href={item.githubUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="exp-link-btn"
                                    >
                                      🐙 GitHub
                                    </a>
                                  )}
                                </div>
                              </div>
                            ) : (
                              item.heading && (
                                <h3 className="detail-panel__item-heading">
                                  {item.heading}
                                </h3>
                              )
                            )}

                            {item.period && (
                              <p className="detail-panel__item-period">
                                {item.period}
                              </p>
                            )}

                            {item.description && (
                              <p className="detail-panel__item-description">
                                {item.description}
                              </p>
                            )}
                          </>
                        )}
                      </article>
                    );
                  })
                )}
              </div>
            </div>
          </section>
        </div>

        <LinksSection links={externalLinks} />
      </main>

      <ContactBar email={contactInfo.email} />
    </div>
  );
};

export default App;
