import React, { Component } from 'react';
import { getCharacter } from './api.js'
import Detail from './Detail.js';

export default class List extends Component {
    state = { pokemon: {} }
    

    async componentDidMount() {
        const data = await getCharacter(this.props.match.params.pokemonId);
        
        if (data.body.results) {
            

        this.setState({ pokemon: data.body.results[0] })
            
        }
    }

    render() {
        const { pokemon } = this.state;

        return (
            
            <Detail pokes={ pokemon } />
      );
    }
}