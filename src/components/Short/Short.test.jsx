// Short.test.jsx
import { render, screen } from "@testing-library/react";
import Short from "./Short.jsx";
import { customRender } from "../../utils/testUtils";

it("Should match the snapshot, with the props", () => {
  const { container } = customRender(
    <Short shortLabelText={"label"} shortPlaceHolderText={"placeholder"} />
  );
  expect(container).toMatchSnapshot();
});

it("Should render in the Short input box", () => {
  // 1. Arrange
  render(<Short />);
  // 2. Act
  const input = screen.getByRole("textbox");
  // 3. Assert
  expect(input).toBeInTheDocument();
  //comment
});

it("Should render the Short label", () => {
  render(<Short shortLabelText="Label Text!" />);
  const label = screen.getByText("Label Text!");
  expect(label).toBeInTheDocument();
});
