// import React from "react";
// import '../styles/about.css';
// import Layout from "../components/Layout/Layout";

// const About = () => {
//   return (
//     <Layout title={"About us - Ecommer app"}>
//        <div className="about">
//         <h1>About Us</h1>
        
//       <div className="about-container">
//       <div className="welcome-message">
//         <h1>Welcome to Our Page</h1>
//         </div>
//         <div className="about-image"></div>
//         <div className="about-content">
            
//             <p>CHAPDUAR AGRO AND FOOD PRIVATE LIMITED is a Private Company, Which CIN Number is U15490WB2020PTC241863 , was incorporated 2 Year(s) 5 Month(s) 3 Day(s) ago on dated 09-Dec-2020 . CHAPDUAR AGRO AND FOOD PRIVATE LIMITED is classified as Non-govt company and is registered at Registrar of Companies located in ROC-KOLKATA. As regarding the financial status on the time of registration of CHAPDUAR AGRO AND FOOD PRIVATE LIMITED Company its authorized share capital is Rs. 10000000 and its paid up capital is Rs. 2500000. As Per Registration of Company, It involves under in Business Activity Class / Subclass Code 15490, Main Activity of the said Company CHAPDUAR AGRO AND FOOD PRIVATE LIMITED is : , Manufacture of other food products n.e.c, It Comes Under Division MANUFACTURE OF FOOD PRODUCTS AND BEVERAGES and this come under scetion MANUFACTURING.</p>
//         </div>
//         </div>

     
//     </div>
//     </Layout>
//   );
// };

// export default About;
import React from "react";
import "../styles/about.css";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="about">
        <h1 className="about-heading">About Us</h1>

        <div className="about-container">
          <div className="welcome-message">
            <h1 className="welcome-heading">"Baking Happiness: Where Every Crumb Tells a Story"</h1>
          </div>
          <div className="about-image"></div>
          <div className="about-content">
            <div className="about-description" style={{fontSize:'24px', fontFamily:'revert'}}>
              CHAPDUAR AGRO AND FOOD PRIVATE LIMITED is a Private Company
              registered as a Non-govt company with CIN Number U15490WB2020PTC241863.
              It was incorporated on 09-Dec-2020 and is located in ROC-KOLKATA.
              The company is engaged in the manufacturing of other food products
              and beverages. It falls under the category of Manufacturing, with
              an authorized share capital of Rs. 10,000,000 and a paid-up capital
              of Rs. 2,500,000.
            </div>
            <p className="founder" style={{fontSize:'32px', fontFamily:'inherit'}}>Founder: Mr. Aniruddha Dey</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;


