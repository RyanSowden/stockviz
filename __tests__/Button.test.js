import React from "react";
import Enzyme from 'enzyme';
import Header from "../components/Header";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import Dashboard from '../pages/Dashboard';




Enzyme.configure({adapter: new Adapter()});

describe("SearchButton", () => {
    it("should render properly", () => {
        const app = renderer.create(<Header />);
        expect(app).toMatchSnapshot();
    });
    it('Should render the stock search form', () =>{
        const wrapper = shallow(<Header />)
        expect(wrapper.find('form[id="form"]').exists()).toBe(true);
    })
    it('the default value should be empty', () => {
		const wrapper = shallow(<Header />)
		expect(wrapper.find('input[id="search"]').prop('value')).toBe();
	})

    it('on change of value in the field, the state of that field in the component should be updated', () => {
		const wrapper = shallow(<Header/>)
		expect(wrapper.find('input[id="search"]').simulate('change', {
			target: {
				value: 'test',
			},
        })
        )
    })

    it('Should render the stock search button', () =>{
        const wrapper = shallow(<Header/>)
        expect(wrapper.find('[id="searchbutton"]').exists()).toBe(true);
    })

});
