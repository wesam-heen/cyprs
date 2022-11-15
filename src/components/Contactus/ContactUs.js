import React from "react";
import "./contactUs.css";
import { IoCallOutline ,IoLogoWhatsapp ,IoLocationOutline} from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
const ContactUs = () => {
  return (
   <>
   
   <div className="contact-us" id='ContactUs'>
   <div className="row">
     <div className="col-md-6">
       <div className="box1-contact-us">
         <h2>Contact Us</h2>
         <p>
           Do you have a Comment or Message and would like to communicate
           with the work team?
         </p>
         <div className="info-form-computer">
           <div>
             <IoLocationOutline className="fs-2 me-1"/> <span>Office 2209, The Burlington Tower, Dubai, UAE</span>
           </div>
           <div>
             <HiOutlineMail className="fs-2 me-1"/> <span>info@avioncitizenship.com</span>
           </div>
           <div>
             <IoCallOutline className="fs-2 me-1"/> <span>+97143289890</span>
           </div>
           <div>
             <IoLogoWhatsapp className="fs-2 me-1"/> <span>+971502678688</span>
           </div>
         </div>
       </div>
     </div>
     <div className="col-md-6">
       <div className="box2-contact-us">
         <h2>Fill in the following fields</h2>
         <div className="form">
           <form action="">
             <div className="row">
               <div className="col-md-6">
                 <label>First Name</label>
                 <input type="text" />
                 <label>Email</label>
                 <input type="text" />
                 <label>Nationality</label>
                 <input type="text" />
               </div>
               <div className="col-md-6">
                 <label>Last Name</label>
                 <input type="text" />
                 <label>Phone Number</label>
                 <input type="text" />
                 <label>Phone Number</label>
                 <input type="text" />
               </div>
               <div className="row">
                 <div className="col-12">
                   <label>Comment or Message</label>
                   <textarea />
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
