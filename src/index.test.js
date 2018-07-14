import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import CKEditor from './index';


require('mutationobserver-shim');


configure({ adapter: new Adapter() });
let spy;


function setup(customProps, lifeCycle = false) {
	CKEditor.prototype.componentDidMount = jest.fn()
	const props = {
		...customProps
	}
	const container = shallow(<CKEditor {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('CKEditor component', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true);
	});


	it('should not update component', () => {
		const { container } = setup({ empty: true, value: 1 })
		const shouldUpdate = container
			.instance()
			.shouldComponentUpdate({ empty: false, value: 3 })
		expect(shouldUpdate).toBe(true)
	});

	it('should update component', () => {
		const { container } = setup({ empty: true, value: 1 })
		const shouldUpdate = container
			.instance()
			.shouldComponentUpdate({ empty: true, value: 1 })
		expect(shouldUpdate).toBe(false)
	});


	it('should has text area', () => {
		const { container } = setup()
		expect(container.find('textarea').length).toEqual(1)
	});

	it('should has required class', () => {
		const { container } = setup()
		expect(container.find('.form-group').length).toEqual(1)
		expect(container.find('.form-control').length).toEqual(1)
	});

	it('should componentDidUpdate called', () => {
		const { container } = setup()
		spy = jest
			.spyOn(CKEditor.prototype, 'componentDidUpdate')
			.mockImplementation(() => true)
		container.setProps({ empty: true, value: 1 })
		expect(spy).toHaveBeenCalled();
	});

	it('should set data to empty', () => {
		const { container } = setup()
		CKEditor.prototype.editor = { setData: jest.fn() }
		spy = jest
			.spyOn(CKEditor.prototype, 'componentDidUpdate')
		container.setProps({ empty: true })
		expect(spy).toHaveBeenCalled();
		spy.mockReset();
		spy.mockRestore();
	});

	it('should set data from value', () => {
		const { container } = setup({ commentId: 1, value: 'some' })
		CKEditor.prototype.editor = { setData: jest.fn() }
		spy = jest
			.spyOn(CKEditor.prototype, 'componentDidUpdate')
		container.setProps({ value: 'another' })
		expect(spy).toHaveBeenCalled();
		spy.mockReset();
		spy.mockRestore();
	});

	it('should set data from value (date)', () => {
		const { container } = setup({ date: '123' })
		CKEditor.prototype.editor = { setData: jest.fn() }
		spy = jest
			.spyOn(CKEditor.prototype, 'componentDidUpdate')
		container.setProps({ date: '321', value: 'some' })
		expect(spy).toHaveBeenCalled();
		spy.mockReset();
		spy.mockRestore();
	});

});
