import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Actions as GameActions } from '../../modules/Store/Ducks/Game';
import Dot from "../Dot/Dot";
import Box from "../Box/Box";
import Bar from "../Bar/Bar";

import './GridBlock.style.css';

function GridBlock(props) {
	const dispatch = useDispatch();
	const { names } = useSelector(reducer => reducer.game);
	const { block } = props;

	// Handle click on grid
	function handleBarClick(row, column, type) {
		dispatch(GameActions.updateGrid(row, column, type));
	}

	const { row, column, top, left, completedBy } = block;

	let p1 = names[0].charAt(0).toUpperCase();
	let p2 = names[1].charAt(0).toUpperCase();

	if(p1 === p2) {
		p1 += 1;
		p2 += 2;
	}

	let user = '';
	if (completedBy) {
		user = completedBy === 1 ? p1 : p2;
	}

	return (
		<div className="grid__basic-block">
			<div className="grid__basic-block__dot-and-bar">
				<Dot />
				<Bar
					type={top}
					orientation="horizontal"
					onBarClick={() => handleBarClick(row, column, 'top')}
				/>
			</div>
			<div className="grid__basic-block__bar-and-box">
				<Bar
					type={left}
					orientation="vertical"
					onBarClick={() => handleBarClick(row, column, 'left')}
				/>
				<Box type={completedBy} text={user} />
			</div>
		</div>
	);
}

export default GridBlock;
