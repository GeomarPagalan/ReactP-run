const Contact = () => {
  const formSubmitHandler = (event) => {
event.preventDefault();

  }
  return (
    <div id="contact" className="section dark2">
      <div className="container contact">
        <div className="section-title">
          <h1>Contact <span className="color-primary">Me</span></h1>
          <p className="width70">Feel free to get in touch with me for updates and incoming animes.</p>
        </div>
        <div>
          <ul className="social-icons">
            <li><a href="https://www.facebook.com/may.banga" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a></li>
            <li><a href="https://twitter.com/liezelmay1105"  target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a></li>
            <li><a href="https://www.instagram.com/liezel.may1105/?hl=en"  target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a></li>
            <li><a href="https://www.github.com/LiezelMayB" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a></li>
          </ul>
        </div>
        <div className="columns">
          <div className="column contact-box">
            <h3>Address</h3>
            <i className="bi bi-map icon"></i>
            <p>73 Agusan Pequeño<br />Butuan City, Agusan del Norte, 8600</p>
          </div>
          <div className="column contact-box">
          <h3>Email</h3>
          <i className="bi bi-envelope icon"></i>
          <p>liezelmay11.banga@gmail.com</p>
          </div>
          <div className="column contact-box">
          <h3>Call Me</h3>
          <i className="bi bi-telephone-inbound icon"></i>
          <p>+639610713232</p>
          </div>
        </div>

        <div>
          <form className="contact-form" onSubmit={formSubmitHandler}>
            <input type="text" id="name" name="name" placeholder="Your name" />
            <input type="text" id="phone" name="phone" placeholder="Your phone number" />
            <input type="email" id="email" name="email" placeholder="Your email" />
            <textarea rows="5" id="message" name="message" placeholder="Your message" />
            <button type="submit" className="button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;