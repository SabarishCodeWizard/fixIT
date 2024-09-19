import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div data-spy="scroll" data-target="#scrollspy-navbar" data-offset={200}>
      <header>
        {/* NAVIGATION BAR */}
        <div className="container-fluid fixed-top bg-white">
          <div className="row">
            <div className="col">
              <nav
                id="scrollspy-navbar"
                className="navbar navbar-light navbar-expand-sm"
              >
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarTop"
                  aria-controls="navbarTop"
                  aria-expanded="false"
                  aria-label="Open navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTop">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <a className="nav-link active home-link" href="#home">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link services-link" href="#services">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link testimonials-link"
                        href="#testimonials"
                      >
                       Team Members
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link about-link" href="#about">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link contact-link" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* HOME SECTION */}
      <section id="home">
        <div className="container">
          <div className="row align-items-center">
            <figure className="col-md-6">
              <img
                className="d-block w-100 feature-img-round mx-auto"
                src="assets/images/profile-picture.png"
                alt="A smiling drawing of a man."
              />
              <figcaption className="sr-only">

              </figcaption>
            </figure>
            <div className="col-md-6">
              <div className="jumbotron bg-white">
                <h1>Welcome to fixIT</h1>
                <hr />

                <p>
                  At <b>fixIT</b>, we provide high-quality, professional IT services designed to meet the diverse needs of modern businesses and entrepreneurs.
                </p>
                <p>
                  Whether you're looking to create a stunning online presence or need expert support for your app, e-commerce site, or digital content, we're here to help!
                </p>

                <div className="text-center">
                  <a className="btn btn-lg btn-home" href="#services">
                    Learn More
                  </a>
                  <a className="btn btn-contact btn-lg" href="#contact">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES SECTION */}
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="section-header">Our Services</h2>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card text-center">
                <div className="card-body">
                  <div className="card-icon-round design-icon">
                    <i className="fas fa-laptop-code" aria-hidden="true"></i>
                  </div>
                  <h3 className="card-title">Static and Dynamic Website Development</h3>
                  <p>
                    Build sleek, responsive, and fast-loading websites, tailored to your business needs.
                  </p>
                  <p>
                    From simple, informative static sites to complex, interactive dynamic platforms, we ensure your online presence is powerful and user-friendly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card text-center">
                <div className="card-body">
                  <div className="card-icon-round dev-icon">
                    <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                  </div>
                  <h3 className="card-title">E-commerce Development (MERN Stack)</h3>
                  <p>
                    Launch and scale your online store with our expertise in the MERN stack (MongoDB, Express, React, Node.js).
                  </p>
                  <p>
                    We provide end-to-end solutions for your e-commerce needs, including product listings, secure payment gateways, and seamless user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card text-center">
                <div className="card-body">
                  <div className="card-icon-round content-icon">
                    <i className="fas fa-paint-brush" aria-hidden="true"></i>
                  </div>
                  <h3 className="card-title">Logo Creation & Branding</h3>
                  <p>
                    Your logo is the face of your brand.
                  </p>
                  <p>
                    Our creative team designs unique, memorable logos that truly represent your brand identity and appeal to your target audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card text-center">
                <div className="card-body">
                  <div className="card-icon-round hosting-icon">
                    <i className="fas fa-mobile-alt" aria-hidden="true"></i>
                  </div>
                  <h3 className="card-title">App Development</h3>
                  <p>
                    Transform your idea into a fully functional app.
                  </p>
                  <p>
                    We offer custom mobile app development to help you engage with your customers and streamline business operations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card text-center">
                <div className="card-body">
                  <div className="card-icon-round design-icon">
                    <i className="fas fa-video" aria-hidden="true"></i>
                  </div>
                  <h3 className="card-title">Video Editing</h3>
                  <p>
                    Elevate your content with professional video editing.
                  </p>
                  <p>
                    Whether it's promotional material, social media content, or business presentations, we craft visually engaging and high-impact videos.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card text-center">
                <div className="card-body">
                  <div className="card-icon-round hosting-icon">
                    <i className="fas fa-server" aria-hidden="true"></i>
                  </div>
                  <h3 className="card-title">Hosting Services</h3>
                  <p>
                  Our hosting services include managing your website on a free hosting server. If you need a paid domain, we can help that as well, along with other services tailored to your specific requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card text-center">
                <div className="card-body">
                  <div className="call-to-action-text">
                    How can I help with your project?
                  </div>
                  <a className="btn btn-contact btn-lg" href="#contact">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <h2 className="section-header">Team Members</h2>
              <hr />
            </div>
          </div>
          {/* N.B. All names and statements in the testimonial section are fictitious and included for demonstration purposes only */}
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
              <div
                id="testimonial-carousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#testimonial-carousel"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#testimonial-carousel" data-slide-to={1} />
                  <li data-target="#testimonial-carousel" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item">
                    <figure>
                    <img
                        className="d-block w-100 mx-auto testimonial-image"
                        src="assets/images/testimonial-1.jpg"
                        alt="A woman standing in front of a whiteboard."
                      />
                      <figcaption className="carousel-caption">

                        <p className="testimonial-name">- Sabarish R</p>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="carousel-item active">
                    <figure>
                      
                      <img
                        className="d-block w-100 mx-auto testimonial-image"
                        src="assets/images/mugu.png"
                        alt="A smiling man wearing a suit."
                      />
                      <figcaption className="carousel-caption">

                        <p className="testimonial-name">- Mugundhan K V</p>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="carousel-item">
                    <figure>
                      <img
                        className="d-block w-100 mx-auto testimonial-image"
                        src="assets/images/naveen.png"
                        alt="A woman standing in front of a colourful graffitied wall."
                      />
                      <figcaption className="carousel-caption">

                        <p className="testimonial-name">- Naveen Kumar P</p>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="carousel-item">
                    <figure>
                      <img
                        className="d-block w-100 mx-auto testimonial-image"
                        src="assets/images/prabha.png"
                        alt="A woman standing in front of a colourful graffitied wall."
                      />
                      <figcaption className="carousel-caption">

                        <p className="testimonial-name">- PrabhaKaran K</p>
                      </figcaption>
                    </figure>
                  </div>
                  
                </div>
                <a
                  className="carousel-control-prev"
                  href="#testimonial-carousel"
                  role="button"
                  data-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#testimonial-carousel"
                  role="button"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-md-3" />
          </div>
        </div>
      </section>
      {/* ABOUT SECTION */}
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="section-header">About Us</h2>
              <hr />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6 order-2 order-md-1">
              <img
                className="d-block w-100 feature-img-round mx-auto"
                src="assets/images/team.png"
                alt="Our Team"
              />
            </div>
            <div className="col-md-6 order-1 order-md-2">
              <h3>Who We Are</h3>
              <p>
                At fixIT, we are a passionate team of college students dedicated to helping businesses and individuals achieve their digital goals. With expertise across web development, app creation, e-commerce solutions, and digital content, we bring your vision to life with precision and creativity.
              </p>
              <p>
                Founded on the principles of innovation, quality, and client satisfaction, we are committed to delivering services that drive results, no matter the size of your business.
              </p>
              <h3>Our Mission</h3>
              <p>
                Our mission is to empower our clients with cutting-edge digital solutions that enhance their online presence, improve business operations, and deliver lasting value. We aim to build long-term partnerships based on trust and transparency.
              </p>
              <h3>What We Offer</h3>
              <p>
                We specialize in website development, e-commerce solutions, app development, logo creation, video and image editing, and hosting services. Our custom solutions are designed to help you succeed in the digital world.
              </p>
              <div className="text-center">
                <a className="btn btn-contact btn-lg" href="#contact">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="section-header">Contact Me</h2>
              <hr />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>
                If you have a project you'd like me to help with, I'd love to hear
                from you. You can give me a call or send me a message with the form
                below. I look forward to hearing from you!
              </p>
            </div>
            <div className="col-md-6">
              <div className="list-group text-center">
                <a
                  href="tel:01234567890"
                  className="list-group-item list-group-item-action"
                >
                  <i className="fas fa-phone-square" aria-hidden="true" />
                  <span className="sr-only">Phone number:</span> +91 9791901552
                </a>
                <a
                  href="mailto:liam@example.com"
                  className="list-group-item list-group-item-action"
                >
                  <i className="fas fa-envelope-square" aria-hidden="true" />
                  <span className="sr-only">Email address:</span> fixit60656@gmail.com
                </a>
              </div>
            </div>
          </div>
          {/* CONTACT FORM */}
          <form action="https://formspree.io/f/mdknrkdn" method="POST" id="contact-form">
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="contactName" className="sr-only">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="contactName"
                  placeholder="Your name"
                  className="form-control"
                  required=""
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="contactEmail" className="sr-only">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="contactEmail"
                  placeholder="Your email"
                  className="form-control"
                  required=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="contactMessage" className="sr-only">
                  Your message
                </label>
                <textarea
                  name="message"
                  id="contactMessage"
                  placeholder="How can I help?"
                  rows={6}
                  className="form-control"
                  required=""
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="row text-center">
              <div className="col">
                <button
                  type="submit"
                  className="btn btn-contact btn-lg"
                  data-target="#contactModal"
                >
                  Send
                </button>
              </div>
            </div>

          </form>
        </div>
      </section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-fifths div-db" />
          <div className="col-fifths div-lb" />
          <div className="col-fifths div-g" />
          <div className="col-fifths div-lo" />
          <div className="col-fifths div-do" />
        </div>
      </div>
      {/* SITE FOOTER */}
      <footer>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-4">
              <p>© 2024 at fixIT</p>
            </div>
            <div className="col-12 col-md-8 footer-contact">
              <div className="row no-gutters">
                <div className="col text-md-right">
                  Phone:&nbsp;
                  <br className="d-sm-none" />
                  <a href="tel:01234567890"> +91 9791901552</a>
                </div>
              </div>
              <div className="row no-gutters">
                <div className="col text-md-right">
                  Email:&nbsp;
                  <br className="d-sm-none" />
                  <a href="mailto:fixit@gmail.com">fixit60656@gmail.com</a>
                </div>
              </div>
              {/* <div className="row no-gutters">
                <div className="col text-md-right">
                  GitHub:&nbsp;
                  <br className="d-sm-none" />
                  <a href="https://github.com/SabarishCodeWizard" target="_blank">
                    {"https://github.com/SabarishCodeWizard"}
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
      {/* Javascript code to prevent contact form modal from appearing if form is not validated. Assistance with this script was provided by Tim Nelson, Code Institute mentor. */}
    </div>

  );
}

export default App;
