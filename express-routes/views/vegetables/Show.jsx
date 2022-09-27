const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');


// Class Component
class Show extends React.Component {
    render() {
        const { name, color } = this.props.vegetable;
        return (
            <DefaultLayout title={`${name} details`} foodGroup="vegetables">

                <h1> Show Page testing testing testing...</h1>
                <p>
                    The {name} is {color}.
                </p>
                
                
                <nav>
                    <a href="/vegetables">Back</a> 
                </nav>
            </DefaultLayout>
        );
    }
}

module.exports = Show;