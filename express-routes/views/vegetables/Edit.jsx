const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Edit extends React.Component {
    render() {

        const { _id, name, color } = this.props.vegetable;

        return (
            <DefaultLayout title={`Edit ${name}`} foodGroup="vegetables">
                <h1>Edit Vegetable Page</h1>
                <form action={`/vegetables/${_id}?_method=PUT`} method="POST">
                    <label htmlFor='name'>Name: </label>
                    <input type="text" id="name" name="name" defaultValue={name}/>

                    <label htmlFor="color">Color: </label>
                    <input type="text" id="color" name="color" defaultValue={color}/>

                    <input type="submit" value="Edit Vegetable"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit;