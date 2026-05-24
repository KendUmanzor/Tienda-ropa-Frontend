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
        name: "tenisi Urban Black",
        title: "tenisi Urban Black",
        price: 399,
        description: "Un calzado deportivo de inspiración urbana que combina la estética minimalista con detalles modernos. Con una parte superior",
        category: "Calzado",
        stock: 12,
        images: [
            "../src/assets/zapato1111.jpg",
            "../src/assets/zapato1.jpg",
            "../src/assets/zapato111.jpg",
            ],
        slug: "Tenisi-Urban-Black",
        badge: "Bestseller",
        discount: 10,
        specs: [
            { label: "Material", value: "Cuero sintético" },
            { label: "Talla", value: "42-44" },
            { label: "Color", value: "Azul cielo"}
        ]
    },
    {
        id: "3",
        name: "Bikini Bottom 'Wild Plum' - Bead & Tie Edition",
        title: "Bikini Bottom 'Wild Plum' - Bead & Tie Edition",
        price: 450,
        description: "Una calzoneta de bikini de corte clásico con amarraderos laterales ajustables. Destaca por su color púrpura profundo (Plum) y los detalles de cuentas artesanales en los extremos de los cordones, que aportan un aire bohemio y sofisticado. Es una pieza versátil diseñada para ofrecer un ajuste personalizado y cómodo, ideal para lucir tanto en la playa como en la piscina con un estilo único y elegante.",
        category: "Ropa de Mujer",
        subcategory: "bikinis",
        stock: 25,
        images: [
            "../src/assets/bikini-1.jpg",
            "../src/assets/bikini-2.jpg",  
            "../src/assets/bikini-3.jpg",
            "../src/assets/bikini-4.jpg"
        ],
        slug: "bikini-bottom-wild-plum-bead-tie-edition",
        badge: "New Arrival",
        discount: 15,
        specs: [
            { label: "Material", value: "82% Poliamida y 18% Elastano con acabado mate y protección UV" },
            { label: "Corte", value: "Cobertura media con tiro bajo y laterales regulable" },
            { label: "Costuras", value: "Elásticas invisibles que no marcan la piel" },
            { label: "Forro", value: "Doble forro interno en el mismo color para evitar transparencias y mejorar el soporte" }
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
        name: "Vestido 'Lace & Indigo' - Cottagecore Edition",
        title: "Vestido 'Lace & Indigo' - Cottagecore Edition",
        price: 1250,
        description: "Un encantador vestido corto en un profundo azul índigo con un lavado que recuerda a la mezclilla ligera. Presenta un diseño detallado con encaje en el escote, tirantes con volantes y un panel frontal de botones. La espalda cuenta con un nido de abeja (smock) elástico que garantiza un ajuste perfecto y cómodo a la silueta.",
        category: "Ropa de Mujer",
        subcategory: "vestidos",
        stock: 15,
        images: [
            "../src/assets/vestido-1.jpg",
            "../src/assets/vestido-2.jpg",
            "../src/assets/vestido-3.jpg",
            "../src/assets/vestido-4.jpg"
        ],
        slug: "vestido-lace-indigo-cottagecore",
        badge: "AI Ready",
        discount: 10, 
        specs: [
            { label: "Material", value: "100% Rayón de alta calidad con acabado tipo lino, fresco y con caída" },
            { label: "Corte", value: "Corte en 'A' con falda de un solo tiempo y volantes"},
            { label: "Escote", value: "Cuello tipo 'V' adornado con encaje floral delicado" },
            { label: "Tirantes", value: "Tirantes anchos con terminación de mini volantes elásticos" }
        ]
    },
    {
        id: "10",
        name: "Vestido 'Antique Red' - Lace Trimmed Blouse",
        title: "Vestido 'Antique Red' - Lace Trimmed Blouse",
        price: 580,
        description: "Un vestido delicado en un suave tono rojo antiguo con textura de mini-pliegues. Presenta un escote en \"V\" pronunciado. Es una prenda ligera, con una espalda elástica que permite un ajuste cómodo y ceñido al torso",
        category: "Ropa de Mujer",
        subcategory: "vestidos",
        stock: 22,
        images: [
            "../src/assets/vestido-rojo-1.jpg",
            "../src/assets/vestido-rojo-2.jpg",
            "../src/assets/vestido-rojo-3.jpg",
            "../src/assets/vestido-rojo-4.jpg"
        ],
        slug: "vestido-antique-red-lace-trimmed-blouse",
        badge: "Smartest",
        discount: 15,
        specs: [
            { label: "Material", value: "Mezcla de algodón y lino suave, altamente transpirable" },
            { label: "Corte", value: "Crop (corto) con terminación de encaje en el bajo" },
            { label: "Escote", value: "Cuello en \"V\"" },
            { label: "Tirantes", value: "Finos y ajustables (tipo espagueti) para un look más limpio" }
        ]
    },
    {
        id: "11",
        name: "Camiseta 'Papillon Noi' - Vintage Graphic Tee",
        title: "Camiseta 'Papillon Noi' - Vintage Graphic Tee",
        price: 699,
        description: "A total powerhouse. Impressive battery life, durable build, and a camera system that takes stunning photos in any light.",
        category: "Ropa de Mujer",
        subcategory: "tops",
        stock: 28,
        images: [
            "../src/assets/camiseta-1.jpg",
            "../src/assets/camiseta-2.jpg",
            "../src/assets/camiseta-3.jpg",
            "../src/assets/camiseta-4.jpg"
        ],
        slug: "camiseta-papillon-noi",
        discount: 5,
        specs: [
            { label: "Material", value: "100% Algodón orgánico de peso medio, suave al tacto y duradero." },
            { label: "Corte", value: "Regular Fit con cuello redondo acanalado" },
            { label: "Costuras", value: "Doble costura en dobladillo y mangas para evitar deformaciones" },
            { label: "Etiqueta", value: "Estampada en el cuello para evitar irritaciones en la piel" }
        ]
    },
    {
        id: "12",
        name: "Zapatillas urbanas Burdeos",
        title: "Zapatillas urbanas Burdeos",
        price: 549,
        description: "Eleva tu estilo diario. Dale un giro audaz a tus looks casuales con estas zapatillas urbanas de Bershka. Con un imponente tono burdeos y una silueta de inspiración retro, este par es el equilibrio perfecto entre comodidad urbana y tendencia absoluta.",
        category: "Calzado",
        stock: 10,
        images: [
            "../src/assets/zapato2.jpg",
            "../src/assets/zapato22.jpg",
            "../src/assets/zapato222.jpg",
            "../src/assets/zapato2222.jpg",
            ],
        slug: "zapatillas-urbanas-burdeos",
        badge: "Calzado Premium",
        specs: [
            { label: "Color", value: "Burdeos / Blanco Crema" },
            { label: "Estilo", value: "Casual / Streetwear" },
            { label: "Talla", value: "42-44" }
        ]
    },
    {
        id: "13",
        name: "Botas Mustard Yellow",
        title: "Botas Mustard Yellow",
        price: 429,
        description: "La resistencia que define tu estilo. Prepárate para el otoño y el invierno con estas robustas botas de estilo industrial. Inspiradas en un clásico atemporal, estas botas no solo ofrecen un look imponente y urbano, sino que están construidas para durar.",
        category: "Calzado",
        stock: 18,
        images: [
            "../src/assets/zapato333.jpg",
            "../src/assets/zapato3.jpg",
            "../src/assets/zapato33.jpg",
            
        ],
        slug: "botas-mustard-yellow",
        specs: [
            { label: "Color", value: "Amarillo Mostaza" },
            { label: "Estilo", value: "Utilitario / Streetwear" },
            { label: "Talla", value: "42-44" }
        ]
    },
    {
        id: "14",
        name: "Botas Distressed Brown",
        title: "Botas Distressed Brown",
        price: 249,
        description: "El clásico del festival que necesitas todo el año. Súmate a la tendencia western con estas impresionantes botas estilo cowboy. Con un acabado texturizado que imita la piel desgastada y un bordado artesanal clásico, este par es la pieza declaración definitiva.",
        category: "Calzado",
        stock: 22,
        images: [
            "../src/assets/zapato44.jpg",
            "../src/assets/zapato4.jpg",
            "../src/assets/zapato444.jpg",
            "../src/assets/zapato4444.jpg"
        ],
        slug: "botas-distressed-brown",
        specs: [
            { label: "Color", value: "Marrón Desgastado / Café" },
            { label: "Estilo", value: "Western / Streetwear" },
            { label: "Talla", value: "42-44" }
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
    },
    {
        id: "21",
        name: "Botas Taupe Suede",
        title: "Botas Taupe Suede",
        price: 1114,
        description: "Estilo rebelde con un toque sofisticado. Eleva tus looks de temporada con estas espectaculares botas altas de estética biker.",
        category: "Calzado",
        stock: 2,
        images: [
            "../src/assets/zapato5.jpg",
            "../src/assets/zapato55.jpg",
            "../src/assets/zapato555.jpg",
            "../src/assets/zapato5555.jpg"
        ],
        slug: "botas-taupe-suede",
        specs: [
            { label: "Color", value: "Taupe (Beige Grisáceo / Arena)" },
            { label: "Estilo", value: "Biker / Casual Urbano" },
            { label: "Talla", value: "42-44" }
        ]
    },
    {
        id: "22",
        name: "Sandalias Thong Total Black",
        title: "Sandalias Thong Total Black",
        price: 2749,
        description: "Vuelven los 2000 con su máxima altura. Lanza tus looks de verano al siguiente nivel con estas sandalias de dedo con súper plataforma de Bershka.",
        category: "Calzado",
        stock: 37,
        images: [
            "../src/assets/zapato6.jpg",
            "../src/assets/zapato66.jpg",
            "../src/assets/zapato666.jpg",
            "../src/assets/zapato6666.jpg"
        ],
        slug: "sandalias-thong-total-black",
        specs: [
            { label: "Color", value: "Negro Absoluto"},
            { label: "Estilo", value: "Y2K / Playa Urbano" },
            { label: "Talla", value: "42-44" }
        ]
    },
    {
        id: "23",
        name: "Sandalias Electric Red",
        title: "Sandalias Electric Red",
        price: 2549,
        description: "Pura actitud en cada paso. Rompe moldes esta temporada con las sandalias de tacón tipo thong de Bershka. Fusionando la nostalgia de los años 2000 con un acabado futurista deslumbrante, este par en rojo metalizado es la dosis de magnetismo que tus conjuntos de noche necesitan.",
        category: "Calzado",
        stock: 22,
        images: [
            "../src/assets/zapato7.jpg",
            "../src/assets/zapato77.jpg",
            "../src/assets/zapato777.jpg",
            "../src/assets/zapato7777.jpg"
        ],
        slug: "sandalias-electric-red",
        specs: [
            { label: "Color", value: "Rojo Eléctrico Metalizado" },
            { label: "Estilo", value: "Party / Night Out / Glam" },
            { label: "Talla", value: "42-44" }
        ]
    },
{
        id: "24",
        name: "Sandalias Nude Elegance",
        title: "Sandalias Nude Elegance",
        price: 2549,
        description: "El efecto invisible que alarga tus piernas. Consigue un look sofisticado, minimalista y de pasarela con estas sandalias de tacón en tono nude. La combinación de las tiras de vinilo transparente con la suela neutra crea una ilusión óptica que estiliza la silueta por completo, convirtiéndolas en el comodín definitivo para eventos formales, cócteles o una noche de fiesta.",
        category: "Calzado",
        stock: 22,
        images: [
            "../src/assets/zapato8.jpg",
            "../src/assets/zapato88.jpg",
            "../src/assets/zapato888.jpg",
            "../src/assets/zapato8888.jpg"
        ],
        slug: "sandalias-nude-elegance",
        specs: [
            { label: "Color", value: "Nude / Transparente" },
            { label: "Estilo", value: "Cocktail / Formal / Glam Night" },
            { label: "Talla", value: "42-44" }
        ]
    },
    {
        id: "25",
        name: "Botas Slouchy Desert Taupe",
        title: "Botas Slouchy Desert Taupe",
        price: 2491,
        description: "",
        category: "Calzado",
        stock: 22,
        images: [
            "../src/assets/zapato9.jpg",
            "../src/assets/zapato99.jpg",
            "../src/assets/zapato999.jpg",
            "../src/assets/zapato9999.jpg"
        ],
        slug: "botas-slouchy-desert-taupe",
        specs: [
            { label: "Color", value: "Taupe / Beige" },
            { label: "Estilo", value: "Festival / Boho-Chic / Avant-Garde" },
            { label: "Talla", value: "42-44" }
        ]
    },
    {
        id: "26",
        name: "Falda Midi Blanca Plisada Casual",
        title: "Falda Midi Blanca Plisada Casual",
        price: 890,
        description: "Falda midi blanca de estilo fluido y elegante, ideal para outfits casuales, frescos y femeninos. Su diseño plisado y tela ligera la hacen perfecta para clima cálido o combinaciones minimalistas.",
        category: "Ropa de Mujer",
        subcategory: "faldas",
        stock: 18,
        images: [
            "../src/assets/falda-1.jpg",
            "../src/assets/falda-2.jpg",
            "../src/assets/falda-3.jpg",
            "../src/assets/falda-4.jpg"
        ],
        slug: "falda-midi-blanca-plisada-casual",
        discount: 15,
        specs: [
            { label: "Material", value: "Mezcla de algodón y poliéster" },
            { label: "Corte", value: "Suelto / fluido" },
            { label: "Cintura", value: "Elástica alta" },
            { label: "Textura", value: "Ligera y plisada" }
        ]
    },
    {
        id: "27",
        name: "Falda Mini de Tiro Bajo - Estampado Polka Dot",
        title: "Falda Mini de Tiro Bajo - Estampado Polka Dot",
        price: 890,
        description: "Una pieza clásica con un toque moderno. Esta falda mini presenta un corte estructurado y un estampado de lunares blancos sobre fondo negro, ideal para un look casual de verano o una salida nocturna con estilo retro",
        category: "Ropa de Mujer",
        subcategory: "faldas",
        stock: 24,
        images: [
            "../src/assets/falda-negra-1.jpg",
            "../src/assets/falda-negra-2.jpg",
            "../src/assets/falda-negra-3.jpg",
            "../src/assets/falda-negra-4.jpg"
        ],
        slug: "falda-mini-de-tiro-bajo---estampado-polka-dot",
        specs: [
            { label: "Material", value: "95% Poliéster, 5% Elastano (Tela con ligero estiramiento)" },
            { label: "Corte", value: "Mini (por encima de la rodilla) con silueta tipo A" },
            { label: "Cierre", value: "Cremallera lateral invisible" },
            { label: "Cuidado", value: "Lavar a máquina con agua fría; no usar blanqueador" }
        ]
    },
    {
        id: "28",
        name: "Falda Mini 'Icy Blue' de Lentejuelas",
        title: "Falda Mini 'Icy Blue' de Lentejuelas",
        price: 890,
        description: "Una deslumbrante falda mini cubierta de lentejuelas color azul hielo. Su tejido elástico y silueta ajustada la convierten en la pieza perfecta para cualquier celebración o noche especial. Completamente forrada para mayor comodidad",
        category: "Ropa de Mujer",
        subcategory: "faldas",
        stock: 45,
        images: [
            "../src/assets/falda-azul-1.jpg",
            "../src/assets/falda-azul-2.jpg",
            "../src/assets/falda-azul-3.jpg",
            "../src/assets/falda-azul-4.jpg"
        ],
        slug: "falda-mini-icy-blue-de-lentejuelas",
        specs: [
            { label: "Material", value: "Poliéster con acabado en lentejuelas" },
            { label: "Corte", value: "Mini, silueta en A" },
            { label: "Cintura", value: "Elástica para un mejor ajuste" },
            { label: "Cuidado", value: "Solo lavado a mano para proteger los detalles" }
        ]
    },
    {
        id: "29",
        name: "Top de Bikini Triangular con Cordones - Estampado Camuflaje",
        title: "Top de Bikini Triangular con Cordones - Estampado Camuflaje",
        price: 490,
        description: "Un diseño audaz que combina la estética urbana del camuflaje con detalles de cordones entrelazados en las copas. Este top triangular ofrece un ajuste personalizado gracias a sus tirantes finos para anudar al cuello y a la espalda, perfecto para destacar en la playa o piscina.",
        category: "Ropa de Mujer",
        subcategory: "bikinis",
        stock: 35,
        images: [
            "../src/assets/bikini-2-1.jpg",
            "../src/assets/bikini-2-2.jpg",
            "../src/assets/bikini-2-3.jpg",
            "../src/assets/bikini-2-4.jpg"
        ],
        slug: "top-de-bikini-triangular-con-cordones---estampado-camuflaje",
        specs: [
            { label: "Material", value: "82% Nylon, 18% Elastano (Tela de secado rápido)" },
            { label: "Ajuste", value: "Lazos ajustables en cuello y espalda" },
            { label: "Forro", value: "Doble forro interior para evitar transparencias" },
            { label: "Cuidado", value: "Lavar a mano con jabón suave después de cada uso; secar a la sombra" }
        ]
    },
];

export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
export const getRelatedProducts = (category: string, currentSlug: string) =>
    products.filter(p => p.category === category && p.slug !== currentSlug).slice(0, 4);
