
## 📂 Project Structure

```text
/
├── public/           # Static assets
├── src/
│   ├── assets/       # Optimized images and assets
│   ├── components/   # Reusable UI components
│   │   ├── cart/     # Cart related components
│   │   ├── checkout/ # Checkout flow components
│   │   ├── home/     # Homepage sections
│   │   ├── navbar/   # Navigation bar
│   │   ├── products/ # Product displays
│   │   └── ui/       # Generic UI elements (buttons, inputs)
│   ├── data/         # Mock data (products, static content)
│   ├── layouts/      # Astro layouts (Base, etc.)
│   ├── pages/        # File-based routing
│   │   ├── category/ # Dynamic category pages
│   │   ├── product/  # Dynamic product details
│   │   └── ...       # Other static pages (About, Contact)
│   ├── store/        # Global state (Cart, Favorites)
│   └── styles/       # Global styles
└── astro.config.mjs  # Astro configuration
```

## 🚀 Getting Started

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🧞 Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
