
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Example() {
    const navigate = useNavigate();
    const location = useLocation();
   

    // Retrieve selectedProduct from location.state (passed via navigation) or from localStorage if not available in location
    const selectedProduct= location.state?.selectedProduct || JSON.parse(localStorage.getItem('selectedProduct'));
 

    if (!selectedProduct) {
        return <div>No product found</div>;
    }

    const ent = () => {
        navigate("/");
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers Purchased Product</h2>
                
             
                <button 
                    onClick={ent} 
                    type="button" 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  ok
                </button>

           
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                   
                    <div key={selectedProduct.id} className="group relative">
                        <img
                            src={selectedProduct.image}
                            alt={selectedProduct.title}
                            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                        />
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <a href={selectedProduct.href}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {selectedProduct.title}
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{selectedProduct.color}</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">${selectedProduct.price}</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}
