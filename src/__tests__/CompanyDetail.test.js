import React from "react";
import { shallow } from "enzyme";
import { expect } from "jest";
import { CompanyDetail } from "../components/CompanyDetail";

describe("<CompanyDetail />", () => {
  it.skip("should render without throwing an error", () => {

    const wrapper = shallow(
      <CompanyDetail
        companyName= 'test'
        symbol= 'test'
        exchange= 'test'
        description= 'test'
        website= 'test'
      />
    )
    expect(wrapper.find("h1")).toHaveLength(1);
  });

});


