export interface Image {
  height: number;
  width: number;
  size: number;
  url: string;
}

export interface Gif {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  import_datetime: string;
  trending_datetime: string;
  images: {
    preview_gif: Image;
  };
}
