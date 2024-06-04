import { Dispatch } from "react";

export type Movie = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<{ source: string; value: string }>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: boolean;
};

export type MoviePreview = {
  Title: string;
  Year: string;
  Poster: string;
  Ratings: Array<{ source: string; value: string }>;
  imdbID: string;
  Type: string;
};

export type MovieSearch = {
  Search: MoviePreview[];
  totalResults: string;
  Response: string;
};

export type QueryType = "s" | "i" | "t";

export type OmdbError = {
  Error: string;
  Response: false;
};

export type NewUser = {
  pseudo: string;
  email: string;
  dateOfBirth: Date;
};

export type User = {
  pseudo: string;
  _id: string;
};

export type UserContextType = {
  user: User | User;
  setUser: Dispatch<React.SetStateAction<User | null>>;
};

export type MovieSimple = {
  title: string;
  poster: string;
};
