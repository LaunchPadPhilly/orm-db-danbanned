import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'My Portfolio',
  description: 'A Next.js portfolio website showcasing my projects and skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="transition-colors duration-300 bg-gray-100 dark:bg-gray-900">
        

        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        

      </body>
    </html>
  )
}
