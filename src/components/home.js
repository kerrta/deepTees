import React from 'react';
import UploadMenu from './upload'

export default class Home extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      showCreate: false,
    };

  }

  showCreate = () => {
    this.setState({
      showCreate: true,
    })
  }

  closeCreate = () => {
    this.setState({
      showCreate: false,
    })
  }

  render() {

    const shirt1 = require('../images/shirt1.jpeg');
    const shirt2 = require('../images/shirt2.jpeg');
    const shirt3 = require('../images/shirt3.jpeg');
    const shirt4 = require('../images/shirt4.jpeg');
    const shirt5 = require('../images/shirt5.jpeg');
    const shirt6 = require('../images/shirt6.jpeg');
    const shirt7 = require('../images/shirt7.jpeg');
    const shirt8 = require('../images/shirt8.jpeg');
    const shirt9 = require('../images/shirt9.jpeg');

    return(
        <div className="container-fluid">

      		<nav className="navbar navbar-expand-lg navbar-light bg-light">
      		  <a className="navbar-brand" href="#">DeepTees</a>
      		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      		    <span className="navbar-toggler-icon"></span>
      		  </button>

      		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      		    <ul className="navbar-nav mr-auto">
      		      <li className="nav-item active">
      		        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      		      </li>
      		      <li className="nav-item">
      		        <a className="nav-link" href="#">Link</a>
      		      </li>
      		      <li className="nav-item dropdown">
      		        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      		          Dropdown
      		        </a>
      		        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      		          <a className="dropdown-item" href="#">Action</a>
      		          <a className="dropdown-item" href="#">Another action</a>
      		          <div className="dropdown-divider"></div>
      		          <a className="dropdown-item" href="#">Something else here</a>
      		        </div>
      		      </li>
      		      <li className="nav-item">
      		        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
      		      </li>
      		    </ul>
      		    <button type="button" className="btn btn-outline-primary" onClick={this.showCreate}>Create</button>
      		  </div>
      		</nav>
          {this.state.showCreate ? <UploadMenu /> : null}
      		<div className="row customRow">
      			<div className="col-sm-4">
      				<div className="card mx-auto customCard">
      				  <img src={shirt1} className="card-img-top" alt="..." />
      				  <div className="card-body">
      				    <h5 className="card-title">Deep Tees</h5>
      				    <p className="card-text">mild</p>
      				  </div>
      				</div>
      			</div>
      			<div className="col-sm-4">
      				<div className="card mx-auto customCard">
      				  <img src={shirt2} className="card-img-top" alt="..." />
      				  <div className="card-body">
      				    <h5 className="card-title">Deeper Tees</h5>
      				    <p className="card-text">hot</p>
      				  </div>
      				</div>
      			</div>
      			<div className="col-sm-4">
      				<div className="card mx-auto customCard">
      				  <img src={shirt3} className="card-img-top" alt="..." />
      				  <div className="card-body">
      				    <h5 className="card-title">Thicc Deep Tees</h5>
      				    <p className="card-text">spicy</p>
      				  </div>
      				</div>
      			</div>
      		</div>
      		<div className="row customRow">
      			<div className="col-sm-4">
      				<div className="card mx-auto customCard">
      				  <img src={shirt4} className="card-img-top" alt="..." />
      				  <div className="card-body">
      				    <h5 className="card-title">Deep Tees</h5>
      				    <p className="card-text">mild</p>
      				  </div>
      				</div>
      			</div>
      			<div className="col-sm-4">
      				<div className="card mx-auto customCard">
      				  <img src={shirt5} className="card-img-top" alt="..." />
      				  <div className="card-body">
      				    <h5 className="card-title">Deeper Tees</h5>
      				    <p className="card-text">hot</p>
      				  </div>
      				</div>
      			</div>
      			<div className="col-sm-4">
      				<div className="card mx-auto customCard">
      				  <img src={shirt6} className="card-img-top" alt="..." />
      				  <div className="card-body">
      				    <h5 className="card-title">Thicc Deep Tees</h5>
      				    <p className="card-text">spicy</p>
      				  </div>
      				</div>
      			</div>
      		</div>
      		<div className="row customRow">
      			<div className="col-sm-4">
      				<div className="card mx-auto customCard">
      				  <img src={shirt7} className="card-img-top" alt="..." />
      				  <div className="card-body">
      				    <h5 className="card-title">Deep Tees</h5>
      				    <p className="card-text">mild</p>
      				  </div>
      				</div>
      			</div>
      			<div className="col-sm-4">
      				<div className="card mx-auto customCard">
      				  <img src={shirt8} className="card-img-top" alt="..." />
      				  <div className="card-body">
      				    <h5 className="card-title">Deeper Tees</h5>
      				    <p className="card-text">hot</p>
      				  </div>
      				</div>
      			</div>
      			<div className="col-sm-4">
      				<div className="card mx-auto customCard">
      				  <img src={shirt9} className="card-img-top" alt="..." />
      				  <div className="card-body">
      				    <h5 className="card-title">Thicc Deep Tees</h5>
      				    <p className="card-text">spicy</p>
      				  </div>
      				</div>
      			</div>
      		</div>
  	   </div>
    )
  }
}
