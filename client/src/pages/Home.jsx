
function Home() {
  return (
      <>
        <main>
          <section className="section-hero">
            <div className="container grid grid-two-cols">
              <div className="hero-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lauda</p>
                <h1>Lorem ipsum dolor sit</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum soluta, maiores amet saepe atque cumque, minima ipsam sed ea, expedita quas. Impedit illo, iure asperiores libero distinctio ipsam id quidem!
                </p>
                <div className="btn btn-group">
                  <a href="/contact" > <button className="btn">Connect Now</button></a>
                  <a href="/services"> <button className="btn secondary-btn">Learn More</button></a>
                </div>
              </div>

              <div className="hero-image">
                <img src="/images/home.png" alt="none" width={400}  height={500}/>
              </div>
            </div>
          </section>
        </main>

        <section className="section-analytics">
          <div className="container grid grid-four-cols">
            <div className="div1">
              <h2>akk</h2>
              <p>akk</p>
            </div>
            <div className="div1">
              <h2>akk</h2>
              <p>akk</p>
            </div>
            <div className="div1">
              <h2>akk</h2>
              <p>akk</p>
            </div>
            <div className="div1">
              <h2>akk</h2>
              <p>akk</p>
            </div>
          </div>
        </section>

        {/* 3rd section */}

        <section className="section-hero">
            <div className="container grid grid-two-cols">
            <div className="hero-image">
                <img src="/images/home.png" alt="none" width={400}  height={500}/>
              </div>
              <div className="hero-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lauda</p>
              <h1>Lorem ipsum dolor sit</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum soluta, maiores amet saepe atque cumque, minima ipsam sed ea, expedita quas. Impedit illo, iure asperiores libero distinctio ipsam id quidem!
                </p>
                <div className="btn btn-group">
                  <a href="/contact" > <button className="btn">Connect Now</button></a>
                  <a href="/services"> <button className="btn secondary-btn">Learn More</button></a>
                </div>
              </div>

              
            </div>
          </section>



      </>
      );
  
}

export default Home
