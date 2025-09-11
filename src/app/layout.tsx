import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MaiSaúde - Dieta Cetogênica',
  description: 'Aplicativo de planejamento alimentar cetogênico com cardápios semanais completos para uma vida mais saudável',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'MaiSaúde',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'MaiSaúde',
    title: 'MaiSaúde - Dieta Cetogênica',
    description: 'Planejamento alimentar cetogênico com cardápios semanais completos',
  },
  twitter: {
    card: 'summary',
    title: 'MaiSaúde - Dieta Cetogênica',
    description: 'Planejamento alimentar cetogênico com cardápios semanais completos',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1B5E20' },
    { media: '(prefers-color-scheme: dark)', color: '#1B5E20' }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <head>
        <link rel="icon" href="/icon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/icon-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/icon-180x180.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="msapplication-TileColor" content="#1B5E20" />
        <meta name="msapplication-tap-highlight" content="no" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body className="font-poppins antialiased bg-white text-gray-900 min-h-screen">
        {children}
      </body>
    </html>
  )
}