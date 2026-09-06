import type { Metadata } from 'next';
import './globals.css';
import AccessibilityWidget from './components/accessibility-widget';
export const metadata: Metadata = {
  title: 'אתר לחשמלאי למכירה | [שם שלך]',
  description:
    'אתר תדמית לחשמלאי. החליפו את [שם שלך], אזור השירות, ההסמכה ופרטי העסק לפני פרסום. ליצירת קשר ב-WhatsApp: 053-715-6553.',
  robots: { index: false, follow: false },
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body>
        {children}
        <AccessibilityWidget />
      </body>
    </html>
  );
}
