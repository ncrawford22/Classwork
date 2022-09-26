const React = require('react');

class Index extends React.Component {
    render() {

        const { meats } = this.props;
        return (
            <div>
                <h1> Meats Index Page</h1>
                <ul>
                    {meats.map((meat, i) => {
                        return (
                            <li key={i}>
                                The <a href={`/meats/${i}`}>{meat.name}</a> is {meat.type}.
                                <a href={`/meats/${i}/Edit`}> Edit</a>
                            </li>
                        )
                    })}
                </ul>

                <nav>
                    <a href="/meats/new">Create a new meat</a>
                </nav>

            </div>
        );
    }
}

module.exports = Index;