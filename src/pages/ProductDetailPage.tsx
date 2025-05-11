
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { allProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { BadgeIndianRupee, ShoppingCart, Truck, ArrowLeft, ShieldCheck, Star } from "lucide-react";

// Format Indian price
const formatIndianPrice = (price: number) => {
  const priceString = price.toString();
  let lastThree = priceString.substring(priceString.length - 3);
  let otherNumbers = priceString.substring(0, priceString.length - 3);
  if (otherNumbers !== '') {
    lastThree = ',' + lastThree;
  }
  const result = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return '₹' + result;
};

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [similarProducts, setSimilarProducts] = useState<typeof allProducts>([]);

  // Find the product with the matching ID
  const product = allProducts.find(p => p.id === id);

  useEffect(() => {
    if (product) {
      // Get similar products (same category, different ID)
      const similar = allProducts
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);
      setSimilarProducts(similar);
      
      // Reset image index when product changes
      setActiveImageIndex(0);
      
      // Reset quantity
      setQuantity(1);
      
      // Scroll to top
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you are looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/products')}>
          Browse All Products
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="flex items-center text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="text-muted-foreground hover:text-foreground">
            Bikes
          </Link>
          <span className="mx-2">/</span>
          <Link to={`/products?category=${product.category}`} className="text-muted-foreground hover:text-foreground capitalize">
            {product.category.replace('-', ' ')}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>
      </div>

      {/* Back Button */}
      <Button
        variant="ghost"
        className="mb-6 pl-0 hover:pl-2 transition-all"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg border">
            <img
              src={product.images[activeImageIndex]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          
          <div className="flex gap-4 overflow-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`relative aspect-square w-24 flex-shrink-0 overflow-hidden rounded-md border ${
                  activeImageIndex === index ? "ring-2 ring-primary" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} - Image ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="space-y-4">
            <div className="flex gap-2 flex-wrap">
              {product.new && (
                <Badge className="bg-bikeBlue hover:bg-bikeBlue">New</Badge>
              )}
              {product.bestSeller && (
                <Badge className="bg-bikeGreen hover:bg-bikeGreen">Best Seller</Badge>
              )}
              {product.featured && (
                <Badge className="bg-bikeRed hover:bg-bikeRed">Featured</Badge>
              )}
              <Badge variant="outline" className="capitalize">
                {product.category.replace('-', ' ')}
              </Badge>
            </div>

            <h1 className="text-3xl font-bold">{product.name}</h1>
            
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-500">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-current" : "fill-none"}`} 
                  />
                ))}
              </div>
              <span className="text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <BadgeIndianRupee className="h-5 w-5" /> 
              <span className="text-3xl font-bold">{formatIndianPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {formatIndianPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Engine</p>
                <p className="font-semibold">{product.engineCapacity}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Power</p>
                <p className="font-semibold">{product.maxPower}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Torque</p>
                <p className="font-semibold">{product.maxTorque}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Transmission</p>
                <p className="font-semibold">{product.transmission}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Fuel Capacity</p>
                <p className="font-semibold">{product.fuelCapacity}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Top Speed</p>
                <p className="font-semibold">{product.topSpeed}</p>
              </div>
            </div>

            <Separator />

            {/* Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    className="rounded-r-none"
                  >
                    -
                  </Button>
                  <div className="w-12 text-center border-y border-input py-2">
                    {quantity}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={increaseQuantity}
                    className="rounded-l-none"
                  >
                    +
                  </Button>
                </div>
                
                <div className="flex-1">
                  <Button 
                    className="w-full"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/checkout" className="flex-1">
                  <Button variant="outline" className="w-full" onClick={handleAddToCart}>
                    Buy Now
                  </Button>
                </Link>
                <Link to="/cart" className="flex-1">
                  <Button variant="outline" className="w-full">
                    View Cart
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="h-4 w-4 text-muted-foreground" />
                  <span>Free Shipping & Assembly Across India</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ShieldCheck className="h-4 w-4 text-muted-foreground" />
                  <span>2 Year Warranty with Extended Options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-12">
        <Tabs defaultValue="specifications">
          <TabsList className="mb-6 w-full grid grid-cols-3">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          </TabsList>
          
          <TabsContent value="specifications" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Engine & Performance</h3>
                <ul className="space-y-3">
                  <li className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground">Engine</span>
                    <span>{product.specifications.engine}</span>
                  </li>
                  <li className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground">Displacement</span>
                    <span>{product.specifications.displacement}</span>
                  </li>
                  <li className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground">Max Power</span>
                    <span>{product.specifications.maxPower}</span>
                  </li>
                  <li className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground">Max Torque</span>
                    <span>{product.specifications.maxTorque}</span>
                  </li>
                  <li className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground">Transmission</span>
                    <span>{product.specifications.transmission}</span>
                  </li>
                  <li className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground">Fuel Capacity</span>
                    <span>{product.specifications.fuelCapacity}</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Brakes & Suspension</h3>
                <ul className="space-y-3">
                  <li className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground">ABS</span>
                    <span>{product.specifications.abs}</span>
                  </li>
                  <li className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground">Front Brake</span>
                    <span>{product.specifications.frontBrake}</span>
                  </li>
                  <li className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground">Rear Brake</span>
                    <span>{product.specifications.rearBrake}</span>
                  </li>
                  <li className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground">Front Suspension</span>
                    <span>{product.specifications.frontSuspension}</span>
                  </li>
                  <li className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground">Rear Suspension</span>
                    <span>{product.specifications.rearSuspension}</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Dimensions</h3>
                <ul className="space-y-3">
                  <li className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground">Length</span>
                    <span>{product.specifications.length}</span>
                  </li>
                  <li className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground">Height</span>
                    <span>{product.specifications.height}</span>
                  </li>
                  <li className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground">Width</span>
                    <span>{product.specifications.width}</span>
                  </li>
                  <li className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground">Wheelbase</span>
                    <span>{product.specifications.wheelbase}</span>
                  </li>
                  <li className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground">Ground Clearance</span>
                    <span>{product.specifications.groundClearance}</span>
                  </li>
                  <li className="grid grid-cols-2 gap-2">
                    <span className="text-muted-foreground">Weight</span>
                    <span>{product.specifications.weight}</span>
                  </li>
                </ul>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>
                  <div className="flex items-center mt-2">
                    <div className="flex text-yellow-500">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-current" : "fill-none"}`} 
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-muted-foreground">
                      Based on {product.reviewCount} reviews
                    </span>
                  </div>
                </div>
                
                <Button>Write a Review</Button>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-semibold">Incredible Performance</h4>
                      <div className="flex text-yellow-500 mt-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">2 weeks ago</span>
                  </div>
                  <p className="mt-4">The power delivery is smooth and the handling is exceptional. Absolutely worth every penny!</p>
                  <div className="mt-2 text-sm font-medium">Rahul S.</div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-semibold">Amazing Quality</h4>
                      <div className="flex text-yellow-500 mt-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-current" : "fill-none"}`} />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">1 month ago</span>
                  </div>
                  <p className="mt-4">Build quality is excellent. The only minor issue is the seat comfort on long rides, but otherwise perfect.</p>
                  <div className="mt-2 text-sm font-medium">Priya M.</div>
                </Card>
                
                <Button variant="outline" className="w-full">Load More Reviews</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="shipping">
            <Card className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
                  <p>We offer free shipping on all motorcycle purchases within India. The delivery time is typically 1-2 weeks depending on your location and stock availability.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Assembly Service</h3>
                  <p>Our trained technicians will deliver and assemble your motorcycle at your doorstep, ensuring it's ready to ride. We'll also walk you through basic maintenance and features.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Warranty</h3>
                  <p>All motorcycles come with a standard 2-year manufacturer warranty. Extended warranty options are available at the time of purchase.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Returns & Cancellations</h3>
                  <p>Due to the nature of motorcycle purchases, we have a specialized return policy. Cancellations can be made within 24 hours of purchase for a full refund. After delivery, returns are subject to inspection and may incur restocking fees.</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Similar Bikes</h2>
            <Link 
              to={`/products?category=${product.category}`} 
              className="text-primary hover:underline"
            >
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map(similarProduct => (
              <ProductCard key={similarProduct.id} product={similarProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
