import { useState, useEffect } from 'react'
import { Sidebar } from './components/Sidebar'
import type { ComponentItem } from './components/Sidebar'
import { ButtonPreview } from './components/previews/ButtonPreview'
import { TypographyPreview } from './previews/TypographyPreview'
import { SectionPreview } from './previews/SectionPreview'
import { DividerPreview } from './previews/DividerPreview'
import { GridLayoutPreview } from './previews/GridLayoutPreview'
import { BentoGridPreview } from './previews/BentoGridPreview'
import { CheckboxPreview } from './previews/CheckboxPreview'
import { CardPreview } from './previews/CardPreview'
import { RadioPreview } from './previews/RadioPreview'
import { FormFieldPreview } from './previews/FormFieldPreview'
import { TabsPreview } from './previews/TabsPreview'
import { TextImagePreview } from './previews/TextImagePreview'
import { HomePagePreview } from './previews/HomePagePreview'
import { Sun, Moon, ChevronDown, Menu } from 'lucide-react'
import { cn } from './lib/utils'

const PRIMARY_COLORS = {
  yellow: {
    primary: "0.962 0.211 96.53",
    foreground: "0.141 0.005 285.823"
  },
  blue: {
    primary: "0.762 0.176 195.45",
    foreground: "0.141 0.005 285.823"
  },
  red: {
    primary: "0.628 0.258 25.68",
    foreground: "0.985 0 0" 
  },
  green: {
    primary: "0.6 0.2 145",
    foreground: "0.985 0 0"
  },
  violet: {
    primary: "0.6 0.18 290",
    foreground: "0.985 0 0"
  }
}

export type PrimaryColor = keyof typeof PRIMARY_COLORS

// Component registry
const coreComponents: ComponentItem[] = [
  { id: 'button', name: 'Button' },
  { id: 'typography', name: 'Typography' },
  { id: 'section', name: 'Section' },
  { id: 'divider', name: 'Divider' },
  { id: 'gridlayout', name: 'GridLayout' },
  { id: 'bentogrid', name: 'BentoGrid' },
  { id: 'checkbox', name: 'Checkbox' },
  { id: 'card', name: 'Card' },
  { id: 'radio', name: 'Radio' },
  { id: 'formfield', name: 'FormField' },
  { id: 'tabs', name: 'Tabs' },
  { id: 'textimage', name: 'TextImage' },
]

const components: ComponentItem[] = [
  { id: 'home', name: 'Home' },
  ...coreComponents,
]

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'dark'
    }
    return 'dark'
  })

  const [activeComponent, setActiveComponent] = useState('home')
  const [primaryColor, setPrimaryColor] = useState<PrimaryColor>('yellow')
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    root.style.setProperty('--primary', PRIMARY_COLORS[primaryColor].primary)
    root.style.setProperty('--primary-foreground', PRIMARY_COLORS[primaryColor].foreground)
    root.style.setProperty('--ring', PRIMARY_COLORS[primaryColor].primary)
  }, [primaryColor])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  // Render the active component preview
  const renderPreview = () => {
    switch (activeComponent) {
      case 'button':
        return <ButtonPreview />
      case 'typography':
        return <TypographyPreview />
      case 'section':
        return <SectionPreview />
      case 'divider':
        return <DividerPreview />
      case 'gridlayout':
        return <GridLayoutPreview />
      case 'bentogrid':
        return <BentoGridPreview />
      case 'checkbox':
        return <CheckboxPreview />
      case 'card':
        return <CardPreview />
      case 'radio':
        return <RadioPreview />
      case 'formfield':
        return <FormFieldPreview />
      case 'tabs':
        return <TabsPreview />
      case 'textimage':
        return <TextImagePreview />
      case 'home':
        return <HomePagePreview onBack={() => setActiveComponent('button')} onDocsClick={() => setActiveComponent('button')} />
      default:
        return <HomePagePreview onBack={() => setActiveComponent('button')} onDocsClick={() => setActiveComponent('button')} />
    }
  }

  const currentComponent = components.find(c => c.id === activeComponent)

  return (
    <div className="flex min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Sidebar - Hidden on Mobile */}
      <Sidebar
        components={components}
        activeComponent={activeComponent}
        onSelectComponent={setActiveComponent}
        primaryColor={primaryColor}
        onPrimaryColorChange={setPrimaryColor}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
      />

      {/* Main Content */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center justify-between px-4 md:px-8">
            <div className="flex items-center gap-4">
              {/* Sidebar toggle for when collapsed */}
              <button 
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                className={cn(
                    "p-2 hover:bg-muted rounded-lg transition-all active:scale-95",
                    !isSidebarCollapsed && "md:hidden"
                )}
              >
                <Menu className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3">
                 {/* Mobile Sidebar Dropdown */}
                 <div className="md:hidden relative">
                   <select 
                     value={activeComponent}
                     onChange={(e) => setActiveComponent(e.target.value)}
                     className="appearance-none bg-muted border border-border rounded-lg px-4 py-2 pr-10 text-sm font-bold focus:ring-2 focus:ring-primary outline-none transition-all shadow-sm"
                   >
                     {components.map(c => (
                       <option key={c.id} value={c.id}>{c.name}</option>
                     ))}
                   </select>
                   <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                     <ChevronDown className="h-4 w-4" />
                   </div>
                 </div>

                 <div className="hidden md:block">
                   <h1 className="text-xl font-bold tracking-tight">{currentComponent?.name}</h1>
                   <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary">
                     CyberTech UI
                   </p>
                 </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="rounded-xl p-2.5 transition-all hover:bg-muted border border-border shadow-sm active:scale-95"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5 text-foreground" />
                ) : (
                  <Sun className="h-5 w-5 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Preview Content */}
        <main className="flex-1 w-full max-w-[1440px] mx-auto p-4 md:p-8 lg:p-12 overflow-x-hidden">
          <div className="md:hidden mb-8">
             <h1 className="text-3xl font-extrabold tracking-tight mb-2">{currentComponent?.name}</h1>
             <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Documentation</p>
          </div>
          {renderPreview()}
        </main>
      </div>
    </div>
  )
}

export default App
