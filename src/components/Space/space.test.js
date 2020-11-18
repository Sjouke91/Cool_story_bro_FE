import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

import Space from "../Space";

const props = {
  id: 9,
  title: "this is test",
  description: "testing all",
  showLink: true,
  color: "#FFFFFF",
  backgroundColor: "#FFFFFF",
};

// describe("<Space >", () => {
//   test("should render without props", () => {
//     const component = renderer.create(<Space />); // "render" the component
//     const tree = component.toJSON(); // Convert it to JSON
//     expect(tree).toMatchSnapshot(); // Compare to stored snapshot
//   });
// });

// describe("<Space >", () => {
//   test("should render with props", () => {
//     const component = renderer.create(<Space {...props} />); // "render" the component
//     const tree = component.toJSON(); // Convert it to JSON
//     expect(tree).toMatchSnapshot(); // Compare to stored snapshot
//   });
// });

describe("<Space >", () => {
  test("should render with props and link to true", () => {
    const component = renderer.create(
      <MemoryRouter>
        <Space {...props} />
      </MemoryRouter>
    ); // "render" the component
    const tree = component.toJSON(); // Convert it to JSON
    expect(tree).toMatchSnapshot(); // Compare to stored snapshot
  });
});
