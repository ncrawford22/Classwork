const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Edit extends React.Component {
    render() {

        const { _id, name, color, readyToEat } = this.props.fruit;

        return (
            <DefaultLayout title={`Edit ${name}`} foodGroup="fruits">
                <h1>Edit Fruit Page</h1>
                <form action={`/fruits/${_id}?_method=PUT`} method="POST">
                    <label htmlFor='name'>Name: </label>
                    <input type="text" id="name" name="name" defaultValue={name}/>

                    <label htmlFor="color">Color: </label>
                    <input type="text" id="color" name="color" defaultValue={color}/>

                    <label htmlFor="readyToEat">Is Ready to Eat </label>
                    <input type="checkbox" id="readyToEat" name="readyToEat" defaultChecked={readyToEat}/>

                    <input type="submit" value="Edit Fruit"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit;