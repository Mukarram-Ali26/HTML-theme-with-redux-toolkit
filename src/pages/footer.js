import React from 'react'
// import ReactWhatsapp from 'react-whatsapp';
import './footer.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faYoutube,
//   faFacebook,
//   faTwitter,
//   faInstagram
// } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <div>
            {/* <!-- Footer Section --> */}
            <div id="footer">
                    <div className="container text-center">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="social"> 
                                <ul>
                                    <li><a href="https://www.facebook.com/learnbuildteach/"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="https://www.twitter.com/jamesqquick"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    {/* <li><a href="#"><i className="fa fa-watsapp">
                                        <ReactWhatsapp number="+" message="Hello World!!!" element="button" />
                                        </i></a></li> */}
                                </ul>
                            </div>
                            <p>&copy; 2016 Landscaper. Designed by <a href="http://www.templatewire.com" rel="nofollow">TemplateWire</a></p>
                        </div>
                    </div>
                </div>
        </div>
    )
}
/*import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <h3>@LearnBuildTeach</h3>
      <a
        href="https://www.youtube.com/c/jamesqquick"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/learnbuildteach/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/learnbuildteach"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div> */