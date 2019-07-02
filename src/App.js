import React, { Component } from 'react';
import './App.css';
import ListOfFeatures from './ListOfFeatures';
// import Cart from './Cart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        "Operating System": {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        "Video Card": {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    }
  }

  currentFeatureChoices = () => {
    const currentFeatureChoices = [];
    Object.keys(this.state.selected).map(key => {
      return this.props.features[key].map(item => {
        const selectedClass = item.name === this.state.selected[key].name ? item.name : '';
        currentFeatureChoices.push(selectedClass);
      })
    })
    return currentFeatureChoices;
  }

  updateFeature(newValue) {
    console.log(newValue)
    let choices = this.currentFeatureChoices();
   
    
    // const selected = Object.assign({}, this.state.selected);
    // selected[feature] = newValue ;
    // this.setState({
    //   selected: selected,
    // });

  }


  render() {
   
    
    // const summary = Object.keys(this.state.selected)
    //       .map(key => <div className="summary__option" key={key}>
    //         <div className="summary__option__label">{key}  </div>
    //         <div className="summary__option__value">{this.state.selected[key].name}</div>
    //         <div className="summary__option__cost">
    //           { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
    //               .format(this.state.selected[key].cost) }
    //         </div>
    //     </div>)

    // const total = Object.keys(this.state.selected)
    //       .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);    


    // const features = Object.keys(this.props.features)
    //       .map(key => {
    //         const options = this.props.features[key].map((item, index) => {
    //           const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
    //           const featureClass = 'feature__option ' + selectedClass;
    //           // return <li key={index} className="feature__item">
    //           //   <div className={featureClass}

    //           //     onClick={e => this.updateFeature(key, item)}>
    //           //       { item.name }
    //           //       ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
    //           //         .format(item.cost) })
    //           //   </div>
    //           // </li>
    //         });

    //       //   return <div className="feature" key={key}>
    //       //     <div className="feature__name">{key}</div>
    //       //     <ul className="feature__list">
    //       //       { options }
    //       //       console.log(options)
    //       //     </ul>
    //       //   </div>
    //       // });      

    return (
      <div className="App">
        <header>
          <h1>ELF Computing</h1>
          <h3>Laptops</h3>
          <h5>Customize your laptop</h5>
        </header>

        <main>
         
          <ListOfFeatures features={this.props.features} handleChange={this.updateFeature} currentChoices={this.currentFeatureChoices()}/>
          {/* <Cart /> */}
         
        </main>
      </div>
    );
  }
}

export default App;  
