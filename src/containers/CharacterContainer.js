import React, { Component } from 'react';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetail from '../components/CharacterDetail';
import HouseSelector from '../components/HouseSelector';


class CharacterContainer extends Component {
constructor(props){
    super(props);
    this.state={
        characters: [],
        currentCharacter: null,
        houses: [],
        currentHouse: null
    };
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
}

componentDidMount(){
    const url="http://hp-api.herokuapp.com/api/characters";

    fetch(url)
    .then(res => res.json())
    .then(characters => this.setState({characters: characters}))
    .catch(err => console.error);
}

handleHouseSelected(index){
    const selectedHouse = this.state.houses[index];
    this.setState({currentHouse: selectedHouse});

}

handleCharacterSelected(index){
    const selectedCharacter = this.state.characters[index];
    this.setState({currentCharacter: selectedCharacter});

}



    render() {
        return (
            <div>
                <h1> Character Container </h1>
                <HouseSelector characters={this.state.characters} onHouseSelected={this.handleHouseSelected}/>
                <br/>
                <CharacterSelector characters={this.state.characters} onCharacterSelected={this.handleCharacterSelected}/>
                <CharacterDetail character = {this.state.currentCharacter}/>    
            </div>
        );
    }
}

export default CharacterContainer;