import React from "react";
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus" style={{marginTop: '70px', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
        <div className="col-md-7 " style={{paddingTop:"50px"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7194.968014491414!2d88.128334!3d25.622057!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fad4e19180d31d%3A0xb23052e2e058006c!2sMohanbati%20Rd%2C%20Raiganj%2C%20West%20Bengal%20733134%2C%20India!5e0!3m2!1sen!2sus!4v1684773951849!5m2!1sen!2sus" width="750" height="350" style={{border:"1px solid black"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="col-md-4">
          <h1 className="bg-success p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2" style={{fontFamily:'cursive'}}>
          We welcome inquiries from potential business partners and clients. Please use the contact details below to get in touch with us
          </p>
          <p className="mt-3">
            <BiMailSend /> : <a style={{textDecoration:'none'}} href="mailto:chapduaragro@gmail.com">chapduaragro@gmail.com</a>
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : <a style={{textDecoration:'none'}} href="tel:9123392716">9123392716</a>
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
      <div style={{position:'relative'}}><WhatsAppWidget position='left' message='How can I help You?' phoneNumber="9123392716" /></div>
    </Layout>
  );
};

export default Contact;
