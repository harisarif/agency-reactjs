import React from 'react'

export default function Main() {
  return (   
  <main className="main">

    {/* <!-- Hero Section --> */}
    <section id="hero" className="hero section">

      <div className="container" >

        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="badge-wrapper mb-3">
              <div className="d-inline-flex align-items-center rounded-pill border border-accent-light">
                <div className="icon-circle me-2">
                  <i className="bi bi-bell"></i>
                </div>
                <span className="badge-text me-3">Innovative Solutions</span>
              </div>
            </div>

            <h1 className="hero-title mb-4">Accelerating business growth through innovative technology</h1>

            <p className="hero-description mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.</p>

            <div className="cta-wrapper">
              <a href="#" className="btn btn-primary">Discover More</a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-image">
              <img src="/img/illustration/illustration-16.webp" alt="Business Growth" className="img-fluid" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="row feature-boxes">
          <div className="col-lg-4 mb-4 mb-lg-0" >
            <div className="feature-box">
              <div className="feature-icon me-sm-4 mb-3 mb-sm-0">
                <i className="bi bi-gear"></i>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Rapid Deployment</h3>
                <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0" >
            <div className="feature-box">
              <div className="feature-icon me-sm-4 mb-3 mb-sm-0">
                <i className="bi bi-window"></i>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Advanced Security</h3>
                <p className="feature-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4" >
            <div className="feature-box">
              <div className="feature-icon me-sm-4 mb-3 mb-sm-0">
                <i className="bi bi-headset"></i>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Dedicated Support</h3>
                <p className="feature-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>

    {/* <!-- About Section --> */}
    <section id="about" className="about section">

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-6 content" >
            <p className="who-we-are">Who We Are</p>
            <h3>Unleashing Potential with Creative Strategy</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
              <li><i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
              <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
            </ul>
            <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
          </div>

          <div className="col-lg-6 about-images" >
            <div className="row gy-4">
              <div className="col-lg-6">
                <img src="/img/about/about-portrait-1.webp" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-lg-12">
                    <img src="/img/about/about-8.webp" className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-12">
                    <img src="/img/about/about-12.webp" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

    {/* <!-- How We Work Section --> */}
    <section id="how-we-work" className="how-we-work section">

      {/* <!-- Section Title --> */}
      <div className="container section-title">
        <h2>How We Work</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" >

        <div className="steps-5">
          <div className="process-container">

            <div className="process-item" >
              <div className="content">
                <span className="step-number">01</span>
                <div className="card-body">
                  <div className="step-icon">
                    <i className="bi bi-pencil-square"></i>
                  </div>
                  <div className="step-content">
                    <h3>Project Planning</h3>
                    <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="process-item" >
              <div className="content">
                <span className="step-number">02</span>
                <div className="card-body">
                  <div className="step-icon">
                    <i className="bi bi-gear"></i>
                  </div>
                  <div className="step-content">
                    <h3>Development Phase</h3>
                    <p>Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-item" >
              <div className="content">
                <span className="step-number">03</span>
                <div className="card-body">
                  <div className="step-icon">
                    <i className="bi bi-search"></i>
                  </div>
                  <div className="step-content">
                    <h3>Testing &amp; QA</h3>
                    <p>Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-item">
              <div className="content">
                <span className="step-number">04</span>
                <div className="card-body">
                  <div className="step-icon">
                    <i className="bi bi-rocket-takeoff"></i>
                  </div>
                  <div className="step-content">
                    <h3>Launch &amp; Support</h3>
                    <p>Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>

    {/* <!-- Services Section --> */}
    <section id="services" className="services section">

      {/* <!-- Section Title --> */}
      <div className="container section-title">
        <h2>Services</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" >

        <div className="row justify-content-center g-5">

          <div className="col-lg-6" >
            <div className="service-item">
              <div className="service-icon">
                <i className="bi bi-code-slash"></i>
              </div>
              <div className="service-content">
                <h3>Custom Web Development</h3>
                <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="service-link">
                  <span>Learn More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6" >
            <div className="service-item">
              <div className="service-icon">
                <i className="bi bi-phone-fill"></i>
              </div>
              <div className="service-content">
                <h3>Mobile App Solutions</h3>
                <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada.</p>
                <a href="#" className="service-link">
                  <span>Learn More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="service-item">
              <div className="service-icon">
                <i className="bi bi-palette2"></i>
              </div>
              <div className="service-content">
                <h3>UI/UX Design</h3>
                <p>Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                <a href="#" className="service-link">
                  <span>Learn More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="service-item">
              <div className="service-icon">
                <i className="bi bi-bar-chart-line"></i>
              </div>
              <div className="service-content">
                <h3>Digital Marketing</h3>
                <p>Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.</p>
                <a href="#" className="service-link">
                  <span>Learn More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="service-item">
              <div className="service-icon">
                <i className="bi bi-cloud-check"></i>
              </div>
              <div className="service-content">
                <h3>Cloud Computing</h3>
                <p>Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat.</p>
                <a href="#" className="service-link">
                  <span>Learn More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="service-item">
              <div className="service-icon">
                <i className="bi bi-shield-lock"></i>
              </div>
              <div className="service-content">
                <h3>Cybersecurity Solutions</h3>
                <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et. Proin eget tortor risus.</p>
                <a href="#" className="service-link">
                  <span>Learn More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>

    {/* <!-- Services Alt Section --> */}
    <section id="services-alt" className="services-alt section">

      <div className="container" >

        <div className="row">
          <div className="col-lg-6" >
            <div className="content-block">
              <h6 className="subtitle">Our innovative services</h6>
              <h2 className="title">Our customers excel in technology management</h2>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt diam et gravida consequat. Sed nec mauris quis lacus commodo lobortis. Suspendisse euismod commodo sem, in finibus purus bibendum et. Morbi eu neque sed velit convallis vestibulum a vel odio.
              </p>
              <div className="button-wrapper">
                <a className="btn" href="services.html"><span>Explore All Services</span></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="services-list">
              <div className="service-item d-flex align-items-center" >
                <div className="service-icon">
                  <i className="bi bi-code-square"></i>
                </div>
                <div className="service-content">
                  <h4><a href="service-details.html">Software Engineering</a></h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                </div>
              </div>

              <div className="service-item d-flex align-items-center" >
                <div className="service-icon">
                  <i className="bi bi-graph-up"></i>
                </div>
                <div className="service-content">
                  <h4><a href="service-details.html">Business Analytics</a></h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                </div>
              </div>

              <div className="service-item d-flex align-items-center" >
                <div className="service-icon">
                  <i className="bi bi-phone"></i>
                </div>
                <div className="service-content">
                  <h4><a href="service-details.html">Mobile Solutions</a></h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                </div>
              </div>

              <div className="service-item d-flex align-items-center">
                <div className="service-icon">
                  <i className="bi bi-gear"></i>
                </div>
                <div className="service-content">
                  <h4><a href="service-details.html">Tech Infrastructure</a></h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>

    {/* <!-- Call To Action 2 Section --> */}
    <section id="call-to-action-2" className="call-to-action-2 section light-background">

      <div className="container" >

        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="cta-image-wrapper">
              <img src="/img/cta/cta-4.webp" alt="Call to Action" className="img-fluid rounded-4" />
              <div className="cta-pattern"></div>
            </div>
          </div>

          <div className="col-lg-6" >
            <div className="cta-content">
              <h2>Transform Your Vision Into Reality Today</h2>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

              <div className="cta-features">
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Lorem ipsum dolor sit amet consectetur</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Praesent eget risus vitae massa</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Aenean pretium nisi vel pulvinar</span>
                </div>
              </div>

              <div className="cta-action mt-5">
                <a href="#" className="btn btn-primary btn-lg me-3">Get Started</a>
                <a href="#" className="btn btn-outline-primary btn-lg">Learn More</a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>

    {/* <!-- Portfolio Section --> */}
    <section id="portfolio" className="portfolio section">

      {/* <!-- Section Title --> */}
      <div className="container section-title">
        <h2>Portfolio</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" >

        <div className="isotope-layout">

          <div className="portfolio-filters-container" >
            <ul className="portfolio-filters isotope-filters">
              <li data-filter="*" className="filter-active">All Work</li>
              <li data-filter=".filter-web">Web Design</li>
              <li data-filter=".filter-graphics">Graphics</li>
              <li data-filter=".filter-motion">Motion</li>
              <li data-filter=".filter-brand">Branding</li>
            </ul>
          </div>

          <div className="row g-4 isotope-container" >

            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-web">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="/img/portfolio/portfolio-1.webp" className="img-fluid" alt="" loading="lazy" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a href="/img/portfolio/portfolio-1.webp" className="glightbox preview-link" data-gallery="portfolio-gallery-web"><i className="bi bi-eye"></i></a>
                      <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="category">Web Design</span>
                  <h3>Modern Dashboard Interface</h3>
                  <p>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="/img/portfolio/portfolio-10.webp" className="img-fluid" alt="" loading="lazy" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a href="/img/portfolio/portfolio-10.webp" className="glightbox preview-link" data-gallery="portfolio-gallery-graphics"><i className="bi bi-eye"></i></a>
                      <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="category">Graphics</span>
                  <h3>Creative Brand Identity</h3>
                  <p>Vestibulum id ligula porta felis euismod semper at vulputate.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-motion">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="/img/portfolio/portfolio-7.webp" className="img-fluid" alt="" loading="lazy" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a href="/img/portfolio/portfolio-7.webp" className="glightbox preview-link" data-gallery="portfolio-gallery-motion"><i className="bi bi-eye"></i></a>
                      <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="category">Motion</span>
                  <h3>Product Animation Reel</h3>
                  <p>Donec ullamcorper nulla non metus auctor fringilla dapibus.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-brand">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="/img/portfolio/portfolio-4.webp" className="img-fluid" alt="" loading="lazy" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a href="/img/portfolio/portfolio-4.webp" className="glightbox preview-link" data-gallery="portfolio-gallery-brand"><i className="bi bi-eye"></i></a>
                      <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="category">Branding</span>
                  <h3>Luxury Brand Package</h3>
                  <p>Aenean lacinia bibendum nulla sed consectetur elit.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-web">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="/img/portfolio/portfolio-2.webp" className="img-fluid" alt="" loading="lazy" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a href="/img/portfolio/portfolio-2.webp" className="glightbox preview-link" data-gallery="portfolio-gallery-web"><i className="bi bi-eye"></i></a>
                      <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="category">Web Design</span>
                  <h3>E-commerce Platform</h3>
                  <p>Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="/img/portfolio/portfolio-11.webp" className="img-fluid" alt="" loading="lazy" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a href="/img/portfolio/portfolio-11.webp" className="glightbox preview-link" data-gallery="portfolio-gallery-graphics"><i className="bi bi-eye"></i></a>
                      <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="category">Graphics</span>
                  <h3>Digital Art Collection</h3>
                  <p>Cras mattis consectetur purus sit amet fermentum.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>

    {/* <!-- Pricing Section --> */}
    <section id="pricing" className="pricing section light-background">

      {/* <!-- Section Title --> */}
      <div className="container section-title">
        <h2>Pricing</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      {/* </div><!-- End Section Title --> */}

      <div className="container" >

        <div className="row g-4 justify-content-center pt-5">

          {/* <!-- Basic Plan --> */}
          <div className="col-lg-4" >
            <div className="pricing-card">
              <h3>Basic Plan</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">9.9</span>
                <span className="period">/ month</span>
              </div>
              <p className="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.</p>

              <h4>Featured Included:</h4>
              <ul className="features-list">
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Duis aute irure dolor
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Excepteur sint occaecat
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Nemo enim ipsam voluptatem
                </li>
              </ul>

              <a href="#" className="btn btn-primary">
                Buy Now
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* <!-- Standard Plan --> */}
          <div className="col-lg-4" >
            <div className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              <h3>Standard Plan</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">19.9</span>
                <span className="period">/ month</span>
              </div>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>

              <h4>Featured Included:</h4>
              <ul className="features-list">
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Consectetur adipiscing elit
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Sed do eiusmod tempor
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Ut labore et dolore magna
                </li>
              </ul>

              <a href="#" className="btn btn-light">
                Buy Now
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* <!-- Premium Plan --> */}
          <div className="col-lg-4" >
            <div className="pricing-card">
              <h3>Premium Plan</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">39.9</span>
                <span className="period">/ month</span>
              </div>
              <p className="description">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.</p>

              <h4>Featured Included:</h4>
              <ul className="features-list">
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Temporibus autem quibusdam
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Saepe eveniet ut et voluptates
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Nam libero tempore soluta
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Cumque nihil impedit quo
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Maxime placeat facere possimus
                </li>
              </ul>

              <a href="#" className="btn btn-primary">
                Buy Now
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
    </section>

    {/* <!-- Faq Section --> */}
    <section id="faq" className="faq section">

      <div className="container" >

        <div className="row gy-5">
          <div className="col-lg-6">
            <div className="faq-contact-card">
              <div className="card-icon">
                <i className="bi bi-question-circle"></i>
              </div>
              <div className="card-content">
                <h3>Still Have Questions?</h3>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum.</p>
                <div className="contact-options">
                  <a href="#" className="contact-option">
                    <i className="bi bi-envelope"></i>
                    <span>Email Support</span>
                  </a>
                  <a href="#" className="contact-option">
                    <i className="bi bi-chat-dots"></i>
                    <span>Live Chat</span>
                  </a>
                  <a href="#" className="contact-option">
                    <i className="bi bi-telephone"></i>
                    <span>Call Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" >
            <div className="faq-accordion">
              <div className="faq-item faq-active">
                <div className="faq-header">
                  <h3>Vivamus suscipit tortor eget felis porttitor volutpat?</h3>
                  <i className="bi bi-chevron-down faq-toggle"></i>
                </div>
                <div className="faq-content">
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-header">
                  <h3>Curabitur aliquet quam id dui posuere blandit?</h3>
                  <i className="bi bi-chevron-down faq-toggle"></i>
                </div>
                <div className="faq-content">
                  <p>
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-header">
                  <h3>Sed porttitor lectus nibh ullamcorper sit amet?</h3>
                  <i className="bi bi-chevron-down faq-toggle"></i>
                </div>
                <div className="faq-content">
                  <p>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-header">
                  <h3>Nulla quis lorem ut libero malesuada feugiat?</h3>
                  <i className="bi bi-chevron-down faq-toggle"></i>
                </div>
                <div className="faq-content">
                  <p>
                    Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>

    {/* <!-- Team Section --> */}
    <section id="team" className="team section light-background">

      {/* <!-- Section Title --> */}
      <div className="container section-title" >
        <h2>Team</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" >

        <div className="row g-5">

          <div className="col-md-6 col-lg-3">
            <div className="team-card">
              <div className="team-image">
                <img src="/img/person/person-m-1.webp" className="img-fluid" alt="" />
                <div className="team-overlay">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
                  <div className="team-social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div className="team-content">
                <h4>Daniel Mitchell</h4>
                <span className="position">Creative Director</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="team-card">
              <div className="team-image">
                <img src="/img/person/person-f-6.webp" className="img-fluid" alt="" />
                <div className="team-overlay">
                  <p>Aliquam tincidunt mauris eu risus. Vestibulum auctor dapibus neque. Nunc dignissim risus id metus.</p>
                  <div className="team-social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div className="team-content">
                <h4>Rebecca Taylor</h4>
                <span className="position">Lead Developer</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="team-card">
              <div className="team-image">
                <img src="/img/person/person-m-6.webp" className="img-fluid" alt="" />
                <div className="team-overlay">
                  <p>Cras ornare tristique elit. Integer in dui quis est placerat ornare. Phasellus a lacus a risus.</p>
                  <div className="team-social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div className="team-content">
                <h4>Marcus Johnson</h4>
                <span className="position">UI/UX Designer</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" >
            <div className="team-card">
              <div className="team-image">
                <img src="/img/person/person-f-3.webp" className="img-fluid" alt="" />
                <div className="team-overlay">
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                  <div className="team-social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div className="team-content">
                <h4>Jessica Parker</h4>
                <span className="position">Marketing Strategist</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>

    {/* <!-- Testimonials Section --> */}
    <section id="testimonials" className="testimonials section">

      {/* <!-- Section Title --> */}
      <div className="container section-title">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" >

        {/* <div className="testimonials-slider swiper init-swiper">
          <script type="application/json" className="swiper-config">
            {
              "loop": true,
              "speed": 800,
              "autoplay": {
                "delay": 5000
              },
              "slidesPerView": 1,
              "spaceBetween": 30,
              "pagination": {
                "el": ".swiper-pagination",
                "type": "bullets",
                "clickable": true
              },
              "breakpoints": {
                "768": {
                  "slidesPerView": 2
                },
                "1200": {
                  "slidesPerView": 3
                }
              }
            }
          </script>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    <i className="bi bi-quote quote-icon"></i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className="testimonial-profile">
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <div className="profile-info">
                    <img src="/img/person/person-m-8.webp" alt="Profile Image" />
                    <div>
                      <h3>Robert Johnson</h3>
                      <h4>Marketing Director</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    <i className="bi bi-quote quote-icon"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et maecenas aliquam.
                  </p>
                </div>
                <div className="testimonial-profile">
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <div className="profile-info">
                    <img src="/img/person/person-f-3.webp" alt="Profile Image" />
                    <div>
                      <h3>Lisa Williams</h3>
                      <h4>Product Manager</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    <i className="bi bi-quote quote-icon"></i>
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram.
                  </p>
                </div>
                <div className="testimonial-profile">
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <div className="profile-info">
                    <img src="/img/person/person-f-10.webp" alt="Profile Image" />
                    <div>
                      <h3>Emma Parker</h3>
                      <h4>UX Designer</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    <i className="bi bi-quote quote-icon"></i>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit.
                  </p>
                </div>
                <div className="testimonial-profile">
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <div className="profile-info">
                    <img src="/img/person/person-m-5.webp" alt="Profile Image" />
                    <div>
                      <h3>David Miller</h3>
                      <h4>Senior Developer</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    <i className="bi bi-quote quote-icon"></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat.
                  </p>
                </div>
                <div className="testimonial-profile">
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <div className="profile-info">
                    <img src="/img/person/person-m-2.webp" alt="Profile Image" />
                    <div>
                      <h3>Michael Davis</h3>
                      <h4>CEO &amp; Founder</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    <i className="bi bi-quote quote-icon"></i>
                    Eius ipsam praesentium dolor quaerat inventore rerum odio. Quos laudantium adipisci eius. Accusamus qui iste cupiditate sed temporibus est aspernatur.
                  </p>
                </div>
                <div className="testimonial-profile">
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <div className="profile-info">
                    <img src="/img/person/person-f-7.webp" alt="Profile Image" />
                    <div>
                      <h3>Sarah Thompson</h3>
                      <h4>Art Director</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}

      </div>

    </section>

    {/* <!-- Contact Section --> */}
    <section id="contact" className="contact section">

      {/* <!-- Section Title --> */}
      <div className="container section-title">
        <h2>Contact</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" >

        <div className="row gy-4 mb-5">
          <div className="col-lg-4" >
            <div className="info-card">
              <div className="icon-box">
                <i className="bi bi-geo-alt"></i>
              </div>
              <h3>Our Address</h3>
              <p>2847 Rainbow Road, Springfield, IL 62701, USA</p>
            </div>
          </div>

          <div className="col-lg-4" >
            <div className="info-card">
              <div className="icon-box">
                <i className="bi bi-telephone"></i>
              </div>
              <h3>Contact Number</h3>
              <p>Mobile: +1 (555) 123-4567<br />
                Email: info@example.com</p>
            </div>
          </div>

          <div className="col-lg-4" >
            <div className="info-card">
              <div className="icon-box">
                <i className="bi bi-clock"></i>
              </div>
              <h3>Opening Hour</h3>
              <p>Monday - Saturday: 9:00 - 18:00<br />
                Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="form-wrapper" >
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <div className="input-group">
                      <span className="input-group-text"><i className="bi bi-person"></i></span>
                      <input type="text" name="name" className="form-control" placeholder="Your name*" required="" />
                    </div>
                  </div>
                  <div className="col-md-6 form-group">
                    <div className="input-group">
                      <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                      <input type="email" className="form-control" name="email" placeholder="Email address*" required="" />
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 form-group">
                    <div className="input-group">
                      <span className="input-group-text"><i className="bi bi-phone"></i></span>
                      <input type="text" className="form-control" name="phone" placeholder="Phone number*" required="" />
                    </div>
                  </div>
                  <div className="col-md-6 form-group">
                    <div className="input-group">
                      <span className="input-group-text"><i className="bi bi-list"></i></span>
                      <select name="subject" className="form-control" required="">
                        <option value="">Select service*</option>
                        <option value="Service 1">Consulting</option>
                        <option value="Service 2">Development</option>
                        <option value="Service 3">Marketing</option>
                        <option value="Service 4">Support</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <div className="input-group">
                      <span className="input-group-text"><i className="bi bi-chat-dots"></i></span>
                      <textarea className="form-control" name="message" rows="6" placeholder="Write a message*" required=""></textarea>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Submit Message</button>
                  </div>

                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>

  </main>);
}
