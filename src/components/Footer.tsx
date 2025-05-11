
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SuperBikes</h3>
            <p className="text-muted-foreground">
              The ultimate destination for premium superbikes in India.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  All Bikes
                </Link>
              </li>
              <li>
                <Link to="/products?category=sport" className="text-muted-foreground hover:text-primary transition-colors">
                  Sport Bikes
                </Link>
              </li>
              <li>
                <Link to="/products?category=cruiser" className="text-muted-foreground hover:text-primary transition-colors">
                  Cruisers
                </Link>
              </li>
              <li>
                <Link to="/products?category=touring" className="text-muted-foreground hover:text-primary transition-colors">
                  Touring Bikes
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {currentYear} SuperBikes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
