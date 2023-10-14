import logo from "../../assets/images/logo.png";

const Header = () => {
   return (
      <div className="py-4 bg-primary">
         <img className="mx-auto" src={logo} alt="Logo" />
      </div>
   );
};

export default Header;
