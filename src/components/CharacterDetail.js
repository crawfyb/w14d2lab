import React from 'react';

const CharacterDetail = (props) => {
    if(!props.character) return null;
    return (
        <h3>
            <div>
                {props.character.name}
            </div>
            <div>
                {props.character.species}
            </div>
            <div>
                {props.character.house}
            </div>
            <div>
                {props.character.ancestry}
            </div>
            <div>
                {props.character.gender}
            </div>
            <div>
                {props.character.patronus}
            </div>
            <div>
                <img src={props.character.image} alt={props.character.name}/>
                
            </div>
        </h3>
    )
}

export default CharacterDetail;