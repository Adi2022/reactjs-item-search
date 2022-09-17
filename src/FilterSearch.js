import { Grid, Typography, TextField } from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "./Context";
import Tabel from "./Tabel";
const FilterSearch = () => {
  const [query, setQuery] = useState("");
  
  const { usersData } = useContext(AppContext);
  console.log(usersData)
  const styles = {
    banner: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      marginTop: "3%",
    },
    heading: {
      marginTop: "3%",
      marginBottom: "3%",
      fontSize: "3rem",
      fontWeight: "bold",
    },
  };
 

  return (
    <Grid container sx={styles.banner}>
      <Grid item xs={12} md={12}>
        <Typography sx={styles.heading}>Search Items</Typography>
        <TextField
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search...."
          style={{ width: "50%" }}
        />
        {usersData.filter(user => user.name.toLowerCase().includes(query)).map((mydata) => (
          <Typography key={mydata.id} style={{ marginTop: "4%" }}>
            {mydata.name}
          </Typography>
        ))}

        <Tabel data={usersData.filter(user => user.name.toLowerCase().includes(query)||user.username.toLowerCase().includes(query)||user.email.toLowerCase().includes(query))} />
      </Grid>
    </Grid>
  );
};

export default FilterSearch;
