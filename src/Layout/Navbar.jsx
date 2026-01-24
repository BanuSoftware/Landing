import Logo from "../Assets/Images/Logo.svg";
const Navbar = ({ onContactClick }) => {
  return (
    <nav className="flex items-center justify-between w-[95%] h-[37px] mx-auto  font-indivisible">
      
      {/* Logo */}
      <div>
        <img
          src={Logo}
          alt="Logo"
          className="h-6 w-auto"
        />
      </div>
      
      {/* Links */}
      <ul className="flex items-center gap-4 list-none text-white">
        <li>
          <a href="#home" className="no-underline">
            Servicios
          </a>
        </li>

        <li>
          <a href="#services" className="no-underline">
            Proyectos
          </a>
        </li>

        <li>
          <a href="#aboutus" className="no-underline">
            Nosotros
          </a>
        </li>

        {/* Botón */}
        <li>
          <button
            onClick={onContactClick}
            className="flex items-center justify-center w-[123px] h-[26px] border border-white rounded-lg text-white no-underline bg-transparent cursor-pointer hover:bg-white hover:text-black transition-colors"
          >
            Contáctanos
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;