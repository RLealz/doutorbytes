# DoutorBytes 🔧💻

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/rlealzs-projects/v0-doutor-bytes)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 📋 Overview

**DoutorBytes** is a modern, responsive web application for a computer repair and IT services business. The platform showcases professional computer repair services, provides detailed service information, and offers an intuitive contact system for customers.

### 🎯 Key Features

- **Professional Service Showcase**: Comprehensive display of IT repair services
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **SEO Optimized**: Individual service pages with proper meta tags
- **Contact System**: Integrated contact forms and business information
- **Performance Focused**: Built with Next.js for optimal loading speeds

## 🛠️ Tech Stack

### Frontend Framework
- **[Next.js 15.2.4](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://reactjs.org/)** - UI library
- **[TypeScript 5.8.3](https://www.typescriptlang.org/)** - Type safety

### Styling & UI
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI components
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

### Development Tools
- **[ESLint 9.28.0](https://eslint.org/)** - Code linting
- **[PostCSS 8.5.4](https://postcss.org/)** - CSS processing
- **[PNPM](https://pnpm.io/)** - Package manager

### Key Dependencies
- **shadcn/ui** - Pre-built component library
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Class Variance Authority** - Component variants
- **Sonner** - Toast notifications

## 📁 Project Structure

```
doutorbytes/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   ├── actions/                  # Server actions
│   │   └── contact-form.ts       # Contact form handler
│   ├── contact/                  # Contact page
│   ├── services/                 # Service pages
│   │   ├── data-recovery/        # Data recovery service
│   │   ├── hardware-repair/      # Hardware repair service
│   │   ├── network-setup/        # Network setup service
│   │   ├── upgrades/             # Upgrade service
│   │   ├── virus-removal/        # Virus removal service
│   │   └── page.tsx              # Services overview
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                   # Reusable components
│   ├── ui/                       # shadcn/ui components
│   ├── cta-section.tsx           # Call-to-action section
│   ├── hero-section.tsx          # Hero section
│   ├── menu-bar.tsx              # Navigation menu
│   ├── service-card.tsx          # Service display card
│   ├── service-page-layout.tsx   # Service page template
│   ├── site-footer.tsx           # Footer component
│   ├── site-header.tsx           # Header component
│   ├── testimonial-card.tsx      # Customer testimonial
│   └── theme-provider.tsx        # Dark/light theme
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions
├── public/                       # Static assets
├── styles/                       # Additional styles
├── .eslintrc.json               # ESLint configuration
├── components.json              # shadcn/ui config
├── next.config.mjs              # Next.js configuration
├── package.json                 # Dependencies
├── tailwind.config.ts           # Tailwind configuration
└── tsconfig.json                # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.17 or later
- **PNPM** (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RLealz/doutorbytes.git
   cd doutorbytes
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (`from-blue-400 to-cyan-400`)
- **Secondary**: Purple gradient (`from-purple-400 to-pink-400`)
- **Accent**: Cyan (`cyan-400`)
- **Background**: Dynamic (supports dark/light themes)

### Typography
- **Headings**: Bold, gradient text effects
- **Body**: Muted foreground for readability
- **Interactive**: Hover effects and transitions

### Components
- **Cards**: Glassmorphism effect with backdrop blur
- **Buttons**: Gradient backgrounds with hover states
- **Animations**: Framer Motion for smooth interactions

## 📱 Services Offered

1. **Hardware Repair** - Desktop and laptop diagnostics and repair
2. **Screen Replacement** - Fast laptop and monitor screen replacement
3. **Data Recovery** - Professional data recovery from storage devices
4. **Network Setup** - Home and business network installation
5. **Virus Removal** - Complete malware removal and system optimization
6. **Upgrades** - Hardware and software performance improvements

## 🔧 Configuration

### ESLint Configuration
```json
{
  "extends": ["next/core-web-vitals"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "warn",
    "react/no-unescaped-entities": "off"
  }
}
```

### Next.js Configuration
- **ESLint**: Enabled with build-time checking
- **TypeScript**: Strict mode enabled
- **Images**: Unoptimized for static export compatibility

### Tailwind Configuration
- **Dark Mode**: Class-based theme switching
- **Custom Animations**: Accordion, glow effects
- **Extended Colors**: CSS custom properties integration

## 🚀 Deployment

### Vercel (Recommended)
The project is optimized for Vercel deployment:

1. **Connect your repository** to Vercel
2. **Configure build settings**:
   - Build Command: `pnpm build`
   - Output Directory: `.next`
3. **Deploy** automatically on push to main

### Manual Deployment
```bash
# Build the project
pnpm build

# Start production server
pnpm start
```

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta descriptions for all pages
- **Structured Data**: Service-specific schema markup
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Performance**: Optimized images and code splitting
- **Responsive**: Mobile-first design approach

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use ESLint configuration
- Maintain component modularity
- Write descriptive commit messages
- Test responsive design

## 📚 Documentation

- **[Complete Documentation](./docs/)** - Comprehensive project documentation
- **[Security Reports](./docs/reports/)** - Security audits and vulnerability assessments
- **[Development Guide](./docs/README.md)** - Setup and development instructions

## 📄 License

This project is proprietary software for DoutorBytes computer repair services.

## 📞 Contact

**DoutorBytes** - Professional Computer Repair Services

- **Website**: [Live Demo](https://vercel.com/rlealzs-projects/v0-doutor-bytes)
- **Repository**: [GitHub](https://github.com/RLealz/doutorbytes)

---

*Built with ❤️ using Next.js, TypeScript, and Tailwind CSS*