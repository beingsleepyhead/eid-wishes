# 🌙 Eid Al-Adha Motion Graphics Website

A premium, elegant, and minimalist motion graphics website for wishing Eid Al-Adha. Built with Vue 3, Vite, and GSAP animations.

## ✨ Features

- **Premium Black & White Design**: Minimalist aesthetic with sophisticated animations
- **Dynamic Personalization**: Customize greetings via URL parameters
- **Smooth GSAP Animations**: Industry-standard animation library for fluid motion graphics
- **Islamic Geometric Patterns**: Subtle, elegant decorative elements
- **Animated Elements**:
  - Floating crescent moon with twinkling stars
  - Gentle particle field background
  - Text reveal animations with staggered timing
  - Decorative lines and patterns
- **Fully Responsive**: Beautiful on desktop, tablet, and mobile devices
- **GitHub Pages Ready**: Easy deployment
- **Arabic & English**: Bilingual greeting support

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/beingsleepyhead/eid-wishes.git
cd eid-wishes

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

## 📝 Usage

### Personalization via URL Parameters

You can customize the greeting message by adding URL parameters:

```
https://yourdomain.com/eid-wishes/?name=AHMED
```

**Available Parameters:**
- `name`: The person's name (will be displayed in capital letters)

**Examples:**
```
?name=FATIMA
?name=MOHAMMED
?name=AISHA
```

## 📦 Deployment

### GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. Push the `dist` folder to your repository:
   ```bash
   git add dist/
   git commit -m "Build production files"
   git push origin main
   ```

3. Go to your repository settings
4. Navigate to **Pages** section
5. Set source to `deploy from a branch`
6. Select `main` branch and `/dist` folder
7. Your site will be live at `https://beingsleepyhead.github.io/eid-wishes/`

### Infinity Free Hosting

1. Build the project locally
2. Upload the `dist` folder contents via FTP to your Infinity Free account
3. Set the public folder to point to the `dist` directory
4. Your site will be live!

## 🎨 Customization

### Changing Colors
Edit component files to modify the color scheme:
- Colors are primarily black (#000) and white (#fff)
- Gray shades: #333, #555, #666, #999

### Modifying Animations
Edit animation durations and effects in component files:
- `AnimatedCrescent.vue`: Crescent and stars animations
- `EidGreeting.vue`: Text reveal animations
- `PersonalMessage.vue`: Message animations
- `AnimatedBackground.vue`: Geometric pattern animations

### Adding More Content
Extend `PersonalMessage.vue` and `EidGreeting.vue` components to add more animated content.

## 🛠️ Tech Stack

- **Vue 3**: Progressive JavaScript framework
- **Vite**: Lightning-fast build tool
- **GSAP 3**: Professional animation library
- **CSS3**: Modern styling and animations
- **Canvas API**: Particle field effects

## 📱 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Full support

## 📄 License

This project is open source and available under the MIT License.

## 💝 Share the Love

Share your personalized Eid wishes with friends and family! Copy the URL with their name parameter and send it to them.

---

**Made with ❤️ for Eid celebrations**
