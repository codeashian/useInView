import React from 'react';
import useInView from '.';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {mount} from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

const TestComponent = () => {
	const [ref, inView] = useInView(0);
	return (
		<div data-inview={inView} ref={ref}>
			{inView.toString()}
		</div>
	);
};

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
describe('useInViewHook', () => {
	let wrapper;

	beforeEach(() => {
		window.innerHeight = 1000;
		window.pageYOffset = 0;
		wrapper = mount(<TestComponent />);
	});

	it('should be in view', () => {
		setElementTopPos(500);
		expect(wrapper.text()).toBe('true');
	});
});
