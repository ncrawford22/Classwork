const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Index extends React.Component {
    render() {
        /*
        Map Method
            - Loops over data
            - Manipulates data at each index
            - Returns new array with new data
        */

        // Object Destructuring
        const { fruits } = this.props;
        return (
            <DefaultLayout title="All Fruits" foodGroup="fruits">
                <h1>Fruits Index Page</h1>
                <ul id="fruits-index">
                    {fruits.map((fruit) => {
                        return (
                            <li key={fruit._id}>
                                The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is {fruit.color}.
                                <a href={`/fruits/${fruit._id}/Edit`}> Edit</a>

                            </li>
                        )
                    })}
                </ul>

                <nav>
                        <a href="/fruits/new">Create a new fruit</a>
                </nav>
            </DefaultLayout>
        );
    }
}

module.exports = Index;