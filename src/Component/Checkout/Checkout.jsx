import { Box, Grid, Stack, TextField } from "@mui/material";
import React from "react";

function Checkout() {
  return (
    <Box
      flexGrow={1}
      component="div"
      sx={{
        paddingTop: "6rem",
        width: "100vw",
        color: "black",
        backgroundColor: "#f9f9f9!important",
      }}
    >
      <Box component="form">
        <Stack>
          {/* name phone no */}
          <Box component="div">
            <Grid container>
              <Grid item>
                <TextField />
              </Grid>
              <Grid item>
                <TextField />
              </Grid>
            </Grid>
          </Box>
          {/* Address details as heading */}
          <Box>Address details as heading</Box>
          {/* address nickname and pincode as grid flex item 6/12 and 6/12 */}
          <Box>
            address nickname and pincode as grid flex item 6/12 and 6/12
          </Box>
          {/* address (flatNo, building, etc) and landmark as grid flex item 6/12
            and 6/12 */}
          <Box>
            address (flatNo, building, etc) and landmark as grid flex item 6/12
            and 6/12
          </Box>
          {/* locality/sector/area as grid flex item 12 always */}
          <Box>locality/sector/area as grid flex item 12 always</Box>
          {/* state and city as grid flex item 6/12 and 6/12 */}
          <Box>state and city as grid flex item 6/12 and 6/12</Box>
          {/* 3 buttons address type : home, work, other  */}
          <Box>3 buttons address type : home, work, other </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default Checkout;
