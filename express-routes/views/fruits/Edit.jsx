const React = require('react');

class Edit extends React.Component {
    render() {
        return (
            <div>
                <h1>Edit Fruit Page</h1>
                <form action="/fruits/:index/Edit?_method=PUT" method="POST">
                    <label htmlFor='name'>Name: </label>
                    <input type="text" id="name" name="name"/>

                    <label htmlFor="color">Color: </label>
                    <input type="text" id="color" name="color"/>

                    <label htmlFor="readyToEat">Is Ready to Eat </label>
                    <input type="checkbox" id="readyToEat" name="readyToEat"/>

                    <input type="submit" value="Edit Fruit"/>
                </form>
            </div>
        )
    }
}

module.exports = Edit;