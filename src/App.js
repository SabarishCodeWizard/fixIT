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
                    Testimonials
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
            Liam Hemming, a freelance web designer, developer and content
            writer.
          </figcaption>
        </figure>
        <div className="col-md-6">
          <div className="jumbotron bg-white">
            <h1>Hi, I'm Liam.</h1>
            <hr />
            <p>I design, build and write for websites in North Wales.</p>
            <p>
              I've worked in this industry for nearly a decade and have had
              clients ranging from international companies to sole traders.
            </p>
            <p>
              What I really love doing is working with local businesses and
              charities, to help them achieve a high-quality, effective web
              presence.
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
          <h2 className="section-header">My Services</h2>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body">
              <div className="card-icon-round design-icon">
                <i className="fas fa-tablet-alt" aria-hidden="true" />
              </div>
              <h3 className="card-title">Design</h3>
              <p>
                My job as a designer is to take your brilliant ideas and turn
                them into a polished, professional website.
              </p>
              <p>
                I take a measured approach to design, with a strong focus on
                optimising user experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body">
              <div className="card-icon-round dev-icon">
                <i className="fas fa-cogs" aria-hidden="true" />
              </div>
              <h3 className="card-title">Development</h3>
              <p>
                I've been building websites for many years both alone and as
                part of a team.
              </p>
              <p>
                I've worked on simple, static websites, complex web applications
                with large user bases, and everything in between.
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
                <i className="fas fa-pen-fancy" aria-hidden="true" />
              </div>
              <h3 className="card-title">Content</h3>
              <p>
                I started in the online industry ten years ago as a content
                writer and editor.
              </p>
              <p>
                I can write for your project, or help refine your own writing
                into professional content that's effective for both users and
                search engines.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body">
              <div className="card-icon-round hosting-icon">
                <i className="fas fa-server" aria-hidden="true" />
              </div>
              <h3 className="card-title">Hosting</h3>
              <p>
                A web host is where your site is stored on the internet, so it's
                accessible to your users.
              </p>
              <p>
                I can provide hosting for your completed project for a small
                monthly fee, or assist with getting your site set up on your own
                host, if you prefer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3" />
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
        <div className="col-md-3" />
      </div>
    </div>
  </section>
  {/* TESTIMONIALS SECTION */}
  <section id="testimonials">
    <div className="container-fluid">
      <div className="row">
        <div className="col text-center">
          <h2 className="section-header">Testimonials</h2>
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
              <div className="carousel-item active">
                <figure>
                  <img
                    className="d-block w-100 mx-auto testimonial-image"
                    src="assets/images/testimonial-1.jpg"
                    alt="A woman standing in front of a whiteboard."
                  />
                  <figcaption className="carousel-caption">
                    <p className="testimonial-text">
                      I run a non-profit with a limit budget. Liam helped us to
                      create a website that we're proud of.
                    </p>
                    <p className="testimonial-name">- Lindsay Palmer</p>
                  </figcaption>
                </figure>
              </div>
              <div className="carousel-item">
                <figure>
                  <img
                    className="d-block w-100 mx-auto testimonial-image"
                    src="assets/images/testimonial-2.jpg"
                    alt="A smiling man wearing a suit."
                  />
                  <figcaption className="carousel-caption">
                    <p className="testimonial-text">
                      Liam is a very reliable and capable freelancer who's
                      worked with us on numerous projects.
                    </p>
                    <p className="testimonial-name">- Paul Butler</p>
                  </figcaption>
                </figure>
              </div>
              <div className="carousel-item">
                <figure>
                  <img
                    className="d-block w-100 mx-auto testimonial-image"
                    src="assets/images/testimonial-3.jpg"
                    alt="A woman standing in front of a colourful graffitied wall."
                  />
                  <figcaption className="carousel-caption">
                    <p className="testimonial-text">
                      I had a very clear idea of how I wanted my site to look
                      and function. Liam listened carefully and delivered
                      exactly what I was looking for.
                    </p>
                    <p className="testimonial-name">- Ashley Cook</p>
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
          <h2 className="section-header">About Me</h2>
          <hr />
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6 order-2 order-md-1">
          <img
            className="d-block w-100 feature-img-round mx-auto"
            src="assets/images/lake-surrounded-by-mountain-lukas-hartmann.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 order-1 order-md-2">
          <h3>So, who are you?</h3>
          <p>
            My name's Liam and I'm a freelance web designer, developer and
            content writer. I've been working in this industry for around ten
            years. I started out on the content side, writing, editing and doing
            SEO (Search Engine Optimisation) work for websites, but I eventually
            expanded my skill set into design and development.
          </p>
          <p>
            I live in North Wales and most of my clients are based around here,
            too - though I've worked with clients and teams from all around the
            world!
          </p>
          <h3>Why do you do what you do?</h3>
          <p>
            {" "}
            I love building websites and helping people turn their ideas into
            reality. I particularly love working with people, charities and
            small businesses from my local area to help them achieve a web
            presence they can be proud of.
          </p>
          <p>
            I'm not a big, faceless company churning out one-size-fits-none
            products. I'm someone who takes time to understand my clients' needs
            and who puts care and skill into every project I undertake.
          </p>
          <div className="text-center">
            <a className="btn btn-contact btn-lg" href="#contact">
              Contact Me
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
              <span className="sr-only">Phone number:</span> 01234 567890
            </a>
            <a
              href="mailto:liam@example.com"
              className="list-group-item list-group-item-action"
            >
              <i className="fas fa-envelope-square" aria-hidden="true" />
              <span className="sr-only">Email address:</span> liam@example.com
            </a>
          </div>
        </div>
      </div>
      {/* CONTACT FORM */}
      <form action="https://formspree.io/f/xvgpadov" method="POST" id="contact-form">
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
          <p>© 2021 Liam Hemming</p>
        </div>
        <div className="col-12 col-md-8 footer-contact">
          <div className="row no-gutters">
            <div className="col text-md-right">
              Phone:&nbsp;
              <br className="d-sm-none" />
              <a href="tel:01234567890"> 01234 567890</a>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col text-md-right">
              Email:&nbsp;
              <br className="d-sm-none" />
              <a href="mailto:liam@example.com">liam@example.com</a>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col text-md-right">
              GitHub:&nbsp;
              <br className="d-sm-none" />
              <a href="https://github.com/lmjh/" target="_blank">
                lmjh{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Javascript code to prevent contact form modal from appearing if form is not validated. Assistance with this script was provided by Tim Nelson, Code Institute mentor. */}
</div>

  );
}

export default App;
