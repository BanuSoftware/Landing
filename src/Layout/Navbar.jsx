import Logo from "../Assets/Images/Logo.svg";
const Navbar = ({ onContactClick }) => {
  return (
    <nav className="flex items-center justify-between w-[95%] h-9.25 mx-auto  font-indivisible">
      
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
        <li className='hover:underline cursor-pointer'>
          <a href="#Proyectos">Proyectos</a>
        </li>

        <li className='hover:underline cursor-pointer'>
          <a href="#Servicios">Servicios</a>
        </li>
        <li className='hover:underline cursor-pointer'>
          <a href="#Procesos">Proceso</a>
        </li>

        {/* Botón */}
        <li>
          <button
            onClick={onContactClick}
            className="flex items-center justify-center w-30.75 h-6.5 border border-white rounded-lg text-white no-underline bg-transparent cursor-pointer hover:bg-white hover:text-black transition-colors"
          >
            Contáctanos
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;