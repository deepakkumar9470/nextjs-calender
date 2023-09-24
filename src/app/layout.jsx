import Header from '@/components/Header'
import './globals.css'
import { Poppins} from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight : ['400','600','700'] })

export const metadata = {
  title: 'Calender App',
  description: 'Calender app using pure css',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
