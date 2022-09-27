const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');


class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Create a new vegetables" foodGroup="vegetables">
                <h1>New Page</h1>
                <form action="/vegetables" method="POST">
                    <label htmlFor='name'>Name: </label>
                    <input type="text" id="name" name="name"/>

                    <label htmlFor="color">Color: </label>
                    <input type="text" id="color" name="color"/>

                    <input type="submit" value="Create Vegetable"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;