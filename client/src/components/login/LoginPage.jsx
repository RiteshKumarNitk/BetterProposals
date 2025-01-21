import { User, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LoginPage() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const predefinedUser = { username: 'admin', password: 'password123' };
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (
      credentials.username === predefinedUser.username &&
      credentials.password === predefinedUser.password
    ) {
      navigate('/dashboard');
    } else {
      setError('Invalid username or password.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="hidden md:flex w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}></div>

      {/* Login Form Section */}
      <div className="flex w-full md:w-1/2 justify-center items-center bg-white">
        <div className="max-w-md w-full space-y-6 p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Welcome Back</h2>
          <p className="text-gray-600 text-center">Login to your account</p>

          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
              <div className="flex items-center border border-gray-300 rounded-lg p-2 mt-1">
                <User size={20} className="text-gray-500" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  value={credentials.username}
                  onChange={handleChange}
                  className="w-full bg-transparent text-gray-800 outline-none pl-3"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
              <div className="flex items-center border border-gray-300 rounded-lg p-2 mt-1">
                <Lock size={20} className="text-gray-500" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={handleChange}
                  className="w-full bg-transparent text-gray-800 outline-none pl-3"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-gray-600 text-center mt-6">
            Forgot your password?{' '}
            <a href="#" className="text-indigo-600 hover:underline">Click here</a>
          </p>

          <p className="text-sm text-gray-600 text-center">
            Don’t have an account?{' '}
            <a href="#" className="text-indigo-600 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
