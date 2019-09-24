import React from 'react';

const HouseSelector = (props) => {
    const options = props.characters.map((character, index) => {
        return <option value = {index} key={index}> {character.house} </option>
    }  )

function handleChange(event) {
    props.onHouseSelected(event.target.value)
}

return (
    <select id = "House-selector" defaultValue="default"
    onChange={handleChange}>
        <option disabled value="default" > Choose.... </option>
        {options}
        </select>
)

}

export default HouseSelector;