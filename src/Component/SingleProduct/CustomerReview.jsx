import styled from "@emotion/styled";
import { Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import {
  uniqueNamesGenerator,
  starWars,
  countries,
} from "unique-names-generator";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#00e9bf",
    fontSize: "18px",
  },
});

const configName = {
  dictionaries: [starWars],
  style: "capital",
  separator: " ",
};
const configPlace = {
  dictionaries: [countries],
  style: "capital",
  separator: " ",
};

function CustomerReview({ review }) {
  const uniqueName = uniqueNamesGenerator(configName);
  const uniquePlace = uniqueNamesGenerator(configPlace);
  // console.log(uniqueName);
  // console.log(uniquePlace);
  return (
    <Box component="div" id="customerReviewRatingBox" sx={{ margin: "1rem 0" }}>
      <Box
        component="div"
        id="customerRating"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Typography
          variant="body1"
          component="div"
          sx={{ fontWeight: "700", padding: "5px 10px" }}
        >
          {uniqueName}, {uniquePlace}
        </Typography>
      </Box>

      <Box
        component="div"
        id="customerRating"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <StyledRating
          defaultValue={review.ratings}
          readOnly
          sx={{ alignItems: "center", padding: "5px 10px" }}
        />
        <Typography component="div" sx={{ fontSize: "16px" }}>
          {" "}
          ({review.ratings.toFixed(1)}){" "}
        </Typography>
      </Box>

      <Box
        component="div"
        id="customerReview"
        sx={{ display: "flex", alignItems: "center", padding: "5px 10px" }}
      >
        <Typography> {review.text} </Typography>
      </Box>
    </Box>
  );
}

export default CustomerReview;
