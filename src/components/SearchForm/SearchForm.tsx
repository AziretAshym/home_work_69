import React, { useState } from 'react';
import IShow from '../../types';
import { FormControl, Input, InputLabel, Typography } from '@mui/material';
import { fetchShows } from '../../store/thunks/shows/showsThunks.ts';
import { useAppDispatch } from '../../app/hooks.ts';


const SearchForm = () => {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState<IShow>('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setShow(value);

    if (value) dispatch(fetchShows(value));
  };


  return (
    <>
      <Typography
        sx={{textAlign: "center",
          fontSize: "34px",
          fontWeight: "700",
          marginBottom: "50px"}}
      >
        TV Show Center
      </Typography>
      <FormControl fullWidth>
        <InputLabel htmlFor="show-input">Enter show name</InputLabel>
        <Input
          id="show-input"
          type="text"
          name="title"
          value={show}
          onChange={onChangeInput}

        />
      </FormControl>
    </>
  );
};

export default SearchForm;