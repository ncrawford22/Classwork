const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');


class Index extends React.Component {
    render() {
        const { vegetables } = this.props;
        return (
            <DefaultLayout title="All Vegetables" foodGroup="vegetables">
                <h1>Vegetables Index Page</h1>
                <ul>
                    {vegetables.map((vegetable) => {
                        return (
                            <li key={vegetable._id}>
                                The <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a> is {vegetable.color}.
                                <a href={`/vegetables/${vegetable.id}/Edit`}> Edit</a>
                            </li>
                        )
                    })}
                </ul>

                <nav>
                    <a href="/vegetables/new">Create a new vegetable</a>
                </nav>
            </DefaultLayout>
        );
    }
}

module.exports = Index;