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

const PriceTag = styled(Typography)({
  position: "absolute",
  top: 16,
  right: 16,
  background: "rgba(0, 0, 0, 0.8)",
  color: "#fff",
  padding: "4px 8px",
  borderRadius: 4
});

const Details = () => {





   const products = [
    {
      id: 1,
      imageSrc: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      productName: "Premium Headphones",
      productPrice: 299.99,
      productDescription: "High-quality wireless headphones with noise cancellation feature"
    },
    {
      id: 2,
      imageSrc: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      productName: "Sport Shoes",
      productPrice: 149.99,
      productDescription: "Comfortable athletic shoes perfect for running and training"
    },
    {
      id: 3,
      imageSrc: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      productName: "Smart Watch",
      productPrice: 199.99,
      productDescription: "Modern smartwatch with health tracking capabilities"
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
                <PriceTag variant="subtitle1">
                  ${products.productPrice}
                </PriceTag>
                
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