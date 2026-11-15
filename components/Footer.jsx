import Logo from './Logo';

export default function Footer() {
  return (
    <>
<footer>
  <div className="wrap">
    <div className="foot">
      <div>
        <a className="logo" href="/" aria-label="e-Xpert home"><Logo /></a>
        <p>Business and process automation for companies that want to grow without adding complexity.</p>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="/#about">Who we are</a></li>
          <li><a href="/#expertise">Industries</a></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/products/">Products</a></li>
          <li><a href="/team/">Team</a></li>
          <li><a href="/blog/">Blog</a></li>
        </ul>
      </div>
      <div>
        <h4>Reach us</h4>
        <ul>
          <li>care@e-xpertconsultants.com</li>
          <li>+880 1332-092905</li>
          <li>House 998 (1B), Road 9A, Avenue 11<br />Mirpur DOHS, Dhaka-1216</li>
        </ul>
      </div>
    </div>
    <div className="legal">
      <span>© 2026 E-Xpert Consultants Limited. All rights reserved.</span>
      <span>Dhaka, Bangladesh</span>
    </div>
  </div>
</footer>
    </>
  );
}
