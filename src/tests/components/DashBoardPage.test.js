import React from "react";
import { shallow } from "enzyme";
import DashBoardPage from '../../Components/DashBoardPage';

test('should render DashBoardPage page',()=>{
  const wrapper = shallow(<DashBoardPage />)
  expect(wrapper).toMatchSnapshot();
});