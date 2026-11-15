import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Fields from '../components/Fields';
import Services from '../components/Services';
import Products from '../components/Products';
import Leadership from '../components/Leadership';
import LatestPosts from '../components/LatestPosts';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Stats />
        <About />
        <Fields />
        <Services />
        <Products />
        <Leadership />
        <LatestPosts />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
