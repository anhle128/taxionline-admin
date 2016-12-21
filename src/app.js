import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">Duc Anh Dep Trai</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="home">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="author">Author</Link></li>
                    </ul>

                    {this.props.children}
                </div>
            </nav>
        )
    }
}

export default App;