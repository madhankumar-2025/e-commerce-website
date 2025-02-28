
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"
import Dtails from "./Details";
import Star from "./Star";
import Footer from "./Footer"; 
import About from "./About";




const HeroSection = styled(Box)(() => ({
  position: "relative",
  minHeight: "90vh",
  display: "flex",
  alignItems: "center",
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#fff"
}));

const ContentWrapper = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  padding: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2)
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: "12px 32px",
  borderRadius: "30px",
  fontSize: "1.1rem",
  transition: "all 0.3s ease",
  alignItems: "center",
  backgroundColor:"#ff4081",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 15px rgba(0,0,0,0.2)"
  }
}));

const ImageOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.4)"
});

const Metrial = () => {
  

  return (
    <>    
     <Navbar/>
      <HeroSection>
      <ImageOverlay />
      <ContentWrapper maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2.5rem", md: "4rem" },
                marginBottom: 2,
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
              }}
            >
              Discover Your Style
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "1.5rem", md: "2rem" },
                marginBottom: 4,
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)"
              }}
            >
              Explore our latest collection with up to 50% off on selected items
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2  }}>
              <StyledButton
                component={Link} to="product"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<FiShoppingBag />}
              >
              Products
              </StyledButton>
            </Box>
          </Grid>
        </Grid>
      </ContentWrapper>
    </HeroSection>
    <Dtails/>
    <Star/>
    <About/>
    <Footer/>
    </>

  );
};

export default Metrial;