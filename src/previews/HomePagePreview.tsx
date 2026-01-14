import { useEffect } from 'react'
import { 
  Button, 
  Typography, 
  Section, 
  SectionHeader, 
  BentoGrid, 
  TextImage,
  Card,
  Tabs
} from '../components/core'
import {  Zap as ZapIcon } from 'lucide-react'

const features = [
  {
    title: "Vite + React",
    description: "Built on the fastest modern frontend tooling for a seamless developer experience.",
    variant: "primary",
    shape: "clip3"
  },
  {
    title: "Shadcn Inspired",
    description: "Follows the popular copy-paste philosophy, giving you full control over the source code.",
    variant: "dark",
    shape: "clip2"
  },
  {
    title: "Tailwind Ready",
    description: "Zero-config styling using standard Tailwind CSS utility classes and OKLCH colors.",
    variant: "secondary",
    shape: "clip3"
  },
  {
    title: "Premium Clips",
    description: "Futuristic component shapes with advanced CSS clip-paths and premium aesthetics.",
    variant: "primary",
    shape: "clip2"
  },
  {
    title: "Agentic UI",
    description: "Optimized for LLM understanding with semantic structure and standardized protocols.",
    variant: "dark",
    shape: "clip1"
  },
  {
    title: "Modern OKLCH",
    description: "Perceptually uniform color space ensuring consistency across light and dark modes.",
    variant: "white",
    shape: "clip1"
  },
  {
    title: "Core Foundation",
    description: "Built with React & TypeScript for robust, type-safe development workflows.",
    variant: "dark",
    shape: "clip3"
  }
] as const;

