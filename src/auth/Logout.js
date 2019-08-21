import React, {Component} from 'react'
import "./Logout.css"
import AuthService from '../utils/AuthService';
import MainLayout from '../layout/MainLayout';

const auth = new AuthService();
class Logout extends Component {
  state = { 
    error: null
   }

   componentDidMount() {
     
    auth.logout()
    .then(() => {
      
      this.props.history.push('/');
    })
    .catch(err => {
      this.setState({
        error: err.message
      })
    });
  }
  
  render() { 
    return ( 
      <MainLayout>
        {this.state.error ?
          <h2>{this.state.error}</h2>
          :
          <h2>We are now logging out</h2>
        }
      
      </MainLayout>
    );
  }
}
 
export default Logout;
