import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Order = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const navigate = useNavigate();
  
  const [orderList, setOrderList] = useState([]);

  // Save a new product to localStorage under a unique key with timestamp
  const addToOrderList = (product) => {
    const productKey = `orderList_${new Date().getTime()}`; // Use timestamp as a unique key
    const dateAdded = new Date().toLocaleString(); // Get current date and time
    const productWithDate = { ...product, dateAdded }; // Add dateAdded to the product
    localStorage.setItem(productKey, JSON.stringify(productWithDate));
    updateOrderList(); // Update the state with the new order list
  };

  // Load the order list from localStorage by fetching all keys that match the pattern
  const updateOrderList = () => {
    const allProducts = [];
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('orderList_')) {
        const product = JSON.parse(localStorage.getItem(key));
        allProducts.push({ ...product, key }); // Include the key for deletion
      }
    });
    setOrderList(allProducts);
  };

  // Load order list when component mounts or a product is added
  useEffect(() => {
    updateOrderList();
  }, []);

  // Add the current product from the location to the order list if it exists
  useEffect(() => {
    if (product) {
      addToOrderList(product);
    }
  }, [product]);

  // Delete a product from localStorage
  const deleteProduct = (key) => {
    alert('delete in successfully')
    localStorage.removeItem(key); // Remove product from localStorage by key
    updateOrderList(); // Update the order list in state
  };

  const homepage = () => {
    navigate('/');
  };

  if (orderList.length === 0) {
    return(
      <>
      <div>customer not purchase in product.</div>;
      <div className="mt-10" >
            <button
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={homepage}
            >
              Go to Home Page
            </button>
          </div>
      </>
    ) 

    
  }

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none ">
          <h2 className="text-2xl font-bold text-gray-900">Customer Purchase</h2>
          <div className="mt-10" >
            <button
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={homepage}
            >
              Go to Home Page
            </button>
          </div>
          {/* Iterate through the orderList and display each product */}
          <div className="mt-6">
            {orderList.map((product, index) => (
              <div key={index} className="flex items-center space-x-6 mt-6">
                {/* Image Section */}
                <div className="flex-shrink-0">
                  <img
                    alt={product.title}
                    src={product.image}
                    className="rounded-lg bg-white object-cover w-32 h-32" // Adjusted the image size
                  />
                </div>

                {/* Description Section (Positioned on the Right) */}
                <div className="flex-1">
                  <h3 className="text-sm text-gray-500">{product.title}</h3>
                  {/* <p className="text-base font-semibold text-gray-900">{product.description}</p> */}
                  <p className="text-xl font-bold text-gray-900">₹{product.price}</p>
                  <p className="text-sm text-green-500">Purchase date: {product.dateAdded}</p> {/* Display date added */}
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => deleteProduct(product.key)}
                  className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* Button to navigate to home */}
         
        </div>
      </div>
    </div>
  );
};

export default Order;
