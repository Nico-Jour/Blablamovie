import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router";
import PropertyLine from "../Components/PropertyLine";
import useMovieDetails from "../Hooks/useMovieDetails";
import { Movie } from "../types";

const propertyToDisplay: (keyof Movie)[] = [
  "Title",
  "Year",
  "Rated",
  "Released",
  "Runtime",
  "Genre",
  "Director",
  "Writer",
  "Actors",
  "Plot",
  "Language",
  "Country",
  "Awards",
  "Metascore",
  "Type",
  "DVD",
  "Production",
  "Website",
];

export default function MovieDetails() {
  const { id } = useParams();
  const { movie, loading, error } = useMovieDetails(id as unknown as string);

  return (
    <Container>
      {loading || !movie ? (
        <Typography>{error ? error.message : "Loading"}</Typography>
      ) : (
        <Box display={"flex"} justifyContent={"space-between"} gap={6}>
          <Box>
            <img src={movie.Poster} />
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            {propertyToDisplay.map((property) => (
              <PropertyLine
                property={property}
                value={movie[property] as string}
                key={property}
              />
            ))}
          </Box>
        </Box>
      )}
    </Container>
  );
}
