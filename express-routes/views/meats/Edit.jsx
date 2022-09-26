const React = require('react');

class Edit extends React.Component {
    render() {
        return (
            <div>
                <h1>Edit Meat Page</h1>
                <form action="/meats/{{meat.i}}?_method=PUT" method="POST">
                    <label htmlFor='name'>Name: </label>
                    <input type="text" id="name" name="name"/>

                    <label htmlFor="type">Type: </label>
                    <input type="text" id="type" name="type"/>

                    <input type="submit" value="Edit Meat"/>
                </form>
            </div>
        )
    }
}

module.exports = Edit;

