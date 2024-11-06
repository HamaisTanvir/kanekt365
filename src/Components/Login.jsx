import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();
      localStorage.setItem('authToken', token);
      setIsAuthenticated(true);
      console.log('Logged in:', userCredential.user);
      navigate('/');
    } catch (err) {
      setError(err.message);
      console.error("Error logging in", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1A293F]">
      <form onSubmit={handleLogin} className="bg-gray-900 p-16 rounded-xl shadow-xl max-w-[400px] text-center">
        <h2 className="text-2xl font-semibold text-center mb-6 text-[orange]">Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-72 px-3 py-2 mb-5 border-cyan-500 text-[orange] placeholder:text-cyan-500 rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-cyan-500"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-72 px-3 py-2 mb-8 border-cyan-500 text-[orange] placeholder:text-cyan-600 rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-cyan-500"
          required
        />
        <button type="submit" className="w-36 border-t-2 border-l-2 border-cyan-500 text-[orange] py-2 rounded-md">
          Login
        </button>
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default Login
