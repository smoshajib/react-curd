import {Link} from "react-router-dom";
const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
            <Link class="navbar-brand" to="/">Product Crud</Link>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="create">Add Product<span class="sr-only">(current)</span></Link>
                    </li>
                 
                    
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default Nav;