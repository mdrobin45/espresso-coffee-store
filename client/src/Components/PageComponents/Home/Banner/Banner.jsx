import icon1 from "../../../../assets/icons/1.png";
import icon2 from "../../../../assets/icons/2.png";
import icon3 from "../../../../assets/icons/3.png";
import icon4 from "../../../../assets/icons/4.png";
import banner from "../../../../assets/images/banner.png";

const Banner = () => {
   return (
      <>
         <div
            style={{
               backgroundImage: `linear-gradient(0deg, rgba(58, 46, 46, 0.3), rgba(58, 46, 46, 0.3)), url(${banner})`,
               backgroundPosition: "center center",
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
            }}
            className="flex px-7 md:px-10 lg:px-20 flex-col md:flex-row items-center justify-between py-28">
            <div className="w-2/4"></div>
            <div className="w-2/4">
               <h2 className="text-4xl font-bold font-primary py-3 text-white">
                  Would you like a Cup of Delicious Coffee?
               </h2>
               <p className="text-white py-3">
                  It is coffee time - Sip & Savor - Relaxation in every sip! Get
                  the nostalgia back!! Your companion of every moment!!! Enjoy
                  the beautiful moments and make them memorable.
               </p>
               <button className="bg-[#E3B577] py-2 my-3 px-4 font-primary text-lg">
                  Learn More
               </button>
            </div>
         </div>
         <div className="grid px-7 md:px-10 lg:px-20 grid-cols-2 md:grid-cols-4 bg-secondary py-6">
            <QualityCard
               name="Awesome Aroma"
               img={icon1}
               des="You will definitely be a fan of the design & aroma of your coffee"
            />
            <QualityCard
               name="High Quality"
               img={icon2}
               des="You will definitely be a fan of the design & aroma of your coffee"
            />
            <QualityCard
               name="Pure Grades"
               img={icon3}
               des="You will definitely be a fan of the design & aroma of your coffee"
            />
            <QualityCard
               name="Proper Roasting"
               img={icon4}
               des="You will definitely be a fan of the design & aroma of your coffee"
            />
         </div>
      </>
   );
};

export default Banner;

// coffee quality card
const QualityCard = ({ name, img, des }) => {
   return (
      <div className="text-center">
         <img className="mx-auto" src={img} alt="Img" />
         <h2 className="text-2xl my-1 text-primary font-primary">{name}</h2>
         <p className="text-gray-700">{des}</p>
      </div>
   );
};
