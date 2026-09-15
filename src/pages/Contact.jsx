import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-container">

        <div className="contact-heading">
          <h1>Contact Us</h1>
          <p>
            Have a question? We are here to help.
          </p>
        </div>


        <div className="contact-content">


          <div className="contact-info">

            <h2>Get In Touch</h2>

            <p className="contact-text">
              Whether you have a question about your order,
              our menu, or anything else, feel free to contact us.
            </p>


            <div className="contact-box">

              <div className="contact-icon">
                📞
              </div>

              <div>
                <h3>Phone</h3>
                <p>+91 98765 00000</p>
              </div>

            </div>


            <div className="contact-box">

              <div className="contact-icon">
                ✉️
              </div>

              <div>
                <h3>Email</h3>
                <p>support@crevio.example</p>
              </div>

            </div>


            <div className="contact-box">

              <div className="contact-icon">
                📍
              </div>

              <div>
                <h3>Address</h3>
                <p>
                  Crevio Food Services,<br />
                  Civil Lines, Satna,<br />
                  Madhya Pradesh, India
                </p>
              </div>

            </div>


            <div className="contact-box">

              <div className="contact-icon">
                🕐
              </div>

              <div>
                <h3>Working Hours</h3>
                <p>
                  Monday - Sunday<br />
                  10:00 AM - 11:00 PM
                </p>
              </div>

            </div>

          </div>

          <div className="contact-form">

            <h2>Send Us A Message</h2>

            <form>

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Your Email"
              />

              <input
                type="text"
                placeholder="Phone Number"
              />

              <textarea
                placeholder="Write your message..."
              ></textarea>

              <button type="button">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;