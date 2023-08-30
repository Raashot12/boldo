import BannerFaq from "../components/Home/BannerFaq"
import Blog from "../components/Home/Blog"
import Connect from "../components/Home/Connect"
import Customer from "../components/Home/Customer"
import Enterprise from "../components/Home/Enterprise"
import HeroSection from "../components/Home/HeroSection"
import Newsletter from "../components/Home/Newsletter"
import OurServices from "../components/Home/OurServices"
import Layout from "../components/Layout"

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <OurServices />
      <Customer />
      <Connect />
      <Enterprise />
      <BannerFaq />
      <Blog />
      <Newsletter />
    </Layout>
  )
}

export default Home
