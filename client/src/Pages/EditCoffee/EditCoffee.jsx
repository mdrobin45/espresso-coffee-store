import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData, useParams } from "react-router-dom";
import InputField from "../../Components/FormFields/inputField";

const EditCoffee = () => {
   const { id } = useParams();
   const coffee = useLoaderData();
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

   useEffect(() => {
      setFormData({
         name: coffee.name,
         chef: coffee.chef,
         supplier: coffee.supplier,
         taste: coffee.taste,
         category: coffee.category,
         details: coffee.details,
         photo: coffee.photo,
         price: coffee.price,
      });
   }, [coffee]);

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
      fetch(`http://localhost:3000/coffee/update/${id}`, {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.modifiedCount > 0) {
               alert("Coffee Updated");
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
               className="p-10 flex flex-col gap-y-7">
               <div className="flex items-center justify-between w-full gap-3">
                  <InputField
                     onChange={handleChange}
                     name="name"
                     value={formData.name}
                     type="text"
                     placeholder="Enter coffee name"
                     label="Name"
                  />
                  <InputField
                     onChange={handleChange}
                     value={formData.price}
                     name="price"
                     type="text"
                     placeholder="Enter coffee price"
                     label="Price"
                  />
               </div>
               <div className="flex items-center justify-between w-full gap-3">
                  <InputField
                     onChange={handleChange}
                     value={formData.supplier}
                     name="supplier"
                     type="text"
                     placeholder="Enter coffee supplier"
                     label="Supplier"
                  />
                  <InputField
                     onChange={handleChange}
                     value={formData.taste}
                     name="taste"
                     type="text"
                     placeholder="Enter coffee taste"
                     label="Taste"
                  />
               </div>
               <div className="flex items-center justify-between w-full gap-3">
                  <InputField
                     onChange={handleChange}
                     value={formData.category}
                     name="category"
                     type="text"
                     placeholder="Enter coffee category"
                     label="Category"
                  />
                  <InputField
                     onChange={handleChange}
                     value={formData.details}
                     name="details"
                     type="text"
                     placeholder="Enter coffee details"
                     label="Details"
                  />
               </div>
               <div className="flex items-center justify-between w-full gap-3">
                  <InputField
                     onChange={handleChange}
                     value={formData.chef}
                     name="chef"
                     type="text"
                     placeholder="Enter chef name"
                     label="Chef"
                  />
                  <InputField
                     onChange={handleChange}
                     value={formData.photo}
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

export default EditCoffee;