export function HomePagePreview({ onBack }: { onBack?: () => void, onDocsClick?: () => void }) {
  useEffect(() => {
    const appHeader = document.querySelector('header.sticky.top-0')
    if (appHeader) (appHeader as HTMLElement).style.display = 'none'
    
    return () => {
      if (appHeader) (appHeader as HTMLElement).style.display = 'flex'
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-y-auto z-[100] bg-background selection:bg-primary/30 scroll-smooth custom-scrollbar">
      {/* Navigation Floating Button */}
      <div className="fixed bottom-8 right-8 z-[200]">
        <Button 
          shape="bu1"
          color="primary"
          onClick={onBack}
          className="shadow-2xl"
        >
          <div className="flex items-center gap-2">
            <ZapIcon className="w-4 h-4 fill-current" />
            <span>OPEN LIBRARY</span>
          </div>
        </Button>
      </div>

      {/* Hero Section using TextImage as a template */}
      <TextImage 
        headline="CyberTech UI Library"
        bodyText="A collection of premium React components designed for the future. Built with Tailwind CSS, OKLCH colors, and agentic workflows in mind."
        image="/CyberTechUI/logo.png"
        imageOnLeft={false}
        links={[
          { id: 1, text: 'EXPLORE COMPONENTS', url: '#', color: 'primary', shape: 'bu1' },
          { id: 2, text: 'VIEW ON GITHUB', url: 'https://github.com/ehsanpo/CyberTechUI', color: 'secondary', shape: 'bu5' }
        ]}
        className="min-h-screen border-b border-border"
      />

      {/* Features Grid */}
      <Section variant="accent" padding="md" maxWidth="lg">
        <SectionHeader 
          title="Engineered for Performance"
          align="center"
        />
        
        <BentoGrid gap={6} className="mt-16">
          {features.map((f, i) => (
            <Card 
              key={i}
              variant={f.variant}
              shape={f.shape}
              title={f.title}
              subtitle={f.description}
              className="hover:scale-[1.02] transition-transform"
            />
          ))}
        </BentoGrid>
      </Section>

      {/* Tech Stack Spotlight */}
      <TextImage 
        headline="Modern Color Science"
        bodyText="Utilizing OKLCH and CSS Variables to provide a perceptually uniform experience across all lighting conditions. Your UI looks exactly as intended, every time."
        image="/CyberTechUI/color-science.png"
        imageOnLeft={true}
        links={[
          { id: 3, text: 'LEARN MORE', url: '#', color: 'accent', shape: 'bu2' }
        ]}
      />

      {/* AI Integration Section */}
      <Section variant="accent" padding="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            title="Agentic Integration" 
            align="center"
          />
          <div className="mt-12">
            <Tabs 
              tabs={[
                {
                  id: 'mcp',
                  label: 'MCP FOR AI',
                  content: (
                    <div className="space-y-4">
                      <Typography.H3 className="text-primary italic">Model Context Protocol</Typography.H3>
                      <Typography.BodyLarge>
                        CyberTech UI comes with a built-in MCP server that allows LLMs to understand, browse, and "copy-paste" components directly into your project. It provides semantic metadata and structural context that standard UI libraries lack.
                      </Typography.BodyLarge>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <Card title="SEMANTIC TAGS" subtitle='Automated accessibility and SEO metadata for every component' />
                        <Card title="STRUCTURAL CONTEXT" subtitle='LLMs can query specific component variants and their usage rules' />
                      </div>
                    </div>
                  )
                },
                {
                  id: 'vscode',
                  label: 'VS CODE INSTALL',
                  content: (
                    <div className="space-y-6">
                      <Typography.H3 className="text-primary italic">Global Extension</Typography.H3>
                      <Typography.BodyLarge>
                        Integrate CyberTech directly into your workflow. Install our VS Code extension to get real-time previews and one-click component injection.
                      </Typography.BodyLarge>
                      <div className="bg-black/80 p-6 rounded-md font-mono text-sm border border-primary/30 relative group">
                        <div className="absolute top-2 right-2 text-[10px] text-primary/50 uppercase">Terminal</div>
                        <div className="flex gap-3">
                          <span className="text-primary">$</span>
                          <span className="text-green-400">ext install</span>
                          <span className="text-white">cybertech-ai-tools</span>
                        </div>
                        <div className="mt-2 text-muted-foreground italic"># or search "CyberTech" in VS Code Extensions marketplace</div>
                      </div>
                    </div>
                  )
                },
                {
                  id: 'workflows',
                  label: 'AGENTIC WORKFLOWS',
                  content: (
                    <div className="space-y-4">
                      <Typography.H3 className="text-primary italic">Autonomous Design</Typography.H3>
                      <Typography.BodyLarge>
                        Enable autonomous agents to build entire layouts using CyberTech's standardized component protocols. Optimized for chain-of-thought processing and visual verification.
                      </Typography.BodyLarge>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <Card shape='clip2' title="AUTONOME" subtitle="Self-correcting UI layouts based on user requirements." />
                        <Card shape='clip' title="CHAIN-LINK" subtitle="Sequential building of complex dashboard interfaces." />
                        <Card shape='clip3' title="PROTO-TYPE" subtitle="Instant high-fidelity prototyping via natural language." />
                      </div>
                    </div>
                  )
                }
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Final Call to Action */}
      <Section variant="primary" padding="lg">
        <div className="flex flex-col items-center text-center py-12">
          <Typography.H2 className="mb-6 text-black">Ready to upgrade your interface?</Typography.H2>
          <Typography.BodyLarge className="mb-10 opacity-80 max-w-2xl text-black">
            Join the beta and start building with the components that power the next generation of AI-native applications.
          </Typography.BodyLarge>
          <div className="flex gap-4">
            <Button shape="bu1" color="default" onClick={onBack}>GET STARTED</Button>
            <Button shape="bu5" color="secondary" className=" ">DOCUMENTATION</Button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-border bg-card">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Typography.H4 className="mb-2">CyberTech UI</Typography.H4>
            <Typography.BodySmall>© 2024 AGENTIC DESIGN. ALL RIGHTS RESERVED.</Typography.BodySmall>
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              <Typography.Label>LIBRARY</Typography.Label>
              <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">COMPONENTS</a>
              <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">THEMES</a>
            </div>
            <div className="flex flex-col gap-2">
              <Typography.Label>COMMUNITY</Typography.Label>
              <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">GITHUB</a>
              <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">DISCORD</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
