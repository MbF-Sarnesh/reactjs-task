import React, { Component } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello World</h1>     
//       </div>
//     );
//   }
// }


/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

/* Category component */
const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
)

/* Products component */
const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
)

/* Services component */
const Services = () => (
  <div>
    <h2>Services</h2>
  </div>
)

/* Contact component */
const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
)


/* App component */
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
			<ul className="navbar-nav">
				<li><Link to="/">Homes</Link></li>
				<li><Link to="/category">Category</Link></li>
				<li><Link to="/products">Products</Link></li>
				<li><Link to="/services">Services</Link></li>
				<li><Link to="/contact">Contact</Link></li>
			</ul>
        </nav>
        <Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/category" component={Category}/>
			<Route path="/products" component={Products}/>
			<Route path="/services" component={Services}/>
			<Route path="/contact" component={Contact}/>
		</Switch>
      </div>
    )
  }
}

export default App;
