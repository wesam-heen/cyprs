import React from "react";
import "./contactUs.css";
import {
  IoCallOutline,
  IoLogoWhatsapp,
  IoLocationOutline,
} from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
const ContactUs = () => {
  return (
    <>
      <div className="contact-us" id="ContactUs">
        <div className="row">
          <div className="col-xl-6">
            <div className="box1-contact-us">
              <h2>Contact Us</h2>
              <p>
                Do you have a Comment or Message and would like to communicate
                with the work team?
              </p>
              <div className="info-form-computer">
                <div>
                  <a href="https://www.google.com/maps/place/The+Burlington+Tower/@25.1850035,55.2645222,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f697129e73c31:0x689d4a578720d6aa!8m2!3d25.1850035!4d55.2645222">
                    <IoLocationOutline className="fs-2 me-1" />{" "}
                    <span>Office 2209, The Burlington Tower, Dubai, UAE</span>
                  </a>
                </div>
                <div>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@avioncitizenship.com">
                    <HiOutlineMail className="fs-2 me-1" />
                    <span>info@avioncitizenship.com</span>
                  </a>
                </div>
                <div>
                  <a href="tel:+97143289890">
                    <IoCallOutline className="fs-2 me-1" />{" "}
                    <span>+97143289890</span>
                  </a>
                </div>
                <div>
                  <a href="https://wa.me/00971502678688?text=I'm%20interested%20to%20communicate%20with%20the%20work%20team">
                    <IoLogoWhatsapp className="fs-2 me-1" />{" "}
                    <span>+971502678688</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="box2-contact-us">
              <h2>Fill in the following fields</h2>
              <div className="form">
                <form action="contact.php" method="post">
                  <div className="row">
                    <div className="col-xl-6">
                      <label>First Name</label>
                      <input type="text" name="firstName" required />
                      <label>Email</label>
                      <input type="text" name="email" required />
                      <label>Nationality</label>
                      <input type="text" name="nationality" required />
                    </div>
                    <div className="col-xl-6">
                      <label>Last Name</label>
                      <input type="text" name="lastName" required />
                      <label>Phone Number</label>
                      <input type="text" name="phone" required />
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <label>Comment or Message</label>
                        <textarea name="message" required />
                        <input type="submit" value="Send"></input>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
