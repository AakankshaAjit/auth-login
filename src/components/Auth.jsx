import React,{useState} from 'react'


export const Auth = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
  
    const hardcodedUser = {
      email: 'aakankshaajit6901@gmail.com',
      password: '123456',
    };
  
    const handleLogin = () => {
      // Check if the provided email and password match the hardcoded user
      if (email === hardcodedUser.email && password === hardcodedUser.password) {
        // Authentication successful
        setIsLoggedIn(true);
        setSuccessMessage('Successfully signed in!');
        console.log('Login successful');
      } else {
        // Authentication failed
        setIsLoggedIn(false);
        setSuccessMessage('');
        console.error('Invalid email or password');
        window.alert('Invalid email or password. Please try again.');
      }
    };
  
    const handleLogout = () => {
      // Log out the user
      setIsLoggedIn(false);
      setSuccessMessage('');
      setEmail('');
      setPassword('');
    };
    return (
       < div>
              {!isLoggedIn ? (
                // Show login form if not logged in
                <section  >
                <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 '>
                <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            class="w-14 h-14  mr-2"
            src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"
            alt="logo"
          />
        </a>
        <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 bg-green-300">
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex items-center justify-center">
              Sign in to your account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
            <div>
                  
                  
                    <label>Email:</label>
                    <input
                      type="email"
                      value={email}
                      id="email"
                      placeholder="enter your email"
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                    <div>

                    <label>Password:</label>
                    <input
                      type="password"
                      value={password}
                      id="email"
                      placeholder="enter your email"
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                    <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="remember"
                      class="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
                    <button type="button" onClick={handleLogin} className='ml-16 w-64 text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
                      Login
                    </button>
                    </form>
                    </div>
                    </div>
                  </div>
                  </section>
                
                
              ) : (
                // Show message and logout button if logged in
                <div>
                  <h2>Welcome, {email}!</h2>
                  {successMessage && <p>{successMessage}</p>}
                  <button type="button" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
            
          );
        };    

export default Auth;
