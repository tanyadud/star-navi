import React from 'react';
import './styleListHover.css'

export default ({selectedSquares}) => {

    return (
        <div className="box-list-position">
            <h2 className="header">Hover squares</h2>
            <ul>
                {
                    selectedSquares.map(box => (
                        <li className="list" key={box.id}>Row: {box.rowId} Col: {box.colId}</li>
                    ))
                }

            </ul>
        </div>
    )
}
