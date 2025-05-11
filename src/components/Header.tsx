
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { useCart } from "@/context/CartContext";
import ThemeToggle from "./ThemeToggle";
import { Menu, ShoppingCart, Search, User } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const { cart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary animate-fade-in">SuperBikes</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="font-medium hover:text-primary transition-colors"
            >
              Bikes
            </Link>
            <Link
              to="/auth"
              className="font-medium hover:text-primary transition-colors"
            >
              Account
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/auth">
              <Button variant="ghost" size="icon" aria-label="Account">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <ThemeToggle />
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" aria-label="Shopping cart">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce-in">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" aria-label="Shopping cart">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 animate-slide-in">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="font-medium hover:text-primary transition-colors px-2 py-1"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="font-medium hover:text-primary transition-colors px-2 py-1"
              >
                Bikes
              </Link>
              <Link
                to="/auth"
                className="font-medium hover:text-primary transition-colors px-2 py-1"
              >
                Account
              </Link>
              <div className="flex items-center pt-2">
                <Button variant="ghost" size="icon" aria-label="Search">
                  <Search className="h-5 w-5" />
                </Button>
                <span className="ml-2">Search</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
