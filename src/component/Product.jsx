import { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { Card, CardMedia, CardContent, Typography, Button, Grid, Box } from "@mui/material";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom'; // Add this import

// Styled Components
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

const StyledDescription = styled(Typography)(() => ({
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3, // Limit to 3 lines
  textOverflow: "ellipsis",
}));

const StyledCardMedia = styled(CardMedia)(() => ({
  paddingTop: "56.25%", // 16:9 aspect ratio
  position: "relative",
}));

const PriceTag = styled(Typography)(() => ({
  position: "absolute",
  bottom: 8, // Position at the bottom of the image
  left: 16,
  background: "rgba(0, 0, 0, 0.8)",
  color: "#fff",
  padding: "4px 8px",
  borderRadius: 4,
  fontWeight: "bold",
}));

const RatingStars = ( ) => {
  const maxRating = 5;
  const filledStars = Array(Math.round).fill(true);
  const emptyStars = Array(maxRating - filledStars.length).fill(false);

  return (
    <div className="flex">
      {filledStars.map((_, index) => (
        <span key={`filled-${index}`} className="text-yellow-500">&#9733;</span>
      ))}
      {emptyStars.map((_, index) => (
        <span key={`empty-${index}`} className="text-gray-300">&#9733;</span>
      ))}
    </div>
  );
};

const Product = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate(); // Initialize React Router's navigate function

  // Fetch product data
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

  // Function to handle product selection
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  // Function to handle the order action and navigate to the Order component
  const orderlist = () => {
    alert("purchase successfully")
    // Navigate to the Order page and pass the selected product data as state
    navigate("/order", { state: { product: selectedProduct } });
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 , }}>
      <Grid container spacing={3}>
        {data.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id} >
            <StyledCard>
              <Box sx={{ position: "relative" }}>
                <StyledCardMedia
                  image={product.image}
                  title={product.title}
                  alt={product.title}
                />
                <PriceTag variant="subtitle">₹{product.price}</PriceTag>
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
                <StyledDescription variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {product.description}
                </StyledDescription>
                <Button
                  variant="contained"
                  startIcon={<FaShoppingCart />}
                  onClick={() => handleProductClick(product)}
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

      {/* Product Dialog */}
      {selectedProduct && (
        <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
          <div className="fixed inset-0 bg-gray-500/75 transition-opacity" />
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto flex justify-center items-center">
            <div className="relative w-full max-w-4xl bg-white p-6 shadow-2xl rounded-lg">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="w-6 h-6" />
              </button>

              {/* Product Details in the Dialog */}
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <img
                  alt={selectedProduct.title}
                  src={selectedProduct.image}
                  className="aspect-2/3 w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5"
                />
                <div className="sm:col-span-8 lg:col-span-7">
                  <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{selectedProduct.title}</h2>
                  <p className="text-lg text-gray-700 mt-2">{selectedProduct.description}</p>
                  <div className="mt-3">
                    <h2 className="text-xl font-bold text-gray-900 sm:pr-12">Price</h2>
                    <p className="text-2xl text-gray-900 mt-2">₹{selectedProduct.price}</p>
                  </div>
                  {/* Star Rating */}
                  <div className="mt-2">
                    <div className="text-xl font-bold text-gray-900 sm:pr-12">Product rating</div>
                    <RatingStars rating={selectedProduct.rating?.rate || 0} />
                  </div>
                  <div className="mt-10 flex justify-center">
                    <button
                      type="submit"
                      onClick={orderlist} // Trigger orderlist
                      className="block rounded-md fontWeight-2xl font-3xl bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Order confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </Box>
  );
};

export default Product;
