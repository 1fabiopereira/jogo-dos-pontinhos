import React from 'react';
import {useSelector} from 'react-redux';
import GridBlock from '../GridBlock/GridBlock';

import './Grid.style.css';

// Render grid box
function _renderGrid(data) {
	const { grid } = data;
	return grid.map((row, rowIndex) => {
		return (
			<div key={`${rowIndex}`} className="grid__row">
				{row.map((block, blockIndex) => <GridBlock key={`${rowIndex}-${blockIndex}`} block={block} />)}
			</div>
		);
	});
}

// Render Grids
function Grid() {
	const data = useSelector(reducer => reducer.game);
	const { rows } = data;
	const width = rows * 60 + (rows + 1) * 20;

	return (
		<div className="grid" style={{ width }}>
			{_renderGrid(data)}
		</div>
	);
}

export default Grid;
