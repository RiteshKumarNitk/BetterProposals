import { ClipboardList, Bell, User, Droplet } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isRootPath = location.pathname === '/';
  const isLoginPath = location.pathname === '/login';
  const isSignupPath = location.pathname === '/signup';

  return (
    <header className="bg-white text-black sticky top-0 z-50 shadow-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>  
            <Droplet size={24} />
            <span className="text-xl font-bold">BetterProposals</span>
          </div>

          {/* Navigation Links (Hide if on root path `/`) */}
          {!isRootPath && !isLoginPath && !isSignupPath && (
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/profile" className="hover:text-gray-600 transition-colors duration-200">
                Profile
              </Link>
              <Link to="/dashboard" className="hover:text-gray-600 transition-colors duration-200">
                Dashboard
              </Link>
              <Link to="/surveys" className="hover:text-gray-600 transition-colors duration-200">
                Surveys
              </Link>
              <Link to="/reports" className="hover:text-gray-600 transition-colors duration-200">
                Reports
              </Link>
              <Link to="/user-survey" className="hover:text-gray-600 transition-colors duration-200">
                User Surveys
              </Link>
            </nav>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-200 focus:outline-none"
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle Menu</span>
            <ClipboardList size={24} />
          </button>

          {/* Notifications and Login/Signup */}
          {isRootPath && (
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-200 rounded-full">
                <Bell size={20} />
              </button>
              <button
                onClick={handleLoginClick}
                className="flex items-center space-x-2 bg-black text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-all duration-200"
              >
                <User size={20} />
                <span>Login</span>
              </button>
              <button
                onClick={handleSignUpClick}
                className="flex items-center space-x-2 bg-gray-800 text-white hover:bg-black px-3 py-2 rounded-lg transition-all duration-200"
              >
                <span>Sign up</span>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <nav className="md:hidden mt-4 space-y-2">
            <Link to="/profile" className="block px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200">
              Profile
            </Link>
            <Link to="/dashboard" className="block px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200">
              Dashboard
            </Link>
            <Link to="/surveys" className="block px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200">
              Surveys
            </Link>
            <Link to="/reports" className="block px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200">
              Reports
            </Link>
            <Link to="/user-survey" className="block px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200">
              User Surveys
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
