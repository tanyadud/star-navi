import React from 'react';
import './styleBoard.css';

export default ({onSelectedSquares, selectedSquares, cells}) => {

    const pickSquare = (square) => {
        onSelectedSquares(square)

    };

    const isSquareSelected = (square) => {
        return selectedSquares.find(item => item.rowId === square.rowId && item.colId === square.colId)
    };

    return (
        <div className="board">
            {
                cells.map((row, index) => (
                    <div key={`col-${index}`}>
                        {
                            row.map(square => (
                                <div key={square.id}
                                     className={`square ${isSquareSelected(square) ? "selectedSquare" : null}`}
                                     onClick={() => pickSquare(square)}>

                                </div>
                            ))
                        }
                    </div>

                ))
            }
        </div>

    )
}
