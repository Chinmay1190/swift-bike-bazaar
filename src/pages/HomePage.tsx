
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { allProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const HomePage = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = [
    "https://cdn.pixabay.com/photo/2020/06/17/21/35/sports-bike-5311336_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/08/29/08/58/mountain-3639273_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/09/07/21/22/motorcycle-2726508_1280.jpg"
  ];
  
  const categories = [
    { id: "sport", name: "Sport Bikes", image: "https://cdn.pixabay.com/photo/2023/02/07/13/39/yamaha-7774247_1280.jpg" },
    { id: "cruiser", name: "Cruisers", image: "https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_1280.jpg" },
    { id: "touring", name: "Touring", image: "https://cdn.pixabay.com/photo/2014/06/25/10/22/honda-377058_1280.jpg" },
    { id: "naked", name: "Naked", image: "https://cdn.pixabay.com/photo/2018/08/14/15/19/royal-enfield-3605937_1280.jpg" }
  ];

  const featuredProducts = allProducts.filter(product => product.featured).slice(0, 4);
  const bestSellers = allProducts.filter(product => product.bestSeller).slice(0, 8);
  const newArrivals = allProducts.filter(product => product.new).slice(0, 4);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex(prevIndex => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    // Animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Call once on mount
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === heroIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
        
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <div className="max-w-3xl space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Premium Superbikes for the Road Ahead
            </h1>
            <p className="text-xl text-white/90">
              Explore our collection of high-performance motorcycles
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link to="/products">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Shop Now
                </Button>
              </Link>
              <Link to="/products?category=sport">
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/20">
                  View Sport Bikes
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === heroIndex ? "bg-white scale-125" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 animate-on-scroll">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Explore Categories
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    <span className="inline-block mt-2 text-white/90 group-hover:translate-x-2 transition-transform">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-accent/20 animate-on-scroll">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Bikes</h2>
            <Link to="/products" className="text-primary hover:underline">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Banner */}
      <section className="py-24 px-4 relative animate-on-scroll">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.pixabay.com/photo/2018/01/25/17/33/helmet-3106463_1280.jpg"
            alt="Motorcycle helmet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto relative z-10 text-white">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold mb-4">Experience the Thrill of the Ride</h2>
            <p className="text-xl mb-8">
              State-of-the-art engineering with cutting-edge technology for the perfect ride.
            </p>
            <Link to="/products">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Discover More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 px-4 animate-on-scroll">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Best Sellers</h2>
            <Link to="/products" className="text-primary hover:underline">
              View All →
            </Link>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {bestSellers.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:flex">
              <CarouselPrevious className="mt-48" />
              <CarouselNext className="mt-48" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 px-4 bg-accent/20 animate-on-scroll">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <Link to="/products" className="text-primary hover:underline">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 px-4 animate-on-scroll">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Top Brands</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
            {['Kawasaki', 'Ducati', 'BMW', 'Harley-Davidson', 'Honda', 'Triumph', 'Royal Enfield', 'Suzuki', 'KTM', 'Yamaha'].map((brand) => (
              <div key={brand} className="text-2xl font-bold text-muted-foreground hover:text-primary transition-colors">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-primary text-white animate-on-scroll">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="mb-8">Get the latest updates on new bikes, exclusive offers, and more.</p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-5 py-3 rounded-md text-foreground"
                required
              />
              <Button type="submit" className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
