import { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { Card, CardMedia, CardContent, Typography, Button, Grid, Box } from "@mui/material";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


// Assuming you want to fetch data from an API


const StyledCard = styled(Card)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 20px rgba(0, 0, 0, 0.1)",
  },
}));

const StyledCardMedia = styled(CardMedia)(() => ({
  paddingTop: "56.25%", // 16:9 aspect ratio
  position: "relative",
}));

const PriceTag = styled(Typography)(() => ({
  position: "absolute",
  top: 16,
  right: 16,
  background: "rgba(0, 0, 0, 0.8)",
  color: "#fff",
  padding: "4px 8px",
  borderRadius: 4,
}));

const Product = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  // Fetching product data
  useEffect(() => {
    const productfetch = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const fetchedData = await response.json();
      setData(fetchedData);
    };
    productfetch();
  }, []);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const message = (id) => {
    const selectedProduct = data.find((x) => x.id === id);
    console.log(selectedProduct); // You can use selectedProduct for further actions
    localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
    setTimeout(() => {
      alert("Purchase successful");
      navigate("/order",{ state: { selectedProduct } });
    }, 1000);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
 
       
        <Grid container spacing={3}>
          {data.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <StyledCard>
                <Box sx={{ position: "relative" }}>
                  <StyledCardMedia
                    image={product.image} 
                    title={product.title}
                    alt={product.title}
                  />
                  <PriceTag variant="subtitle1">${product.price}</PriceTag>
                  <Button
                    onClick={handleLikeClick}
                    sx={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      minWidth: "auto",
                      p: 1,
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    <FaHeart color={isLiked ? "#f44336" : "#757575"} size={20} />
                  </Button>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {product.description}
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<FaShoppingCart />}
                    onClick={() => message(product.id)}
                    fullWidth
                    sx={{
                      mt: "auto",
                      backgroundColor: "#1976d2",
                      "&:hover": {
                        backgroundColor: "#1565c0",
                      },
                    }}
                  >
                    Shop Now
                  </Button>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
  
    </Box>
  );
};

export default Product;
