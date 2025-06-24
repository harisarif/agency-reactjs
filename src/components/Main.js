import React, { useEffect, useState } from "react";
import axios from "axios";
import { Accordion } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function Main() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/latest-blogs")
      .then((response) => {
        console.log("adsadsa", response);
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const testimonials = [
    {
      text: `Working with this agency was a fantastic experience. Their team delivered exactly what we needed with incredible attention to detail and professionalism. We’re already seeing the impact on our campaigns.`,
      name: "Robert Johnson",
      title: "Marketing Director",
      image: "img/person/person-m-8.webp",
    },
    {
      text: `The level of creativity and technical expertise this team brings is unmatched. They understood our goals and transformed them into a user-friendly, beautiful product. Highly recommend their services to any growing business.`,
      name: "Lisa Williams",
      title: "Product Manager",
      image: "img/person/person-f-3.webp",
    },
    {
      text: `From strategy to execution, the entire project was handled seamlessly. The design was top-notch, communication was clear, and everything launched on time. We’ll definitely work with them again in the future.`,
      name: "Emma Parker",
      title: "UX Designer",
      image: "img/person/person-f-10.webp",
    },
    {
      text: `This agency goes above and beyond. They brought our vision to life with a modern design and smooth functionality. Their support team was always available to help and guide us throughout the process.`,
      name: "David Miller",
      title: "Senior Developer",
      image: "img/person/person-m-5.webp",
    },
    {
      text: `They truly care about your success. Our brand identity and online presence have improved dramatically thanks to their thoughtful and well-executed strategies. We’re extremely pleased with the results so far.`,
      name: "Michael Davis",
      title: "CEO & Founder",
      image: "img/person/person-m-2.webp",
    },
    {
      text: `Impressive from start to finish. Their attention to brand storytelling, user experience, and visual design helped us stand out. The entire experience was smooth, and we’re thrilled with the final product.`,
      name: "Sarah Thompson",
      title: "Art Director",
      image: "img/person/person-f-7.webp",
    },
  ];

  const faqData = [
    {
      question: "Vivamus suscipit tortor eget felis porttitor volutpat?",
      answer:
        "Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt.",
    },
    {
      question: "Curabitur aliquet quam id dui posuere blandit?",
      answer:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
    },
    {
      question: "Sed porttitor lectus nibh ullamcorper sit amet?",
      answer:
        "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa.",
    },

    {
      question: "Sed porttitor lectus nibh ullamcorper sit amet?",
      answer:
        "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa.",
    },

    {
      question: "Sed porttitor lectus nibh ullamcorper sit amet?",
      answer:
        "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa.",
    },
  ];

  const filters = [
    { label: "All Work", value: "*" },
    { label: "Web Design", value: "web" },
    { label: "Graphics", value: "graphics" },
    { label: "Motion", value: "motion" },
    { label: "Branding", value: "brand" },
  ];

  const portfolioItems = [
    {
      id: 1,
      category: "web",
      title: "Modern Dashboard Interface",
      img: "/img/portfolio/portfolio-1.webp",
      description:
        "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.",
    },
    {
      id: 2,
      category: "graphics",
      title: "Creative Brand Identity",
      img: "/img/portfolio/portfolio-10.webp",
      description:
        "Vestibulum id ligula porta felis euismod semper at vulputate.",
    },
    {
      id: 3,
      category: "motion",
      title: "Product Animation Reel",
      img: "/img/portfolio/portfolio-7.webp",
      description:
        "Donec ullamcorper nulla non metus auctor fringilla dapibus.",
    },
    {
      id: 4,
      category: "brand",
      title: "Luxury Brand Package",
      img: "/img/portfolio/portfolio-4.webp",
      description: "Aenean lacinia bibendum nulla sed consectetur elit.",
    },
    {
      id: 5,
      category: "web",
      title: "E-commerce Platform",
      img: "/img/portfolio/portfolio-2.webp",
      description: "Nullam id dolor id nibh ultricies vehicula ut id elit.",
    },
    {
      id: 6,
      category: "graphics",
      title: "Digital Art Collection",
      img: "/img/portfolio/portfolio-11.webp",
      description: "Cras mattis consectetur purus sit amet fermentum.",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("*");

  const filteredItems =
    activeFilter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);
  return (
    <main className="main">
      {/* <!-- Hero Section --> */}
      <section id="hero" className="hero section">
        <div className="container">
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

              <h1 className="hero-title mb-4">
                Accelerating business growth through innovative technology
              </h1>

              <p className="hero-description mb-4">
               Empowering businesses with tailored tech solutions. We drive success by combining strategy, creativity, and modern development tools.
              </p>

              <div className="cta-wrapper">
                <a className="btn btn-primary">Discover More</a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-image">
                <img
                  src="/img/illustration/illustration-16.webp"
                  alt="Business Growth"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="row feature-boxes">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="feature-box">
                <div className="feature-icon me-sm-4 mb-3 mb-sm-0">
                  <i className="bi bi-gear"></i>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Rapid Deployment</h3>
                  <p className="feature-text">
                    Accelerate your project launch with our agile workflow, delivering efficient and timely solutions tailored to your business
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="feature-box">
                <div className="feature-icon me-sm-4 mb-3 mb-sm-0">
                  <i className="bi bi-window"></i>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Advanced Security</h3>
                  <p className="feature-text">
                   We implement cutting-edge security protocols to protect your data, ensuring confidentiality, integrity, and peace of mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="feature-box">
                <div className="feature-icon me-sm-4 mb-3 mb-sm-0">
                  <i className="bi bi-headset"></i>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Dedicated Support</h3>
                  <p className="feature-text">
                    Our expert team is always ready to assist you with timely solutions, ensuring smooth operations and client satisfaction.
                  </p>
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
           <div className="col-lg-6 content">
  <p className="who-we-are">Who We Are</p>
  <h3>Empowering Brands Through Innovation & Strategy</h3>
  <p className="fst-italic">
    At WPCorex, we specialize in delivering innovative digital solutions that drive real results. Our team blends creativity, technology, and strategy to bring your ideas to life.
  </p>
  <ul>
    <li>
      <i className="bi bi-check-circle"></i>{" "}
      <span>
        Customized web and mobile solutions tailored to your business needs.
      </span>
    </li>
    <li>
      <i className="bi bi-check-circle"></i>{" "}
      <span>
        Data-driven strategies designed to increase engagement and conversions.
      </span>
    </li>
    <li>
      <i className="bi bi-check-circle"></i>{" "}
      <span>
        Ongoing support and optimization to ensure your digital presence thrives across platforms and devices.
      </span>
    </li>
  </ul>
  <a className="read-more">
    <span>Read More</span>
    <i className="bi bi-arrow-right"></i>
  </a>
</div>


            <div className="col-lg-6 about-images">
              <div className="row gy-4">
                <div className="col-lg-6">
                  <img
                    src="/img/about/about-portrait-1.webp"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-lg-6">
                  <div className="row gy-4">
                    <div className="col-lg-12">
                      <img
                        src="/img/about/about-8.webp"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-12">
                      <img
                        src="/img/about/about-12.webp"
                        className="img-fluid"
                        alt=""
                      />
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
          <p>
           We follow a client-focused approach built on strategy, innovation, and consistent results.
          </p>
        </div>

        <div className="container">
          <div className="steps-5">
            <div className="process-container">
              <div className="process-item">
                <div className="content">
                  <span className="step-number">01</span>
                  <div className="card-body">
                    <div className="step-icon">
                      <i className="bi bi-pencil-square"></i>
                    </div>
                    <div className="step-content">
                      <h3>Project Planning</h3>
                      <p>
                        We outline every step with clarity. Project goals, timelines, and resources are mapped to ensure smooth delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="process-item">
                <div className="content">
                  <span className="step-number">02</span>
                  <div className="card-body">
                    <div className="step-icon">
                      <i className="bi bi-gear"></i>
                    </div>
                    <div className="step-content">
                      <h3>Development Phase</h3>
                      <p>
                       Our team brings ideas to life with clean code, agile workflows, and continuous testing to ensure high-quality results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="process-item">
                <div className="content">
                  <span className="step-number">03</span>
                  <div className="card-body">
                    <div className="step-icon">
                      <i className="bi bi-search"></i>
                    </div>
                    <div className="step-content">
                      <h3>Testing &amp; QA</h3>
                      <p>
                        Every component is thoroughly tested to ensure flawless performance, security, and compatibility across all platforms.
                      </p>
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
                      <p>
                       We ensure a smooth launch followed by continuous support and maintenance to keep your project optimized and running flawlessly.
                      </p>
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
          <p>
           Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        <div className="container">
          <div className="row justify-content-center g-5">
            <div className="col-lg-6">
              <div className="service-item">
                <div className="service-icon">
                  <i className="bi bi-code-slash"></i>
                </div>
                <div className="service-content">
                  <h3>Custom Web Development</h3>
                  <p>
                    Build dynamic, responsive, and scalable websites tailored to your brand.  
Our custom web solutions ensure optimal performance, user engagement,  
and seamless integration with the latest technologies.
                  </p>
                  <a className="service-link">
                    <span>Learn More</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="service-item">
                <div className="service-icon">
                  <i className="bi bi-phone-fill"></i>
                </div>
                <div className="service-content">
                  <h3>Mobile App Solutions</h3>
                  <p>
                Delivering seamless mobile experiences tailored to your business needs.  
From concept to launch, we build fast, scalable, and user-friendly mobile  
apps that engage users and drive real results across platforms.
                  </p>
                  <a className="service-link">
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
                  <p>
                    Enhance user engagement through intuitive design. We craft seamless  
interfaces and user experiences that prioritize functionality, usability,  
and visual consistency across all digital platforms.
                  </p>
                  <a className="service-link">
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
                  <p>
                   Empower your brand through data-driven strategies. Boost engagement  
and conversions with SEO, PPC, and targeted campaigns designed to  
deliver measurable growth across digital platforms.
                  </p>
                  <a className="service-link">
                    <span>Learn More</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-6">
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
          </div> */}
          </div>
        </div>
      </section>

      {/* <!-- Services Alt Section --> */}
      <section id="services-alt" className="services-alt section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-block">
                <h6 className="subtitle">Our innovative services</h6>
                <h2 className="title">
                  Our customers excel in technology management
                </h2>
                <p className="description">
                  At WPCorex, we empower businesses to lead through digital
                  innovation. Our tailored solutions help clients streamline
                  operations, boost efficiency, and stay ahead in a competitive
                  landscape. With our expert support, organizations build
                  smarter workflows and gain the confidence to scale with
                  reliability, precision, and future-ready technologies.
                </p>
                <div className="button-wrapper">
                  <a className="btn">
                    <span>Explore All Services</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services-list">
                <div className="service-item d-flex align-items-center">
                  <div className="service-icon">
                    <i className="bi bi-code-square"></i>
                  </div>
                  <div className="service-content">
                    <h4>
                      <a>Software Engineering</a>
                    </h4>
                    <p>
                      Empowering digital solutions through expert development.
                    </p>
                  </div>
                </div>

                <div className="service-item d-flex align-items-center">
                  <div className="service-icon">
                    <i className="bi bi-graph-up"></i>
                  </div>
                  <div className="service-content">
                    <h4>
                      <a>Business Analytics</a>
                    </h4>
                    <p>
                      Unlocking data insights to drive smarter decisions daily.
                    </p>
                  </div>
                </div>

                <div className="service-item d-flex align-items-center">
                  <div className="service-icon">
                    <i className="bi bi-phone"></i>
                  </div>
                  <div className="service-content">
                    <h4>
                      <a>Mobile Solutions</a>
                    </h4>
                    <p>
                      Crafting seamless apps that connect and empower users.
                    </p>
                  </div>
                </div>

                <div className="service-item d-flex align-items-center">
                  <div className="service-icon">
                    <i className="bi bi-gear"></i>
                  </div>
                  <div className="service-content">
                    <h4>
                      <a>Tech Infrastructure</a>
                    </h4>
                    <p>
                      Building scalable systems that power digital innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Call To Action 2 Section --> */}
      <section
        id="call-to-action-2"
        className="call-to-action-2 section light-background"
      >
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="cta-image-wrapper">
                <img
                  src="/img/cta/cta-4.png"
                  alt="Call to Action"
                  className="img-fluid rounded-4"
                />
                <div className="cta-pattern"></div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="cta-content">
                <h2>Empower Your Business with Expert Digital Solutions</h2>
                <p className="lead">
                  Ready to take your brand to the next level? We deliver
                  cutting-edge websites, seamless user experiences, and tailored
                  strategies that drive real results.
                </p>

                <div className="cta-features">
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Custom Website Design & Development</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>SEO Optimization & Digital Marketing</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Reliable Support & Ongoing Maintenance</span>
                  </div>
                </div>

                <div className="cta-action mt-5">
                  <a className="btn btn-primary btn-lg me-3">Get Started</a>
                  <a className="btn btn-outline-primary btn-lg">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Portfolio Section --> */}
      <section id="portfolio" className="portfolio section">
        <div className="container section-title">
          <h2>Portfolio</h2>
          <p>
            Explore our crafted projects built with precision, passion, and
            creative expertise.
          </p>
        </div>

        <div className="container">
          <div className="portfolio-filters-container">
            <ul className="portfolio-filters">
              {filters.map((filter) => (
                <li
                  key={filter.value}
                  className={
                    activeFilter === filter.value ? "filter-active" : ""
                  }
                  onClick={() => setActiveFilter(filter.value)}
                >
                  {filter.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="row g-4">
            {filteredItems.map((item) => (
              <div className="col-lg-6 col-md-6 portfolio-item" key={item.id}>
                <div className="portfolio-card">
                  <div className="portfolio-image">
                    <img
                      src={item.img}
                      className="img-fluid"
                      alt={item.title}
                      loading="lazy"
                    />
                    <div className="portfolio-overlay">
                      <div className="portfolio-actions">
                        <a
                          href={item.img}
                          className="glightbox preview-link"
                          data-gallery={`portfolio-gallery-${item.category}`}
                        >
                          <i className="bi bi-eye"></i>
                        </a>
                        <a className="details-link">
                          <i className="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <span className="category">{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
            {filteredItems.length === 0 && (
              <>
                <img src="" />
                <p>No items match this filter.</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* <!-- blog section start now --> */}

      <section id="blogs" className="blog-section py-5">
        <div className="container">
          {/* Section Title */}
          <div className="section-title text-center mb-3">
            <h2>Our Blogs</h2>
          </div>

          {/* Blog Grid */}
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-12 col-md-6 col-lg-4">
                <div className="blog-item h-100">
                  <div className="blog-img rounded-5 overflow-hidden">
                    {blog.image && (
                      <img
                        src={`http://127.0.0.1:8000/storage/${blog.image}`}
                        className="img-fluid w-100 newImage"
                        alt="{blog.title}"
                      />
                    )}
                  </div>
                  <div className="d-flex align-items-center flex-wrap gap-3 my-3">
                    <a className="fw-bold text-decoration-none">Creative</a>
                    <span className="text-muted small">Oct 12, 2024</span>
                  </div>
                  <h3 className="blog-title fs-5">{blog.title}</h3>
                  {/* <p className="mb-0">{blog.description?.substring(0, 100)}...</p> */}
                  {/* <p className="mb-0 text-truncate-description">{blog.description?.substring(0, 100)}</p> */}
                  <p className="mb-0 multi-line-ellipsis">
                    {blog.description?.substring(0.1)}
                  </p>
                </div>
              </div>
            ))}
            {blogs.length === 0 && (
              <p className="text-gray-500">No blogs found.</p>
            )}
          </div>
        </div>
      </section>

      {/* <!-- blog section end now --> */}

      {/* <!-- Pricing Section --> */}
      <section id="pricing" className="pricing section light-background">
        {/* <!-- Section Title --> */}
        <div className="container section-title">
          <h2>Pricing</h2>
          <p>
            Delivering powerful digital solutions with creativity, strategy, and
            seamless execution
          </p>
          {/* </div><!-- End Section Title --> */}

          <div className="container">
            <div className="row g-4 justify-content-center pt-5">
              {/* <!-- Basic Plan --> */}
              <div className="col-lg-4">
                <div className="pricing-card">
                  <h3>Starter Plan</h3>
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">49</span>
                    <span className="period">/ month</span>
                  </div>
                  <p className="description">
                    Ideal for startups and small businesses looking to build a
                    strong online presence with essential digital services.
                  </p>

                  <h4>Features Included:</h4>
                  <ul className="features-list">
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Custom 1-page website
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Basic SEO optimization
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Branding consultation
                    </li>
                  </ul>

                  <a className="btn btn-primary">
                    Get Started
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              {/* <!-- Standard Plan --> */}
              <div className="col-lg-4">
                <div className="pricing-card popular">
                  <div className="popular-badge">Most Popular</div>
                  <h3>Professional Plan</h3>
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">99</span>
                    <span className="period">/ month</span>
                  </div>
                  <p className="description">
                    Perfect for growing businesses looking to scale with
                    advanced web and digital marketing solutions.
                  </p>

                  <h4>Features Included:</h4>
                  <ul className="features-list">
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Multi-page responsive website
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      SEO & speed optimization
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Social media setup & integration
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Monthly performance reports
                    </li>
                  </ul>

                  <a className="btn btn-light">
                    Get Started
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              {/* <!-- Premium Plan --> */}
              <div className="col-lg-4">
                <div className="pricing-card">
                  <h3>Premium Plan</h3>
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">199</span>
                    <span className="period">/ month</span>
                  </div>
                  <p className="description">
                    Ideal for enterprises needing full-scale digital
                    transformation and dedicated project support.
                  </p>

                  <h4>Features Included:</h4>
                  <ul className="features-list">
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Custom web development & redesign
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Advanced SEO and analytics setup
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Social media strategy & ad campaigns
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Priority support & maintenance
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Dedicated account manager
                    </li>
                  </ul>

                  <a className="btn btn-primary">
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
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-6">
              <div className="faq-contact-card">
                <div className="card-icon">
                  <i className="bi bi-question-circle"></i>
                </div>
                <div className="card-content">
                  <h3>Still Have Questions?</h3>
                  <p>
                    We’re always ready to assist you with any queries about our
                    services or process. Feel free to reach out — our team will
                    ensure your questions are answered with clarity and
                    professional support.
                  </p>
                  <div className="contact-options">
                    <a href="#" className="contact-option">
                      <i className="bi bi-envelope"></i>
                      <span>Email Support</span>
                    </a>
                    <a href="#" className="contact-option">
                      <i className="bi bi-chat-dots"></i>
                      <span>Live Chat</span>
                    </a>

                    {/* <a
                      href="https://wa.me/923167013172?text=Hi%2C%20I%27d%20like%20to%20know%20more!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-option"
                    >
                      <i className="bi bi-whatsapp"></i>
                      <span>WhatsApp Chat</span>
                    </a> */}

                    <a href="#" className="contact-option">
                      <i className="bi bi-telephone"></i>
                      <span>Call Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5>How does your agency approach new digital projects?</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    We begin with in-depth discovery to understand your goals.
                    Our team then tailors strategies that align with your brand.
                    Every step is transparent, collaborative, and focused on
                    achieving measurable success.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <h5>
                      What makes your design process unique and effective?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Our design approach combines creativity with usability. We
                    focus on clean visuals, seamless navigation, and brand
                    consistency. Each design decision supports user experience
                    and business impact.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h5>
                      Do you offer custom website development or use templates?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    We build fully custom solutions tailored to your needs.
                    While we can work with templates, most clients prefer a
                    unique design that reflects their brand and provides better
                    scalability and performance.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <h5>
                      How do you ensure the success of marketing campaigns?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    We use data-driven strategies, market research, and creative
                    execution. Campaigns are monitored, optimized, and adjusted
                    in real-time to ensure they deliver traffic, engagement, and
                    ROI.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <h5>Can you help redesign an existing outdated website?</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Absolutely. We specialize in transforming old websites into
                    modern, responsive platforms that reflect current trends.
                    Our redesigns focus on aesthetics, functionality, and
                    conversion improvements.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Team Section --> */}
      <section id="team" className="team section light-background">
        {/* <!-- Section Title --> */}
        <div className="container section-title">
          <h2>Team</h2>
          <p>Meet the Experts Powering Your Success Every Step of the Way</p>
        </div>

        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3">
              <div className="team-card">
                <div className="team-image">
                  <img
                    src="/img/person/person-m-1.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="team-overlay">
                    <p>
                      Leads visual storytelling and brand vision, crafting
                      unique designs that leave a lasting impact.
                    </p>
                    <div className="team-social">
                      <a>
                        <i className="bi bi-twitter-x"></i>
                      </a>
                      <a>
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a>
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a>
                        <i className="bi bi-linkedin"></i>
                      </a>
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
                  <img
                    src="/img/person/person-f-6.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="team-overlay">
                    <p>
                      Builds robust, scalable web solutions with clean code and
                      modern frameworks to ensure performance.
                    </p>
                    <div className="team-social">
                      <a>
                        <i className="bi bi-twitter-x"></i>
                      </a>
                      <a>
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a>
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a>
                        <i className="bi bi-linkedin"></i>
                      </a>
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
                  <img
                    src="/img/person/person-m-6.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="team-overlay">
                    <p>
                      Designs intuitive user experiences and seamless interfaces
                      that enhance usability and brand identity.
                    </p>
                    <div className="team-social">
                      <a>
                        <i className="bi bi-twitter-x"></i>
                      </a>
                      <a>
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a>
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a>
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h4>Marcus Johnson</h4>
                  <span className="position">UI/UX Designer</span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="team-card">
                <div className="team-image">
                  <img
                    src="/img/person/person-f-3.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="team-overlay">
                    <p>
                      Specializes in digital growth strategies, creating
                      impactful campaigns that drive real business results.
                    </p>
                    <div className="team-social">
                      <a>
                        <i className="bi bi-twitter-x"></i>
                      </a>
                      <a>
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a>
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a>
                        <i className="bi bi-linkedin"></i>
                      </a>
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
      <div className="container testimonial-section">
        <Swiper
          className="testimonials-slider"
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={800}
          autoplay={{ delay: 3000 }}
          // autoplay={false}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    <i className="bi bi-quote quote-icon"></i>
                    {testimonial.text}
                  </p>
                </div>
                <div className="testimonial-profile">
                  <div className="rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                  <div className="profile-info d-flex align-items-center">
                    <img src={testimonial.image} alt="Profile" />
                    <div>
                      <h3>{testimonial.name}</h3>
                      <h4>{testimonial.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>

      {/* <!-- Contact Section --> */}
      <section id="contact" className="contact section">
        {/* <!-- Section Title --> */}
        <div className="container section-title">
          <h2>Contact</h2>
          <p>
            <p>
              Let’s connect and discuss how our agency can help you grow and
              elevate your brand today.
            </p>
          </p>
        </div>

        <div className="container">
          <div className="row gy-4 mb-5">
            <div className="col-lg-4">
              <div className="info-card">
                <div className="icon-box">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <h3>Our Address</h3>
                <p>Faisalabad, Punjab 38000, Pakistan</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="info-card">
                <div className="icon-box">
                  <i className="bi bi-telephone"></i>
                </div>
                <h3>Contact Number</h3>
                <p>
                  Mobile: +92 316 7013172
                  <br />
                  Email: info@wpcorex.com
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="info-card">
                <div className="icon-box">
                  <i className="bi bi-clock"></i>
                </div>
                <h3>We're Open</h3>
                <p>A bit friendlier and less formal.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="form-wrapper">
                <form
                // action="forms/contact.php"
                // method="post"
                // role="form"
                // className="php-email-form"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-person"></i>
                        </span>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Your name*"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6 form-group">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-envelope"></i>
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email address*"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6 form-group">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-phone"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          placeholder="Phone number*"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6 form-group">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-list"></i>
                        </span>
                        <select
                          name="subject"
                          className="form-control"
                          required=""
                        >
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
                        <span className="input-group-text">
                          <i className="bi bi-chat-dots"></i>
                        </span>
                        <textarea
                          className="form-control"
                          name="message"
                          rows="6"
                          placeholder="Write a message*"
                          required=""
                        ></textarea>
                      </div>
                    </div>
                    {/* <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div> */}
                    <div className="text-center mt-5">
                      <button>Submit Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
