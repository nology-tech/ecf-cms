import PathwaysListContainer from "./PathwaysListContainer.jsx";
import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import { BrowserRouter } from "react-router-dom";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

let collection = [
  {
    id: `kjsvswkvfsihvds`,
    header: `Financial Forest`,
    category: "Finance",
    skillsTree: {
      name: "An introduction",
      icon: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fplay.svg?alt=media&token=153dc79c-6017-46e7-a185-c05dfe45b810",
      children: [
        {
          name: "Commercial Banking",
          icon: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fbarclays.svg?alt=media&token=eccb46a6-a98b-4a54-a04c-629d9745f1b7",
          provider: "Barclays",
          children: [
            {
              name: "Investing",
              provider: "Goldman Sachs",
              icon: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fgoldman-sachs.svg?alt=media&token=2d816518-5b94-45d5-8d53-0c2e8b399960",
            },
            {
              name: "Welcome to HSBC",
              provider: "HSBC",
              icon: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fhsbc.svg?alt=media&token=f568f1fc-ade3-4bbf-9aee-1dc841cce600",
              children: [
                {
                  name: "Accounting Santander",
                  provider: "Santander",
                  icon: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fsantander.svg?alt=media&token=4be9b1c3-9230-4559-89eb-4fc13b219f08",
                },
              ],
            },
            {
              name: "Accounting",
              provider: "Halifax",
              icon: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fhalifax.svg?alt=media&token=0b431ade-cb19-4cc1-bc7d-b4d4456146a0",
            },
          ],
        },
      ],
    },
  },
  {
    id: `kjsvswkvfsihvghfj`,
    header: `Business Bonanza`,
    category: "Programming",
    skillsTree: {
      name: "An introduction",
      icon: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fplay.svg?alt=media&token=153dc79c-6017-46e7-a185-c05dfe45b810",
      children: [
        {
          name: "Commercial Banking",
          icon: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fbarclays.svg?alt=media&token=eccb46a6-a98b-4a54-a04c-629d9745f1b7",
          provider: "Barclays",
          children: [
            {
              name: "Investing",
              provider: "HSBC",
              icon: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fhsbc.svg?alt=media&token=f568f1fc-ade3-4bbf-9aee-1dc841cce600",
            },
            {
              name: "Welcome to HSBC",
              provider: "Goldman Sachs",
              icon: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fgoldman-sachs.svg?alt=media&token=2d816518-5b94-45d5-8d53-0c2e8b399960",
              children: [
                {
                  name: "Accounting Santander",
                  provider: "Halifax",
                  icon: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fhalifax.svg?alt=media&token=0b431ade-cb19-4cc1-bc7d-b4d4456146a0",
                },
              ],
            },
            {
              name: "Accounting",
              provider: "Santander",
              icon: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fsantander.svg?alt=media&token=4be9b1c3-9230-4559-89eb-4fc13b219f08",
            },
          ],
        },
      ],
    },
  },
];

it("it should match the snapshot with props", () => {
  const { container } = customRender(
    <PathwaysListContainer dataJSON={collection} />
  );
  expect(container).toMatchSnapshot();
});

it("Should render the first row", () => {
  render(<PathwaysListContainer dataJSON={collection} />, {
    wrapper: BrowserRouter,
  });
  const pathwayName = screen.getByText("Financial Forest");
  const category = screen.getByText("FINANCE");
  expect(pathwayName).toBeInTheDocument();
  expect(category).toBeInTheDocument();
});

it("Should render the second row", () => {
  render(<PathwaysListContainer dataJSON={collection} />, {
    wrapper: BrowserRouter,
  });
  const pathwayName = screen.getByText("Business Bonanza");
  const category = screen.getByText("PROGRAMMING");
  expect(pathwayName).toBeInTheDocument();
  expect(category).toBeInTheDocument();
});
