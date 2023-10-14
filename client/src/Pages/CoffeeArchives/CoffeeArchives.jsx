import { Outlet } from "react-router-dom";

const CoffeeArchives = () => {
   return (
      <div>
         <h2>Coffee Archives</h2>
         <Outlet />
      </div>
   );
};

export default CoffeeArchives;
