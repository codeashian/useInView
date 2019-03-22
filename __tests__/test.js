import React from 'react';
import useInView from '../index.js';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {mount} from 'enzyme';
import {fireEvent} from 'react-testing-library';

import {act, renderHook, render} from 'react-hooks-testing-library';

Enzyme.configure({adapter: new Adapter()});

const setElementTopPos = topValue => {
	Element.prototype.getBoundingClientRect = jest.fn(() => {
		return {
			width: 120,
			height: 120,
			top: topValue,
			left: 0,
			bottom: 0,
			right: 0,
		};
	});
};

const scroll = top => {
	setElementTopPos(top);
	fireEvent(window, new Event('scroll'));
};

test('useInView should react on window scroll', () => {
	let ref, inView;
	window.clientHeight = 1000;
	window.pageYOffset = 0;
	setElementTopPos(200);

	const TestComponent = () => <div ref={ref} />;

	renderHook(() => ([ref, inView] = useInView(0)));
	act(() => scroll(1300));
	expect(inView).toBe(false);
});
