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
        stock: 30,
        images: [
            "https://i.ibb.co/XZghQNbG/Shori-Ketsu-1.jpg",
            "https://i.ibb.co/6R04y107/Shori-Ketsu-2.jpg",
            "https://i.ibb.co/j9FvMCQJ/Shori-Ketsu-3.jpg",
            "https://i.ibb.co/Y4C4VjPC/Shori-Ketsu-4.jpg"
        ],
        slug: "jersey-shōri-ketsu-samurai-edition",
        badge: "Featured",
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
        subcategory: "hombre",
        stock: 12,
        images: [
            "https://i.ibb.co/ycWqccWw/zapato1111.jpg",
            "https://i.ibb.co/qMc6SBMC/zapato111.jpg",
            "https://i.ibb.co/jkyhnhsL/zapato1.jpg",
            "https://i.ibb.co/cSSTvHJN/zapato11.jpg"
            ],
        slug: "Tenisi-Urban-Black",
        badge: "New Arrival",
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
            "https://i.ibb.co/39q3fsnp/bikini-2.jpg",
            "https://i.ibb.co/8V1rBHd/bikini-1.jpg",  
            "https://i.ibb.co/pBYBKmbj/bikini-3.jpg",
            "https://i.ibb.co/ZRwGXvpS/bikini-4.jpg"
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
        name: "Collar de Cuentas Minerales e Hilo Trenzado – Summer Festival",
        title: "Collar de Cuentas Minerales e Hilo Trenzado – Summer Festival",
        price: 99,
        description: "Un collar elegante y único, creado con cuentas minerales de alta calidad y hilo trenzado. Perfecto para agregar un toque de estilo y originalidad a tu outfit.",
        category: "Accesorios",
        stock: 50,
        images: [
            "https://i.ibb.co/HLqc3hr5/acc11.jpg",
            "https://i.ibb.co/DP778txZ/acc111.jpg",
            "https://i.ibb.co/603Gdmhf/acc1.jpg",
        ],
        slug: "collar-de-cuentas-minerales-e-hilo-trenzado–summer-festival",
        badge: "New Arrival",
        discount: 0,
        specs: [
            { label: "estilo", value: "boho-chic" },
            { label: "Materiales", value: "metal hilo textil y abalorios" },
            { label: "Color", value: "Multicolor" },
            
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
            "https://i.ibb.co/tMmpwt1Y/halftime-1.jpg",
            "https://i.ibb.co/rKTWkxJV/halftime-2.jpg",
            "https://i.ibb.co/TzBx608/halftime-3.jpg",
            "https://i.ibb.co/m5s4mFVF/halftime-4.jpg",
        ],
        slug: "polo-de-malla-halftime-worldwide-edicion-vintage-sport",
        badge: "New Arrival",
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
            "https://i.ibb.co/7Jz4X5vx/ed-hardy-1.jpg",
            "https://i.ibb.co/kV9Mks8j/ed-hardy-2.jpg",
            "https://i.ibb.co/kV9Mks8j/ed-hardy-2.jpg",
            "https://i.ibb.co/k6W3BvD2/ed-hardy-4.jpg"
        ],
        slug: "ed-hardy-love-kills-baggy-jorts-vintage-wash",
        badge: "Featured",
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
            "https://i.ibb.co/DPZ6j82v/carpenter-1.jpg",
            "https://i.ibb.co/XrN5JBgn/carpenter-2.jpg",
            "https://i.ibb.co/GQ3nJKGF/carpenter-3.jpg",
            "https://i.ibb.co/845Txzqf/carpenter-4.jpg"
        ],
        slug: "carpenter-shorts-ink-splash-sand-onyx-edition",
        badge: "New Arrival",
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
            "https://i.ibb.co/5p2ZdNW/obsidian-1.jpg",
            "https://i.ibb.co/sJcDcMk9/obsidian-2.jpg",
            "https://i.ibb.co/Y7vMqBRn/obsidian-3.jpg",
            "https://i.ibb.co/kghvCskR/obsidian-4.jpg"
        ],
        slug: "obsidian-relaxed-fit-urban-tailoring",
        badge: "Featured",
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
            "https://i.ibb.co/1Yyqd6WQ/vestido-1.jpg",
            "https://i.ibb.co/vxXL8gH8/vestido-2.jpg",
            "https://i.ibb.co/Kc8KTf8j/vestido-3.jpg",
            "https://i.ibb.co/sdY3Ks7b/vestido-4.jpg"
        ],
        slug: "vestido-lace-indigo-cottagecore",
        badge: "Featured",
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
            "https://i.ibb.co/YBTPR00L/vestido-rojo-1.jpg",
            "https://i.ibb.co/N6hWkg1g/vestido-rojo-2.jpg",
            "https://i.ibb.co/x8BSWpTT/vestido-rojo-4.jpg",
            "https://i.ibb.co/MDXB33Mt/vestido-rojo-3.jpg"
        ],
        slug: "vestido-antique-red-lace-trimmed-blouse",
        badge: "Featured",
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
        description: "Eleva tu look nocturno con este sofisticado top de malla asimétrico. Diseñado con un elegante escote de un solo hombro, destaca por su espectacular manga larga tipo capa que aporta movimiento y un aire dramático a cada paso. Su tejido de tul semitransparente ofrece un juego visual de capas ideal para combinar con un top básico debajo, logrando un equilibrio perfecto entre audacia y elegancia.",
        category: "Ropa de Mujer",
        subcategory: "tops",
        stock: 28,
        images: [
            "https://i.ibb.co/0VZTqb7y/camiseta-1.jpg",
            "https://i.ibb.co/VY2j8mpr/camiseta-2.jpg",
            "https://i.ibb.co/YFDjdhtQ/camiseta-3.jpg",
            "https://i.ibb.co/QjKyv29P/camiseta-4.jpg"
        ],
        slug: "camiseta-papillon-noi",
        badge: "New Arrival",
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
        subcategory: "hombre",
        stock: 10,
        images: [
            "https://i.ibb.co/Pzgj4p60/zapato2.jpg",
            "https://i.ibb.co/6RPVfRDN/zapato22.jpg",
            "https://i.ibb.co/QvwT4j42/zapato222.jpg",
            "https://i.ibb.co/YTh0NzsH/zapato2222.jpg",
            ],
        slug: "zapatillas-urbanas-burdeos",
        badge: "Featured",
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
        subcategory: "hombre",
        stock: 18,
        images: [
            "https://i.ibb.co/Z6Nc3prs/zapato333.jpg",
            "https://i.ibb.co/FLx5R5xd/zapato33.jpg",
            "https://i.ibb.co/Fk0Pn3XH/zapato3333.jpg",
            "https://i.ibb.co/qQTSwxZ/zapato3.jpg"
            
        ],
        slug: "botas-mustard-yellow",
        badge: "Featured",
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
        subcategory: "hombre",
        stock: 22,
        images: [
            "https://i.ibb.co/Kx69Cfvf/zapato44.jpg",
            "https://i.ibb.co/qYyCmx87/zapato4.jpg",
            "https://i.ibb.co/84d2LRX8/zapato4444.jpg",
            "https://i.ibb.co/sd4yCMyq/zapato444.jpg"
        ],
        slug: "botas-distressed-brown",
        badge: "Featured",
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
            "https://i.ibb.co/XgNFznH/blue-ash-1.jpg",
            "https://i.ibb.co/5xMbkgnc/blue-ash-2.jpg",
            "https://i.ibb.co/vCs6YW5t/blue-ash-3.jpg",
            "https://i.ibb.co/Wh05DZL/blue-ash-4.jpg",
        ],
        slug: "jeans-blue-ash-wide-leg-90s Revival Edition",
        badge: "New Arrival",
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
        name: "Cinturón de Lona Aries – Desert Beige",
        title: "Cinturón de Lona Aries – Desert Beige",
        price: 129,
        description: "Un cinturón elegante y funcional, creado con lona de alta calidad y un diseño inspirado en el estilo boho-chic. Perfecto para agregar un toque de originalidad a tu outfit.",
        category: "Accesorios",
        stock: 40,
        images: [
            "https://i.ibb.co/3yHh8Y9C/acc2222.jpg",
            "https://i.ibb.co/1Y7RsN9f/acc222.jpg",
            "https://i.ibb.co/Kcn0nC3d/acc22.jpg",
            "https://i.ibb.co/WvLGSk1P/acc2.jpg",
        ],
        slug: "cinturon-de-lona-aries–desert-beige",
        badge: "New Arrival",
        specs: [
            { label: "Materiales", value: "metal hilo textil y abalorios" },
            { label: "Color", value: "Multicolor" },
            { label: "Estilo", value: "boho-chic" },

        ]
    },
    {
        id: "17",
        name: "Cadenas de Eslabones Griegos y Corazón – Silver Grunge",
        title: "Cadenas de Eslabones Griegos y Corazón – Silver Grunge",
        price: 1549,
        description: "Un collar de cadena gruesa con eslabones inspirados en el arte griego clásico, combinados con un colgante central en forma de corazón que aporta un toque romántico y rebelde. El acabado plateado envejecido le da un aire grunge y vintage, convirtiéndolo en el accesorio perfecto para complementar cualquier look urbano o alternativo.",
        category: "Accesorios",
        stock: 100,
        images: [
            "https://i.ibb.co/tTTPqMff/acc333.jpg",
            "https://i.ibb.co/QFVV419B/acc33.jpg",
            "https://i.ibb.co/LhY3qmWX/acc3.jpg",
        ],
        slug: "cadenas-de-eslabones-griegos-y-corazon–silver-grunge",
        badge: "Featured",
        specs: [
            { label: "Materiales", value: "Plata 925 y oro 14k" },
            { label: "Color", value: "Plateado" },
            { label: "Estilo", value: "Grunge" }
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
            "https://i.ibb.co/gZTTkhX3/Tirantes-1.jpg",
            "https://i.ibb.co/fYV4VtYF/Tirantes-2.jpg",
            "https://i.ibb.co/35BcQjFx/Tirantes-3.jpg",
            "https://i.ibb.co/35BcQjFx/Tirantes-3.jpg"
        ],
        slug: "ed-hardy-yellow-rose-ribbed-tank",
        badge: "New Arrival",
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
        name: "Gorra Trucker con Lavado Ácido y Bordado Tribal – Acid Brown Grunge",
        title: "Gorra Trucker con Lavado Ácido y Bordado Tribal – Acid Brown Grunge",
        price: 1399,
        description: "Una gorra de trucker con lavado ácido y bordado tribal en tono brown grunge, ideal para complementar tu estilo urbano y alternativo.",
        category: "Accesorios",
        stock: 3,
        images: [
            "https://i.ibb.co/DPtLjYTV/acc4444.jpg",
            "https://i.ibb.co/N2N4YNWX/acc444.jpg",
            "https://i.ibb.co/XfcpLhNZ/acc44.jpg",
            
        ],
        slug: "gorra-trucker-con-lavado-acido-y-bordado-tribal–acid-brown-grunge",
        badge: "New Arrival",
        specs: [
            { label: "Materiales", value: "lino " },
            { label: "Color", value: "cafe" },
            { label: "Estilo", value: "Grunge" }
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
            "https://i.ibb.co/d4h15pkC/hoody-core-1.jpg",
            "https://i.ibb.co/svJ69y1C/hoody-core-2.jpg",
            "https://i.ibb.co/Pz4swvht/hoody-core-3.jpg",
            "https://i.ibb.co/6RKfwQyT/hoody-core-4.jpg"
        ],
        slug: "hoodie-core-melange-grey-oversized-zip-up",
        badge: "New Arrival",
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
        subcategory: "mujer",
        stock: 2,
        images: [
            "https://i.ibb.co/tp0S0zcd/zapato5.jpg",
            "https://i.ibb.co/v4HKQMJp/zapato55.jpg",
            "https://i.ibb.co/PsZMwbTx/zapato555.jpg",
            "https://i.ibb.co/p6pB7ZLg/zapato5555.jpg"
        ],
        slug: "botas-taupe-suede",
        badge: "New Arrival",
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
        subcategory: "mujer",
        stock: 37,
        images: [
            "https://i.ibb.co/jkmXYkFC/zapato66.jpg",
            "https://i.ibb.co/MkCjBy9T/zapato6.jpg",
            "https://i.ibb.co/4gtsNpsM/zapato666.jpg",
            "https://i.ibb.co/RkB9RtYt/zapato6666.jpg"
        ],
        slug: "sandalias-thong-total-black",
        badge: "New Arrival",
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
        subcategory: "mujer",
        stock: 22,
        images: [
            "https://i.ibb.co/GQwX6ScN/zapato7.jpg",
            "https://i.ibb.co/tPPQ9ZxC/zapato777.jpg",
            "https://i.ibb.co/cXLqN3gR/zapato77.jpg",
            "https://i.ibb.co/cXLqN3gR/zapato77.jpg"
        ],
        slug: "sandalias-electric-red",
        badge: "New Arrival",
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
        subcategory: "mujer",
        stock: 22,
        images: [
            "https://i.ibb.co/M0SKsLD/zapato888.jpg",
            "https://i.ibb.co/j9RvLKDk/zapato88.jpg",
            "https://i.ibb.co/JFsJWKrj/zapato8.jpg",
            "https://i.ibb.co/gMQgXssx/zapato8888.jpg"
        ],
        slug: "sandalias-nude-elegance",
        badge: "New Arrival",
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
        description: "Una pieza híbrida única que desafía lo convencional. Este diseño combina la frescura de una sandalia de dedo con la estructura de un botín de caña media en efecto gamuza. Los detalles de tachuelas plateadas en la parte frontal y su silueta holgada (slouchy) ofrecen un aire bohemio y moderno, perfecto para quienes buscan un calzado que sea el centro de atención",
        category: "Calzado",
        subcategory: "mujer",
        stock: 22,
        images: [
            "https://i.ibb.co/B5Z5ND8v/zapato9999.jpg",
            "https://i.ibb.co/Vczc9Kcc/zapato9.jpg",
            "https://i.ibb.co/YBRc9xcv/zapato99.jpg",
            "https://i.ibb.co/Dg8qQfV8/zapato999.jpg"
        ],
        slug: "botas-slouchy-desert-taupe",
        badge: "New Arrival",
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
            "https://i.ibb.co/tMrB8nQm/falda-1.jpg",
            "https://i.ibb.co/FqY8z2jP/falda-2.jpg",
            "https://i.ibb.co/Y4hMp4Zj/falda-3.jpg",
            "https://i.ibb.co/xq37HWqc/falda-4.jpg"
        ],
        slug: "falda-midi-blanca-plisada-casual",
        badge: "New Arrival",
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
            "https://i.ibb.co/JWY4PDDF/falda-negra-1.jpg",
            "https://i.ibb.co/Cpv6f0r7/falda-negra-2.jpg",
            "https://i.ibb.co/yc9RHhVj/falda-negra-3.jpg",
            "https://i.ibb.co/hFF7JgzS/falda-negra-4.jpg"
        ],
        slug: "falda-mini-de-tiro-bajo---estampado-polka-dot",
        badge: "New Arrival",
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
            "https://i.ibb.co/Cs57gs0z/falda-azul-1.jpg",
            "https://i.ibb.co/ZzMn17P5/falda-azul-2.jpg",
            "https://i.ibb.co/wZWJLqKZ/falda-azul-3.jpg",
            "https://i.ibb.co/2YdLCgdQ/falda-azul-4.jpg"
        ],
        slug: "falda-mini-icy-blue-de-lentejuelas",
        badge: "New Arrival",
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
            "https://i.ibb.co/zWh68qqF/bikini-2-1.jpg",
            "https://i.ibb.co/YFHqCQ6m/bikini-2-2.jpg",
            "https://i.ibb.co/c9WXF4Y/bikini-2-3.jpg",
            "https://i.ibb.co/qYxkVsL3/bikini-2-4.jpg"
        ],
        slug: "top-de-bikini-triangular-con-cordones---estampado-camuflaje",
        badge: "Featured",
        specs: [
            { label: "Material", value: "82% Nylon, 18% Elastano (Tela de secado rápido)" },
            { label: "Ajuste", value: "Lazos ajustables en cuello y espalda" },
            { label: "Forro", value: "Doble forro interior para evitar transparencias" },
            { label: "Cuidado", value: "Lavar a mano con jabón suave después de cada uso; secar a la sombra" }
        ]
    },
    {
        id: "30",
        name: "Chaqueta de Plumas Puffer Rosa Pastel con Capucha",
        title: "Chaqueta de Plumas Puffer Rosa Pastel con Capucha",
        price: 1314,
        description: "Una chaqueta cálida y moderna con un toque pastel. Esta chaqueta de plumas puffer presenta un diseño elegante con capucha, ideal para mantenerse abrigado en climas fríos sin sacrificar el estilo.",
        category: "Ropa de Hombre",
        subcategory: "sueteres",
        stock: 25,
        images: [
            "https://i.ibb.co/p609rY5B/hombre666.jpg",
            "https://i.ibb.co/zTRHvGYd/hombre6666.jpg",
            "https://i.ibb.co/3YGwJMyQ/hombre66.jpg",
            "https://i.ibb.co/21B3ddjs/hombre6.jpg"
        ],
        slug: "chaqueta-de-plumas-puffer-rosa-pastel-con-capucha",
        badge: "Featured",
        discount: 15,
        specs: [
            { label: "Material", value: "Plumas de pato" },
            { label: "Corte", value: "Regular" },
            { label: "Cuello", value: "Con capucha" },
            { label: "Costuras", value: "Doblez" }
        ]
    },
    {
        id: "31",
        name: "Chaqueta de Algodón Lavado con Tachuelas Bershka – Dark Grey",
        title: "Chaqueta de Algodón Lavado con Tachuelas Bershka – Dark Grey",
        price: 490,
        description: "Estética motera con la comodidad del algodón. Rompe con lo convencional gracias a esta chaqueta ligera de Bershka. Reuniendo la estructura de las clásicas cazadoras de estilo western o biker pero confeccionada en un tejido suave de lona de algodón, esta prenda destaca por su hilera de tachuelas plateadas en el pecho. Es la opción definitiva para darle un aire cañero e informal a cualquier look de camiseta blanca y vaqueros.",
        category: "Ropa de Hombre",
        subcategory: "Sueteres",
        stock: 35,
        images: [
            "https://i.ibb.co/MDF9hCG2/hombre777.jpg",
            "https://i.ibb.co/JjmHJYtH/hombre7777.jpg",
            "https://i.ibb.co/Qvhgcssq/hombre77.jpg",
            "https://i.ibb.co/k6WG1KVd/hombre7.jpg"
        ],
        slug: "chaqueta-de-algodon-lavado-con-tachuelas-bershka–dark-grey",
        badge: "Featured",
        specs: [
            { label: "Material", value: "82% Nylon, 18% Elastano (Tela de secado rápido)" },
            { label: "Ajuste", value: "Lazos ajustables en cuello y espalda" },
            { label: "Forro", value: "Doble forro interior para evitar transparencias" },
            { label: "Cuidado", value: "Lavar a mano con jabón suave después de cada uso; secar a la sombra" }
        ]
    },
    {
        id: "32",
        name: "Camiseta Ringer Retro Brasil – Canary Yellow",
        title: "Camiseta Ringer Retro Brasil – Canary Yellow",
        price: 14123,
        description: "Captura la energía y el espíritu del fútbol con esta camiseta estilo \"Ringer Tee\" de Brasil. Con un vibrante cuerpo amarillo, destaca por sus detalles en contraste: cuello azul y puños verdes que rinden homenaje a los colores icónicos de la selección. El diseño frontal presenta la palabra \"BRASIL\" en letras universitarias sobre la bandera nacional, logrando un look retro-urbano ideal tanto para apoyar a tu equipo como para un outfit casual con mucha personalidad.",
        category: "Ropa de Hombre",
        subcategory: "camisas",
        stock: 25,
        images: [
            "https://i.ibb.co/WpjtvKLw/hombre888.jpg",
            "https://i.ibb.co/YBm5vMTr/hombre8888.jpg",
            "https://i.ibb.co/gZxzDr7d/hombre88.jpg",
            "https://i.ibb.co/rRYjdhZv/hombre8.jpg"
        ],
        slug: "camiseta-ringer-retro-brasil–canary-yellow",
        badge: "Featured",
        discount: 15,
        specs: [
            { label: "Material", value: "100% Algodón" },
            { label: "Corte", value: "Regular" },
            { label: "Cuello", value: "Manga corta" },
            { label: "Costuras", value: "Doblez" }
        ]
    },
    {
        id: "33",
        name: "Gorro Beanie de Punto con Gráfico Gótico – Cyber Black & Red",
        title: "Gorro Beanie de Punto con Gráfico Gótico – Cyber Black & Red",
        price: 490,
        description: "Un gorro de punto con un diseño gráfico",
        category: "Accesorios",
        stock: 35,
        images: [
            "https://i.ibb.co/27Yc1rxq/acc555.jpg",
            "https://i.ibb.co/jPtSfJJ0/acc55.jpg",
            "https://i.ibb.co/nMvVM9jd/acc5.jpg",
        ],
        slug: "gorro-beanie-de-punto-con-grafico-gotico–cyber-black-&-red",
        badge: "Featured",
        specs: [
            { label: "Material", value: "82% Nylon, 18% Elastano (Tela de secado rápido)" },
            { label: "Ajuste", value: "Lazos ajustables en cuello y espalda" },
            { label: "Forro", value: "Doble forro interior para evitar transparencias" },
            { label: "Cuidado", value: "Lavar a mano con jabón suave después de cada uso; secar a la sombra" }
        ]
    },
    {
        id: "34",
        name: "Cartera de Mano con Correa Vaquera Desgastada – Denim Grunge",
        title: "Cartera de Mano con Correa Vaquera Desgastada – Denim Grunge",
        price: 14123,
        description: "El accesorio definitivo para llevar tus esenciales con actitud. Súmate a la fiebre del denim sobre denim con esta cartera estructurada de Bershka. Confeccionada en lona vaquera con un lavado vintage muy marcado y un diseño compacto, es la pieza perfecta para quienes buscan un accesorio ligero, práctico y con esa estética desenfadada de los primeros años de los 2000. Llévala sujeta de la mano o cruzada para un look de calle impecable.",
        category: "Accesorios",
        stock: 252,
        images: [
            "https://i.ibb.co/dJ1zNJV9/acc66.jpg",
            "https://i.ibb.co/0pN1M31P/acc6.jpg",
            "https://i.ibb.co/ns83BqXW/acc666.jpg"
           
        ],
        slug: "cartera-de-mano-con-correa-vaquera-desgastada–denim-grunge",
        badge: "Featured",
        discount: 15,
        specs: [
            { label: "Material", value: "jeans" },
            { label: "Corte", value: "Compacto" },
        
            { label: "Costuras", value: "Doblez" }
        ]
    },
    {
        id: "35",
        name: "Gorra de Béisbol Bicolor Distressed 98 – Retro Lilac & Black",
        title: "Gorra de Béisbol Bicolor Distressed 98 – Retro Lilac & Black",
        price: 490,
        description: "Una gorra de béisbol con un diseño bicolor en tonos lila",
        category: "Accesorios",
        stock: 35,
        images: [
            "https://i.ibb.co/ytV6jKw/acc777.jpg",
            "https://i.ibb.co/rfRsbSXv/acc77.jpg",
            
        ],
        slug: "gorra-de-béisbol-bicolor-distressed-98–retro-lilac-&-black",
        badge: "Featured",
        specs: [
            { label: "Material", value: "82% Nylon, 18% Elastano (Tela de secado rápido)" },
            { label: "Ajuste", value: "Lazos ajustables en cuello y espalda" },
            { label: "Forro", value: "Doble forro interior para evitar transparencias" },
            { label: "Cuidado", value: "Lavar a mano con jabón suave después de cada uso; secar a la sombra" }
        ]
    },
    {
        id: "36",
        name: "Gorra de Béisbol con Parches y Estrellas – Chocolate Y2K Sport",
        title: "Gorra de Béisbol con Parches y Estrellas – Chocolate Y2K Sport",
        price: 490,
        description: "Una gorra de béisbol con un diseño con parches y estrellas en tono chocolate",
        category: "Accesorios",

        stock: 25,
        images: [
            "https://i.ibb.co/SjKbBSS/acc88.jpg",
            "https://i.ibb.co/nsQJccqz/acc888.jpg",
            "https://i.ibb.co/QvFXM3Vy/acc8.jpg",
        ],
        slug: "gorra-de-béisbol-con-parches-y-estrellas–chocolate-y2k-sport",
        badge: "New Arrival",
        discount: 15,
        specs: [
            { label: "Material", value: "82% Nylon, 18% Elastano (Tela de secado rápido)" },
            { label: "Corte", value: "Lazos ajustables en cuello y espalda" },
            { label: "Cuello", value: "Doble forro interior para evitar transparencias" },
            { label: "Costuras", value: "Lavar a mano con jabón suave después de cada uso; secar a la sombra" }
        ]
    },
    {
        id: "37",
        name: "Gorra de Béisbol Brasil Retro 10 – Canary Yellow & Green",
        title: "Gorra de Béisbol Brasil Retro 10 – Canary Yellow & Green",
        price: 490,
        description: "Una gorra de béisbol con un diseño retro en tonos amarillo canario y verde",
        category: "Accesorios",
        stock: 35,
        images: [
            "https://i.ibb.co/QVwrxYM/acc999.jpg",
            "https://i.ibb.co/FkqB8r81/acc9999.jpg",
            "https://i.ibb.co/rfkT3w4W/acc99.jpg",
            "https://i.ibb.co/dwr74jpw/acc9.jpg"
        ],
        slug: "gorra-de-béisbol-brasil-retro-10–canary-yellow-&-green",
        badge: "New Arrival",
        specs: [
            { label: "Material", value: "82% Nylon, 18% Elastano (Tela de secado rápido)" },
            { label: "Ajuste", value: "Lazos ajustables en cuello y espalda" },
            { label: "Forro", value: "Doble forro interior para evitar transparencias" },
            { label: "Cuidado", value: "Lavar a mano con jabón suave después de cada uso; secar a la sombra" }
        ]
    },
    {
        id: "38",
        name: "Sobrecamisa de Pana Lavada Bershka – Caramel Vintage",
        title: "Sobrecamisa de Pana Lavada Bershka – Caramel Vintage",
        price: 1314,
        description: "La textura del otoño en clave urbana. Dale un aire nostálgico, cálido y lleno de estilo a tus capas de diario con esta sobrecamisa de Bershka. Confeccionada en una pana de canalé clásico con un sutil efecto lavado, esta prenda tiene el peso ideal para usar abierta sobre una camiseta básica o abotonada como pieza principal. Su tono caramelo tostado es un básico indiscutible que eleva cualquier vaquero o pantalón cargo.",
        category: "Ropa de Hombre",
        subcategory: "sueteres",
        stock: 25,
        images: [
            "https://i.ibb.co/0VZK5VxW/hombre555.jpg",
            "https://i.ibb.co/RT60R8kx/hombre5555.jpg",
            "https://i.ibb.co/VYy5PHQD/hombre55.jpg",
            "https://i.ibb.co/B5VSBGV2/hombre5.jpg"
        ],
        slug: "sobrecamisa-de-pana-lavada-bershka–caramel-vintage",
        badge: "Featured",
        discount: 15,
        specs: [
            { label: "Material", value: "paño de canalé" },
            { label: "Corte", value: "clásico" },
            { label: "Cuello", value: "redondo" },
            { label: "Costuras", value: "doblez" }
        ]
    },
    {
        id: "39",
        name: "Cortavientos Técnico con Capucha Bershka – Stealth Black",
        title: "Cortavientos Técnico con Capucha Bershka – Stealth Black",
        price: 49220,
        description: "El básico infalible del gorpcore urbano. Domina los días grises y el viento con este cortavientos minimalista de Bershka. Diseñado bajo una estética puramente funcional y técnica, este chubasquero ligero se convierte en la capa exterior perfecta para cualquier conjunto de streetwear.",
        category: "Ropa de Hombre",
        subcategory: "sueteres",
        stock: 35,
        images: [
            "https://i.ibb.co/JW3Xy6R5/hombre444.jpg",
            "https://i.ibb.co/Q3TBJmJk/hombre4444.jpg",
            "https://i.ibb.co/TBvt0t60/hombre44.jpg",
            "https://i.ibb.co/MQVFthc/hombre4.jpg"
        ],
        slug: "cortavientos-técnico-con-capucha-bershka–stealth-black",
        badge: "New Arrival",
        specs: [
            { label: "Material", value: "82% Nylon, 18% Elastano (Tela de secado rápido)" },
            { label: "Ajuste", value: "Lazos ajustables en cuello y espalda" },
            { label: "Forro", value: "Doble forro interior para evitar transparencias" },
            { label: "Cuidado", value: "Lavar a mano con jabón suave después de cada uso; secar a la sombra" }
        ]
    },
    {
        id: "40",
        name: "Chaqueta Vaquera Rígida con Pespunte Contraste Bershka – Raw Indigo",
        title: "Chaqueta Vaquera Rígida con Pespunte Contraste Bershka – Raw Indigo",
        price: 1213,
        description: "Una prenda esencial con un toque contemporáneo. Esta chaqueta denim en un profundo azul índigo destaca por su diseño \"boxy\" de corte cuadrado y costuras en contraste que resaltan su estructura. Cuenta con amplios bolsillos frontales de parche y bolsillos laterales discretos, combinando funcionalidad con una estética urbana minimalista. Su tejido rígido y duradero la convierte en la tercera pieza ideal para elevar cualquier atuendo básico con un aire de modernidad atemporal.",
        category: "Ropa de Hombre",
        subcategory: "sueteres",
        stock: 25,
        images: [
            "https://i.ibb.co/zWd7KNjm/hombre333.jpg",
            "https://i.ibb.co/mVzddQ5t/hombre3333.jpg",
            "https://i.ibb.co/mVzddQ5t/hombre3333.jpg",
            "https://i.ibb.co/DHSyzzMv/hombre33.jpg"
        ],
        slug: "chaqueta-vaquera-rigida-con-pespunte-contraste-bershka–raw-indigo",
        badge: "Featured",
        discount: 15,
        specs: [
            { label: "Material", value: "vaquera rígida" },
            { label: "Corte", value: "deportivo" },
            { label: "Cuello", value: "redondo" },
            { label: "Costuras", value: "doblez" }
        ]
    },
    {
        id: "41",
        name: "Cortavientos Técnico Block Color – Crimson & Black",
        title: "Cortavientos Técnico Block Color – Crimson & Black",
        price: 490,
        description: "Inspiración retro, rendimiento urbano. Dale un subidón de energía a tus conjuntos con esta chaqueta cortavientos técnica de corte deportivo. Su dinámico diseño de paneles geométricos combina una estética puramente noventera con la ligereza que exige el streetwear actual. Perfecta para un look de diario dinámico con vaqueros oscuros o para armar un chándal completo ultracómodo.",
        category: "Ropa de Hombre",
        subcategory: "sueteres",
        stock: 35,
        images: [
            "https://i.ibb.co/67kgr3Pc/hombre222.jpg",
            "https://i.ibb.co/S4rK1n0g/hombre2222.jpg",
            "https://i.ibb.co/Y4VKQyBT/hombre22.jpg",
            "https://i.ibb.co/BH6ryPGX/hombre2.jpg"
        ],
        slug: "cortavientos-técnico-block-color–crimson-&-black",
        badge: "New Arrival",
        specs: [
            { label: "Material", value: "82% Nylon, 18% Elastano (Tela de secado rápido)" },
            { label: "Ajuste", value: "Lazos ajustables en cuello y espalda" },
            { label: "Forro", value: "Doble forro interior para evitar transparencias" },
            { label: "Cuidado", value: "Lavar a mano con jabón suave después de cada uso; secar a la sombra" }
        ]
    },
    {
        id: "42",
        name: "Cazadora Corta Tie-Dye Arena con Capucha",
        title: "Cazadora Corta Tie-Dye Arena con Capucha",
        price: 1222,
        description: "chaqueta o cazadora ligera de estilo deportivo y corte cropped (corto), con capucha y un diseño de estampado efecto lavado o tie-dye en tonos neutros (arena/beige y gris claro).",
        category: "Ropa de Hombre",
        subcategory: "sueteres",
        stock: 25,
        images: [
            "https://i.ibb.co/nqGdRNzn/hombre111.jpg",
            "https://i.ibb.co/gMdxdcD2/hombre1111.jpg",
            "https://i.ibb.co/hxkLyDdm/Hombre1.jpg",
            "https://i.ibb.co/FL1PXBcX/hombre11.jpg"
        ],
        slug: "cazadora-corta-tie-dye-arena-con-capucha",
        badge: "Featured",
        discount: 15,
        specs: [
            { label: "Material", value: "lino" },
            { label: "estilo", value: "deportivo" },
            { label: "Cuello", value: "redondo" },
            { label: "Costuras", value: "doblez" }
        ]
    },
    {
        id: "43",
        name: "Gorra Trucker de Lona Lavada Ed Hardy – Vintage Tattoo Grey",
        title: "Gorra Trucker de Lona Lavada Ed Hardy – Vintage Tattoo Grey",
        price: 1222,
        description: "Una gorra trucker con un diseño de lona lavada y un gráfico de tatuaje vintage en tonos grises.",
        category: "Accesorios",

        stock: 0,
        images: [
            "https://i.ibb.co/G4hBcq0C/ac1111.jpg",
            "https://i.ibb.co/N6VnYrFq/ac111.jpg",
            "https://i.ibb.co/zTncFnzK/ac11.jpg",
            "https://i.ibb.co/HDN4ZSt4/ac1.jpg"
        ],
        slug: "gorra-trucker-de-lona-lavada-ed-hardy–vintage-tattoo-grey",
        badge: "Featured",
        discount: 15,
        specs: [
            { label: "Material", value: "lona de algodón lavada" },
            { label: "Corte", value: "Trucker con malla trasera" },
            { label: "Gráfico", value: "Tatuaje vintage en tonos grises" },
            { label: "Ajuste", value: "Cierre snapback ajustable" }
        ]
    },
    {
        id: "44",
        name: "Gafas de Sol de Pantalla Envolvente – Cyber Y2K Silver & Grey",
        title: "Gafas de Sol de Pantalla Envolvente – Cyber Y2K Silver & Grey",
        price: 1222,
        description: "Gafas de sol con pantalla envolvente y diseño de estilo cyber y2k en tonos plateados y grises.",
        category: "Accesorios",

        stock: 25,
        images: [
            "https://i.ibb.co/PzQ4RzdV/ac2222.jpg",
            "https://i.ibb.co/Mk1sZnDx/ac222.jpg",
            "https://i.ibb.co/jPLt3LqD/ac22.jpg",
            "https://i.ibb.co/BHbXr4h6/ac2.jpg"
        ],
        slug: "gafas-de-sol-de-pantalla-envolvente–cyber-y2k-silver-&-grey",
        badge: "Featured",
        discount: 15,
        specs: [
            { label: "color", value: "gris ahumado" },
            { label: "estilo", value: "Y2K" },
            { label: "tipo", value: "Proteccion UV" },
        ]
    },
    {
        id: "45",
        name: "Gafas de Sol de Pantalla Envolvente Retro – Amber & Chocolate Tech",
        title: "Gafas de Sol de Pantalla Envolvente Retro – Amber & Chocolate Tech",
        price: 1222,
        description: "Gafas de sol con pantalla envolvente y diseño de estilo retro en tonos ámbar y chocolate.",
        category: "Accesorios",
        stock: 25,
        images: [
            "https://i.ibb.co/PG5Kg40J/ac3333.jpg",
            "https://i.ibb.co/3yzg0jYd/ac333.jpg",
            "https://i.ibb.co/JWkz7fTs/ac33.jpg",
            "https://i.ibb.co/KzRk0Sxk/ac3.jpg"
        ],
        slug: "gafas-de-sol-de-pantalla-envolvente–retro-amber-&-chocolate-tech",
        badge: "Featured",
        discount: 15,
        specs: [
            { label: "color", value: "ámbar" },
            { label: "estilo", value: "retro" },
            { label: "tipo", value: "Proteccion UV" },
        ]
    },
    {
        id: "46",
        name: "Pendientes de Aro Abombados – Silver Crescent Pack",
        title: "Pendientes de Aro Abombados – Silver Crescent Pack",
        price: 1222,
        description: "Pendientes de aro abombados con diseño de luna creciente en tonos plateados.",
        category: "Accesorios",

        stock: 25,
        images: [
            "https://i.ibb.co/nNXJdg6L/ac444.jpg",
            "https://i.ibb.co/1G9dKyFX/ac44.jpg",
            "https://i.ibb.co/QvGDC6rH/ac4.jpg",
        ],
        slug: "pendientes-de-aro-abombados–silver-crescent-pack",
        badge: "Featured",
        discount: 15,
        specs: [
            { label: "Color", value: "plateado" },
            { label: "estilo", value: "eléctrico" },
            { label: "tipo", value: "pendientes" },
        ]
    },
    {
        id: "47",
        name: "Joyas Variadas Y2K – Cyber Star & Heart Jewelry Pack",
        title: "Joyas Variadas Y2K – Cyber Star & Heart Jewelry Pack",
        price: 1222,
        description: "joyas variadas con diseño de estilo Y2K en tonos eléctricos.",
        category: "Accesorios",

        stock: 25,
        images: [
            "https://i.ibb.co/fV1dRqd6/ac55.jpg",
            "https://i.ibb.co/G4XDVrwb/ac555.jpg",
            "https://i.ibb.co/S4BMb8ZL/ac5.jpg",
        ],
        slug: "joyas-variadas-y2k–cyber-star-&-heart-jewelry-pack",
        badge: "Featured",
        discount: 15,
        specs: [
            { label: "Material", value: "Metal" },
            { label: "estilo", value: "Y2K" },
            { label: "tipo", value: "joyas" },
        ]
    },
    {
        id: "48",
        name: "Aretes de Flor Tropical Hibisco – Summer Hibiscus Studs",
        title: "Aretes de Flor Tropical Hibisco – Summer Hibiscus Studs",
        price: 1222,
        description: "Aretes de flor tropical hibisco con diseño de estilo veraniego.",
        category: "Accesorios",
        stock: 25,
        images: [
            "https://i.ibb.co/7dz1hw81/ac666.jpg",
            "https://i.ibb.co/p6vrpNSq/ac66.jpg",
            "https://i.ibb.co/VpCtfpJj/ac6.jpg",
            
        ],
        slug: "aretes-de-flor-tropical-hibisco–summer-hibiscus-studs",
        badge: "Featured",
        discount: 15,
        specs: [
            { label: "Material", value: "Plata" },
            { label: "estilo", value: "veraniego" },
            { label: "Color", value: "rojo" },
        ]
    },
    {
        id: "49",
        name: "Pulseras de Eslabones Plateadas – Cyber Heart Bracelet Pack",
        title: "Pulseras de Eslabones Plateadas – Cyber Heart Bracelet Pack",
        price: 1222,
        description: "Pulseras de eslabones plateadas con diseño de estilo cyberpunk.",
        category: "Accesorios",
        stock: 25,
        images: [
            "https://i.ibb.co/jk5BMGvb/ac7.jpg",
            "https://i.ibb.co/Vp5g7XWX/ac777.jpg",
            "https://i.ibb.co/N6GR4djs/ac77.jpg",
        ],
        slug: "pulseras-de-eslabones-plateadas–cyber-heart-bracelet-pack",
        badge: "Featured",
        discount: 15,
        specs: [
            { label: "Material", value: "Resina" },
            { label: "estilo", value: "cyberpunk" },
            { label: "Color", value: "mixto" },
        ]
    },
    {
        id: "50",
        name: "Pulseras Rígidas Minimalistas – Silver Chunky Bangles",
        title: "Pulseras Rígidas Minimalistas – Silver Chunky Bangles",
        price: 1222,
        description: "Pulseras rígidas minimalistas con diseño de estilo cyberpunk.",
        category: "Accesorios",
        stock: 25,
        images: [
            "https://i.ibb.co/ksHLpfK9/ac88.jpg",
            "https://i.ibb.co/1Y3W2v2n/ac888.jpg",
            "https://i.ibb.co/7xXPP6W4/ac8.jpg",
        ],
        slug: "pulseras-rígidas-minimalistas–silver-chunky-bangles",
        badge: "Featured",
        discount: 15,
        specs: [
            { label: "Material", value: "Plata" },
            { label: "estilo", value: "cyberpunk" },
            { label: "Color", value: "plateado" },
        ]
    },


    
];

export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
export const getRelatedProducts = (category: string, currentSlug: string) =>
    products.filter(p => p.category === category && p.slug !== currentSlug).slice(0, 4);
