import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

export default class PeopleList extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            data: [],
            loaded: false,
            loading: false,
        };
    }

    componentWillMount() {
        this.setState( { loading: true } );
        fetch( 'https://randomuser.me/api/?results=10' )
            .then( response => response.json() )
            .then( obj => obj.results )
            .then( data => this.setState( {
                loaded: true,
                loading: false,
                data,
            } ) );
    }

    render() {
        const { data, loading } = this.state;
        return (
            ( loading ) ?
                <div>Loading...</div> :
                <ol className="people-list">
                    { data.map( ( person, i ) => {
                        const { first, last } = person.name;
                        // eslint-disable-next-line react/no-array-index-key
                        return ( <li key={ i }>{ first } { last }</li> );
                    } ) }
                </ol>
        );
    }
}