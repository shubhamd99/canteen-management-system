import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';
import Spinner from '../../../components/UI/Spinner/Spinner';
import './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';
import { updateObject, checkValidity } from '../../../shared/utility';

class ContactData extends Component {

    state = {
        orderForm: {

                name: {
                        elementType: 'input',
                        elementConfig: {
                            type: 'text',
                            placeholder: 'Your Name'
                        },
                        value: '',
                        validation: {
                            required: true,
                            minLength: 4
                          },
                          valid: false,
                          touched: false
                       },
                street: {
                            elementType: 'input',
                            elementConfig: {
                                type: 'text',
                                placeholder: 'Street'
                            },
                            value: '',
                            validation: {
                                required: true,
                                minLength: 5
                              },
                              valid: false,
                              touched: false
                        },
                zipCode: {
                            elementType: 'input',
                            elementConfig: {
                                type: 'text',
                                placeholder: 'Zip Code'
                            },
                            value: '',
                            validation: {
                                required: true,
                                minLength: 5,
                                maxLength: 8,
                                isNumeric: true
                              },
                              valid: false,
                              touched: false
                              
                              
                        },
                country: {
                            elementType: 'input',
                            elementConfig: {
                                type: 'text',
                                placeholder: 'Country'
                            },
                            value: '',
                            validation: {
                                required: true,
                                minLength: 2
                              },
                              valid: false,
                              touched: false
                        },
                email: {
                            elementType: 'input',
                            elementConfig: {
                                type: 'email',
                                placeholder: 'Your Email'
                            },
                            value: '',
                            validation: {
                                required: true,
                                isEmail: true
                              },
                              valid: false,
                              touched: false
                        },
                deliveryMethod: {
                            elementType: 'select',
                            elementConfig: {
                                options: [
                                    { value: 'cheapest', displayValue: 'Cheapest' },
                                    { value: 'fastest', displayValue: 'Fastest' }
                                ]
                            },
                            value: 'cheapest',
                            valid: true,
                            validation: {},
                        }
           },
           formIsValid: false
    }

    orderHandler = (event) => {
        event.preventDefault();

        const fromData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            fromData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }

      
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: fromData,
            userId: this.props.userId
        }

        this.props.onOrderBurger(order, this.props.token);
        
    }

    
    inputChangedHandler = (event, inputIdentifier) => {
        
        const updatedFormElement = updateObject(this.state.orderForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.orderForm[inputIdentifier].validation),
            touched: true
        }); 

        const updatedOrderForm = updateObject(this.state.orderForm, {
            [inputIdentifier]: updatedFormElement
        });

        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm){
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
    }

    render() {

        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
               <form onSubmit={this.orderHandler}>
                    
                    {formElementsArray.map(formElement => (
                        <Input 
                           key={formElement.id}
                           elementType={formElement.config.elementType} 
                           elementConfig={formElement.config.elementConfig}
                           value={formElement.config.value}
                           invalid={!formElement.config.valid}
                           shouldValidate={formElement.config.validation}
                           touched={formElement.config.touched}
                           changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        />
                    ))}
                    
                     
                        <Button onClick={this.orderHandler} disabled={!this.state.formIsValid} variant="success" >ORDER</Button>
                    

                </form>
        );
        if (this.props.loading) {
            form = <Spinner />;
        }
        return (
            <div className='ContactData'>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));