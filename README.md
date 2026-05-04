# School Demo Website

A modern, responsive demo webpage for a school built with React, TypeScript, and Tailwind CSS. This website showcases essential information about the school including academics, faculty details, fee structure, and provides a convenient online inquiry system for prospective students and parents.

## 🌟 Features

- **Home Page**: Eye-catching landing page with school overview and key highlights
- **Academics**: Detailed information about academic programs and offerings
- **Faculty**: Browse faculty members and their profiles
- **Fees**: Clear and transparent fee structure information
- **Contact**: Multiple ways to get in touch with the school
- **Online Inquiry**: Interactive modal form for prospective students to submit inquiries
- **Responsive Design**: Fully mobile-optimized with sticky mobile CTA
- **Modern UI**: Built with shadcn/ui components for a polished look
- **Accessibility**: Compliant with accessibility standards

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/) 19
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Testing**: [Vitest](https://vitest.dev/)
- **Linting**: [ESLint](https://eslint.org/)
- **Package Manager**: [Bun](https://bun.sh/)

## 📋 Prerequisites

- Node.js (v18 or higher) or Bun
- npm, yarn, or bun package manager

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "School Web Page"
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   bun run dev
   # or
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` (or the URL shown in terminal)

## 📜 Available Scripts

- `bun run dev` - Start development server with hot reload
- `bun run build` - Build for production
- `bun run build:dev` - Build in development mode
- `bun run lint` - Run ESLint to check code quality
- `bun run preview` - Preview production build locally
- `bun run test` - Run tests once
- `bun run test:watch` - Run tests in watch mode

## 📁 Project Structure

```
School Web Page/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Footer component
│   │   ├── NavLink.tsx     # Navigation links
│   │   ├── InquiryModal.tsx # Online inquiry form
│   │   ├── StickyMobileCTA.tsx # Mobile call-to-action
│   │   └── ui/             # shadcn/ui components
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Homepage
│   │   ├── Academics.tsx   # Academic programs
│   │   ├── Faculty.tsx     # Faculty directory
│   │   ├── Fees.tsx        # Fee structure
│   │   ├── Contact.tsx     # Contact page
│   │   └── NotFound.tsx    # 404 page
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── assets/             # Images and static files
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Static public files
├── package.json            # Project dependencies
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 🎨 Pages Overview

### Home Page
Welcome section with school highlights, quick access to key information, and featured content.

### Academics
Comprehensive details about academic programs, curriculum, and educational offerings.

### Faculty
Directory and profiles of school faculty members with their qualifications and expertise.

### Fees
Transparent fee structure, payment plans, and financial information for different grades/programs.

### Contact
Contact information, inquiry form, location map, and support details.

### Online Inquiry
Modal-based inquiry form accessible from multiple pages for prospective students to submit questions or admission inquiries.

## 🎯 Key Features Explained

### Responsive Design
- Mobile-first approach
- Sticky mobile CTA button for easy inquiry access on small screens
- Desktop and tablet optimized layouts

### Inquiry System
- User-friendly inquiry modal form
- Form validation with React Hook Form and Zod
- Integrated on Home page and accessible from navigation

### Modern Components
- Built with shadcn/ui for consistent, accessible UI
- Dark mode ready
- Accordion components for FAQs
- Responsive tables for fee structures

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Development Tips

- Use TypeScript for type safety
- Follow existing component structure for consistency
- Test responsive design using browser DevTools
- Check accessibility with accessibility tools
- Run linter before committing: `bun run lint`

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linter
4. Commit your changes
5. Push to the branch
6. Open a pull request

## 📄 License

This project is open source and available for educational purposes.

## 📧 Support

For issues, questions, or suggestions, please create an issue in the repository or contact the development team.
