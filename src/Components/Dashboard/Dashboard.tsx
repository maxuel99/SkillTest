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
      .get("https://run.mocky.io/v3/2d1a5699-00f1-4e76-99f6-9982ef0383b4")
      .then((response) => {
        setCollection(response.data.nft.collection);
        console.log(response.data.nft);
      });
  }, []);

  return (
    <div>
      <NavApp />
      <div style={{ width: "100%", backgroundColor: "lightblue" }}>
        <Box
          sx={{
            flexGrow: 2,
            display: "grid",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              justifyContent: "center",
            }}
            className="css-8wqzlf-MuiGrid-root"
          >
            <Grid item xs={4} sx={{ maxWidth: "50%" }}>
              <Item>
                <img
                  src={
                    "https://static-nft.pancakeswap.com/mainnet/0x11304895f41C5A9b7fBFb0C4B011A92f1020EF96/avatar.png"
                  }
                  alt="Avatar-ShiftPunks"
                  width="150px"
                  className="img-avatar-NFT"
                />
                <div className="info-headerNFT">
                  <h2>ShitPunks</h2>
                  <h3>Volume(BNB): 1.843,630</h3>
                </div>
              </Item>
            </Grid>
            <Grid item xs={6} sx={{ maxWidth: "90%" }}>
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
      <Box
        sx={{
          flexGrow: 2,
          display: "grid",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <Grid
          sx={{
            justifyContent: "center",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            padding: "1rem",
            gap: "2rem",
          }}
        >
          {collection &&
            collection.map((item, index) => (
              <DashCard key={index} props={item} />
            ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Dashboard;
