# User Profile Directory 👥

A modern, feature-rich React application that fetches and displays user profiles from an external API. Built with React 18, Vite, and Tailwind CSS with a focus on user experience and accessibility.

## 🌟 Features

### ✅ Core Features (All Completed)
- ✅ **API Integration**: Fetch user data from JSONPlaceholder API
- ✅ **Responsive Cards**: Display users in beautiful, responsive card format
- ✅ **Essential Info**: Show Full Name, Email, Company, and City
- ✅ **Adaptive Grid**: Smart grid layout (1-4 columns based on screen size)
- ✅ **Modal Details**: "View More" opens detailed user info in centered modal

### 🚀 Advanced Features (All Completed)
- ✅ **Real-time Search**: Search users by name or username with instant results
- ✅ **Smart Filtering**: Filter by city or company with dynamic dropdowns
- ✅ **Professional Dark Mode**: Complete theme system with toggle switch
- ✅ **Loading States**: Animated spinner with contextual messages
- ✅ **Error Handling**: User-friendly error messages with retry functionality
- ✅ **Accessibility**: ARIA labels, keyboard navigation, focus management
- ✅ **Smooth Animations**: Hover effects, modal transitions, and micro-interactions

### 🎨 UI/UX Enhancements
- ✅ **Clean Design**: Plain white background with subtle shadows
- ✅ **Professional Avatars**: User initials on clean gray backgrounds
- ✅ **Smart Layout**: Clear All Filters button only appears when needed
- ✅ **Centered Modals**: Full-page overlay with perfect centering
- ✅ **Responsive Toggle**: Professional iOS-style dark mode switch

## 🎯 Getting Started

### Prerequisites

Make sure you have Node.js (version 16 or higher) installed on your machine.

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

## 📱 Usage

1. **Browse Users**: View all 10 users in a responsive grid that adapts to your screen
2. **Search Users**: Type in the search box to find users by name or username instantly
3. **Filter Users**: Use dropdown menus to filter by city or company
4. **View Details**: Click "View More" to open a detailed modal with full user information
5. **Toggle Theme**: Use the professional toggle switch to switch between light and dark modes
6. **Clear Filters**: When active, click "Clear All Filters" to reset search and filters
7. **Mobile Experience**: Enjoy the fully responsive design on any device

## 🏗️ Project Structure

```
src/
├── App.jsx                    # Main app with state management & modal
├── main.jsx                   # React entry point
├── index.css                  # Global styles with Tailwind & animations
└── components/
    ├── UserCard.jsx           # Clean user profile cards
    ├── SearchAndFilter.jsx    # Smart search & filter with dynamic layout
    ├── LoadingSpinner.jsx     # Animated loading component
    ├── ErrorMessage.jsx       # User-friendly error handling
    └── Modal.jsx              # Accessible modal component

public/
└── vite.svg                   # Vite logo

Configuration files:
├── vite.config.js             # Vite build configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── .eslintrc.cjs             # ESLint configuration
├── .gitignore                 # Git ignore rules
└── README.md                  # This file
```

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## 🌐 API Information

This project uses the JSONPlaceholder API to fetch user data:
- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Data**: 10 fake users with comprehensive profile information
- **Fields Used**: name, email, username, phone, website, address, company

## 🎨 Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **JSONPlaceholder API** - Fake REST API for testing
- **ESLint** - Code quality and consistency

## ✨ Key Components

### UserCard
- **Clean Design**: Professional cards with plain gray avatars
- **User Initials**: Displays user's initials in a circular avatar
- **Essential Info**: Shows name, email, company, and city
- **Modal Trigger**: "View More" button opens detailed modal
- **Hover Effects**: Subtle animations and shadow effects

### SearchAndFilter
- **Real-time Search**: Instant filtering as you type
- **Smart Dropdowns**: Dynamically populated city and company filters
- **Dynamic Layout**: Grid adjusts when Clear All Filters button appears/disappears
- **Responsive Design**: Adapts from 1 to 5 columns based on screen size
- **Clean UI**: Professional styling with proper spacing

### Modal
- **Full-page Overlay**: Centers perfectly on entire viewport
- **Comprehensive Details**: Shows all user information in organized sections
- **Accessibility**: ESC key, backdrop click, and focus management
- **Smooth Animations**: Fade-in backdrop and scale-in modal
- **Clean Avatar**: Large user initials with plain background

### LoadingSpinner
- **Dual Ring Animation**: Professional spinning indicator
- **Contextual Messages**: "Loading Users..." with helpful text
- **Animated Dots**: Staggered dot animation for visual appeal
- **Theme Support**: Adapts colors for light and dark modes

### ErrorMessage
- **User-friendly Display**: Clear error icon and messaging
- **Retry Functionality**: "Try Again" button reloads the application
- **Fallback Messages**: Graceful handling of different error types
- **Professional Styling**: Consistent with overall design system

## 🌙 Dark Mode

Complete theme system with professional implementation:
- **iOS-style Toggle**: Professional switch with dynamic label ("Light Mode" / "Dark Mode")
- **Smooth Transitions**: 300ms duration for all color changes
- **Comprehensive Coverage**: Every component adapts to the selected theme
- **Visual Indicators**: Sun ☀️ and moon 🌙 icons for clear state indication
- **Consistent Colors**: Carefully chosen color palette for optimal contrast

## 📱 Responsive Design

Intelligent layout system that adapts to any screen size:
- **Mobile (< 768px)**: Single column layout for optimal mobile experience
- **Tablet (768px+)**: 2-column user grid with stacked filters
- **Desktop (1024px+)**: 3-column grid with inline search and filters
- **Large Screens (1280px+)**: 4-column grid for maximum screen utilization
- **Search Filters**: Responsive layout from 1-5 columns based on content

## 🎯 Technical Highlights

### Performance
- **Vite**: Lightning-fast development and build times
- **React 18**: Latest React features with concurrent rendering
- **Efficient Filtering**: Real-time search with optimized re-rendering
- **Lazy Loading**: Modal content only renders when needed

### Code Quality
- **ESLint**: Consistent code style and error prevention
- **Component Architecture**: Clean separation of concerns
- **Custom Hooks**: Reusable state management patterns
- **Accessibility**: WCAG compliant with proper ARIA labels

### User Experience
- **Loading States**: Never leave users wondering what's happening
- **Error Boundaries**: Graceful error handling with recovery options
- **Keyboard Navigation**: Full accessibility for keyboard users
- **Visual Feedback**: Hover states, transitions, and micro-interactions

## 🚀 Project Achievements

This User Profile Directory demonstrates:
- ✅ **Modern React Development**: Hooks, functional components, and best practices
- ✅ **Professional UI/UX**: Clean design with attention to detail
- ✅ **Responsive Design**: Mobile-first approach with desktop enhancements
- ✅ **Accessibility**: Inclusive design for all users
- ✅ **State Management**: Efficient handling of complex application state
- ✅ **API Integration**: Robust data fetching with error handling
- ✅ **Theme System**: Complete dark/light mode implementation
- ✅ **Performance**: Optimized rendering and smooth animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React, Vite, and Tailwind CSS**

Happy coding! 🚀
