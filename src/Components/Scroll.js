import React from 'react';

const Scroll = (props) => {
	return (
		<div className='pa2' style={{ overflowY: 'scroll', border: '3px solid black', height: '700px' }}>
			{props.children}
		</div>
		);
};

export default Scroll;