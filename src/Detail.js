import React, { Component } from 'react';
import './App.css'; 

export default class Detail extends Component {
    render() {
        const { pokes } = this.props;
        const {
            url_image,
            pokemon,
            hp, 
            attack,
            defense
        } = pokes;

        return (
        <li>
            <div>
                    <p>Name: { pokemon }</p>
                    <p><img src={ url_image } alt={ url_image }/></p>
                    <p>Hp: { hp }</p>
                    <p>Attack: { attack }</p>
                    <p>Defense: { defense }</p>
            </div>
        </li>
        )
    }
}