import axios from 'axios';

const Auth = {
    isAuthenticated: false,
    authenticate(cb) {
      /*
       * LOGIN
       */

      // Call API
      axios.post('http://localhost:8000/api/login', {
        email: 'email',
        password: 'password'
      })
      .then(function (response) {
        const data = response.data;
        // Save token
        localStorage.setItem('token', data.access_token);
        
        this.isAuthenticated = true;
        setTimeout(cb, 100);
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
    },
    signout(cb) {
      /*
       * LOGOUT
       */
      
      const token = localStorage.getItem('token');
  
      // Call API
      axios.post('http://localhost:8000/api/logout', {
        token: token
      })
      .finally(function (response) {
        // Remove token
        localStorage.removeItem('token');
  
        this.isAuthenticated = false;
        setTimeout(cb, 100);
      }.bind(this));
    },
    removeToken() {
      const token = localStorage.getItem('token');
      // Remove token
      if (token) {
        localStorage.removeItem('token');
      }
      
      // Redirect ...
      window.location = '/';
    }
  };
  export default Auth;