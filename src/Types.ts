/**
 * Game Type
 *
 * Represents the structure of a video game object.
 */
export type Game = {
  id: number;
  name: string;
  rating: string;
  released: string;
  background_image: string;
  ratings: { id: string; title: string; count: number; percent: number }[];
  esrb_rating: { id: number; name: string; slug: string };
  website: string;
  description_raw: string;
  developers: { name: string };
  playtime: string;
};
