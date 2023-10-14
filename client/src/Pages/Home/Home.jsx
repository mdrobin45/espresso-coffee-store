import Banner from "../../Components/PageComponents/Home/Banner/Banner";
import InstagramFeed from "../../Components/PageComponents/Home/InstagramFeed/InstagramFeed";
import PopularCoffee from "../../Components/PageComponents/Home/PopularCoffee/PopularCoffee";
import SiteTitle from "../../Components/SiteTitle/SiteTitle";

const Home = () => {
   return (
      <section className="pb-16">
         <SiteTitle>Home</SiteTitle>
         <Banner />
         <div className="px-7 md:px-10 lg:px-20">
            <PopularCoffee />
            <InstagramFeed />
         </div>
      </section>
   );
};

export default Home;
