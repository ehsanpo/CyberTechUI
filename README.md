# CyberTechUI

<div align="center">
  <img src="./public/logo.png" alt="CyberTechUI Logo" width="200"/>
  <p><em>Production-ready React components. Copy, paste, own.</em></p>
</div>

A TypeScript component library built on React and Tailwind CSS. No package dependencies—just copy the components you need into your codebase and customize them freely.

## Why This Exists

I've always been obsessed with cyberpunk, high-tech, neon UI aesthetics—but creating those cutting-edge borders and unusual shapes in web is surprisingly hard. After years of experimenting with [augmented-ui](https://github.com/propjockey/augmented-ui) (great for gaming cards, tough for real content), I built custom clip-path CSS classes for my portfolio using an 8-point grid system. It worked, but it was time-consuming and not very reusable.

Then I discovered [CSS shapes](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/basic-shape/shape). Game changer. I found a [Figma cyberpunk UI kit](https://www.figma.com/community/file/921630016386632325), exported the vectors to SVG, flattened them with [lean-svg](https://lean-svg.netlify.app/), and converted them to CSS using [svg-to-css](https://css-generators.com/svg-to-css/). It worked beautifully.

**The result:** A complete component library where every element uses CSS shapes for that sci-fi, high-tech look while remaining functional for actual web content. Built to work seamlessly with Shadcn's architecture for easy installation and customization.

**Lessons learned:**
- CSS shapes don't work in Firefox (Safari supports it, but not Firefox—first time I've seen that!)
- Traditional borders break with shapes—solved using `:before` pseudo-elements and `calc()` for fake borders
- Build components together, not in isolation—I wasted hours retrofitting individual components to work as a cohesive system
- The Tab component alone needed 7 different shapes to look right

**What's next:** Using this same SVG → CSS shape workflow to build HUDs, displays, and futuristic interfaces.

## Installation

```bash
# Clone and explore
git clone https://github.com/ehsanpo/CyberTechUI.git
cd CyberTechUI
npm install
npm run dev

# Or copy individual components from src/components/core/
```

## Usage

```tsx
import { Button } from '@/components/core/Button'
import { Card } from '@/components/core/Card'
import { BentoGrid } from '@/components/core/BentoGrid'

export default function App() {
  return (
    <BentoGrid columns={3}>
      <Card title="Feature One" description="Fully typed components">
        <Button variant="primary" size="md">Get Started</Button>
      </Card>
      {/* Customize freely - you own the code */}
    </BentoGrid>
  )
}
```

## Core Components

- **Button**: Versatile button component with multiple variants and sizes
- **Typography**: Comprehensive text and heading components
- **Section**: Page section containers with headers
- **Divider**: Horizontal and vertical dividers
- **GridLayout**: Flexible grid system for layouts
- **BentoGrid**: Modern bento-box style grid layouts
- **Card**: Versatile card component for content display
- **Checkbox**: Accessible checkbox inputs
- **Radio**: Radio button groups
- **FormField**: Form input fields with labels and validation
- **Tabs**: Tabbed interface component
- **TextImage**: Combined text and image layout sections 
## Screenshots

<div align="center flex">
  <img src="/CyberTechUI/public/demo1.png" alt="Tab Component" width="800"/>
  
  <img src="/CyberTechUI/public/demo2.png" alt="Bento Grid Example" width="800"/>
</div>

## Links

- **[Live Demo](https://ehsanpo.github.io/CyberTechUI/)** - Interactive examples

## Tech Stack

- [React 19](https://react.dev) - UI framework
- [TypeScript](https://typescriptlang.org) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Vite](https://vitejs.dev) - Build tool
- [Lucide React](https://lucide.dev) - Icons
- [Figma](https://figma.com) - Design source
- [lean-svg](https://lean-svg.netlify.app/) - SVG optimization
- [svg-to-css](https://css-generators.com/svg-to-css/) - Shape conversion

## Inspiration

- [Augmented UI](https://github.com/propjockey/augmented-ui) - Original cyberpunk CSS framework
- [Cyberpunk UI Kit (Figma)](https://www.figma.com/community/file/921630016386632325) - Design inspiration and shape sources
- [Shadcn UI](https://ui.shadcn.com/) - Copy-paste component architecture
- [CSS Shapes Spec](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/basic-shape/shape) - Technical foundation
- [My bookmarks collection](https://bookmark-0s4v.onrender.com/) - Design inspiration archive

## Contributing

Issues and PRs welcome! Found a bug or want to add a component? Open an issue or submit a pull request.

```bash
# Development workflow
npm run dev      # Start dev server
npm run build    # Build for production
npm run lint     # Check code quality
```

## License

MIT © [Ehsan Pourhadi](https://github.com/ehsanpo)

Free to use in personal and commercial projects.