import React from 'react';
import Feature from './Feature';

export default class ListOfFeatures extends React.Component {
    render() {
        const features = Object.keys(this.props.features).map((category, i) => {
            const choices = this.props.features[category]
            return <Feature 
                        key={i} 
                        choices={choices}
                        category={category}
                        selected={this.props.selected}
                        change={this.props.handleChange}
                        />
        })

       return (
        <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                {features}
            </section>
      )
    }
}