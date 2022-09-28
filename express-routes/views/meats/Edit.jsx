const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Edit extends React.Component {
    render() {
        const { _id, name, type } = this.props.meat;

        return (
            <DefaultLayout title={`Edit ${name}`} foodGroup="meats">
                <h1>Edit Meat Page</h1>
                <form action={`/meats/${_id}?_method=PUT`} method="POST">
                    <label htmlFor='name'>Name: </label>
                    <input type="text" id="name" name="name" defaultValue={name}/>

                    <label htmlFor="type">Type: </label>
                    <input type="text" id="type" name="type" defaultValue={color}/>

                    <input type="submit" value="Edit Meat"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit;

