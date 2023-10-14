import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SectionHeader from "../../../SectionHeader/SectionHeader";
import CoffeeCard from "./CoffeeCard";

const PopularCoffee = () => {
   const allCoffee = useLoaderData();
   const [coffees, setCoffees] = useState(allCoffee);
   const sliceCoffee = coffees.slice(0, 6);

   return (
      <div>
         <SectionHeader
            button={true}
            heading="Popular COffee"
            subHeading="--- Sip & Savor ---"
         />
         <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {sliceCoffee.map((coffee) => (
               <CoffeeCard
                  key={coffee._id}
                  coffee={coffee}
                  coffees={coffees}
                  setCoffees={setCoffees}
               />
            ))}
         </section>
      </div>
   );
};

export default PopularCoffee;
