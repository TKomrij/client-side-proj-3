import React, { Component } from 'react'
import { Link } from "react-router-dom"
import AuthService from '../utils/AuthService';
import "./Login.css";
import { Container, Col, Form, FormGroup, Label, Input, Button,
} from 'reactstrap';

const auth = new AuthService();





class Login extends Component {
    constructor(props) {
      super (props)

      this.state = {
        profile: {
          email: "",
          password: "",
        },
          succesMessage: null,
          errorMessage: null,
          formValidated: false
      };
    };

    // validateForm() {
      
    //   return this.state.profile.email.length > 0 && this.state.profile.password.length < 4;
    // }

    handleFormChange = (e) => {
  
      const profile = {
      ...this.state.profile
    };
          profile[e.target.id] = e.target.value;
          this.setState({profile})
          // this.setState({profile: profile, formValidated: this.validateForm()})
          
        };
    
    handleFormSubmit = (e) => {
      e.preventDefault();
      
      auth.login(this.state.profile)
      
      .then(() => {
       
        this.props.history.push('/profile');
      })
      .catch(err =>   console.log('err' + err));
      
  };

      render() {
     
        return (
                  <div className="everything">
                    <Container className="Login">
                        <div className="row">
                            <h2>Login</h2>
                            <img src="./img/cocktail.webp" alt="cocktail"></img>
                        </div>
                        <Form onSubmit={this.handleFormSubmit}>
                            <Col>
                                <FormGroup className="formGroup">
                                    <Label>Email:</Label>
                                    <Input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="myemail@email.com"
                                        value={this.state.email}
                                        onChange={this.handleFormChange}/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup className="formGroup">
                                    <Label for="examplePassword">Password:</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="********"
                                        value={this.state.password}
                                        onChange={this.handleFormChange}/>
                                </FormGroup>
                            </Col>
                            <div className="btn">
                              <Button  type="submit">Submit</Button>
                            </div>
                            <p className="signup">or <Link to="/signup">signup</Link></p>
                        </Form>
                    </Container>
                  </div>

        )
    }
}

export default Login;
