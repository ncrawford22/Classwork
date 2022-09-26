const React = require('react');
const fruits = require('../../models/fruits');

// Class Component
class Show extends React.Component {
    render() {
        // console.log(this.props.fruit);
        // const fruit = this.props.fruit;

        // Object Destructuring
        const { name, color, readyToEat } = this.props.fruit;
        return (
            <div>
                <h1> Show Page testing testing testing...</h1>
                <p>
                    The {name} is {color}.
                </p>
                <p>
                    {readyToEat ? "It is ready to eat!" : "It is NOT ready to eat... :("}
                </p>
                <nav>
                    <a href="/fruits">Back</a>
                </nav>
            </div>
        );
    }
}

module.exports = Show;