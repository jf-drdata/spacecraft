import { render, screen } from "@testing-library/react-native";

import Header from "~/components/Header";

describe("Header", () => {
  it("renders correctly", () => {
    render(<Header title="SpaceCraft" />);

    screen.getByText("SpaceCraft");
  });
});
