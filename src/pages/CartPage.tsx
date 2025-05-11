
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { BadgeIndianRupee, Trash2, ShoppingCart } from "lucide-react";

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

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, subtotal } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState("");
  const [discount, setDiscount] = useState(0);

  const deliveryFee = 0; // Free delivery
  const total = subtotal - discount;

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === "bike10") {
      const discountAmount = subtotal * 0.1;
      setDiscount(discountAmount);
      setCouponError("");
    } else {
      setDiscount(0);
      setCouponError("Invalid coupon code. Try 'BIKE10'");
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/products">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row gap-4">
                      <Link to={`/products/${item.id}`} className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full sm:w-32 h-32 object-cover rounded-md"
                        />
                      </Link>
                      
                      <div className="flex-grow space-y-2">
                        <div className="flex justify-between items-start">
                          <Link 
                            to={`/products/${item.id}`}
                            className="font-semibold hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <div className="flex items-center">
                          <BadgeIndianRupee className="h-4 w-4 mr-1" /> 
                          <span className="font-medium">{formatIndianPrice(item.price)}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-r-none"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              -
                            </Button>
                            <div className="h-8 w-10 flex items-center justify-center border-y border-input">
                              {item.quantity}
                            </div>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-l-none"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </Button>
                          </div>
                          
                          <div className="text-muted-foreground text-sm">
                            Subtotal: {formatIndianPrice(item.price * item.quantity)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t flex justify-between items-center">
                  <Button 
                    variant="outline" 
                    onClick={clearCart}
                    className="text-sm"
                  >
                    Clear Cart
                  </Button>
                  
                  <Link to="/products">
                    <Button variant="ghost" className="text-sm">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatIndianPrice(subtotal)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-{formatIndianPrice(discount)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery</span>
                    <span>{deliveryFee === 0 ? "Free" : formatIndianPrice(deliveryFee)}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <div className="flex items-center">
                      <BadgeIndianRupee className="h-4 w-4 mr-1" /> 
                      <span>{formatIndianPrice(total)}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <div className="flex space-x-2 mb-2">
                      <input
                        type="text"
                        placeholder="Coupon code"
                        className="flex-1 px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      <Button 
                        onClick={handleApplyCoupon}
                        disabled={!couponCode}
                      >
                        Apply
                      </Button>
                    </div>
                    
                    {couponError && (
                      <p className="text-sm text-destructive">{couponError}</p>
                    )}
                    
                    {discount > 0 && (
                      <p className="text-sm text-green-600">Coupon applied successfully!</p>
                    )}
                  </div>
                  
                  <Link to="/checkout">
                    <Button className="w-full">
                      Proceed to Checkout
                    </Button>
                  </Link>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <p>Secure Payment Options</p>
                    <div className="flex justify-center gap-2 mt-2">
                      <span>Visa</span>
                      <span>Mastercard</span>
                      <span>UPI</span>
                      <span>Net Banking</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
