import { Link } from "react-router-dom";

const SectionHeader = ({ heading, subHeading, button }) => {
   return (
      <div className="text-center pt-16">
         <h4 className="text-sm text-gray-700">{subHeading}</h4>
         <h2 className="text-4xl pb-2 font-primary text-primary">{heading}</h2>
         {button && (
            <Link
               to="/coffee/add-new"
               className="bg-[#E3B577] py-2 my-3 mb-12 inline-block px-4 font-primary text-lg">
               Add Coffee
            </Link>
         )}
      </div>
   );
};

export default SectionHeader;
