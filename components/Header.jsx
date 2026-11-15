import Logo from './Logo';

export default function Header() {
  return (
    <>
<header className="site">
  <div className="wrap nav">
    <a className="logo" href="/" aria-label="e-Xpert home"><Logo /></a>
    <ul>
      <li><a href="/#about">Who we are</a></li>
      <li><a href="/#services">Services</a></li>
      <li><a href="/#expertise">Industries</a></li>
      <li><a href="/products/">Products</a></li>
      <li><a href="/team/">Team</a></li>
      <li><a href="/blog/">Blog</a></li>
      <li><a href="/#contact">Contact</a></li>
    </ul>
    <a className="btn btn-primary" href="/#contact">Get in touch</a>
  </div>
</header>
    </>
  );
}
