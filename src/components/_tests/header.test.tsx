import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";
import useValidationsFavoritePage from "../../hooks/useRedirectFavoritePage";
import { vi } from "vitest";

// Mock the hook
vi.mock("../../hooks/useRedirectFavoritePage");

describe("Header Component", () => {

  it("should render the Header component", () => {    
    // Mock the redirectFavoritePage function
    const mockRedirectFavoritePage = vi.fn();
    (useValidationsFavoritePage as jest.Mock).mockReturnValue({
      redirectFavoritePage: mockRedirectFavoritePage,
    });

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Check if SearchUsersInput is rendered
    expect(screen.getByRole("textbox")).toBeInTheDocument();

    // Check if the button is rendered with the correct text
    const button = screen.getByRole("button", { name: /favoritos/i });
    expect(button).toBeInTheDocument();

    // Check if the FaRegHeart icon is rendered
    expect(screen.getByTestId("fa-reg-heart")).toBeInTheDocument();
  });

  it("should call redirectFavoritePage when the button is clicked", () => {
    const mockRedirectFavoritePage = vi.fn();
    (useValidationsFavoritePage as jest.Mock).mockReturnValue({
      redirectFavoritePage: mockRedirectFavoritePage,
    });

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /favoritos/i });
    button.click();

    expect(mockRedirectFavoritePage).toHaveBeenCalled();
  });
});
