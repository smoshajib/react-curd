
import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: String,
            title: '',
            price:'',
            description:'',
            message:''
        };
        this.addFormData = this.addFormData.bind(this);
    }

    addFormData(evt) {
        evt.preventDefault();
        const fd = new FormData();

        
        fd.append('title', this.state.title);
        fd.append('price', this.state.price);
        fd.append('image', this.state.image);
        fd.append('description', this.state.description);

       
        //Post Request to laravel API Route
        axios.post('add-product', fd
        ).then(res => {
            document.getElementById('createFrom').reset();
            this.props.history.push("/");
            //Success Message in Sweetalert modal
            Swal.fire({
                title: 'New Product Add Successfully',
                text: "Thanks",
                type: 'success',
                timer: 1500
            });

        })
        .catch((error) => {
                
            this.setState({ message: error.response.data.message })
        });
    }

    render() {

        let message = '';
        if (this.state.message) {
            message = (
                <div>
                    <div class="alert alert-primary" role="alert" id='msg'>
                       {this.state.message}
                    </div>
                </div>
            )
        }
        return (
            <>
                <div class="container">
                    <div class="row">
                        
                        <div class="col-3"></div>
                        <div class="col-6">
                            <br/><br/>
                            <h1>App Product</h1>
                            {message}
                            <br/>
                            <form onSubmit={this.addFormData} id='createFrom'>
                                <div class="form-group">
                                    
                                    <input type="text" required onChange={(e) => { this.setState({ title: e.target.value }) }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title" />
                                    
                                </div>
                                <div class="form-group">
                                    
                                    <input type="text" required onChange={(e) => { this.setState({ price: e.target.value }) }} class="form-control" id="exampleInputPassword1" placeholder="Price" />
                                </div>
                                <div class="form-group">
                                    
                                    <input type="file" required onChange={(e) => { this.setState({ image: e.target.files[0] }) }} class="form-control" id="exampleInputPassword1"  />
                                </div>
                                <div class="form-group">
                                    
                                    <input type="text" required onChange={(e) => { this.setState({ description: e.target.value }) }} class="form-control" id="exampleInputPassword1" placeholder="Description"  />
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div class="col-3"></div>
                    </div>
                </div>
            </>
        );
    }
}

export default Create;