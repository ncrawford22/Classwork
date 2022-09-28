const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');


// Class Component
class Show extends React.Component {
    render() {
       
        const { name, type, _id } = this.props.meat;
        return (
            <DefaultLayout title={`${name} details`} foodGroup="meats">

                <h1> Show Page testing testing testing...</h1>
                <p>
                    The {name} is {type}.
                </p>

                <button>
                    <a href={`/meats/${_id}/edit`}>Edit</a>
                </button>

                <form action={`/meats/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete"/>
                </form>
                
                <nav>
                    <a href="/meats">Back</a>
                </nav>
            </DefaultLayout>
        );
    }
}

module.exports = Show;