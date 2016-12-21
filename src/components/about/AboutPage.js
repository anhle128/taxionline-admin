import React from 'react';
import ReactDOM from 'react-dom';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1 className="jumbotron"> About </h1>
                <p>
                    This is application uses the following technologies
                </p>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-success">React</li>
                    <li className="list-group-item list-group-item-success">React Router</li>
                    <li className="list-group-item list-group-item-success">Flux</li>
                    <li className="list-group-item list-group-item-success">Node</li>
                    <li className="list-group-item list-group-item-success">NPM</li>
                    <li className="list-group-item list-group-item-success">Webpack</li>
                    <li className="list-group-item list-group-item-success">Bootstrap</li>
                </ul>
            </div >
        );
    }
}

export default AboutPage;