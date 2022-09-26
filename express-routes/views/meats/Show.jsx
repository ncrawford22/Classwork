const React = require('react');

// Class Component
class Show extends React.Component {
    render() {
       
        const { name, type } = this.props.meat;
        return (
            <div>

                <h1> Show Page testing testing testing...</h1>
                <p>
                    The {name} is {type}.
                </p>
                
                <nav>
                    <a href="/meats">Back</a>
                </nav>
            </div>
        );
    }
}

module.exports = Show;