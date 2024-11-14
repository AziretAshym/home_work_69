import React from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useAppSelector } from '../../app/hooks.ts';


const Shows = () => {

  const shows = useAppSelector((state) => state.show.shows);

  if (shows.length <= 0) {
    return (
      <Typography>There is no show with this name</Typography>
    )
  }

  return (
    <>
      <Grid container spacing={4} gap={5} mx={"auto"}>
        {shows.map((show) => (
          <Card key={show.id} sx={{ display: 'flex', flexDirection: "column", width: "230px" }}>
            <CardMedia
              component="img"
              sx={{ width: 200, mx: "auto", marginTop: "15px" }}
              image={show.image?.medium}
              alt={show.name}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent >
                <Typography variant="h5">
                  {show.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Genre: {show.genres.join(', ')}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default Shows;