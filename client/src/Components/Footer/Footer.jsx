import {
   BsEnvelope,
   BsFacebook,
   BsInstagram,
   BsLinkedin,
   BsTelephone,
   BsTwitter,
} from "react-icons/bs";
import { PiMapPin } from "react-icons/pi";
import logoIcon from "../../assets/images/logo-icon.png";

const Footer = () => {
   return (
      <div className=" bg-secondary ">
         <div className="px-7 md:px-10 lg:px-20 py-16 flex flex-col md:flex-row items-center justify-between">
            <div className="w-2/4">
               <img src={logoIcon} alt="Logo Icon" />
               <h2 className="text-4xl py-3 font-primary text-primary">
                  Espresso Emporium
               </h2>
               <p className="text-gray-700">
                  Always ready to be your friend. Come & Contact with us to
                  share your memorable moments, to share with your best
                  companion.
               </p>
               <div className="flex pt-3 items-center gap-4">
                  <a className="text-xl" href="#">
                     <BsFacebook />
                  </a>
                  <a className="text-xl" href="#">
                     <BsTwitter />
                  </a>
                  <a className="text-xl" href="#">
                     <BsInstagram />
                  </a>
                  <a className="text-xl" href="#">
                     <BsLinkedin />
                  </a>
               </div>
            </div>
            <div className="2/4">
               <h2 className="text-4xl py-3 font-primary text-primary">
                  Get In Touch
               </h2>
               <p className="flex items-center gap-2">
                  <BsTelephone /> <span>+88 01533 333 333</span>
               </p>
               <p className="flex items-center gap-2 py-3">
                  <BsEnvelope /> <span>info@gmail.com</span>
               </p>
               <p className="flex items-center gap-2">
                  <PiMapPin /> <span>72, Wall street, King Road, Dhaka</span>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Footer;
