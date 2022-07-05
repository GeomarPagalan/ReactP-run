const About = () => {
  return (
    <div id="about" className="section dark2">
      <div className="container">
        <div className="section-title">
          <h1>About <span className="color-primary">Me</span></h1>
          <p className="width70">Current a 3rd year student taking Bachelor of Science in Computer Science at Caraga State University. </p>
        </div>
        <div className="section-flex">
          <div className="section-left">
            <img className="myphoto" src="/images/ako.png" alt="myphoto" />
          </div>
          <div className="section-right">
            <section >
              <h2 className="weight-light">Hi, I'm <span className="color-primary">Liezel May</span></h2>
              <p>Current a 3rd year student taking Bachelor of Science in Computer Science at Caraga State University.</p>
            </section>
            <hr />
            <section>
              <h2 className="weight-light">Personal <span className="color-primary">Info</span></h2>
              <div>
                <p><strong>Name:</strong> Liezel May Arceña Banga</p>
                <p><strong>Age:</strong> 23 years</p>
                <p><strong>Language:</strong> English, Tagalog, Visayan</p>
                <p><strong>Address:</strong> Purok Panaghi-usa, Agusan Pequeño, Butuan City, Agusan del Norte, Philippines</p>
              </div>
            </section>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About;