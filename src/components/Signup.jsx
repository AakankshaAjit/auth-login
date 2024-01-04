import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';

const Signup = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      // Simulating authentication - replace with your actual authentication logic
      if (email === 'user@example.com' && password === 'password') {
        setIsLoggedIn(true);
        setError('');
        localStorage.setItem('user', JSON.stringify({ email }));
        history.push('/Next'); // Navigate to '/dashboard' after successful login
      } else {
        setError('Invalid email or password');
      }
    };
  
    const handleLogout = () => {
      setIsLoggedIn(false);
      setEmail('');
      setPassword('');
      localStorage.removeItem('user');
    };
  
    return (
      <div>
        {isLoggedIn ? (
          <div>
            <h2>Welcome, {email}!</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <h2>Sign In</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
              <label>Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    );
  };
  

export default Signup