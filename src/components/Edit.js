import React, { Component } from 'react';
import axios from 'axios';
class Edit extends Component {

    state = {
        title:'',
        price:'',
        description:'',
        image:''
        
    }

    componentDidMount() {

        let id=this.props.match.params.id;
        
        axios.get('/edit-product/'+id)
            .then((response) => {
                // alert(response.data.name)
                // handle success
                console.log(response);
                this.setState({title:response.data.title,price:response.data.price,description:response.data.description })
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }


    formUpdate = (e) => {
        e.preventDefault();
        let id=this.props.match.params.id;
        const data = {
            title: this.state.title,
            price: this.state.price,
            description: this.state.description
        }
        axios.post('/update-product/'+id, data)
            .then((response) => {
                this.setState({ update:true});
                // document.getElementById('createFrom').reset();
                this.props.history.push("/");
            })
            .catch((error) => {
                this.setState({ message: error.response.data.message })
            });
    }


    render() { 
        return (  
            <>
                <div class="container">
                    <div class="row">
                        
                        <div class="col-3"></div>
                        <div class="col-6">
                            <br/><br/>
                            <h1>App Product</h1>
                          
                            <br/>
                            <form onSubmit={this.formUpdate} id='createFrom'>
                                <div class="form-group">
                                    
                                    <input type="text" value={this.state.title} onChange={(e) => { this.setState({ title: e.target.value }) }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title" />
                                    
                                </div>
                                <div class="form-group">
                                    
                                    <input type="text"  value={this.state.price}  onChange={(e) => { this.setState({ price: e.target.value }) }} class="form-control" id="exampleInputPassword1" placeholder="Price" />
                                </div>
                                
                                <div class="form-group">
                                    
                                    <input type="text"  value={this.state.description} onChange={(e) => { this.setState({ description: e.target.value }) }} class="form-control" id="exampleInputPassword1" placeholder="Description"  />
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
 
export default Edit;