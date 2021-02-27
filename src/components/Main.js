import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
const baseURL = 'http://localhost/admin/';
class Main extends Component {

    constructor(props) {
        super(props);
           /* Initialize the state. */
           this.state = {
            products: []
            }
         
        //Boilerplate code for binding methods with `this`
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInput = this.handleInput.bind(this);
      }

      componentDidMount() {
        axios.get('/view-product')
            .then((response) => {
                // handle success
                //console.log(response);
                this.setState({ products: response.data })
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }

    deleteData = (id) => {
        axios.get('/delete-product/' + id)
                    .then((response) => {
                        // handle success
                        //console.log(response);
                        this.props.history.push("/");
                        
                            Swal.fire({
                                title: 'Deleted!',
                                text: "Your file has been deleted",
                                type: 'success',
                                timer: 1500
                            });
                        
                        let products = this.state.products;
                        for (var i = 0; i < products.length; i++) {
                            if (products[i].id == id) {
                                products.splice(i, 1);
                                this.setState({ products: products })
                            }

                        }
                    })
                    .catch((error) => {
                        // handle error
                        console.log(error);
                    });
    }
    
    render(){

        const products = this.state.products
        const allProducts = products.map((product, key) => {
            return (
                <>
                    <div class="col-4">
                            <div class="card" style={{margin:"5px"}}>
                                
                                <img class="card-img-top" style={{height:"200px"}} src={baseURL + product.image} alt='not found' />
                                <div class="card-body">
                                    <h5 class="card-title">{product.title}</h5>
                                    <p class="card-text">{product.description}</p>
                                    <a href="#" class="btn btn-primary">TK. {product.price}</a>&nbsp;
                                    <Link to={`edit${product.id}`}><button class="btn btn-success">Edit</button></Link>&nbsp;
                                    <button onClick={this.deleteData.bind(this, product.id)} class="btn btn-danger">Remove</button>
                                </div>
                            </div>
                        </div>
                </>
            )
        })

        return (
            <>
            <br/><br/>
                <div class="container">
                    <div class="row">
                       
                    {allProducts}

                    </div>    
    
                </div>
            </>
        );
    }
    
}

export default Main;