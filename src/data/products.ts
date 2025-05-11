
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured?: boolean;
  bestSeller?: boolean;
  new?: boolean;
  engineCapacity: string;
  maxPower: string;
  maxTorque: string;
  fuelCapacity: string;
  topSpeed: string;
  transmission: string;
  description: string;
  specifications: {
    engine: string;
    displacement: string;
    maxPower: string;
    maxTorque: string;
    transmission: string;
    fuelCapacity: string;
    abs: string;
    frontBrake: string;
    rearBrake: string;
    frontSuspension: string;
    rearSuspension: string;
    length: string;
    height: string;
    width: string;
    wheelbase: string;
    groundClearance: string;
    weight: string;
  };
}

export const products: Product[] = [
  {
    id: "1",
    name: "Kawasaki Ninja ZX-10R",
    price: 1599000, // ₹15,99,000
    originalPrice: 1699000,
    category: "sport",
    brand: "Kawasaki",
    image: "https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_1280.jpg",
    images: [
      "https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/12/16/03/37/motor-bike-569865_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/04/23/20/34/motorcycle-330262_1280.jpg"
    ],
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    featured: true,
    bestSeller: true,
    engineCapacity: "998 cc",
    maxPower: "203 PS",
    maxTorque: "114.9 Nm",
    fuelCapacity: "17 L",
    topSpeed: "299 km/h",
    transmission: "6 Speed",
    description: "The Kawasaki Ninja ZX-10R is a motorcycle in the Ninja sport bike series from the Japanese manufacturer Kawasaki, the successor to the Ninja ZX-9R. It was originally released in 2004 and has been updated and revised throughout the years. It combines racing heritage with cutting-edge technology for an exhilarating riding experience.",
    specifications: {
      engine: "Liquid-cooled, 4-stroke In-Line Four",
      displacement: "998 cc",
      maxPower: "203 PS @ 13,500 rpm",
      maxTorque: "114.9 Nm @ 11,000 rpm",
      transmission: "6-speed, return",
      fuelCapacity: "17 L",
      abs: "Dual-channel ABS",
      frontBrake: "Dual semi-floating 330 mm Brembo discs",
      rearBrake: "Single 220 mm disc",
      frontSuspension: "43 mm inverted Balance Free Front Fork",
      rearSuspension: "Horizontal Back-link with BFRC lite gas-charged shock",
      length: "2,085 mm",
      height: "1,145 mm",
      width: "750 mm",
      wheelbase: "1,440 mm",
      groundClearance: "135 mm",
      weight: "207 kg"
    }
  },
  {
    id: "2",
    name: "Ducati Panigale V4",
    price: 2699000, // ₹26,99,000
    category: "sport",
    brand: "Ducati",
    image: "https://cdn.pixabay.com/photo/2018/10/26/22/55/motorcycle-3775527_1280.jpg",
    images: [
      "https://cdn.pixabay.com/photo/2018/10/26/22/55/motorcycle-3775527_1280.jpg",
      "https://cdn.pixabay.com/photo/2019/09/23/08/01/motorcycle-4497559_1280.jpg",
      "https://cdn.pixabay.com/photo/2021/01/24/20/21/motorcycle-5946779_1280.jpg"
    ],
    rating: 4.9,
    reviewCount: 98,
    inStock: true,
    featured: true,
    engineCapacity: "1103 cc",
    maxPower: "214 PS",
    maxTorque: "124 Nm",
    fuelCapacity: "16 L",
    topSpeed: "299+ km/h",
    transmission: "6 Speed",
    description: "The Ducati Panigale V4 is the most powerful production motorcycle in the Ducati lineup. It's named after the small manufacturing town of Borgo Panigale and uses a V4 engine. The bike is an evolution of the 1299, which used Ducati's signature V-twin engine configuration.",
    specifications: {
      engine: "Desmosedici Stradale V4, 90° V4, rearward-rotating crankshaft, 4 Desmodromically actuated valves per cylinder, liquid cooled",
      displacement: "1103 cc",
      maxPower: "214 PS @ 13,000 rpm",
      maxTorque: "124 Nm @ 10,000 rpm",
      transmission: "6-speed with Ducati Quick Shift",
      fuelCapacity: "16 L",
      abs: "Bosch Cornering ABS EVO",
      frontBrake: "2 x 330 mm semi-floating discs, radially mounted Brembo Monobloc",
      rearBrake: "245 mm disc, 2-piston caliper",
      frontSuspension: "Showa BPF 43 mm fully adjustable fork",
      rearSuspension: "Sachs adjustable monoshock",
      length: "2,103 mm",
      height: "1,143 mm",
      width: "758 mm",
      wheelbase: "1,469 mm",
      groundClearance: "131 mm",
      weight: "198 kg"
    }
  },
  {
    id: "3",
    name: "BMW S 1000 RR",
    price: 2190000, // ₹21,90,000
    originalPrice: 2290000,
    category: "sport",
    brand: "BMW",
    image: "https://cdn.pixabay.com/photo/2023/01/25/10/48/motorcycle-7743231_1280.jpg",
    images: [
      "https://cdn.pixabay.com/photo/2023/01/25/10/48/motorcycle-7743231_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/01/19/16/44/motorcycle-1149389_1280.jpg",
      "https://cdn.pixabay.com/photo/2019/01/20/18/53/motorcycle-3944341_1280.jpg"
    ],
    rating: 4.7,
    reviewCount: 115,
    inStock: true,
    bestSeller: true,
    engineCapacity: "999 cc",
    maxPower: "210 PS",
    maxTorque: "113 Nm",
    fuelCapacity: "16.5 L",
    topSpeed: "299 km/h",
    transmission: "6 Speed",
    description: "The BMW S 1000 RR is a sport bike initially made by BMW Motorrad to compete in the 2009 Superbike World Championship, that is now in commercial production. It features a four-cylinder inline engine and cutting-edge electronics, making it one of the most advanced superbikes available.",
    specifications: {
      engine: "Water/oil-cooled 4-cylinder 4-stroke engine, four valves per cylinder",
      displacement: "999 cc",
      maxPower: "210 PS @ 13,500 rpm",
      maxTorque: "113 Nm @ 11,000 rpm",
      transmission: "Constant mesh 6-speed gearbox with straight-cut gears",
      fuelCapacity: "16.5 L",
      abs: "BMW Motorrad Race ABS",
      frontBrake: "Twin disc brake, diameter 320 mm, 4-piston fixed calipers",
      rearBrake: "Single disc brake, diameter 220 mm, single-piston floating caliper",
      frontSuspension: "Upside-down telescopic fork, diameter 45 mm",
      rearSuspension: "Aluminum underslung swingarm, Full floater, central spring strut",
      length: "2,073 mm",
      height: "1,151 mm",
      width: "848 mm",
      wheelbase: "1,441 mm",
      groundClearance: "132 mm",
      weight: "197 kg"
    }
  },
  {
    id: "4",
    name: "Harley-Davidson Fat Boy",
    price: 2199000, // ₹21,99,000
    category: "cruiser",
    brand: "Harley-Davidson",
    image: "https://cdn.pixabay.com/photo/2019/08/06/12/13/harley-davidson-4387498_1280.jpg",
    images: [
      "https://cdn.pixabay.com/photo/2019/08/06/12/13/harley-davidson-4387498_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/09/06/16/36/harley-davidson-3658401_1280.jpg",
      "https://cdn.pixabay.com/photo/2020/11/28/14/28/harley-davidson-5784457_1280.jpg"
    ],
    rating: 4.6,
    reviewCount: 87,
    inStock: true,
    engineCapacity: "1868 cc",
    maxPower: "93 PS",
    maxTorque: "155 Nm",
    fuelCapacity: "18.9 L",
    topSpeed: "180 km/h",
    transmission: "6 Speed",
    description: "The Harley-Davidson Fat Boy is a V-twin softail cruiser motorcycle with solid-cast wheels and fat tires. It has a distinctive look and feel that has made it a favorite among cruiser enthusiasts. The Fat Boy delivers a smooth ride with its Milwaukee-Eight 114 engine and solid styling.",
    specifications: {
      engine: "Milwaukee-Eight 114 V-Twin",
      displacement: "1868 cc",
      maxPower: "93 PS @ 5,020 rpm",
      maxTorque: "155 Nm @ 3,000 rpm",
      transmission: "6-Speed Cruise Drive",
      fuelCapacity: "18.9 L",
      abs: "Standard",
      frontBrake: "Hydraulic Disc",
      rearBrake: "Hydraulic Disc",
      frontSuspension: "Showa Dual Bending Valve",
      rearSuspension: "Showa Mono Shock with adjustable preload",
      length: "2,370 mm",
      height: "1,140 mm",
      width: "990 mm",
      wheelbase: "1,665 mm",
      groundClearance: "115 mm",
      weight: "317 kg"
    }
  },
  {
    id: "5",
    name: "Honda Gold Wing",
    price: 3799000, // ₹37,99,000
    category: "touring",
    brand: "Honda",
    image: "https://cdn.pixabay.com/photo/2014/06/25/10/22/honda-377058_1280.jpg",
    images: [
      "https://cdn.pixabay.com/photo/2014/06/25/10/22/honda-377058_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/08/24/13/28/motorcycle-1616842_1280.jpg",
      "https://cdn.pixabay.com/photo/2012/02/16/14/12/motorcycles-13841_1280.jpg"
    ],
    rating: 4.9,
    reviewCount: 62,
    inStock: true,
    engineCapacity: "1833 cc",
    maxPower: "125 PS",
    maxTorque: "170 Nm",
    fuelCapacity: "21.1 L",
    topSpeed: "200 km/h",
    transmission: "7 Speed DCT",
    description: "The Honda Gold Wing is a series of touring motorcycles manufactured by Honda. Introduced in 1974, the Gold Wing is known for its comfort, smooth ride, and powerful flat-six engine. It's the ultimate luxury touring motorcycle, packed with features for long-distance travel.",
    specifications: {
      engine: "Liquid-cooled, 4-stroke, 24-valve, SOHC, flat-6",
      displacement: "1833 cc",
      maxPower: "125 PS @ 5,500 rpm",
      maxTorque: "170 Nm @ 4,500 rpm",
      transmission: "7-Speed Dual Clutch Transmission",
      fuelCapacity: "21.1 L",
      abs: "Dual-Combined Braking System with ABS",
      frontBrake: "Dual hydraulic 320mm discs with 6-piston calipers",
      rearBrake: "Single hydraulic 316mm disc with 3-piston caliper",
      frontSuspension: "Double Wishbone",
      rearSuspension: "Pro-Link",
      length: "2,615 mm",
      height: "1,430 mm",
      width: "905 mm",
      wheelbase: "1,695 mm",
      groundClearance: "130 mm",
      weight: "379 kg"
    }
  },
  {
    id: "6",
    name: "Triumph Street Triple",
    price: 1050000, // ₹10,50,000
    category: "naked",
    brand: "Triumph",
    image: "https://cdn.pixabay.com/photo/2019/08/11/15/29/triumph-4398538_1280.jpg",
    images: [
      "https://cdn.pixabay.com/photo/2019/08/11/15/29/triumph-4398538_1280.jpg",
      "https://cdn.pixabay.com/photo/2023/05/23/15/16/motorcycle-8012897_1280.jpg",
      "https://cdn.pixabay.com/photo/2023/09/14/15/48/triumph-8253683_1280.jpg"
    ],
    rating: 4.7,
    reviewCount: 73,
    inStock: true,
    new: true,
    engineCapacity: "765 cc",
    maxPower: "121 PS",
    maxTorque: "79 Nm",
    fuelCapacity: "17.4 L",
    topSpeed: "225 km/h",
    transmission: "6 Speed",
    description: "The Triumph Street Triple is a naked or streetfighter motorcycle made by Triumph Motorcycles. It's known for its distinctive bug-eyed headlights and aggressive styling. The Street Triple offers an engaging riding experience with precise handling and a thrilling triple-cylinder engine.",
    specifications: {
      engine: "Liquid-cooled, 12 valve, DOHC, in-line 3-cylinder",
      displacement: "765 cc",
      maxPower: "121 PS @ 11,750 rpm",
      maxTorque: "79 Nm @ 9,350 rpm",
      transmission: "6-speed, wet, multi-plate clutch",
      fuelCapacity: "17.4 L",
      abs: "Optimized Cornering ABS",
      frontBrake: "Twin 310mm floating discs, Brembo M4.32 4-piston radial monobloc calipers",
      rearBrake: "Single 220mm disc, Brembo single piston caliper",
      frontSuspension: "Showa 41mm upside down separate function forks",
      rearSuspension: "Showa piggyback reservoir monoshock",
      length: "2,060 mm",
      height: "1,090 mm",
      width: "775 mm",
      wheelbase: "1,410 mm",
      groundClearance: "140 mm",
      weight: "189 kg"
    }
  },
  {
    id: "7",
    name: "Royal Enfield Continental GT 650",
    price: 329000, // ₹3,29,000
    category: "cafe-racer",
    brand: "Royal Enfield",
    image: "https://cdn.pixabay.com/photo/2018/08/14/15/19/royal-enfield-3605937_1280.jpg",
    images: [
      "https://cdn.pixabay.com/photo/2018/08/14/15/19/royal-enfield-3605937_1280.jpg",
      "https://cdn.pixabay.com/photo/2022/05/23/05/30/motorcycle-7215795_1280.jpg",
      "https://cdn.pixabay.com/photo/2022/05/09/15/51/motorcycle-7184943_1280.jpg"
    ],
    rating: 4.5,
    reviewCount: 120,
    inStock: true,
    bestSeller: true,
    engineCapacity: "648 cc",
    maxPower: "47 PS",
    maxTorque: "52 Nm",
    fuelCapacity: "12.5 L",
    topSpeed: "160 km/h",
    transmission: "6 Speed",
    description: "The Royal Enfield Continental GT 650 is a cafe racer style motorcycle manufactured by Royal Enfield. It features a parallel-twin engine and classic styling that pays homage to the original Continental GT from the 1960s, making it a perfect blend of modern technology with retro design.",
    specifications: {
      engine: "Air/oil-cooled, SOHC, parallel-twin",
      displacement: "648 cc",
      maxPower: "47 PS @ 7,150 rpm",
      maxTorque: "52 Nm @ 5,250 rpm",
      transmission: "6-speed constant mesh",
      fuelCapacity: "12.5 L",
      abs: "Dual-channel ABS",
      frontBrake: "320 mm disc, ABS",
      rearBrake: "240 mm disc, ABS",
      frontSuspension: "41 mm telescopic forks, 110 mm travel",
      rearSuspension: "Twin coil-over shocks, 88 mm travel",
      length: "2,122 mm",
      height: "1,024 mm",
      width: "789 mm",
      wheelbase: "1,400 mm",
      groundClearance: "174 mm",
      weight: "198 kg"
    }
  },
  {
    id: "8",
    name: "Suzuki Hayabusa",
    price: 1699000, // ₹16,99,000
    category: "sport",
    brand: "Suzuki",
    image: "https://cdn.pixabay.com/photo/2019/09/15/14/53/motorcycle-4478599_1280.jpg",
    images: [
      "https://cdn.pixabay.com/photo/2019/09/15/14/53/motorcycle-4478599_1280.jpg",
      "https://cdn.pixabay.com/photo/2019/09/15/14/53/motorcycle-4478600_1280.jpg",
      "https://cdn.pixabay.com/photo/2022/05/09/15/23/motorcycle-7184907_1280.jpg"
    ],
    rating: 4.8,
    reviewCount: 95,
    inStock: true,
    engineCapacity: "1340 cc",
    maxPower: "190 PS",
    maxTorque: "150 Nm",
    fuelCapacity: "20 L",
    topSpeed: "299 km/h",
    transmission: "6 Speed",
    description: "The Suzuki Hayabusa is a sport bike motorcycle made by Suzuki since 1999. It immediately won acclaim as the world's fastest production motorcycle, with a top speed of 303 to 312 km/h. The Hayabusa is named after the peregrine falcon, a bird that is capable of reaching speeds of 300 km/h.",
    specifications: {
      engine: "4-stroke, liquid-cooled, 4-cylinder, DOHC",
      displacement: "1340 cc",
      maxPower: "190 PS @ 9,700 rpm",
      maxTorque: "150 Nm @ 7,000 rpm",
      transmission: "6-speed constant mesh",
      fuelCapacity: "20 L",
      abs: "Motion Track Brake System with ABS",
      frontBrake: "Brembo Stylema, 4-piston, twin disc",
      rearBrake: "Nissin, 1-piston, single disc",
      frontSuspension: "Inverted telescopic, coil spring, oil damped",
      rearSuspension: "Link type, coil spring, oil damped",
      length: "2,180 mm",
      height: "1,165 mm",
      width: "735 mm",
      wheelbase: "1,480 mm",
      groundClearance: "125 mm",
      weight: "266 kg"
    }
  },
  {
    id: "9",
    name: "KTM 390 Duke",
    price: 310000, // ₹3,10,000
    category: "naked",
    brand: "KTM",
    image: "https://cdn.pixabay.com/photo/2020/01/31/22/17/ktm-4809878_1280.jpg",
    images: [
      "https://cdn.pixabay.com/photo/2020/01/31/22/17/ktm-4809878_1280.jpg",
      "https://cdn.pixabay.com/photo/2022/01/13/08/13/motorcycle-6934728_1280.jpg",
      "https://cdn.pixabay.com/photo/2023/02/10/08/50/ktm-7781211_1280.jpg"
    ],
    rating: 4.6,
    reviewCount: 142,
    inStock: true,
    new: true,
    featured: true,
    engineCapacity: "373 cc",
    maxPower: "43 PS",
    maxTorque: "37 Nm",
    fuelCapacity: "13.4 L",
    topSpeed: "170 km/h",
    transmission: "6 Speed",
    description: "The KTM 390 Duke is a 373 cc displacement, single-cylinder, 4-stroke naked bike from KTM. It's known for its aggressive styling, nimble handling, and punchy performance, making it popular among young riders looking for a thrilling street bike experience.",
    specifications: {
      engine: "Liquid-cooled, single-cylinder, 4-stroke",
      displacement: "373 cc",
      maxPower: "43 PS @ 9,000 rpm",
      maxTorque: "37 Nm @ 7,000 rpm",
      transmission: "6-speed",
      fuelCapacity: "13.4 L",
      abs: "Bosch 9.1 MP two-channel ABS",
      frontBrake: "320 mm disc with four-piston radial fixed caliper",
      rearBrake: "230 mm disc with single-piston floating caliper",
      frontSuspension: "WP APEX 43 mm USD fork",
      rearSuspension: "WP APEX shock absorber",
      length: "2,145 mm",
      height: "1,097 mm",
      width: "822 mm",
      wheelbase: "1,367 mm",
      groundClearance: "185 mm",
      weight: "171 kg"
    }
  },
  {
    id: "10",
    name: "Yamaha MT-15",
    price: 164000, // ₹1,64,000
    category: "naked",
    brand: "Yamaha",
    image: "https://cdn.pixabay.com/photo/2015/07/01/08/42/motorcycle-827035_1280.jpg",
    images: [
      "https://cdn.pixabay.com/photo/2015/07/01/08/42/motorcycle-827035_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/08/27/13/52/motorcycle-1624614_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/03/12/19/57/yamaha-3220946_1280.jpg"
    ],
    rating: 4.3,
    reviewCount: 87,
    inStock: true,
    engineCapacity: "155 cc",
    maxPower: "18.5 PS",
    maxTorque: "13.9 Nm",
    fuelCapacity: "10 L",
    topSpeed: "130 km/h",
    transmission: "6 Speed",
    description: "The Yamaha MT-15 is a naked streetfighter motorcycle based on the YZF-R15. It features muscular styling, an aggressive stance, and Yamaha's Variable Valve Actuation (VVA) technology for better performance across the rev range, making it a popular choice for urban riding.",
    specifications: {
      engine: "Liquid-cooled, 4-stroke, SOHC, 4-valve",
      displacement: "155 cc",
      maxPower: "18.5 PS @ 10,000 rpm",
      maxTorque: "13.9 Nm @ 8,500 rpm",
      transmission: "6-speed",
      fuelCapacity: "10 L",
      abs: "Single-channel ABS",
      frontBrake: "282 mm disc",
      rearBrake: "220 mm disc",
      frontSuspension: "Telescopic forks",
      rearSuspension: "Linked-type monocross",
      length: "1,965 mm",
      height: "1,065 mm",
      width: "800 mm",
      wheelbase: "1,335 mm",
      groundClearance: "155 mm",
      weight: "138 kg"
    }
  }
];

