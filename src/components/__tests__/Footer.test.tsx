import { mount, shallow } from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Footer from '../Footer';

describe('Footer component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render footer HTML element', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find('footer').length).toBe(1);
  });

  it('should contain actual year in the copyright text', () => {
    const wrapper = mount(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      wrapper
        .find('p')
        .html()
        .indexOf(currentYear.toString())
    ).toBeTruthy();
  });
});
