import React, { useState } from "react";
import IShow from "../../types";
import { FormControl, Input, InputLabel, Typography } from "@mui/material";
import { fetchShows } from "../../store/thunks/shows/showsThunks.ts";
import { useAppDispatch } from "../../app/hooks.ts";
import Shows from "../Shows/Shows.tsx";

const SearchForm = () => {
  const dispatch = useAppDispatch();
  const [shows, setShows] = useState<IShow>("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setShows(value);

    if (value) {
      dispatch(fetchShows(value));
    }
  };

  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "34px",
          fontWeight: "700",
          marginBottom: "50px",
        }}
      >
        TV Show Center
      </Typography>
      <FormControl fullWidth sx={{ marginBottom: "60px" }}>
        <InputLabel htmlFor="show-input">Enter show name</InputLabel>
        <Input
          id="show-input"
          type="text"
          name="title"
          value={shows}
          onChange={onChangeInput}
        />
      </FormControl>
      <Shows shows={shows} />
    </>
  );
};

export default SearchForm;
