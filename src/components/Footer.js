import React,{Component} from 'react'
import {Link} from "react-router-dom";
class Footer extends Component {
    
    render() { 
        return ( 
            <>
            <br/><br/><br/>
             <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
            <Link class="navbar-brand" to="/">Foote</Link>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="create">Design By - <span class="text-info">Smo Shajib</span></Link>
                    </li>
                  
                    
                </ul>
            </div>
            </div>
        </nav>
            </>
         );
    }
}
 
export default Footer;