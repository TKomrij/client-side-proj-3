import React from 'react'
import "./Profile.css"
import {withRouter} from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

import Auth from '../auth/Auth'
var auth = new Auth()


class Profile extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      user: ''
    }
  }

  componentDidMount() {
   
    const isLogged = auth.getUser()
    if(isLogged === "You need to log in first" ){
      auth.setUser(this.props.location.state)
    }
    else if(this.props.location.state && (isLogged === null||isLogged === undefined)){
      auth.setUser(this.props.location.state) 
    }
    else if(!this.props.location.state && isLogged === undefined){
      auth.setUser("You need to log in first")
    }
    else{
      const user = auth.getUser()
      this.setState({user})
    }
    
  }

  render(){
    return (
      <MainLayout>
        <div className="Profile">
          <div className="picName">
            <img src="./img/clink.webp" alt="clink-glasses"></img>
            <div className="column">
                {this.props.location.state? this.props.location.state : this.state.user}
            </div>
          </div>
          <div className="bottomHalf">
            <h2>Favorites</h2>
            <div className="favs">
              <hr></hr>
            </div>
          </div>  
        </div>
      </MainLayout>
      
       
     
    )
  }
  
}
export default withRouter(Profile);