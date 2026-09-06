import { ArrowRight, MessageCircle } from 'lucide-react';

const whatsapp =
  'https://wa.me/972537156553?text=' +
  encodeURIComponent('היי [שם שלך], אשמח לפרטים נוספים.');

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

export default function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <a className="skip-link" href="#legal-main">
        דלגו לתוכן
      </a>
      <header className="legal-nav">
        <a className="legal-back" href="/">
          <ArrowRight size={18} aria-hidden="true" /> חזרה לאתר
        </a>
        <a className="legal-brand" href="/" aria-label="אתר לחשמלאי למכירה — עמוד הבית">
          <span className="brand-mark" aria-hidden="true" />
          <span>
            <strong>אתר לחשמלאי למכירה</strong>
            <small>[שם שלך] · [הסמכה]</small>
          </span>
        </a>
        <a className="legal-phone" href={whatsapp}>
          <span dir="ltr">053-715-6553</span>
          <MessageCircle size={16} aria-hidden="true" />
        </a>
      </header>
      <main id="legal-main" className="legal-page">
        <div className="legal-hero">
          <p className="eyebrow">
            <i aria-hidden="true" />
            {eyebrow}
          </p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <span>עדכון אחרון: {updated}</span>
        </div>
        <div className="legal-sections">
          {sections.map((section, index) => (
            <article className="legal-section" key={section.title}>
              <span className="legal-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.items && (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
      <footer className="legal-footer">
        <span>© {new Date().getFullYear()} אתר לחשמלאי למכירה · [שם שלך]</span>
        <nav aria-label="מידע משפטי">
          <a href="/privacy">מדיניות פרטיות</a>
          <a href="/terms">תנאי שימוש</a>
          <a href="/accessibility">הצהרת נגישות</a>
        </nav>
      </footer>
    </>
  );
}
