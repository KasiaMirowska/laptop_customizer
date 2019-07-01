import React from 'react';
import Feature from './Feature';

export default class ListOfFeatures extends React.Component {
    render() {

        const features = Object.keys(this.props.features).map(key => {
            console.log(this.props.features)
            const feature = this.props.features[key]
            console.log(feature)
            return (
                <div className="feature" key={key}>
                    <div className="feature__name">{key}</div>
                    <ul className="feature__list">
                        <Feature
                        index={key}
                        choices={this.props.features[key]}
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