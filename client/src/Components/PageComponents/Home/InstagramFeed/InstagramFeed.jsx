import cup1 from "../../../../assets/cups/1.png";
import cup2 from "../../../../assets/cups/2.png";
import cup3 from "../../../../assets/cups/3.png";
import cup4 from "../../../../assets/cups/4.png";
import cup5 from "../../../../assets/cups/5.png";
import cup6 from "../../../../assets/cups/6.png";
import cup7 from "../../../../assets/cups/7.png";
import cup8 from "../../../../assets/cups/8.png";
import SectionHeader from "../../../SectionHeader/SectionHeader";

const InstagramFeed = () => {
   return (
      <div>
         <SectionHeader
            heading="Follow on Instagram"
            subHeading="Follow Us Now"
         />
         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            <img src={cup1} alt="Image" />
            <img src={cup2} alt="Image" />
            <img src={cup3} alt="Image" />
            <img src={cup4} alt="Image" />
            <img src={cup5} alt="Image" />
            <img src={cup6} alt="Image" />
            <img src={cup7} alt="Image" />
            <img src={cup8} alt="Image" />
         </section>
      </div>
   );
};

export default InstagramFeed;
