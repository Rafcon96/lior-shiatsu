import { Grid, Typography } from "@mui/material";
import React from "react";
import { useLang } from "../../context/language.context";
// import Testimonial from "../../components/Testimonial";

const res = {
  title: ["מחירון לשעת טיפול", "price for hour of treatment"],
  header: {
    title: ["טיפול", "treatment"],
    price1: ["מחיר רגיל", "Reguler Price"],
    price2: ["מחיר", "discount Price"],
  },
};
const itemRes = [
  { title: ["שיאצו ודיקור /שיאצו", "Shiatsu"], price1: 300, price2: 280 },
  // {title:["שיאצו ודיקור", "shiatsu & acupuncture"],price1:300,price2:280},
  {
    title: ["עיסוי / עיסוי משולב", "massage / massage with other"],
    price1: 350,
    price2: 300,
  },
  { title: ["טיפול עד הבית", "house treatment"], price1: 400, price2: 350 },
];

export default function Prices() {
  const { language } = useLang();
  const row = (res) => {
    return (
      <Grid
        container
        justifyContent={"center"}
        alignItems={"flex-start"}
        sx={{ maxHeight: "100px" }}
        dir="ltr"
      >
        <Grid xs={4} item sx={{ order: language ? 1 : 3 }}>
          <Typography
            variant="h6"
            align={"center"}
            textAlign={"center"}
            alignContent={"center"}
            justifyContent={"center"}
            sx={{
              p: 2,
              display: "flex",

              fontFamily: "Amatic SC",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              fontSize: "clamp(1rem, 2.5vw, 2rem)",
            }}
          >
            {res.title[Number(language)]}
          </Typography>
        </Grid>
        <Grid xs={4} item sx={{ order: 2 }}>
          <Typography
            variant="h6"
            align={"center"}
            textAlign={"center"}
            alignContent={"center"}
            justifyContent={"center"}
            sx={{
              m: 2,
              display: "flex",

              fontFamily: "Amatic SC",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "line-through",
              fontSize: "clamp(1rem, 2.5vw, 2rem)",
            }}
          >
            {res.price1}
          </Typography>
        </Grid>
        <Grid xs={4} item sx={{ order: language ? 3 : 1 }}>
          <Typography
            variant="h6"
            align={"center"}
            textAlign={"center"}
            alignContent={"center"}
            justifyContent={"center"}
            sx={{
              p: 2,
              display: "flex",

              fontFamily: "Amatic SC",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              fontSize: "clamp(1rem, 2.5vw, 2rem)",
            }}
          >
            {res.price2}
          </Typography>
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid container justifyContent={"center"} dir="ltr" minHeight={"100vh"}>
      <Grid container>
        <Grid
          item
          container
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ maxHeight: 100 }}
        >
          <Typography
            variant="h2"
            align={"center"}
            textAlign={"center"}
            alignContent={"center"}
            justifyContent={"center"}
            sx={{
              p: 2,
              display: "flex",
              fontFamily: "Amatic SC",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              fontSize: "clamp(2rem, 2.5vw, 2.5rem)",
            }}
          >
            {res.title[Number(language)]}
          </Typography>
        </Grid>
        <Grid container sx={{}}>
          <Grid xs={4} item sx={{ order: language ? 0 : 2 }}>
            <Typography
              variant="h6"
              align={"center"}
              textAlign={"center"}
              alignContent={"center"}
              justifyContent={"center"}
              sx={{
                m: 2,
                display: "flex",
                fontFamily: "Amatic SC",
                fontWeight: 700,

                color: "inherit",
                textDecoration: "none",
                fontSize: "clamp(1rem, 2.5vw, 2rem)",
              }}
            >
              {res.header.title[Number(language)]}
            </Typography>
          </Grid>
          <Grid xs={4} item sx={{ order: 1 }}>
            <Typography
              variant="h6"
              align={"center"}
              textAlign={"center"}
              alignContent={"center"}
              justifyContent={"center"}
              sx={{
                m: 2,
                display: "flex",

                fontFamily: "Amatic SC",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
                fontSize: "clamp(1rem, 2.5vw, 2rem)",
              }}
            >
              {res.header.price1[Number(language)]}
            </Typography>
          </Grid>
          <Grid xs={4} item sx={{ order: language ? 2 : 0 }}>
            <Typography
              variant="h6"
              align={"center"}
              textAlign={"center"}
              alignContent={"center"}
              justifyContent={"center"}
              sx={{
                m: 2,
                display: "flex",
                fontFamily: "Amatic SC",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
                fontSize: "clamp(1rem, 2.5vw, 2rem)",
              }}
            >
              {res.header.price2[Number(language)]}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ borderBottom: "1px solid black", order: 2, maxHeight: "2px" }}
          justifyContent={"center"}
        ></Grid>
      </Grid>
      <Grid container>
        {itemRes.map((item, index) => (
          <Grid
            container
            justifyContent={"center"}
            sx={{ maxHeight: 100 }}
            order={index + 3}
            key={index}
          >
            {row(item)}
          </Grid>
        ))}
      </Grid>
      {/* <Grid container justifyContent={"flex-end"} sx={{ padding: 5 }}>
        <Grid container justifyContent={"flex-end"}>
          בעקבות המצב *
        </Grid>
        <Grid container justifyContent={"flex-end"}>
          לתושבי העוטף ונפגעי נובה{" "}
        </Grid>
        <Grid>הטיפול ללא עלות, או כראות עינכם</Grid>
      </Grid> */}
    </Grid>
  );
}
