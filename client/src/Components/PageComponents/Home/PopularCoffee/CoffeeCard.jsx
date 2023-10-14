import { AiFillEye } from "react-icons/ai";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
   const { _id, name, chef, price, photo } = coffee;

   // Delete coffee
   const handleDelete = () => {
      fetch(`http://localhost:3000/coffee/delete/${_id}`, {
         method: "DELETE",
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.deletedCount > 0) {
               alert("Coffee deleted");
               const remaining = coffees.filter((cof) => cof._id !== _id);
               setCoffees(remaining);
            } else {
               alert("Something went wrong");
            }
         });
   };
   return (
      <div className="bg-secondary py-6 rounded-md flex items-center justify-between">
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
               <strong className="text-primary">Price:</strong> {price} TK
            </p>
         </div>
         <div className="flex w-3/12 flex-col items-center justify-center gap-4">
            <Link
               to={`/coffee/view/${_id}`}
               className="bg-[#D2B48C] p-2 rounded-md">
               <AiFillEye className="text-xl text-white" />
            </Link>
            <Link
               to={`/coffee/edit/${_id}`}
               className="bg-primary p-2 rounded-md">
               <BiSolidPencil className="text-xl text-white" />
            </Link>
            <button
               onClick={handleDelete}
               className="bg-red-600 p-2 rounded-md">
               <MdDelete className="text-xl text-white" />
            </button>
         </div>
      </div>
   );
};

export default CoffeeCard;
