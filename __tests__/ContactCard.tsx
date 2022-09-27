import ContactCard from "../src/components/atoms/ContactCard";
import { shallow } from "enzyme";

describe("ContactCard", () => {
  it("contain ContactCard component props", () => {
    const wrapper = shallow(
      <ContactCard
        account="GitHub"
        id="Taito-Code"
        url="https://github.com/Taito-Code"
      />
    );

    expect(wrapper.find("p").at(0).text()).toEqual("GitHub");
  });
});
