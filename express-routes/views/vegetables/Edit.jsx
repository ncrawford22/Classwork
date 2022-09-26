const React = require('react');

class Edit extends React.Component {
    render() {
        return (
            <div>
                <h1>Edit Vegetable Page</h1>
                <form action="/vegetables/{{vegetable.i}}?_method=PUT" method="POST">
                    <label htmlFor='name'>Name: </label>
                    <input type="text" id="name" name="name"/>

                    <label htmlFor="color">Color: </label>
                    <input type="text" id="color" name="color"/>

                    <input type="submit" value="Edit Vegetable"/>
                </form>
            </div>
        )
    }
}

module.exports = Edit;