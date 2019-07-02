import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ListOfFeatures from './ListOfFeatures';
import Cart from './Cart';

class App extends Component {
  constructor(props) {
    super(props);
    const initialFeatures = {...props.features};
    Object.keys(initialFeatures).map(category => {
      initialFeatures[category] = initialFeatures[category][0];
      console.log(initialFeatures)
      return initialFeatures;
      
    });
    
    this.state = {
      selected: initialFeatures
    }
    console.log(this.state.selected)
  }


  updateFeature(feature ,newValue) {
    console.log(feature, newValue)
    const selected = Object.assign({}, this.state.selected);
    console.log(selected)
    selected[feature] = newValue ;
    this.setState({
      selected: selected,
    });
    console.log(this.state.selected)
  }


  render() {
    return (
      <div className="App">
        <Header />
      <main>
         
          <ListOfFeatures features={this.props.features} handleChange={(feature, newValue) => this.updateFeature(feature, newValue)} selected={this.state.selected}/>
          <Cart selected={this.state.selected}/>
         
        </main>
      </div>
    );
  }
}

export default App;  
