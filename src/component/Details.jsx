import { styled } from "@mui/system";
import { Card, CardMedia, CardContent, Typography, Button, Grid, Box } from "@mui/material";
import { FaShoppingCart} from "react-icons/fa";
import { Link } from "react-router-dom";

const StyledCard = styled(Card)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 20px rgba(0, 0, 0, 0.1)"
  }
}));

const StyledCardMedia = styled(CardMedia)({
  paddingTop: "56.25%", // 16:9 aspect ratio
  position: "relative"
});

const Details = () => {





   const products = [
    {
      id: 1,
      imageSrc: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      productName: "Premium Headphones",
      productPrice: 299,
      productDescription: "High-quality wireless headphones with noise cancellation feature"
    },
    {
      id: 2,
      imageSrc: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      productName: "Sport Shoes",
      productPrice: 149,
      productDescription: "Comfortable athletic shoes perfect for running and training"
    },
    {
      id: 3,
      imageSrc: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      productName: "Smart Watch",
      productPrice: 199,
      productDescription: "Modern smartwatch with health tracking capabilities"
    },
    {
      id: 4,
      imageSrc: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      productName: "Chain braacelet",
      productPrice: 695,
      productDescription: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
    },
    {
      id: 5,
      imageSrc: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      productName: "Solid Gold Petite Micropave",
      productPrice: 168,
      productDescription: "Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed."
    },
    {
      id: 6,
      imageSrc: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      productName: "3-in-1 Snowboard Jacket Winter Coats",
      productPrice: 250,
      productDescription: "The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester"
    }
  ];

  

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3} >
        {products.map((products) => (
          <Grid item xs={20} sm={6} md={4} key={products.id}>
            <StyledCard>
              <Box sx={{ position: "relative" }}>
                <StyledCardMedia
                  image={products.imageSrc}
                  title={products.productName}
                  alt={products.productName}
                />
                
                
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                  sx={{ fontWeight: "bold" }}
                >
                  {products.productName}
                </Typography>
                
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}    
                >
                  {products.productDescription}
                </Typography>
                <Button
                component={Link} to="product"
                  variant="contained"
                  startIcon={<FaShoppingCart />}
                  fullWidth
                  sx={{
                    mt: "auto",
                    backgroundColor: "#1976d2",
                    "&:hover": {
                      backgroundColor: "#1565c0"
                    }
                  }}
                >
                  shop now
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Details;