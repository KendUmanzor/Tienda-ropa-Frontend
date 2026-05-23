export interface Product {
    id: string;
    name: string;
    title: string; // compatibility with home.ts
    price: number;
    description: string;
    category: string;
    subcategory?: string;
    stock: number;
    images: string[];
    slug: string;
    badge?: string;
    discount?: number;
    specs?: { label: string; value: string }[];
}

export const products: Product[] = [
    {
        id: "1",
        name: "Jersey 勝利傑 (Shōri Ketsu) - Samurai Edition",
        title: "Jersey 勝利傑 (Shōri Ketsu) - Samurai Edition",
        price: 1450,
        description: "Un jersey tipo polo de alto rendimiento que fusiona el estilo de los uniformes de fútbol retro con la cultura japonesa. Presenta un diseño dividido en tonos azul medianoche y carmesí, decorado con llamas sutiles y bordados de alta calidad.",
        category: "Ropa de Hombre",
        subcategory: "camisas",
        stock: 25,
        images: [
            "../src/assets/shori-ketsu-1.jpg",
            "../src/assets/shori-ketsu-2.jpg",
            "../src/assets/shori-ketsu-3.jpg",
            "../src/assets/shori-ketsu-4.jpg"
        ],
        slug: "jersey-shōri-ketsu-samurai-edition",
        badge: "Premium",
        discount: 15,
        specs: [
            { label: "Material", value: "100% Poliéster transpirable con tecnología de secado rápido." },
            { label: "Corte", value: "Oversized fit para mayor comodidad y estilo urbano." },
            { label: "Cuello", value: "Estilo polo acanalado con detalles en contraste tricolor." },
            { label: "Costuras", value: "Reforzadas en hombros y mangas para mayor durabilidad." }
        ]
    },
    {
        id: "2",
        name: "Sony WH-1000XM5",
        title: "Sony WH-1000XM5",
        price: 399,
        description: "Industry-leading noise cancellation, exceptional sound quality, and crystal-clear hands-free calling. The WH-1000XM5 headRopa de Mujer rewrite the rules for distraction-free listening and ultra-clear call quality.",
        category: "Calzado",
        stock: 12,
        images: [
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "sony-wh-1000xm5",
        badge: "Bestseller",
        discount: 10,
        specs: [
            { label: "Battery Life", value: "Up to 30 hours" },
            { label: "Noise Cancelling", value: "Industry Leading" },
            { label: "Bluetooth", value: "v5.2" },
            { label: "Weight", value: "250g" }
        ]
    },
    {
        id: "3",
        name: "iPhone 15 Pro Max",
        title: "iPhone 15 Pro Max",
        price: 1199,
        description: "Forged in titanium. Featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever. Experience the next level of mobile technology.",
        category: "Ropa de Mujer",
        subcategory: "iphone",
        stock: 0,
        images: [
            "https://i.blogs.es/f15f0b/img_2033/650_1200.jpeg",
            "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "iphone-15-pro-max",
        badge: "New Arrival",
        discount: 0,
        specs: [
            { label: "Chip", value: "A17 Pro" },
            { label: "Camera", value: "48MP Main" },
            { label: "Material", value: "Titanium" },
            { label: "Size", value: "6.7-inch" }
        ]
    },
    {
        id: "4",
        name: "Logitech MX Master 3S",
        title: "Logitech MX Master 3S",
        price: 99,
        description: "An icon, remastered. Meet MX Master 3S – an iconic mouse remastered for ultimate tactility, performance, and flow. Feel every moment of your workflow with even more precision, tactility, and performance.",
        category: "Accesorios",
        stock: 50,
        images: [
            "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
            "https://www.mastecnologia.com.ar/images/productos/17101.png"
        ],
        slug: "logitech-mx-master-3s",
        badge: "Essential",
        discount: 0,
        specs: [
            { label: "DPI", value: "8000" },
            { label: "Buttons", value: "7 Programmable" },
            { label: "Battery", value: "Rechargeable" },
            { label: "Connectivity", value: "Logi Bolt / BT" }
        ]
    },
    {
        id: "5",
        name: "Polo de Malla 'Halftime Worldwide' - Edición Vintage Sport",
        title: "Polo de Malla 'Halftime Worldwide' - Edición Vintage Sport",
        price: 1280,
        description: "Un polo de estética deportiva retro con un diseño de rayas horizontales en tonos tierra (ocre y verde oliva). Destaca por su tejido de malla transpirable (mesh), ideal para climas cálidos, y un cierre de cremallera en el cuello que le da un toque moderno y versátil.",
        category: "Ropa de Hombre",
        subcategory: "camisas",
        stock: 18,
        images: [
            "../src/assets/halftime-1.jpg",
            "../src/assets/halftime-2.jpg",
            "../src/assets/halftime-3.jpg",
            "../src/assets/halftime-4.jpg",
        ],
        slug: "polo-de-malla-halftime-worldwide-edicion-vintage-sport",
        badge: "Nuevo",
        discount: 0,
        specs: [
            { label: "Material", value: "Tejido de malla técnica perforada de alta ventilación" },
            { label: "Corte", value: "Boxy Fit (ancho y ligeramente corto) con hombros caídos." },
            { label: "Cuello", value: "Cuello de polo clásico con cierre de media cremallera metálica." },
            { label: "Textura", value: "Tacto suave pero estructurado, diseñado para mantener la forma." }
        ]
    },
    {
        id: "6",
        name: "Ed Hardy 'Love Kills' Baggy Jorts - Vintage Wash",
        title: "Ed Hardy 'Love Kills' Baggy Jorts - Vintage Wash",
        price: 1650,
        description: "Pantalones cortos de mezclilla tipo \"jorts\" con un lavado ácido grisáceo de inspiración vintage. Esta pieza destaca por su arte gráfico icónico estilo tatuaje en los bolsillos traseros y bordados laterales detallados, capturando la esencia del streetwear de los años 2000.",
        category: "Ropa de Hombre",
        subcategory: "pantalones",
        stock: 12,
        images: [
            "../src/assets/ed-hardy-1.jpg",
            "../src/assets/ed-hardy-2.jpg",
            "../src/assets/ed-hardy-3.jpg",
            "../src/assets/ed-hardy-4.jpg"
        ],
        slug: "ed-hardy-love-kills-baggy-jorts-vintage-wash",
        discount: 10,
        specs: [
            { label: "Material", value: "Mezclilla pesada (14 oz) de alta resistencia 100% algodón" },
            { label: "Corte", value: "Baggy / Wide Leg (corte ancho) que llega por debajo de la rodilla" },
            { label: "Cierre", value: "Cremallera metálica reforzada y botón de marca grabado" },
            { label: "Bordados Laterales", value: "Arte floral estilo oriental en hilo color ocre en ambas piernas" }
        ]
    },
    {
        id: "7",
        name: "Carpenter Shorts 'Ink Splash' - Sand & Onyx Edition",
        title: "Carpenter Shorts 'Ink Splash' - Sand & Onyx Edition",
        price: 1150,
        description: "Pantalones cortos estilo carpintero confeccionados en lona resistente. Presentan un patrón único de salpicaduras de tinta \"all-over print\" sobre una base color arena. Es una prenda técnica que combina la utilidad del trabajo pesado con la estética del streetwear moderno.",
        category: "Ropa de Hombre",
        subcategory: "pantalones",
        stock: 15,
        images: [
            "../src/assets/carpenter-1.jpg",
            "../src/assets/carpenter-2.jpg",
            "../src/assets/carpenter-3.jpg",
            "../src/assets/carpenter-4.jpg"
        ],
        slug: "carpenter-shorts-ink-splash-sand-onyx-edition",
        badge: "Nuevo",
        discount: 20,
        specs: [
            { label: "Material", value: "Lona de algodón (Canvas) de alta densidad, pre-lavada para evitar encogimiento" },
            { label: "Corte", value: "Relaxed Fit con tiro medio y pernera ancha" },
            { label: "Cierre", value: "Botón metálico de alta resistencia y remaches reforzados en puntos de tensión" }
        ]
    },
    {
        id: "8",
        name: "Pantalón 'Obsidian' Relaxed Fit - Urban Tailoring",
        title: "Pantalón 'Obsidian' Relaxed Fit - Urban Tailoring",
        price: 1320,
        description: "Un pantalón de corte ancho y fluido en color negro absoluto. Diseñado para quienes buscan una estética limpia y sofisticada sin sacrificar la comodidad. Su caída recta lo hace ideal para combinar con sneakers de plataforma o calzado más formal, adaptándose a un estilo \"Old Money\" o minimalista moderno.",
        category: "Ropa de Hombre",
        subcategory: "pantalones",
        stock: 20,
        images: [
            "../src/assets/obsidian-1.jpg",
            "../src/assets/obsidian-2.jpg",
            "../src/assets/obsidian-3.jpg",
            "../src/assets/obsidian-4.jpg"
        ],
        slug: "obsidian-relaxed-fit-urban-tailoring",
        badge: "Basico",
        specs: [
            { label: "Material", value: "Mezcla de algodón y rayón para una caída fluida y tacto suave" },
            { label: "Corte", value: "Wide Leg (pernera ancha) con pinzas frontales sutiles para dar estructura" },
            { label: "Cintura", value: "Pretina elástica en la parte posterior para un ajuste adaptable y cómodo" },
            { label: "Detalles", value: "Acabado mate de alta calidad que no refleja la luz, manteniendo el negro intenso" }
        ]
    },
    {
        id: "9",
        name: "Samsung Galaxy S24 Ultra",
        title: "Samsung Galaxy S24 Ultra",
        price: 1299,
        description: "Unleash your creativity, productivity, and possibilities. With a built-in S Pen and the most powerful processor yet.",
        category: "Ropa de Mujer",
        subcategory: "android",
        stock: 20,
        images: [
            "../src/assets/samsung-1.jpg",
            "../src/assets/samsung-2.jpg",
            "../src/assets/samsung-3.jpg",
            "../src/assets/samsung-4.jpg"
        ],
        slug: "samsung-galaxy-s24-ultra",
        badge: "AI Ready",
        specs: [
            { label: "Camera", value: "200MP" },
            { label: "Zoom", value: "100x" },
            { label: "Pen", value: "Included" }
        ]
    },
    {
        id: "10",
        name: "Google Pixel 8 Pro",
        title: "Google Pixel 8 Pro",
        price: 999,
        description: "The all-pro phone engineered by Google. It has a polished aluminum frame and matte back glass, and it comes in elegant colors.",
        category: "Ropa de Mujer",
        subcategory: "android",
        stock: 15,
        images: [
            "https://lh3.googleusercontent.com/22AC6Qcb5-4qN6QJTkBzGK2N5kS5AZyuss9AcAQzAuxjHqGz3VfI5-MSXsKDzuUuePoqHAmyAFyewt9CdNyw3oQikUDY7dTSmyDsVPo=rw-e365-w842-v1",
            "https://tecnopolis.com.bo/cdn/shop/files/8-PRO.png?v=1763581431"
        ],
        slug: "google-pixel-8-pro",
        badge: "Smartest",
        specs: [
            { label: "Chip", value: "Tensor G3" },
            { label: "OS", value: "Android 14" },
            { label: "AI", value: "Gemini Nano" }
        ]
    },
    {
        id: "11",
        name: "iPhone 14",
        title: "iPhone 14",
        price: 699,
        description: "A total powerhouse. Impressive battery life, durable build, and a camera system that takes stunning photos in any light.",
        category: "Ropa de Mujer",
        subcategory: "iphone",
        stock: 30,
        images: [
            "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?auto=format&fit=crop&w=800&q=80",
        ],
        slug: "iphone-14",
        specs: [
            { label: "Chip", value: "A15 Bionic" },
            { label: "Screen", value: "6.1 Super Retina" },
            { label: "Safety", value: "Crash Detection" }
        ]
    },
    {
        id: "12",
        name: "AirPods Max",
        title: "AirPods Max",
        price: 549,
        description: "A perfect balance of exhilarating high-fidelity Calzado and the effortless magic of AirPods.",
        category: "Calzado",
        stock: 10,
        images: [
            "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "airpods-max",
        badge: "Premium Calzado",
        specs: [
            { label: "Driver", value: "Dynamic" },
            { label: "ANC", value: "Active" },
            { label: "Spatial", value: "Head Tracking" }
        ]
    },
    {
        id: "13",
        name: "Bose QuietComfort Ultra",
        title: "Bose QuietComfort Ultra",
        price: 429,
        description: "World-class noise cancellation, quieter than ever before. Breakthrough spatial Calzado for more immersive listening.",
        category: "Calzado",
        stock: 18,
        images: [
            "https://m.media-amazon.com/images/I/51ZR4lyxBHL.jpg",
        ],
        slug: "bose-qc-ultra",
        specs: [
            { label: "Battery", value: "24 Hours" },
            { label: "Modes", value: "Quiet/Aware" },
            { label: "Comfort", value: "Plush" }
        ]
    },
    {
        id: "14",
        name: "Sonos Era 100",
        title: "Sonos Era 100",
        price: 249,
        description: "Next-gen acoustics and new levels of connectivity transform any room with the finely tuned stereo sound and rich bass.",
        category: "Calzado",
        stock: 22,
        images: [
            "https://culturageek.com.ar/wp-content/uploads/2024/12/566898-Era-100-Pro_Mount-Ceiling_Black-309023-original-1733603775_11zon.webp",
        ],
        slug: "sonos-era-100",
        specs: [
            { label: "Type", value: "Smart Speaker" },
            { label: "Voice", value: "Alexa Built-in" },
            { label: "Connect", value: "WiFi/BT" }
        ]
    },
    {
        id: "15",
        name: "Jeans 'Blue Ash' Wide Leg - 90s Revival Edition",
        title: "Jeans 'Blue Ash' Wide Leg - 90s Revival Edition",
        price: 1550,
        description: "Los auténticos jeans de corte ancho que definieron una época. Con un lavado a la piedra en azul claro y un efecto de desgaste natural en los muslos, estos pantalones ofrecen una silueta relajada y nostálgica. Su construcción robusta asegura que mantengan su forma con el paso del tiempo.",
        category: "Ropa de Hombre",
        subcategory: "pantalones",
        stock: 30,
        images: [
            "../src/assets/blue-ash-1.jpg",
            "../src/assets/blue-ash-2.jpg",
            "../src/assets/blue-ash-3.jpg",
            "../src/assets/blue-ash-4.jpg",
        ],
        slug: "jeans-blue-ash-wide-leg-90s Revival Edition",
        badge: "Nuevo",
        discount: 10,
        specs: [
            { label: "Material", value: "Mezclilla rígida de 13.5 oz, 100% algodón (sin elastano) para un look auténtico" },
            { label: "Corte", value: "Extra Baggy desde la cadera hasta el ruedo" },
            { label: "Cierre", value: "Bragueta de cremallera metálica YKK y botón de aleación de zinc" },
            { label: "Detalles Traseros", value: "Bolsillos de gran tamaño posicionados estratégicamente para acentuar el estilo skater." },
        ]
    },
    {
        id: "16",
        name: "Apple Magic Trackpad",
        title: "Apple Magic Trackpad",
        price: 129,
        description: "Wireless and rechargeable, it includes the full range of Multi-Touch gestures and Force Touch technology.",
        category: "Accesorios",
        stock: 40,
        images: [
            "https://images.unsplash.com/photo-1522204538344-922f76ecc041?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "magic-trackpad",
        specs: [
            { label: "Surface", value: "Glass" },
            { label: "Connect", value: "Bluetooth" },
            { label: "Color", value: "White/Black" }
        ]
    },
    {
        id: "17",
        name: "Samsung T7 Shield 2TB",
        title: "Samsung T7 Shield 2TB",
        price: 159,
        description: "Rugged durability. Fast speeds. The T7 Shield gives you superior performance on the go, even in challenging environmental conditions.",
        category: "Accesorios",
        stock: 100,
        images: [
            "https://http2.mlstatic.com/D_NQ_NP_646728-CBT96610611509_102025-O.webp",
        ],
        slug: "samsung-t7-shield",
        specs: [
            { label: "Speed", value: "1000MB/s" },
            { label: "Rating", value: "IP65" },
            { label: "Port", value: "USB-C" }
        ]
    },
    {
        id: "18",
        name: "Ed Hardy 'Yellow Rose' Ribbed Tank - Y2K Essentials",
        title: "Ed Hardy 'Yellow Rose' Ribbed Tank - Y2K Essentials",
        price: 650,
        description: "Una camiseta de tirantes (tank top) clásica en blanco puro, esencial para un look de capas o para climas cálidos. Presenta un gráfico central estilo tatuaje tradicional con una rosa amarilla y detalles en rojo, junto a la icónica caligrafía de Ed Hardy, manteniendo la estética rebelde y artística de la marca.",
        category: "Ropa de Hombre",
        subcategory: "camisas",
        stock: 40,
        images: [
            "../src/assets/Tirantes-1.jpg",
            "../src/assets/Tirantes-2.jpg",
            "../src/assets/Tirantes-3.jpg",
            "../src/assets/Tirantes-4.jpg"
        ],
        slug: "ed-hardy-yellow-rose-ribbed-tank",
        discount: 25,
        specs: [
            { label: "Material", value: "95% Algodón y 5% Elastano para un ajuste ceñido y elástico" },
            { label: "Tejido", value: "Punto acanalado (ribbed) de gramaje ligero, muy suave al tacto" },
            { label: "Corte", value: "Slim Fit (entallado) con sisas y cuello reforzados para evitar deformaciones" },
            { label: "Costuras", value: "Laterales invisibles para maximizar el confort" }
        ]
    },
    {
        id: "19",
        name: "Fujifilm X100V",
        title: "Fujifilm X100V",
        price: 1399,
        description: "The fifth iteration in Fujifilm's X100 series, blending classic dial-based design with the most advanced mobile technology.",
        category: "Accesorios",
        stock: 3,
        images: [
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
        ],
        slug: "fujifilm-x100v",
        badge: "Limited",
        specs: [
            { label: "Sensor", value: "APS-C" },
            { label: "Lens", value: "23mm F2" },
            { label: "Video", value: "4K" }
        ]
    },
    {
        id: "20",
        name: "Hoodie 'Core' Melange Grey - Oversized Zip-Up",
        title: "Hoodie 'Core' Melange Grey - Oversized Zip-Up",
        price: 1100,
        description: "La sudadera con capucha definitiva. En un tono gris jaspeado clásico, esta pieza ofrece una versatilidad inigualable. Con un interior cepillado para mayor suavidad y un corte holgado, es la prenda perfecta para el día a día o para crear capas en días frescos. Su diseño limpio sin logos frontales la convierte en un básico atemporal.",
        category: "Ropa de Hombre",
        subcategory: "sueteres",
        stock: 35,
        images: [
            "../src/assets/hoody-core-1.jpg",
            "../src/assets/hoody-core-2.jpg",
            "../src/assets/hoody-core-3.jpg",
            "../src/assets/hoody-core-4.jpg"
        ],
        slug: "hoodie-core-melange-grey-oversized-zip-up",
        badge: "Nuevo",
        specs: [
            { label: "Material", value: "Mezcla de algodón pesado y poliéster (320 GSM) para máximo abrigo y durabilidad" },
            { label: "Corte", value: "Boxy Oversized con hombros caídos" },
            { label: "Cierre", value: "Cremallera metálica frontal completa con tirador ergonómico" },
            { label: "Interior", value: "Forro de felpa suave (fleece) que retiene el calor corporal" }
        ]
    }
];

export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
export const getRelatedProducts = (category: string, currentSlug: string) =>
    products.filter(p => p.category === category && p.slug !== currentSlug).slice(0, 4);
