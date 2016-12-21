import React from 'react';
import { Link } from 'react-router';

class NotFoundPage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1> Page Not Found</h1>
                <p>Whoops! Sorry, there is nothing to see here</p>
                <p><Link to="home">Back to Home</Link></p>
            </div>
        );
    }
}

export default NotFoundPage;