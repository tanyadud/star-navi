import React from 'react';
import './stylePickMode.css';


export default ({selectedSquares, updatedMode, items, onDeletedHover, onStart }) => {

    const handleClick = (e) => {
        updatedMode(e.target.value)

    };

    return (

        <>

            <select className="select-mode"
                    defaultValue={'DEFAULT'}
                    onChange={handleClick}
            >
                <option value='DEFAULT' disabled>Pick mode</option>

                {
                    Object.values(items).map(item => (
                        <option key={item.field} value={item.field}>
                            {item.field}
                        </option>
                    ))
                }

            </select>

            {
                selectedSquares.length >= 1 ?
                    <button className="start-button" onClick={onDeletedHover}>STOP</button>
                    :
                    <button className="start-button" onClick={onStart}>START</button>
            }

        </>
    )
}


