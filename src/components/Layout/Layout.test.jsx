import userEvent from "@testing-library/user-event";
import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import Layout from "./Layout";

it("Should render layout with children", () => {
  const { container } = customRender(
    <Layout>
      <p>some content</p>
    </Layout>
  );

  expect(container).toMatchSnapshot();
});

it("should render the correct page title when clicking", () => {
  customRender(<Layout />);

  const dashBoard = screen.queryAllByText("Dashboard")[0];
  userEvent.click(dashBoard);

  const pageTitle = screen.getAllByRole("heading", { level: 1 })[0];

  expect(pageTitle.innerHTML).toBe("Dashboard");
});

it("when clicking the marketplace on navbar, the title should be the same", () => {
  customRender(<Layout />);

  const marketPlace = screen.queryAllByText("Marketplace")[0];
  userEvent.click(marketPlace);

  const pageTitle = screen.getAllByRole("heading", { level: 1 })[0];

  expect(pageTitle.innerHTML).toBe("Marketplace");
});
