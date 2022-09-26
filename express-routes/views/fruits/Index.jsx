const React = require('react');

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
            <div>
                <h1>Fruits Index Page</h1>
                <ul>
                    {fruits.map((fruit, i) => {
                        return (
                            <li key={i}>
                                The <a href={`/fruits/${i}`}>{fruit.name}</a> is {fruit.color}.
                                <a href={`/fruits/${i}/Edit`}> Edit</a>

                            </li>
                        )
                    })}
                </ul>

                <nav>
                    <a href="/fruits/new">Create a new fruit</a>
                </nav>

            </div>
        );
    }
}

module.exports = Index;