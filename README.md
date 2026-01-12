# Cost per Unit (CpU) Calculator

A modern, progressive web app (PWA) for calculating the cost per unit of products. Compare prices effectively by normalizing them to a common unit (e.g., cost per kg, per liter, per pound, etc.).

## Features

- **Dual System Support**: Calculate prices using either metric or imperial units
- **Multiple Currencies**: Support for various currencies with proper formatting
- **Internationalization**: Available in English, Spanish, and French
- **Progressive Web App**: Installable on mobile devices and desktops
- **Responsive Design**: Works seamlessly on all screen sizes
- **Real-time Calculations**: Instant cost per unit calculations as you type
- **Accessibility**: Built with accessibility best practices using Nuxt UI

## Supported Units

### Metric System
- Weight: mg, g, kg
- Volume: mL, cL, L

### Imperial System
- Weight: oz, lb
- Volume: fl oz, gal

## Technologies Used

- **Framework**: Nuxt 4 (Vue 3)
- **UI Library**: Nuxt UI
- **PWA**: Vite PWA
- **Internationalization**: Nuxt i18n
- **Math Engine**: Math.js
- **Currency Support**: currency-codes
- **TypeScript**: Full type safety
- **ESLint**: Code quality and consistency

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, pnpm, yarn, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MariachiBear/ppu-calculator.git
cd ppu-calculator
```

2. Install dependencies:
```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Development

Start the development server:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

Build the application:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Preview the production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

### Static Site Generation

Generate a static version of the site:

```bash
# npm
npm run generate

# pnpm
pnpm generate

# yarn
yarn generate

# bun
bun run generate
```

## Usage

1. **Select System**: Choose between Metric or Imperial units using the system selector
2. **Enter Quantity**: Input the product quantity (e.g., 500g, 2lbs)
3. **Enter Price**: Input the total price of the product
4. **View Result**: The app automatically calculates and displays the cost per unit

## PWA Features

This app can be installed as a progressive web app on:
- **Mobile devices**: iOS Safari, Android Chrome
- **Desktop**: Chrome, Edge, Safari

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and ensure tests pass
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature-name`
6. Submit a pull request

## License

This project is licensed under the GNU GPLv3 License - see the [LICENSE](LICENSE.md) file for details.

## Acknowledgments

- Built with [Nuxt](https://nuxt.com/)
- UI components from [Nuxt UI](https://ui.nuxt.com/)
- PWA functionality via [Vite PWA](https://vite-pwa-org.github.io/)
- Mathematical calculations powered by [Math.js](https://mathjs.org/)
