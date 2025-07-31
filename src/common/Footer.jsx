import React from "react";

const Footer = () => {
  return (
    <section id="reachus">
      <footer className="text-center text-lg-start text-muted" style={{ backgroundColor: "#f5f5f5" }}>
        <section className="text-center w-full max-w-7xl mx-auto">
          <div className="container text-center text-md-start mt-5">
            <div className="row row-cols-1 row-cols-md-3">

              {/* Logo & Name */}
              <div className="col mb-4">
                <h6 className="text-uppercase fw-bold mb-2 mt-4">
                  <i className="fas fa-gem me-2"></i>Shiva Sand Cast
                </h6>
                <img
                  src="/imgs/logo.jpg"
                  style={{ width: "180px", height: "150px", marginTop: "20px" }}
                  alt="logo"
                />
              </div>

              {/* Contact */}
              <div className="col mt-4">
                <h6 className="text-uppercase fw-bold mb-3">
                  <i className="fa fa-user me-2" aria-hidden="true"></i>Contact
                </h6>
                <p>
                  <i className="fa fa-map-pin me-2"></i>Survey No 64, Plot No 275<br />
                  Shyam Industrial Park - 2<br />
                  Bhavda Road, Bakrol Bujrang<br />
                  Ahmedabad - 382430
                </p>
                <p>
                  <i className="fa fa-envelope me-2" aria-hidden="true"></i>
                  <a href="mailto:shivasandcast@gmail.com?subject=Enquiry&body=Hello">
                    shivasandcast@gmail.com
                  </a>
                </p>
                <p>
                  <i className="fa fa-phone me-2" aria-hidden="true"></i>+91 82007 21928<br />
                  <i className="fa fa-phone me-2" aria-hidden="true"></i>+91 95585 21521<br />
                  <i className="fa fa-phone me-2" aria-hidden="true"></i>+91 96246 50037
                </p>
              </div>

              {/* Google Map */}
              <div className="col mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3672.9931057934245!2d72.74552!3d22.987281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDU5JzE0LjIiTiA3MsKwNDQnNDMuOSJF!5e0!3m2!1sen!2sin!4v1744700448301!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shiva Sand Cast Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Bottom Bar */}
        <div className="text-center p-2 text-white" style={{ backgroundColor: "rgba(0,0,0,0.6)", fontWeight: "bold" }}>
          © 2025 Shiva Sand Cast | Managed by :
        </div>
      </footer>
    </section>
  );
};

export default Footer;
