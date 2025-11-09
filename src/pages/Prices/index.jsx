import { Grid, Typography, Box, Paper } from "@mui/material";
import React from "react";
import { useLang } from "../../context/language.context";
// import Testimonial from "../../components/Testimonial";

const res = {
  title: ["מחירון טיפולים", "Price For Treatments"],
  subtitle: [
    "בחרו את הטיפול המתאים לכם וקבלו חוויית ריפוי מלאה.",
    "Choose the session that fits you and enjoy a full healing experience.",
  ],
};
const itemRes = [
  {
    title: ["עיסוי", "Massage"],
    description: [
      "טיפול המשלב טכניקות שונות של עיסוי שוודי, רקמות עמוקות, שיאצו ועוד.\nכ-70 דקות טיפול.",
      "A session blending Swedish, deep-tissue, shiatsu, and additional massage techniques.\nApprox. 70 minutes.",
    ],
    price: 300,
  },
  {
    title: ["עיסוי משולב", "Combo Massage"],
    description: [
      "טיפול המשלב טכניקות שונות של עיסוי שוודי, רקמות עמוקות, שיאצו ועוד.\nכ-85 דקות טיפול.",
      "An extended session blending Swedish, deep-tissue, shiatsu, and other therapeutic modalities.\nApprox. 85 minutes.",
    ],
    price: 350,
  },
  {
    title: ["טיפול עד הבית", "Home Treatment"],
    description: [
      "מטפל מגיע עד אליכם עם כל הציוד לחוויית טיפול פרטית.\nכ-75 דקות טיפול.",
      "Therapist arrives fully equipped for a private in-home experience.\nApprox. 70 minutes.",
    ],
    price: 400,
  },
];

export default function Prices() {
  const { language } = useLang();
  const currency = language ? "NIS" : 'ש"ח';
  const isEnglish = Boolean(language);
  const localeIndex = Number(language);

  const capitalizeLine = (text) => {
    if (!text) return text;
    if (isEnglish) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
    return text;
  };

  return (
    <Grid container justifyContent={"center"} minHeight={"100vh"}>
      <Grid
        container
        sx={{
          maxWidth: "2100px",
          width: "100%",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 4, md: 6 },
        }}
        rowSpacing={{ xs: 3, md: 3 }}
      >
        <Grid
          item
          container
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ mt: { xs: 1, md: 2 } }}
        >
          <Typography
            variant="h2"
            align={"center"}
            textAlign={"center"}
            alignContent={"center"}
            justifyContent={"center"}
            sx={{
              p: 1.5,
              display: "flex",
              fontFamily: "Amatic SC",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              fontSize: "clamp(1.8rem, 2.2vw, 2.3rem)",
            }}
          >
            {capitalizeLine(res.title[localeIndex])}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ px: { xs: 0.5, sm: 1 } }}>
          <Typography
            align={"center"}
            sx={{
              color: "#4a5b47",
              fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
              fontWeight: 500,
              letterSpacing: isEnglish ? "0.02em" : 0,
            }}
          >
            {capitalizeLine(res.subtitle[localeIndex])}
          </Typography>
        </Grid>
        <Grid item container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
          {itemRes.map((item, index) => {
            const localizedTitle = capitalizeLine(item.title[localeIndex]);
            const localizedDescription = capitalizeLine(
              item.description[localeIndex]
            );
            return (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Paper
                  elevation={8}
                  sx={{
                    height: "100%",
                    p: { xs: 2.5, sm: 2.7, md: 3 },
                    borderRadius: 4,
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                    background: "linear-gradient(165deg, #ffffff 0%, #f4f7f4 100%)",
                    boxShadow: "0 16px 32px -20px rgba(31, 64, 38, 0.5)",
                    border: "1px solid rgba(64, 112, 77, 0.08)",
                    transition: "transform 240ms ease, box-shadow 240ms ease",
                    textAlign: isEnglish ? "left" : "right",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 26px 45px -20px rgba(31, 64, 38, 0.6)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Amatic SC",
                      fontSize: "clamp(1.6rem, 2.2vw, 2rem)",
                      fontWeight: 700,
                      color: "#2f5232",
                      letterSpacing: isEnglish ? "0.04em" : 0,
                    }}
                  >
                    {localizedTitle}
                  </Typography>
                  <Typography
                    sx={{
                      flexGrow: 1,
                      color: "#4f5d4c",
                      fontSize: "clamp(0.9rem, 1.7vw, 1.05rem)",
                      lineHeight: 1.6,
                    }}
                  >
                    {localizedDescription}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: isEnglish ? "flex-start" : "flex-end",
                      alignItems: "center",
                      gap: 1,
                      mt: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#2f5232",
                        fontSize: "clamp(1.25rem, 2.4vw, 1.6rem)",
                      }}
                    >
                      {item.price}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "#7a8a76",
                        fontSize: "clamp(0.85rem, 1.6vw, 1rem)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {currency}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
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
