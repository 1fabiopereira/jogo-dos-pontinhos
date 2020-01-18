import React from 'react';
import Colors from '../../modules/Colors';

import './Box.style.css';

function Box(props) {
	const { type, text } = props;
	const styles = {};

	switch (type) {
		case 0:
			styles.backgroundColor = Colors.DefaultBoxColor;
			break;
		case 1:
			styles.backgroundColor = Colors.PrimaryBoxColor;
			break;
		case 2:
			styles.backgroundColor = Colors.SecondaryBoxColor;
			break;
		default:
			styles.display = 'none';
	}
	return (
		<div className='box' style={styles}>
			{text}
		</div>
	);
}

export default Box;
