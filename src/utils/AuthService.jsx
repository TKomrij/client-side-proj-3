import axios from 'axios';
import qs from 'querystring';

class AuthService {
  constructor(domain) {
    this.domain = domain || process.env.REACT_APP_API
  }

  signup({firstname, lastname, email, password}) {
    
    return axios({
      method: "POST",
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      baseURL: `${process.env.REACT_APP_API}`, 
      url: '/signup', 
      data: qs.stringify({
        firstname,
        lastname,
        email,
        password
      })
    })
    .then((responseFromApi) => {
      
          this.setUser(responseFromApi);

    })
    .catch(err => console.log('err' + err));
  }

  login({email, password}) {
    
    return axios({
      method: "POST",
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      baseURL: `${process.env.REACT_APP_API}`, 
      url: '/login', 
      data: qs.stringify({
        email,
        password
      }),
    })
    .then((responseFromApi) => {
      
      this.setUser(responseFromApi);
    })
    .catch(err => console.log('err' + err));
  }

  logout() {
    return axios({
      method: "POST",
      baseURL: this.domain,
      url: '/logout'
    })
    .then( ()=> {
      
      localStorage.removeItem('user');
    })
    .catch(err => console.log('err' + err));
  }

  //------------//
  setUser(user) {
    
    localStorage.setItem('user', JSON.stringify(user.data));
  }

  getUser() {
    
    return JSON.parse(localStorage.getItem('user'));
  }

  loggedIn() {
    const user = this.getUser()
    return !!user;
  }
}
 
export default AuthService;