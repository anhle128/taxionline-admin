import React from 'react';
import AuthorApi from '../../api/authorApi';
import AuthorList from './AuthorList';

class AuthorPage extends React.Component {

    constructor() {
        super();
        this.state = { authors: [] };

    }

    componentDidMount() {
        this.setState({ authors: AuthorApi.getAllAuthors() });

    }

    componentWillUnmount() {
        this.setState(null);
    }

    static willTransitionTo(transition,params, query, callback){
        if(!confirm("Are you sure to change this page?")){
            transition.about();
        }else{
            callback();
        }
    }

    render() {

        return (
            <div className="jumbotron" >
                <h1> Author </h1>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
}

export default AuthorPage;
