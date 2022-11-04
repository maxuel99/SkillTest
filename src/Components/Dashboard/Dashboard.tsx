import axios from "axios";
import React, { useEffect, useState } from "react";
import NavApp from "../AppBar/AppBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import DashCard from "./DashCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Dashboard() {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/63d37c95-f740-4bc1-acaa-20a0a6b884cb")
      .then((response) => {
        setCollection(response.data.nft.collection);
        console.log(response.data.nft);
      });
  }, []);

  return (
    <div>
      <NavApp />
      <div style={{ width: "100%", backgroundColor: "lightgrey" }}>
        <Box
          sx={{
            flexGrow: 2,
            display: "grid",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            <Grid item xs={4}>
              <Item>
                <img
                  src={
                    "https://static-nft.pancakeswap.com/mainnet/0x11304895f41C5A9b7fBFb0C4B011A92f1020EF96/avatar.png"
                  }
                  alt="Avatar-ShiftPunks"
                  width="150px"
                  className="img-avatar-NFT"
                />
                <h2>ShitPunks</h2>
                <h3>Volume(BNB): 1.843,630</h3>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <img
                  className="img-banner"
                  src="https://static-nft.pancakeswap.com/mainnet/0x11304895f41C5A9b7fBFb0C4B011A92f1020EF96/banner-lg.png"
                  alt="banner-NFT"
                />
                <h3>
                  ShitPunks are a hand-drawn recreation of all 10,000
                  CryptoPunks with additional tokenomics to reward our holders
                  and the #1 BSC profile NFT out there.
                </h3>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className="container-Dashcard">
        {collection &&
          collection.map((item, index) => (
            <DashCard key={index} props={item} />
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
