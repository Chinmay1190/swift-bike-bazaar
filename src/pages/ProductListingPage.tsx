import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { allProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Filter, ChevronDown, ChevronUp, Search } from "lucide-react";

const ProductListingPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get("category");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedSort, setSelectedSort] = useState("featured");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "sport", name: "Sport Bikes" },
    { id: "cruiser", name: "Cruisers" },
    { id: "touring", name: "Touring" },
    { id: "naked", name: "Naked" },
    { id: "cafe-racer", name: "Cafe Racers" }
  ];

  const brands = [
    { id: "all", name: "All Brands" },
    ...Array.from(new Set(allProducts.map(p => p.brand))).map(brand => ({
      id: brand.toLowerCase(),
      name: brand
    })).sort((a, b) => a.name.localeCompare(b.name))
  ];

  const sortOptions = [
    { id: "featured", name: "Featured" },
    { id: "price-low", name: "Price: Low to High" },
    { id: "price-high", name: "Price: High to Low" },
    { id: "name-asc", name: "Name: A to Z" },
    { id: "name-desc", name: "Name: Z to A" },
    { id: "rating", name: "Top Rated" }
  ];

  const minPrice = 0;
  const maxPrice = 5000000; // 50 lakhs

  // Filter and sort products
  useEffect(() => {
    let result = [...allProducts];

    // Filter by search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(search) || 
          product.brand.toLowerCase().includes(search) ||
          product.category.toLowerCase().includes(search)
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Filter by brand
    if (selectedBrand !== "all") {
      result = result.filter(product => product.brand.toLowerCase() === selectedBrand);
    }

    // Filter by price range
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    switch (selectedSort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "featured":
      default:
        // Keep original order but put featured items first
        result.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
        break;
    }

    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, selectedBrand, selectedSort, priceRange]);

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedBrand("all");
    setPriceRange([minPrice, maxPrice]);
    setSelectedSort("featured");
  };

  // Format price for display
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Our Bikes Collection</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters - Desktop */}
        <div className="hidden lg:block w-64 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Brands</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
              {brands.map(brand => (
                <button
                  key={brand.id}
                  onClick={() => setSelectedBrand(brand.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition ${
                    selectedBrand === brand.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent"
                  }`}
                >
                  {brand.name}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Price Range</h3>
            <Slider
              min={minPrice}
              max={maxPrice}
              step={10000}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              className="my-6"
            />
            <div className="flex justify-between">
              <span>{formatPrice(priceRange[0])}</span>
              <span>{formatPrice(priceRange[1])}</span>
            </div>
          </div>
          
          <Button onClick={resetFilters} variant="outline" className="w-full">
            Reset Filters
          </Button>
        </div>
        
        <div className="flex-1">
          {/* Search and Sort Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="relative w-full md:w-auto max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search bikes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 w-full md:w-64"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
              <Button
                variant="outline"
                className="lg:hidden flex items-center gap-2 w-full sm:w-auto"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter className="h-4 w-4" />
                Filters
                {isFilterOpen ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
              
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-sm">Sort by:</span>
                <Select value={selectedSort} onValueChange={setSelectedSort}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map(option => (
                      <SelectItem key={option.id} value={option.id}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Mobile Filters */}
          {isFilterOpen && (
            <div className="lg:hidden mb-6 p-4 border rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Categories</h3>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Brands</h3>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map(brand => (
                        <SelectItem key={brand.id} value={brand.id}>
                          {brand.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="sm:col-span-2">
                  <h3 className="text-lg font-semibold mb-3">Price Range</h3>
                  <Slider
                    min={minPrice}
                    max={maxPrice}
                    step={10000}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                    className="my-6"
                  />
                  <div className="flex justify-between">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
              </div>
              
              <Button onClick={resetFilters} variant="outline" className="w-full mt-4">
                Reset Filters
              </Button>
            </div>
          )}
          
          {/* Product Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>
          
          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl">No products found matching your criteria.</p>
              <Button onClick={resetFilters} variant="outline" className="mt-4">
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
