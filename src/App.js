import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
// import Nav from "./components/Nav";
import Home from "./pages/Home";
import Cocktails from "./pages/Cocktails";
// import DrinkDetails from "./pages/DrinkDetails";
import DrinkDetailTile from "./components/drinks/DrinkDetailTile";
import History from "./pages/History";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Profile from "./pages/Profile";
import axios from "axios";
import ProtectedRoute from './auth/ProtectedRoute';
import Logout from './auth/Logout';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        cocktails: []
      }
      // this.loadCocktails = this.loadCocktails.bind(this)
  }


  //  loadCocktails(){
  //     axios.get(`${process.env.REACT_APP_API}/cocktails`)
  //     .then(responseFromApi => {
  //       // console.log(responseFromApi.data)
  //       return responseFromApi.data
  //     })
  //     .catch(err => console.log('err' + err));
  //  } 

  componentDidMount(){
    axios.get(`${process.env.REACT_APP_API}/cocktails`)
    .then(responseFromApi => {

      this.setState({
        cocktails: responseFromApi.data
      });
    })
    .catch(err => console.log('err' + err));
  }

 render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>


          {/* <Route redirectUrl='/' exact path="/cocktails" render={(props)=> (
            <Cocktails {...props} cocktails={this.state.cocktails} />
          )}/> */}
          
          {/* <ProtectedRoute 
            redirectUrl='/' path="/drinkdetails/:id" render={(props) => 
              <DrinkDetailTile cocktails={this.state.cocktails} {...props}/>
          }/> */}

          <ProtectedRoute 
            cocktails={this.state.cocktails}
            redirectUrl='/login' 
            exact path="/cocktails" 
            component={Cocktails} 
          />
          )}/>
          <ProtectedRoute 
            cocktails={this.state.cocktails}
            redirectUrl='/login' 
            path="/drinkdetails/:id" 
            component={DrinkDetailTile}
          />
          }/>
          <ProtectedRoute 
            redirectUrl='/login' 
            exact path="/history" 
            component={History}/>

          <ProtectedRoute 
            redirectUrl='/login'  
            path="/profile" 
            component={Profile}
          />


          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/logout" component={Logout}/>

        </Switch>
      </div>
    )
  }
}

export default App;
