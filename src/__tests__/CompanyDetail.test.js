import React from "react";
import { shallow } from "enzyme";
import { CompanyDetail } from "../components/CompanyDetail";

describe("<CompanyDetail />", () => {
  it("should render without throwing an error", () => {
    const props = {
      companyName: 'test',
      symbol: 'test',
      exchange: 'test',
      description: 'test',
      website: 'test'
    }
  
    const wrapper = shallow(<CompanyDetail{...props}/>)
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find("h3")).toHaveLength(2);
  });

});


