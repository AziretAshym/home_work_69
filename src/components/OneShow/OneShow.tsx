import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { fetchOneShow } from "../../store/thunks/shows/showsThunks.ts";

const OneShow = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const selectedShow = useAppSelector((state) => state.show.selectedShow);

  useEffect(() => {
    if (id) dispatch(fetchOneShow(id));
  }, [dispatch, id]);

  const HtmlContent = ({ htmlContent }) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };

  return (
    <>
      <Container>
        <Box>
          {selectedShow ? (
            <>
              <Card
                key={selectedShow.id}
                sx={{
                  width: "500px",
                  paddingX: "50px",
                  paddingY: "40px",
                  marginTop: "90px",
                  mx: "auto",
                }}
              >
                <Typography variant="h4" sx={{ textAlign: "center" }}>
                  {selectedShow.name}
                </Typography>
                <CardMedia
                  component="img"
                  sx={{ width: 200, mx: "auto", marginY: "25px" }}
                  image={selectedShow.image?.medium}
                  alt={selectedShow.name}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="subtitle1">
                    <strong>Premiered:</strong> {selectedShow.premiered}
                  </Typography>
                  <Typography variant="subtitle1">
                    <strong>Genres:</strong> {selectedShow.genres.join(", ")}
                  </Typography>
                  <Typography variant="subtitle1">
                    <strong>Runtime:</strong> {selectedShow.runtime} min.
                  </Typography>
                  <HtmlContent htmlContent={selectedShow.summary} />
                </CardContent>
              </Card>
            </>
          ) : (
            <Typography>Show not found.</Typography>
          )}
        </Box>
      </Container>
    </>
  );
};

export default OneShow;
