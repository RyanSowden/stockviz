import React from "react";
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import SearchFunction from '../components/SearchFunction'



Enzyme.configure({adapter: new Adapter()});

describe("SearchFunction", () => {
    it("should render properly", () => {
        const app = renderer.create(<SearchFunction />);
        expect(app).toMatchSnapshot();
    });

})
