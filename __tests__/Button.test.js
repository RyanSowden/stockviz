import React from "react";
import Button from './Button';
import Adaptor from '@wojtekmaj/enzyme-adapter-react-17';
import renderer from 'react-test-renderer';
import { EnzymeAdapter } from "enzyme/build";

Enzyme.configure({adapter: new Adaptor()});

describe("Button", () => {
    it("should render properly", () => {
        const app = renderer.create(<Button />);
        expect(app.toMatchSnapshot());
    });
});
