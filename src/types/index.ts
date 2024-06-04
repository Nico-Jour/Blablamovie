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
