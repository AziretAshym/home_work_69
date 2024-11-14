import React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { useAppSelector } from '../../app/hooks.ts';
import { NavLink } from 'react-router-dom';


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
          <NavLink to={`/shows/${show.id}`}>
            <Card key={show.id} sx={{ display: 'flex', flexDirection: "column", width: "230px" }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                <CardContent >
                  <Typography variant="h4">
                    {show.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Genre: {show.genres.join(', ')}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </NavLink>
        ))}
      </Grid>
    </>
  );
};

export default Shows;