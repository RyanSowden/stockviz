import Enzyme, {configure} from 'enzyme';
import Header from "../components/Header";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import Dashboard from '../pages/Dashboard';
import SearchFunction from '../components/SearchFunction';
import Graph from '../components/Graph';

configure({adapter: new Adapter() });

it("renders without crashing", () => {
	shallow(<Dashboard />);
})

it("renders Header component", () => {
	const wrapper = shallow(<Dashboard />);
	expect(wrapper.find(Header).length).toEqual(1);
});

it("renders SearchFucntion component", () => {
	const wrapper = shallow(<Dashboard />);
	expect(wrapper.find(SearchFunction).length).toEqual(1);
});

it("renders Graph component", () => {
	const wrapper = shallow(<Dashboard />);
	expect(wrapper.find(Graph).length).toEqual(1);
});

const ticker = "tsla"

describe ("Testing the ticker prop",() => {
	it("acceppts the ticker props", () => {
		const wrapper = mount(<Header ticker={ticker} />);
		expect(wrapper.props().ticker).toEqual(ticker);
	});

	it("contains the ticker", () => {
		const wrapper = mount(<Header ticker={ticker} />);
		expect(ticker).toEqual('tsla');

	});
});
