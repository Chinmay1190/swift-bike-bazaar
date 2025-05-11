
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const OrderSuccessPage = () => {
  const [orderNumber, setOrderNumber] = useState("");
  
  useEffect(() => {
    // Generate a random order number
    const randomOrderNumber = Math.floor(100000 + Math.random() * 900000).toString();
    setOrderNumber(randomOrderNumber);
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-12 px-4 max-w-3xl">
      <Card className="border-green-400 animate-fade-in">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center">
            <CheckCircle2 className="h-24 w-24 text-green-500 mb-6 animate-scale-in" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Order Successful!</h1>
          
          <p className="text-xl mb-8">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
          
          <div className="mb-8 p-4 bg-accent rounded-lg">
            <p className="text-lg font-semibold">Order Number: #{orderNumber}</p>
            <p className="text-muted-foreground">
              A confirmation email has been sent to your email address.
            </p>
          </div>
          
          <div className="space-y-4 mb-8">
            <p className="font-medium">What happens next?</p>
            <ol className="space-y-2 text-left list-decimal list-inside">
              <li>Your order will be processed within 24 hours</li>
              <li>Our team will contact you to confirm delivery details</li>
              <li>Your bike will be prepared and shipped to your location</li>
              <li>Our technician will deliver and set up your new bike</li>
            </ol>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button>
                Return to Home
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderSuccessPage;
