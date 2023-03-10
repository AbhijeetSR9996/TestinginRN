// import 'react-native';
// import React from 'react';
// import App from '../App';
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

import React from "react";
import renderer from "react-test-renderer";
import App from "../App"
describe("<App />", () => {
    it('has 1 child', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree.children.length).toBe(1);
    });
});
