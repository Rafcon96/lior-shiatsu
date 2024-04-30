import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Rating from "@mui/material/Rating";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { IconButton } from "@mui/material";

const Testimonial = ({ name, testimonial, avatar, rating = 5 }) => {
  return (
    <Card
      sx={{ maxWidth: 500 }}
      style={{
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        height: "100%",
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ bgcolor: "secondary.main" }}>{avatar}</Avatar>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <IconButton sx={{ backgroundColor: "rgba(235, 158, 52,0.7)" }}>
            <FormatQuoteIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          {testimonial}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Rating name="read-only" value={rating} readOnly />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
