import React from 'react';
import Colors from '../../modules/Colors';

import './Bar.style.css';

function Bar(props) {
	const { orientation, type, onBarClick } = props;
	const styles = {};

	switch (type) {
		case 0:
			styles.backgroundColor = Colors.DefaultBarColor;
			break;
		case 1:
			styles.backgroundColor = Colors.PrimaryBarColor;
			break;
		case 2:
			styles.backgroundColor = Colors.SecondaryBarColor;
			break;
		default:
			styles.display = 'none';
	}

	const isVerticalBar = orientation === 'vertical';
	const className = isVerticalBar ? 'vertical-bar' : 'horizontal-bar';

	return <div className={className} style={styles} onClick={onBarClick} />;
}

export default Bar;
