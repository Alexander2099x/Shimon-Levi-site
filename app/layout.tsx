import type { Metadata } from 'next';
import './globals.css';
import AccessibilityWidget from './components/accessibility-widget';
export const metadata: Metadata = {
  title: 'לביא חשמל | שמעון לביא — חשמלאי מוסמך באשקלון',
  description:
    'שמעון לביא, חשמלאי מוסמך באשקלון והסביבה. התקנת לוחות חשמל, עמדות טעינה, תאורה, שקעים ותיקון תקלות לבתים ולעסקים. 052-4242952.',
  robots: { index: false, follow: false },
  icons: { icon: '/images/logo.png' },
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
