import React, {useState, useEffect} from 'react';
import './stylePickGame.css';
import PickMode from '../PIckMode';
import Board from '../Board';
import HoverSquares from '../ListHoverSquares';
import {v4 as uuidv4} from 'uuid';

export default () => {
    const [mode, setMode] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [cells, setCells] = useState([]);
    const [selectedSquares, setSelectedSquares] = useState([]);

    useEffect(() => {
        fetch("http://demo1030918.mockable.io/ ")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
            )
    }, []);

    const generateCells = () => {
        const cells = [];
        for (let i = 1; i <= mode; i++) {
            cells[i] = [];
            for (let b = 1; b <= mode; b++) {
                cells[i].push({
                    rowId: b,
                    colId: i,
                    id: uuidv4()
                })
            }
        }
        setCells(cells)

    };

    const onSquareSelected = (square) => {
        const foundSquare = [...selectedSquares].find(el => el.id === square.id);
        const filtererSquares = [...selectedSquares].filter(el => el.id !== square.id);

        if (foundSquare) {
            setSelectedSquares(filtererSquares)
        }
        else {
            setSelectedSquares(
                [...selectedSquares, square]
            )
        }

    };

    const deleteHover = () => {
        setSelectedSquares([]);
        setCells([])
    };

    return (
        <div className="center">
            {
                isLoaded ?
                    <>
                        <div>
                            <PickMode
                                onStart={generateCells}
                                items={items}
                                updatedMode={setMode}
                                selectedSquares={selectedSquares}
                                onDeletedHover={deleteHover}
                            />
                            <Board mode={mode}
                                   cells={cells}
                                   onSelectedSquares={(square) => onSquareSelected(square)}
                                   selectedSquares={selectedSquares}
                            />
                        </div>
                        <div>
                            <HoverSquares selectedSquares={selectedSquares}/>
                        </div>
                    </>
                    :
                    <p>Loading...</p>
            }
        </div>
    )
}
