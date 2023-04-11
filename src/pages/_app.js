import '@/styles/globals.css'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection'

export default function App({ Component, pageProps }) {
  return (
  <div>
    <Navbar/>
    <HeroSection/>
    <Component {...pageProps} />
  </div>)
}
