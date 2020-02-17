  
import React, { Component } from 'react';
import request from 'superagent';
import Detail from './Detail.js';
import { Link } from 'react-router-dom'
import SearchOption from './SearchOption.js';

export default class Home extends Component {
    state = { 
        searchQuery: this.props.match.params.pokemon,
        pokemon: [],
     }

     async componentDidMount() {
         if (this.props.match.params.pokemon) {
             const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${this.props.match.params.pokemon}`)
     
             this.setState({ pokemon: data.body.results })
         }
     }

    handleSearch = async (e) => {
        e.preventDefault();

        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${this.state.searchQuery}`)

        this.setState({ 
            pokemon: data.body.results, })
        

        this.props.history.push(this.state.searchQuery)

    }

    handleChange = (e) => this.setState({ searchQuery: e.target.value })

    render() {
        return (
        <div className="App">
          <header className="header-stuff">
              <h2>Pokedex</h2>
          </header>
            <SearchOption 
               searchQuery={this.state.searchQuery}
               handleSearch={this.handleSearch} 
               handleChange={this.handleChange}
            />
          <ul className= "poke-wrap">
              {
                this.state.pokemon.map((pokemon, index) => 
                <Link to={`characters/${pokemon.pokemon}`} key={index}> 
                    <Detail pokes={pokemon} />
                </Link>)
              }
          </ul>
        </div>
      );
    }
}