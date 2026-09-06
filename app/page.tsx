'use client';
import { useState } from 'react';
import {
  ArrowUpLeft,
  ArrowDown,
  Phone,
  MessageCircle,
  Menu,
  X,
  MapPin,
  Clock3,
} from 'lucide-react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
const wa = (text = 'היי [שם שלך], אשמח לתאם עבודת חשמל.') =>
  'https://wa.me/972537156553?text=' + encodeURIComponent(text);
const services = [
  [
    'לוחות חשמל',
    'התקנה, החלפה ושדרוג של לוחות חשמל לבית ולעסק. התאמת הלוח לצריכה ולצרכים שלכם.',
  ],
  [
    'עמדות טעינה לרכב',
    'התקנת עמדת טעינה פרטית, עם בדיקת התשתית והתאמת נקודת החשמל לפני ההתקנה.',
  ],
  [
    'תאורה וגופי תאורה',
    'התקנת תאורה פנימית וחיצונית, החלפת גופים וחיבור התאורה החדשה לחלל שלכם.',
  ],
  [
    'שקעים ונקודות כוח',
    'הוספת נקודות חשמל, התקנת שקעי כוח והחלפת שקעים, מפסקים ואביזרי חשמל.',
  ],
  [
    'איתור ותיקון תקלות',
    'טיפול בקצרים ובהפסקות חשמל, איתור מקור התקלה ותיקון בבית או בעסק.',
  ],
  [
    'תחזוקה לבתים ולעסקים',
    'עבודות חשמל שוטפות, החלפת אביזרים ותחזוקת מערכות קיימות, בתיאום שמתאים לכם.',
  ],
];
function Arrow() {
  return <ArrowUpLeft size={18} strokeWidth={1.5} aria-hidden="true" />;
}
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <i aria-hidden="true" />
      {children}
    </p>
  );
}
function Brand() {
  return (
    <a href="#home" className="brand" aria-label="אתר לחשמלאי למכירה — לעמוד הראשי">
      <span className="brand-mark" aria-hidden="true" />
      <span>
        <strong>אתר לחשמלאי למכירה</strong>
        <small>[שם שלך] · [הסמכה]</small>
      </span>
    </a>
  );
}
export default function Home() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        דלגו לתוכן
      </a>
      <header className="header" id="home">
        <Brand />
        <nav className="desktop-nav" aria-label="ניווט ראשי">
          <a href="#about">נעים להכיר</a>
          <a href="#services">שירותי חשמל</a>
          <a href="#area">אזורי שירות</a>
          <a href="#contact">נדבר?</a>
        </nav>
        <a className="header-call" href={wa()}>
          <span dir="ltr">053-715-6553</span>
          <Phone size={16} />
        </a>
        <button
          className="menu-toggle"
          aria-label={menu ? 'סגירת תפריט' : 'פתיחת תפריט'}
          aria-expanded={menu}
          aria-controls="mobile-nav"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
        {menu && (
          <nav id="mobile-nav" className="mobile-nav" aria-label="ניווט בנייד">
            {[
              ['#about', 'נעים להכיר'],
              ['#services', 'שירותי חשמל'],
              ['#area', 'אזורי שירות'],
              ['#contact', 'יצירת קשר'],
            ].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenu(false)}>
                {label}
                <Arrow />
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-heading">
          <div
            className="hero-photo"
            role="img"
            aria-label="תמונת המחשה של בדיקת לוח חשמל"
          />
          <div className="hero-top">
            <span>חשמל לבית. חשמל לעסק.</span>
            <span>אתר תדמית לחשמלאי</span>
          </div>
          <div className="hero-content">
            <Label>[שם שלך] · [אזור השירות שלך]</Label>
            <h1 id="hero-heading">
              חשמל שעובד.
              <br />
              ראש שקט.
            </h1>
            <p>
              מהתקנת שקע ועד לוח חשמל חדש.
              <br />
              שירות אישי ומקצועי, איתכם לאורך כל הדרך.
            </p>
            <div className="actions">
              <a className="button primary" href={wa()}>
                בואו נדבר <Phone size={17} />
              </a>
              <a
                className="button hero-outline"
                href={wa()}
                target="_blank"
                rel="noreferrer"
              >
                שלחו הודעה <Arrow />
              </a>
            </div>
          </div>
          <a className="hero-note" href="#services">
            <span className="note-icon">
              <ArrowDown size={20} />
            </span>
            <span>
              כל עבודות החשמל
              <br />
              <small>בבית, בעסק ובדרך לשדרוג הבא</small>
            </span>
          </a>
          <span className="hero-caption">לוחות חשמל · תאורה · עמדות טעינה</span>
        </section>
        <div className="service-strip">
          <span>שירות לבתים ולעסקים</span>
          <span>[אזור השירות שלך] · בתיאום</span>
          <span>[שעות הפעילות שלך]</span>
        </div>
        <section className="section about" id="about">
          <div>
            <Label>נעים להכיר</Label>
            <p className="section-index">01 /</p>
          </div>
          <div>
            <h2>
              מאחורי כל חיבור טוב,
              <br />
              יש בעל מקצוע שאכפת לו.
            </h2>
            <div className="about-bottom">
              <p>
                אני [שם שלך], [הסמכה].
                <br />
                מבצע התקנות, תיקונים ותחזוקת חשמל לבתים ולעסקים — עם שירות אישי,
                הסבר ברור ותיאום ישירות מולי.
              </p>
              <a className="text-link" href={wa()}>
                מדברים ישירות עם [שם שלך] <Arrow />
              </a>
            </div>
          </div>
        </section>
        <section className="section services" id="services">
          <div className="section-heading">
            <Label>שירותי חשמל</Label>
            <h2>
              כל מה שצריך.
              <br />
              מחובר נכון.
            </h2>
            <p>
              עבודה קטנה או שדרוג גדול?
              <br />
              ספרו לי מה צריך, ונמצא את הפתרון המתאים.
            </p>
          </div>
          <Accordion className="service-list" defaultValue={['0']}>
            {services.map(([title, description], i) => (
              <AccordionItem
                key={title}
                value={String(i)}
                className="service-item"
              >
                <AccordionTrigger className="service-trigger">
                  <span className="service-number">0{i + 1}</span>
                  <span>{title}</span>
                  <span className="expand-symbol" aria-hidden="true" />
                </AccordionTrigger>
                <AccordionContent className="service-description">
                  <p>{description}</p>
                  <a
                    href={wa(`היי [שם שלך], אשמח לפרטים לגבי ${title}.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    לתיאום ושאלות <Arrow />
                  </a>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        <section className="contact-band" id="area">
          <div className="coverage-art" aria-hidden="true">
            <span className="orbit orbit-one" />
            <span className="orbit orbit-two" />
            <span className="orbit orbit-three" />
            <span className="city center-city">האזור שלכם</span>
            <span className="city ashdod">אצלכם</span>
            <span className="city ashkelon">
              <i />
              קרוב
            </span>
            <span className="city south-city">ובסביבה</span>
            <span className="map-caption">קרוב אליכם, כשצריך.</span>
          </div>
          <div className="coverage-copy">
            <Label>כאן באזור</Label>
            <h2>
              [אזור השירות]
              <br />
              עד אליכם.
            </h2>
            <p>
              שירות ב[אזור השירות שלך], ובאזורים נוספים בתיאום מראש. לבית, לחנות,
              למשרד ולכל מקום שצריך בו חשמלאי.
            </p>
            <div className="coverage-detail">
              <MapPin size={17} />
              <span>[אזור השירות שלך] · בתיאום</span>
            </div>
            <div className="coverage-detail">
              <Clock3 size={17} />
              <span>[שעות הפעילות שלך]</span>
            </div>
            <a
              className="button outlined"
              href={wa()}
              target="_blank"
              rel="noreferrer"
            >
              בודקים זמינות באזור שלכם <Arrow />
            </a>
          </div>
        </section>
        <section className="section contact" id="contact">
          <Label>בואו נדבר</Label>
          <div className="contact-main">
            <h2>
              צריך חשמלאי?
              <br />
              אני כאן.
            </h2>
            <div>
              <p>
                לתיאום עבודה או לשאלה קצרה,
                <br />
                מתקשרים או שולחים הודעה בוואטסאפ.
              </p>
              <a className="big-phone" href={wa()} dir="ltr">
                053-715-6553 <ArrowUpLeft strokeWidth={1} />
              </a>
              <a
                className="text-link"
                href={wa()}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={19} /> מעדיפים לכתוב? שלחו הודעה <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-top">
          <Brand />
          <p>שירות מקצועי. יחס אישי. חיבור נכון.</p>
          <a href="#home" className="back-top">
            חזרה למעלה ↑
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} אתר לחשמלאי למכירה · [שם שלך]</span>
          <nav className="footer-legal" aria-label="מידע משפטי">
            <a href="/privacy">מדיניות פרטיות</a>
            <a href="/terms">תנאי שימוש</a>
            <a href="/accessibility">הצהרת נגישות</a>
          </nav>
          <a
            href={wa()}
            target="_blank"
            rel="noreferrer"
          >
            בואו נדבר ב-WhatsApp ↖
          </a>
          <span>תמונת האווירה נוצרה להמחשה</span>
        </div>
      </footer>
      <div className="mobile-contact">
        <a href={wa()}>
          <Phone size={17} /> דברו עם [שם שלך]
        </a>
        <a href={wa()} target="_blank" rel="noreferrer">
          <MessageCircle size={17} /> וואטסאפ
        </a>
      </div>
    </>
  );
}
