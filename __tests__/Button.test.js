import React from "react";
import Enzyme from 'enzyme';
import SearchButton from "../components/Button";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';




Enzyme.configure({adapter: new Adapter()});

describe("SearchButton", () => {
    it("should render properly", () => {
        const app = renderer.create(<SearchButton />);
        expect(app).toMatchSnapshot();
    });
    it('Should render the stock search form', () =>{
        const wrapper = shallow(<SearchButton />)
        expect(wrapper.find('form[id="form"]').exists()).toBe(true);
    })
    it('the default value should be empty', () => {
		const wrapper = shallow(<SearchButton />)
		expect(wrapper.find('input[id="search"]').prop('value')).toBe();
	})

    it('on change of value in the field, the state of that field in the component should be updated', () => {
		const wrapper = shallow(<SearchButton />)
		expect(wrapper.find('input[id="search"]').simulate('change', {
			target: {
				value: 'test',
			},
        })
        )
    })

    it('Should render the stock search button', () =>{
        const wrapper = shallow(<SearchButton/>)
        expect(wrapper.find('[id="searchbutton"]').exists()).toBe(true);
    })

    it('On submitting, a click handler function should be triggered on click event', () =>{
        const fn = jest.fn();
        const wrapper = shallow(<SearchButton onClick={fn}/>);
        wrapper.find('[id="searchbutton"]').at(0).simulate('click');
        expect(fn).toHaveBeenCalled();
    })
});
