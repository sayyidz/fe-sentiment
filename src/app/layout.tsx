import './globals.css'
import { Montserrat, Arsenal } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
});

const arsenal = Arsenal({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-arsenal',
});

export const metadata = {
  title: 'SentimentAI',
  description: 'Login to your dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${arsenal.variable}`}>
      <body>{children}</body>
    </html>
  )
}
