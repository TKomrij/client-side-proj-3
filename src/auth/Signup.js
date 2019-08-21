import React, {Component} from 'react';
import AuthService from '../utils/AuthService';
import {
    Container,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

import "./Signup.css";

const auth = new AuthService()



class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {

            user: {
                firstname: null,
                lastname: null,
                email: null,
                password: null,
              
            },
            succesMessage: null,
            errorMessage: null,
        };
    };
    handleFormChange = (e) => {
  
        const user = {
            ...this.state.user
        };
        user[e.target.name] = e.target.value;
        this.setState({user});
    };

    handleFormSubmit = (e) => {
        
        e.preventDefault();

        auth.signup(this.state.user)
        .then(() => {
            
            this.props.history.push('/login')
        })
        .catch(err => console.log('err' + err))

    };
    render() {
     
        return (
            <div className="everything2">
                <Container className="Signup">
                        <div className="row">
                            <h2>Sign Up</h2>
                            <img src="./img/cocktail.webp" alt="cocktail"></img>
                        </div>
                        <Form className="form" onSubmit={this.handleFormSubmit}>
                            <Col>
                                <FormGroup className="formGroup">
                                    <Label>Firstname:</Label>
                                    <Input
                                        type="text"
                                        name="firstname"
                                        id="John"
                                        placeholder="John"
                                        value={this.state.user.firstname}
                                        onChange={this.handleFormChange}/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup className="formGroup">
                                    <Label>Lastname:</Label>
                                    <Input
                                        type="text"
                                        name="lastname"
                                        id="Doe"
                                        placeholder="Doe"
                                        value={this.state.user.lastname}
                                        onChange={this.handleFormChange}/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup className="formGroup">
                                    <Label>Email:</Label>
                                    <Input
                                        type="text"
                                        name="email"
                                        id="exampleEmail"
                                        placeholder="myemail@email.com"
                                        value={this.state.user.email}
                                        onChange={this.handleFormChange}/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup className="formGroup">
                                    <Label for="examplePassword">Password:</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="examplePassword"
                                        placeholder="********"
                                        value={this.state.user.password}
                                        onChange={this.handleFormChange}/>
                                </FormGroup>
                            </Col>
                            <div className="btn">
                                <Button type="submit">Submit</Button>
                            </div>
                        </Form>
                </Container>
            </div>    
        )   
    }
}
export default SignUp;