// Generate more products by duplicating and modifying existing ones
const generateMoreProducts = (): Product[] => {
  const baseProducts = [...products];
  const moreProducts: Product[] = [];
  
  for (let i = 0; i < 70 - baseProducts.length; i++) {
    const baseProduct = baseProducts[i % baseProducts.length];
    const id = (Number(baseProduct.id) + 100 + i).toString();
    
    // Create variations of product names
    const variations = [
      `${baseProduct.brand} ${baseProduct.name.split(' ')[1]} ${['Pro', 'Elite', 'Sport', 'Premium', 'Limited'][i % 5]} Edition`,
      `${baseProduct.brand} ${['Super', 'Ultra', 'Hyper', 'Mega', 'Extreme'][i % 5]} ${baseProduct.name.split(' ')[1]}`,
      `${baseProduct.brand} ${baseProduct.name.split(' ')[1]} ${(new Date().getFullYear() - i % 3)} Model`,
      `${baseProduct.brand} ${baseProduct.name.split(' ')[1]} ${['Carbon', 'Titanium', 'Black', 'Fire', 'Ice'][i % 5]} Series`
    ];
    
    const name = variations[i % variations.length];
    
    // Adjust price by ±15%
    const priceAdjustment = 0.85 + (Math.random() * 0.3); // 0.85-1.15
    const price = Math.round(baseProduct.price * priceAdjustment);
    
    // Maybe add an original price
    const hasOriginalPrice = Math.random() > 0.7;
    const originalPrice = hasOriginalPrice ? Math.round(price * 1.1) : undefined;
    
    // Randomly assign featured/bestseller/new
    const featured = Math.random() > 0.8;
    const bestSeller = Math.random() > 0.8;
    const isNew = Math.random() > 0.8;
    
    moreProducts.push({
      ...baseProduct,
      id,
      name,
      price,
      originalPrice,
      featured,
      bestSeller,
      new: isNew,
      inStock: Math.random() > 0.1,
      rating: Math.min(5, baseProduct.rating + (Math.random() * 0.4 - 0.2)),
      reviewCount: Math.floor(baseProduct.reviewCount * (0.7 + Math.random() * 0.6))
    });
  }
  
  return moreProducts;
};

// Combine original products with generated ones
export const allProducts: Product[] = [...products, ...generateMoreProducts()];

