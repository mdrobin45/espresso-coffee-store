import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const ViewCoffeeDetails = () => {
   const coffee = useLoaderData();
   const { name, chef, price, photo } = coffee;
   return (
      <>
         <div className="w-3/4 mt-20 mx-auto">
            <Link
               to="/"
               className="flex items-center gap-2 font-primary text-2xl">
               <BsArrowLeft /> <span>Back to Home</span>
            </Link>
         </div>

         {!coffee ? (
            <span>Loading...</span>
         ) : (
            <div className="w-2/4 mb-20 mt-10 p-16 bg-secondary mx-auto">
               <div className="py-6 rounded-md flex items-center justify-center">
                  <div className="w-3/12">
                     <img src={photo} alt="Cup" />
                  </div>
                  <div>
                     <p className="text-gray-600">
                        <strong className="text-primary">Name:</strong> {name}
                     </p>
                     <p className="text-gray-600">
                        <strong className="text-primary">Chef:</strong> {chef}
                     </p>
                     <p className="text-gray-600">
                        <strong className="text-primary">Price:</strong> {price}{" "}
                        TK
                     </p>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export default ViewCoffeeDetails;
