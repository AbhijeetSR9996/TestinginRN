import AppButton from "../AppButton";
import renderer from 'react-test-renderer';

it('renders correctly across screens', () => {
    const tree = renderer.create(<AppButton/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  