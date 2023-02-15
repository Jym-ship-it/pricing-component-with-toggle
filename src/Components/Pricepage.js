import { Typography, Switch, Paper, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import BgBottom from "../Assets/Images/bg-bottom.svg";
import BgTop from "../Assets/Images/bg-top.svg";

export default function Pricepage() {
  //Styles
  const style = {
    mainCon: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
      backgroundImage: `url(${BgBottom}) , url(${BgTop})`,
      backgroundPosition: "left bottom , right top",
      backgroundRepeat: "no-repeat",
      textAlign: "center",
      backgroundColor: "hsl(240, 78%, 98%)",
    },
    title: {
      fontFamily: "Montserrat",
      fontSize: "38px",
      marginBottom: "30px",
      color: "hsl(233, 13%, 49%)",
    },
    switchCon: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "40px",
    },
    subs: {
      fontFamily: "Montserrat",
      fontSize: "18px",
      color: "hsl(234, 14%, 74%)",
    },
    switch: {
      margin: "0px 20px",
      width: 48,
      height: 28,
      padding: 0,
      "& .MuiSwitch-switchBase": {
        padding: 0.1,
        margin: 0.25,
        transitionDuration: "300ms",
        "&.Mui-checked": {
          transform: "translateX(20.5px)",
          color: "#fff",
          "& + .MuiSwitch-track": {
            background:
              "linear-gradient(to right, hsl(236, 72%, 79%) , hsl(237, 63%, 64%))",
            opacity: 1,
            border: 0,
          },
        },
      },
      "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 23,
        height: 23,
      },
      "& .MuiSwitch-track": {
        borderRadius: 26 / 2,
        backgroundColor: "hsl(234, 14%, 74%)",
        opacity: 1,
      },
    },
    PaperCon: {
      display: "flex",
      justifyContent: "center",
    },
    paper: {
      padding: "30px 40px",
      margin: "25px 0px",
      borderRadius: "8px",
    },
    paperTitle: {
      fontFamily: "Montserrat",
      fontSize: "18px",
      color: "hsl(232, 13%, 33%)",
      marginBottom: "15px",
    },
    price: {
      display: "flex",
      alignItems: "center",
      fontFamily: "Montserrat",
      fontSize: "64px",
      marginBottom: "15px",
      color: "hsl(232, 13%, 33%)",
      justifyContent: "center",
    },
    dollorSign: {
      fontFamily: "Montserrat",
      fontSize: "35px",
      marginRight: "10px",
      color: "hsl(232, 13%, 33%)",
    },
    paperMid: {
      padding: "55.5px 30px",
      background:
        "linear-gradient(to right, hsl(236, 72%, 79%) , hsl(237, 63%, 64%))",
      borderRadius: "8px",
    },
    divider: {
      height: "0.5px",
      width: "300px",
      backgroundColor: "hsl(234, 14%, 74%)",
    },
    Button: {
      background: "linear-gradient(to right, hsl(236, 72%, 79%) , hsl(237, 63%, 64%))",
      width: "100%",
      marginTop: "20px",
      borderRadius: "8px",
      fontFamily: "Montserrat",
      fontSize: "14px",
      color : "white",
      "&:hover": {
        background: "transparent",
        outline: ".5px solid hsl(236, 72%, 79%)",
        color : "hsl(237, 63%, 64%)"
      },
    },
    ButtonMid: {
      width: "100%",
      marginTop: "20px",
      color: "linear-gradient(to right, hsl(236, 72%, 79%) , hsl(237, 63%, 64%))",
      fontFamily: "Montserrat",
      fontSize: "14px",
      backgroundColor: "white",
      borderRadius: "8px",
      "&:hover": {
        background: "transparent",
        outline: ".5px solid #FFFFFF",
        color : "#FFFFFF"
      },
    },
    info: {
      fontFamily: "Montserrat",
      fontSize: "18px",
      margin: "10px 0px",
      color: "hsl(232, 13%, 33%)",
    },
  };
  //handleChanges
  const [perimeter, setPerimeter] = useState(false);
  const handleChange = () => {
    if (perimeter === true) {
      setPerimeter(false);
    } else {
      setPerimeter(true);
    }
  };
  return (
    <Box sx={style.mainCon}>
      <Box>
        <Typography sx={style.title}>Our Pricing</Typography>
        <Box sx={style.switchCon}>
          <Typography sx={style.subs}>Annually</Typography>
          <Switch onChange={handleChange} sx={style.switch}></Switch>
          <Typography sx={style.subs}>Monthly</Typography>
        </Box>
      </Box>
      <Box sx={style.PaperCon}>
        <Paper sx={style.paper}>
          <Typography sx={style.paperTitle}>Basic</Typography>
          <Typography sx={style.price}>
            <Typography sx={style.dollorSign}>$</Typography>
            {perimeter ? "19.99" : "199.99"}
          </Typography>
          <Box sx={style.divider}></Box>
          <Typography sx={style.info}>500 GB Storage</Typography>
          <Box sx={style.divider}></Box>
          <Typography sx={style.info}>2 Users Allowed</Typography>
          <Box sx={style.divider}></Box>
          <Typography sx={style.info}>Send up to 3 GB</Typography>
          <Box sx={style.divider}></Box>
          <Button sx={style.Button}>
           Learn More
          </Button>
        </Paper>
        <Paper sx={style.paperMid}>
          <Typography sx={style.paperTitle} style={{ color: "white" }}>
            Professional
          </Typography>
          <Typography sx={style.price} style={{ color: "white" }}>
            <Typography sx={style.dollorSign} style={{ color: "white" }}>
              $
            </Typography>
            {perimeter ? "24.99" : "249.99"}
          </Typography>
          <Box sx={style.divider}></Box>
          <Typography sx={style.info} style={{ color: "white" }}>
            1 TB Storage
          </Typography>
          <Box sx={style.divider}></Box>
          <Typography sx={style.info} style={{ color: "white" }}>
            5 Users Allowed
          </Typography>
          <Box sx={style.divider}></Box>
          <Typography sx={style.info} style={{ color: "white" }}>
            Send up to 10 GB
          </Typography>
          <Box sx={style.divider}></Box>
          <Button sx={style.ButtonMid}>Learn more</Button>
        </Paper>
        <Paper sx={style.paper}>
          <Typography sx={style.paperTitle}>Basic</Typography>
          <Typography sx={style.price}>
            <Typography sx={style.dollorSign}>$</Typography>
            {perimeter ? "39.99" : "399.99"}
          </Typography>
          <Box sx={style.divider}></Box>
          <Typography sx={style.info}>2 TB Storage</Typography>
          <Box sx={style.divider}></Box>
          <Typography sx={style.info}>10 Users Allowed</Typography>
          <Box sx={style.divider}></Box>
          <Typography sx={style.info}>Send up to 20 GB</Typography>
          <Box sx={style.divider}></Box>
          <Button sx={style.Button}>Learn more</Button>
        </Paper>
      </Box>
    </Box>
  );
}
