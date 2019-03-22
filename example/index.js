import React from 'react';
import {render} from 'react-dom';
import useInView from '../index.js';

const App = () => {
	const [ref, inView] = useInView(0);
	return (
		<div className={`element -${inView && 'inview'}`} ref={ref}>
			hello
		</div>
	);
};

render(<App />, document.getElementById('root'));
