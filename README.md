This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🛠️ Tech Stack & Architecture

### Core Technologies

#### **Next.js 15.3.4** - React Framework
- **Alasan Pemilihan**: 
  - App Router untuk routing yang lebih modern dan performant
  - Server-side rendering (SSR) dan static site generation (SSG) built-in
  - Turbopack untuk development yang lebih cepat
  - Optimasi otomatis untuk production
  - TypeScript support yang excellent

#### **React 19** - UI Library
- **Alasan Pemilihan**:
  - Component-based architecture untuk reusability
  - Virtual DOM untuk performa optimal
  - Hooks untuk state management yang clean
  - Ecosystem yang mature dan community support yang besar

#### **TypeScript 5** - Programming Language
- **Alasan Pemilihan**:
  - Type safety untuk mengurangi runtime errors
  - Better IDE support dengan autocomplete dan refactoring
  - Easier maintenance untuk large codebase
  - Enhanced developer experience

### Styling & UI

#### **Tailwind CSS 4** - Utility-First CSS Framework
- **Alasan Pemilihan**:
  - Rapid prototyping dengan utility classes
  - Consistent design system
  - Smaller bundle size dengan purging unused CSS
  - Responsive design yang mudah
  - Customizable design tokens

#### **Heroicons** - Icon Library
- **Alasan Pemilihan**:
  - Designed oleh tim Tailwind CSS untuk konsistensi
  - SVG-based untuk scalability
  - Outline dan solid variants
  - Tree-shakable untuk bundle optimization

#### **clsx & tailwind-merge** - Class Management
- **Alasan Pemilihan**:
  - `clsx`: Conditional class names yang clean
  - `tailwind-merge`: Menghindari konflik Tailwind classes
  - Better developer experience untuk dynamic styling

### Testing Framework

#### **Jest 29** - Testing Framework
- **Alasan Pemilihan**:
  - Zero-config setup untuk React applications
  - Snapshot testing untuk UI components
  - Mocking capabilities yang powerful
  - Code coverage reports built-in
  - Parallel test execution

#### **React Testing Library** - Component Testing
- **Alasan Pemilihan**:
  - Testing philosophy yang fokus pada user behavior
  - Encourages accessible markup
  - Simple API yang mudah dipelajari
  - Integration yang baik dengan Jest

#### **jsdom** - DOM Environment
- **Alasan Pemilihan**:
  - Simulate browser environment untuk testing
  - Lightweight alternative untuk headless browser
  - Fast test execution

### Code Quality & Development Tools

#### **ESLint 9** - Code Linting
- **Alasan Pemilihan**:
  - Enforce coding standards dan best practices
  - Catch potential bugs sebelum runtime
  - Customizable rules untuk team consistency
  - Integration dengan Next.js dan TypeScript

#### **PostCSS** - CSS Processing
- **Alasan Pemilihan**:
  - Plugin ecosystem untuk CSS transformations
  - Integration dengan Tailwind CSS
  - Autoprefixer untuk browser compatibility

### Project Structure & Architecture

```
src/
├── app/           # Next.js App Router
├── components/    # Reusable UI components
├── utils/         # Utility functions dan types
└── assets/        # Static assets
```

#### **App Router Architecture**
- **Alasan Pemilihan**:
  - File-based routing yang intuitive
  - Layout nesting untuk shared UI
  - Server components untuk better performance
  - Streaming dan Suspense support

#### **Component-Based Architecture**
- **Alasan Pemilihan**:
  - Reusability dan maintainability
  - Separation of concerns
  - Easier testing dan debugging
  - Scalable untuk large applications

### Development Experience

#### **Path Mapping** (`@/*`)
- **Alasan Pemilihan**:
  - Clean import statements
  - Easier refactoring
  - Consistent import paths

#### **Turbopack** (Development)
- **Alasan Pemilihan**:
  - Faster development server startup
  - Incremental compilation
  - Better hot reload performance

### Performance Optimizations

- **Next.js Font Optimization**: Automatic font loading optimization
- **Bundle Splitting**: Automatic code splitting untuk faster page loads
- **Tree Shaking**: Remove unused code dari final bundle
- **Image Optimization**: Built-in image optimization dengan Next.js

### Testing Strategy

- **Unit Testing**: Component dan utility function testing
- **Integration Testing**: Component interaction testing
- **Coverage Reporting**: Maintain high code coverage (100% statements)
- **Continuous Testing**: Watch mode untuk development

Tech stack ini dipilih untuk memberikan:
- ⚡ **Performance**: Fast development dan production builds
- 🔧 **Developer Experience**: Modern tooling dan type safety
- 🧪 **Quality Assurance**: Comprehensive testing setup
- 📈 **Scalability**: Architecture yang dapat berkembang
- 🎨 **Design Consistency**: Utility-first styling approach

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
