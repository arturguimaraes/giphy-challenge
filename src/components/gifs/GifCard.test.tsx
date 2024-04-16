import { render, screen } from "@testing-library/react";
import GifCard from "./GifCard";
import { Gif } from "../../utils/types";

const mockGif: Gif = {
  type: "test",
  id: "test",
  url: "test",
  slug: "test",
  bitly_gif_url: "test",
  bitly_url: "test",
  embed_url: "test",
  username: "test",
  source: "test",
  title: "test",
  rating: "test",
  import_datetime: "test",
  trending_datetime: "test",
  images: {
    preview_gif: {
      height: 0,
      width: 0,
      size: 0,
      url: "test",
    },
  },
};

describe("GifCard", () => {
  test("gif card renders gif title", () => {
    render(<GifCard gif={mockGif} />);
    const gifSlug = screen.getByText(mockGif.slug);
    expect(gifSlug).toBeInTheDocument();
    expect(gifSlug.textContent).toBe(mockGif.slug);
  });

  test("gif card renders gif image", () => {
    render(<GifCard gif={mockGif} />);
    const gifImg = screen.getByRole("img");
    expect(gifImg).toBeInTheDocument();
  });
});
