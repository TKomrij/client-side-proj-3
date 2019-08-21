import axios from "axios";
import qs from "querystring";

export default class Auth {
  constructor(domain) {
      
      this.domain = domain || process.env.REACT_APP_API;
      this.login = this.login.bind(this);
  }

  login(username, password) {
      
      return axios({
          method: "POST",
          url: "/auth/login",
          baseURL: this.domain,
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          data: qs.stringify({username, password}),
      })
      .then((response)=> {
          
          this.setUser(response.data)
      })
  }

  signup({username, password, firstname, lastname, email}) {
    
      return axios({
          method: "POST",
          url: "/auth/signup",
          baseURL: this.domain,
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          data: qs.stringify({username, firstname, lastname, password, email}),
      })
      .then((response)=> {
          
          this.setUser(response.data);
      })
  }

  loggedIn(){
      const user = this.getUser()
      return user? true : false; 
  }

  setUser(user){
      localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(){
    //   return JSON.parse(localStorage.getItem('user'));
    return localStorage.getItem('user')
  }

  logout(){
     return axios({
        method: "POST",
          baseURL: this.domain,
          url: "/logout"
      })
      .then((res)=> {
          localStorage.removeItem('user');
      })
      .catch(err=> console.log(err))
  }    
}