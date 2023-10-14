import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import InputField from "../../Components/FormFields/inputField";

const AddNewCoffee = () => {
   const [formData, setFormData] = useState({
      name: "",
      chef: "",
      supplier: "",
      taste: "",
      category: "",
      details: "",
      photo: "",
      price: "",
   });

   // Form data collect
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   // Handle submit form
   const handleSubmit = (e) => {
      e.preventDefault();

      // Send form data to server
      fetch("http://localhost:3000/coffee/new", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.insertedId) {
               alert("Coffee Added");
            } else {
               alert("Something went wrong");
            }
         });
   };
   return (
      <>
         <div className="w-3/4 mt-20 mx-auto">
            <Link
               to="/"
               className="flex items-center gap-2 font-primary text-2xl">
               <BsArrowLeft /> <span>Back to Home</span>
            </Link>
         </div>

         <div className="w-3/4 mb-20 mt-10 bg-secondary mx-auto">
            <div className="w-3/4 text-center mx-auto py-6">
               <h2 className="text-4xl pb-2   font-primary text-primary">
                  Add New Coffee
               </h2>
               <p className="text-gray-700">
                  It is a long established fact that a reader will be
                  distraceted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using Content here.
               </p>
            </div>
            <form
               onSubmit={handleSubmit}
               onChange={handleChange}
               className="p-10 flex flex-col gap-y-7">
               <div className="flex items-center justify-between w-full gap-3">
                  <InputField
                     name="name"
                     type="text"
                     placeholder="Enter coffee name"
                     label="Name"
                  />
                  <InputField
                     name="price"
                     type="text"
                     placeholder="Enter coffee price"
                     label="Price"
                  />
               </div>
               <div className="flex items-center justify-between w-full gap-3">
                  <InputField
                     name="supplier"
                     type="text"
                     placeholder="Enter coffee supplier"
                     label="Supplier"
                  />
                  <InputField
                     name="taste"
                     type="text"
                     placeholder="Enter coffee taste"
                     label="Taste"
                  />
               </div>
               <div className="flex items-center justify-between w-full gap-3">
                  <InputField
                     name="category"
                     type="text"
                     placeholder="Enter coffee category"
                     label="Category"
                  />
                  <InputField
                     name="details"
                     type="text"
                     placeholder="Enter coffee details"
                     label="Details"
                  />
               </div>
               <div className="flex items-center justify-between w-full gap-3">
                  <InputField
                     name="chef"
                     type="text"
                     placeholder="Enter chef name"
                     label="Chef"
                  />
                  <InputField
                     name="photo"
                     type="text"
                     placeholder="Enter photo URL"
                     label="Photo"
                  />
               </div>

               <input
                  className="bg-[#D2B48C] font-primary text-xl py-2 cursor-pointer rounded-md"
                  type="submit"
                  value="Add Coffee"
               />
            </form>
         </div>
      </>
   );
};

export default AddNewCoffee;
