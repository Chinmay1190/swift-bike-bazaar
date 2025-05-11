
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import { ShoppingCart, BadgeIndianRupee } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const formatIndianPrice = (price: number) => {
  // Convert to Indian format (e.g., ₹12,34,567)
  const priceString = price.toString();
  let lastThree = priceString.substring(priceString.length - 3);
  let otherNumbers = priceString.substring(0, priceString.length - 3);
  if (otherNumbers !== '') {
    lastThree = ',' + lastThree;
  }
  const result = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return '₹' + result;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent navigating to product detail
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <Card className="overflow-hidden product-card h-full">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.new && (
              <Badge className="bg-bikeBlue hover:bg-bikeBlue">New</Badge>
            )}
            {product.bestSeller && (
              <Badge className="bg-bikeGreen hover:bg-bikeGreen">Best Seller</Badge>
            )}
            {product.featured && (
              <Badge className="bg-bikeRed hover:bg-bikeRed">Featured</Badge>
            )}
            {!product.inStock && (
              <Badge variant="outline" className="bg-black/50 text-white border-0">Out of Stock</Badge>
            )}
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold truncate">{product.name}</h3>
          <p className="text-muted-foreground text-sm">{product.brand}</p>
          
          <div className="mt-2 space-y-1">
            <div className="flex items-center gap-1 text-sm">
              <BadgeIndianRupee className="h-4 w-4" /> 
              <span className="font-bold text-lg">{formatIndianPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-muted-foreground line-through ml-2">
                  {formatIndianPrice(product.originalPrice)}
                </span>
              )}
            </div>
            
            <div className="flex items-center text-sm">
              <div className="flex">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}>
                    ★
                  </span>
                ))}
              </div>
              <span className="ml-1 text-muted-foreground">
                ({product.reviewCount})
              </span>
            </div>
          </div>
          
          <div className="mt-3 grid grid-cols-3 gap-1 text-xs text-muted-foreground">
            <div>
              <p className="font-medium">Engine</p>
              <p>{product.engineCapacity}</p>
            </div>
            <div>
              <p className="font-medium">Power</p>
              <p>{product.maxPower}</p>
            </div>
            <div>
              <p className="font-medium">Speed</p>
              <p>{product.topSpeed}</p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button 
            className="w-full"
            disabled={!product.inStock}
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ProductCard;
