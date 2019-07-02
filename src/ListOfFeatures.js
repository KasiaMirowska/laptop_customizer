import React from 'react';
import Feature from './Feature';

export default class ListOfFeatures extends React.Component {
    render() {
        const features = Object.keys(this.props.features).map(key => {
            const feature = this.props.features[key]
            return (
                <div className="feature" key={key}>
                    <div className="feature__name">{key}</div>
                    <ul className="feature__list">
                        <Feature
                        index={key}
                        choices={this.props.features[key]}
                        changes={this.props.handleChange}
                        currentChoices={this.props.currentChoices}
                        />
                    </ul>
                </div>
            )
        })

        // //   
        return (
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                {features}        
            </section>
                )
    }
}