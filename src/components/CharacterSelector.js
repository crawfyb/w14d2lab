import React from 'react';



function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
};

const CharacterSelector = (props) => {
    const options = props.characters.filter(onlyUnique).map((character, index) => {
        return <option value = {index} key={index}> {character.name} </option>
    }  )

function handleChange(event) {
    props.onCharacterSelected(event.target.value)
}

return (
    <select id = "character-selector" defaultValue="default"
    onChange={handleChange}>
        <option disabled value="default" > Choose.... </option>
        {options}
        </select>
)

}

export default CharacterSelector;