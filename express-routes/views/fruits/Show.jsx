const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

// Class Component
class Show extends React.Component {
    render() {
        // console.log(this.props.fruit);
        // const fruit = this.props.fruit;

        // Object Destructuring
        const { name, color, readyToEat, _id } = this.props.fruit;

        return (
            <DefaultLayout title={`${name} details`} foodGroup="fruits">
                <h1> Show Page testing testing testing...</h1>
                <p>
                    The {name} is {color}.
                </p>
                <p>
                    {readyToEat ? "It is ready to eat!" : "It is NOT ready to eat... :("}
                </p>

                <button>
                    <a href={`/fruits/${_id}/edit`}>Edit</a>
                </button>

                <form action={`/fruits/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete"/>
                </form>

                <nav>
                    <a href="/fruits">Back</a>
                </nav>
            </DefaultLayout>
        );
    }
}

module.exports = Show;