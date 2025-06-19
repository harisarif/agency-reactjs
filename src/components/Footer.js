import React from 'react'

export default function Footer() {
  return (   <footer id="footer" className="footer light-background">

    <div className="container footer-top">
      <div className="row gy-4">
        <div className="col-lg-6 col-md-6 footer-about">
          <a href="index.html" className="logo d-flex align-items-center">
            <span className="sitename">MyWebsite</span>
          </a>
          <div className="footer-contact pt-3">
            {/* <p>A108 Adam Street</p> */}
            {/* <p>New York, NY 535022</p> */}
            <p classNameName="mt-3"><strong>Phone:</strong> <span>+92 316 7013172</span></p>
            <p><strong>Email:</strong> <span>info@wpcorex.com</span></p>
          </div>
          <div className="social-links d-flex mt-4">
            <a href=""><i className="bi bi-twitter-x"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div className="col-lg-3 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-3 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Product Management</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Graphic Design</a></li>
          </ul>
        </div>

       

       

      </div>
    </div>

    <div className="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong className="px-1 sitename">MyWebsite</strong> <span>All Rights Reserved</span></p>
      <div className="credits">
        <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>

  </footer>);
}
