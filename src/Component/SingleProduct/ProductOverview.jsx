import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ProductOverview({ productDetails }) {
  return (
    <Box
      component="div"
      id="overview"
      sx={{
        marginTop: 5,
        border: "1px solid #3d3a3a",
        borderRadius: 1,
      }}
    >
      <Accordion
        defaultExpanded
        sx={{
          backgroundColor: "transparent",
          color: "inherit",
          "& > .MuiSvgIcon-root": {
            backgroundColor: "transparent",
            color: "inherit",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="productOverview"
          id="productOverview"
        >
          <Typography variant="h5" component="div" sx={{ fontWeight: "500", fontSize: {lg: "2rem", md: "1.75rem", sm: "1.5rem", xs: "1.25rem"} }}>
            Overview
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            component="div"
            sx={{ padding: "1rem", fontSize: {lg: "16px", md: "16px", sm: "12px", xs: "12px"} }}
            dangerouslySetInnerHTML={{ __html: productDetails?.description }}
          ></Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default ProductOverview;
