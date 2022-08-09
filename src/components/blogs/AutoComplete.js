import React, { useEffect, useState } from "react";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useSelector } from "react-redux";
function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
function AutoComplete({ setAuthorName, authorName }) {
  const { authors } = useSelector((state) => state.authorsState);
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const autoLoading = open && options.length === 0;
  useEffect(() => {
    let active = true;
    if (!autoLoading) return undefined;
    (async () => {
      await sleep(1e3);
      if (active) {
        setOptions([...authors.authors]);
      }
    })();

    return () => {
      active = false;
    };
  }, [autoLoading]);
  const changeHandler = (_, value) => {
    value?.name ? setAuthorName(value.name) : setAuthorName("");
  };
  useEffect(() => {
    setOptions([]);
  }, [open]);
  return (
    <Autocomplete
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={autoLoading}
      onChange={changeHandler}
      renderInput={(params) => (
        <TextField
          {...params}
          label="نویسنده مقاله"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {autoLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

export default AutoComplete;
