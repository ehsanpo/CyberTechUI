import { Section, SectionHeader } from '../components/core/Section';
import { Typography } from '../components/core/Typography';
import { Button } from '../components/core/Button';

export function SectionPreview() {
  return (
    <div className="space-y-0">
      {/* Introduction */}
      <Section padding="lg" maxWidth="2xl">
        <div className="space-y-6">
          <Typography.Eyebrow>Layout Component</Typography.Eyebrow>
          <Typography.H2>Section Component</Typography.H2>
          <Typography.Lead>
            A versatile container component for organizing content with consistent spacing, 
            alignment, and theming options.
          </Typography.Lead>
        </div>
      </Section>

      {/* Variant Examples */}
      <Section
        eyebrow="Variants"
        title="Background Variants"
        subtitle="Sections can use different background variants to create visual hierarchy"
        padding="lg"
        maxWidth="2xl"
      >
        <div className="space-y-8">
          {/* Default Variant */}
          <div className="space-y-4">
            <Typography.Label>Default Variant</Typography.Label>
            <Section variant="default" padding="md" className="rounded-lg">
              <Typography.H4>Default Background</Typography.H4>
              <Typography.Body className="mt-2">
                Uses the background color from your theme. Perfect for standard content sections.
              </Typography.Body>
              <Typography.Code className="mt-4">variant="default"</Typography.Code>
            </Section>
          </div>

          {/* Muted Variant */}
          <div className="space-y-4">
            <Typography.Label>Muted Variant</Typography.Label>
            <Section variant="muted" padding="md" className="rounded-lg">
              <Typography.H4>Muted Background</Typography.H4>
              <Typography.Body className="mt-2">
                Uses a subtle muted background to differentiate from the main background.
              </Typography.Body>
              <Typography.Code className="mt-4">variant="muted"</Typography.Code>
            </Section>
          </div>

          {/* Accent Variant */}
          <div className="space-y-4">
            <Typography.Label>Accent Variant</Typography.Label>
            <Section variant="accent" padding="md" className="rounded-lg">
              <Typography.H4>Accent Background</Typography.H4>
              <Typography.Body className="mt-2">
                Uses the accent color for highlighting special content or callouts.
              </Typography.Body>
              <Typography.Code className="mt-4">variant="accent"</Typography.Code>
            </Section>
          </div>

          {/* Primary Variant */}
          <div className="space-y-4">
            <Typography.Label>Primary Variant</Typography.Label>
            <Section variant="primary" padding="md" className="rounded-lg">
              <Typography.H4>Primary Background</Typography.H4>
              <Typography.Body className="mt-2">
                Uses the primary brand color for hero sections or important announcements.
              </Typography.Body>
              <Typography.Code className="mt-4">variant="primary"</Typography.Code>
            </Section>
          </div>

          {/* Secondary Variant */}
          <div className="space-y-4">
            <Typography.Label>Secondary Variant</Typography.Label>
            <Section variant="secondary" padding="md" className="rounded-lg">
              <Typography.H4>Secondary Background</Typography.H4>
              <Typography.Body className="mt-2">
                Uses the secondary color for alternative styling options.
              </Typography.Body>
              <Typography.Code className="mt-4">variant="secondary"</Typography.Code>
            </Section>
          </div>
        </div>
      </Section>

      {/* Padding Examples */}
      <Section
        variant="muted"
        eyebrow="Spacing"
        title="Padding Options"
        subtitle="Control vertical spacing with responsive padding options"
        padding="lg"
        maxWidth="2xl"
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-background p-4">
              <Typography.Label>None</Typography.Label>
              <Typography.Code className="mt-2">padding="none"</Typography.Code>
              <Typography.BodySmall className="mt-2">No vertical padding</Typography.BodySmall>
            </div>

            <div className="rounded-lg bg-background p-4">
              <Typography.Label>Small</Typography.Label>
              <Typography.Code className="mt-2">padding="sm"</Typography.Code>
              <Typography.BodySmall className="mt-2">py-8 md:py-12</Typography.BodySmall>
            </div>

            <div className="rounded-lg bg-background p-4">
              <Typography.Label>Medium</Typography.Label>
              <Typography.Code className="mt-2">padding="md"</Typography.Code>
              <Typography.BodySmall className="mt-2">py-12 md:py-16</Typography.BodySmall>
            </div>

            <div className="rounded-lg bg-background p-4">
              <Typography.Label>Large (Default)</Typography.Label>
              <Typography.Code className="mt-2">padding="lg"</Typography.Code>
              <Typography.BodySmall className="mt-2">py-16 md:py-24</Typography.BodySmall>
            </div>

            <div className="rounded-lg bg-background p-4">
              <Typography.Label>Extra Large</Typography.Label>
              <Typography.Code className="mt-2">padding="xl"</Typography.Code>
              <Typography.BodySmall className="mt-2">py-24 md:py-32</Typography.BodySmall>
            </div>

            <div className="rounded-lg bg-background p-4">
              <Typography.Label>2X Large</Typography.Label>
              <Typography.Code className="mt-2">padding="2xl"</Typography.Code>
              <Typography.BodySmall className="mt-2">py-32 md:py-40</Typography.BodySmall>
            </div>
          </div>
        </div>
      </Section>

      {/* Alignment Examples */}
      <Section
        eyebrow="Alignment"
        title="Text Alignment"
        subtitle="Control header alignment for different layouts"
        padding="lg"
        maxWidth="2xl"
      >
        <div className="space-y-8">
          <Section variant="muted" padding="md" align="left" className="rounded-lg">
            <SectionHeader
              eyebrow="Left Aligned"
              title="Default Left Alignment"
              subtitle="Headers are left-aligned by default"
            />
            <Typography.Body className="mt-6">
              This is the standard alignment for most content sections.
            </Typography.Body>
          </Section>

          <Section variant="muted" padding="md" align="center" className="rounded-lg">
            <SectionHeader
              eyebrow="Center Aligned"
              title="Centered Content"
              subtitle="Perfect for hero sections and announcements"
              align="center"
            />
            <Typography.Body className="mt-6">
              Centered alignment draws attention and works well for landing pages.
            </Typography.Body>
          </Section>

          <Section variant="muted" padding="md" align="right" className="rounded-lg">
            <SectionHeader
              eyebrow="Right Aligned"
              title="Right Alignment"
              subtitle="For unique layouts and design variety"
              align="right"
            />
            <Typography.Body className="mt-6">
              Right alignment can create interesting visual flow.
            </Typography.Body>
          </Section>
        </div>
      </Section>

      {/* Max Width Examples */}
      <Section
        variant="muted"
        eyebrow="Container Width"
        title="Maximum Width Options"
        subtitle="Control the maximum width of your content container"
        padding="lg"
        maxWidth="full"
      >
        <div className="space-y-6">
          <div className="grid gap-4">
            {[
              { size: 'sm', width: 'max-w-2xl', desc: '672px - Narrow content' },
              { size: 'md', width: 'max-w-4xl', desc: '896px - Articles' },
              { size: 'lg', width: 'max-w-6xl', desc: '1152px - Standard' },
              { size: 'xl', width: 'max-w-7xl', desc: '1280px - Wide' },
              { size: '2xl', width: 'max-w-[1440px]', desc: '1440px - Extra wide (default)' },
              { size: 'full', width: 'max-w-full', desc: '100% - Full width' },
            ].map((item) => (
              <div key={item.size} className="rounded-lg bg-background p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Typography.Label>{item.size.toUpperCase()}</Typography.Label>
                    <Typography.BodySmall className="mt-1">{item.desc}</Typography.BodySmall>
                  </div>
                  <Typography.Code>maxWidth="{item.size}"</Typography.Code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Real-World Examples */}
      <Section
        eyebrow="Examples"
        title="Real-World Usage"
        subtitle="See how Section components work in practice"
        padding="lg"
        maxWidth="2xl"
      >
        <div className="space-y-12">
          {/* Hero Section Example */}
          <div className="space-y-4">
            <Typography.Label>Hero Section</Typography.Label>
            <Section
              variant="primary"
              padding="xl"
              align="center"
              className="rounded-xl"
            >
              <SectionHeader
                eyebrow="New Release"
                title="CyberTech UI v1.0"
                subtitle="Build stunning interfaces with our premium component library"
                align="center"
              />
              <div className="mt-8 flex justify-center gap-4">
                <Button shape="bu1" color="secondary">
                  Get Started
                </Button>
                <Button shape="bu1" color="default" className="bg-white/10 hover:bg-white/20">
                  Learn More
                </Button>
              </div>
            </Section>
          </div>

          {/* Feature Section Example */}
          <div className="space-y-4">
            <Typography.Label>Feature Section</Typography.Label>
            <Section
              variant="muted"
              padding="lg"
              className="rounded-xl"
            >
              <SectionHeader
                eyebrow="Features"
                title="Built for Modern Development"
                subtitle="Everything you need to create beautiful, accessible interfaces"
              />
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {['Fast', 'Accessible', 'Customizable'].map((feature) => (
                  <div key={feature} className="rounded-lg bg-background p-6">
                    <Typography.H4>{feature}</Typography.H4>
                    <Typography.Body className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography.Body>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Content Section Example */}
          <div className="space-y-4">
            <Typography.Label>Content Section</Typography.Label>
            <Section
              title="Documentation"
              subtitle="Learn how to use the Section component in your projects"
              padding="md"
              className="rounded-xl"
            >
              <div className="space-y-4">
                <Typography.Body>
                  The Section component is a versatile container that helps you organize content 
                  with consistent spacing and styling. It supports multiple variants, padding options, 
                  and alignment controls.
                </Typography.Body>
                <Typography.Body>
                  Use it to create hero sections, feature grids, content areas, and more. 
                  All styling is theme-aware and automatically adapts to light and dark modes.
                </Typography.Body>
              </div>
            </Section>
          </div>
        </div>
      </Section>

      {/* Props Documentation */}
      <Section
        variant="muted"
        eyebrow="API Reference"
        title="Component Props"
        subtitle="Complete list of available props and their options"
        padding="lg"
        maxWidth="2xl"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 text-left font-semibold">Prop</th>
                <th className="pb-3 text-left font-semibold">Type</th>
                <th className="pb-3 text-left font-semibold">Default</th>
                <th className="pb-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-border/50">
                <td className="py-3 font-mono">children</td>
                <td className="py-3 text-muted-foreground">ReactNode</td>
                <td className="py-3 text-muted-foreground">-</td>
                <td className="py-3">Content to render inside the section</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 font-mono">title</td>
                <td className="py-3 text-muted-foreground">string</td>
                <td className="py-3 text-muted-foreground">-</td>
                <td className="py-3">Optional section title</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 font-mono">subtitle</td>
                <td className="py-3 text-muted-foreground">string</td>
                <td className="py-3 text-muted-foreground">-</td>
                <td className="py-3">Optional section subtitle</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 font-mono">eyebrow</td>
                <td className="py-3 text-muted-foreground">string</td>
                <td className="py-3 text-muted-foreground">-</td>
                <td className="py-3">Small text above the title</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 font-mono">variant</td>
                <td className="py-3 text-muted-foreground">string</td>
                <td className="py-3 text-muted-foreground">"default"</td>
                <td className="py-3">default | muted | accent | primary | secondary</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 font-mono">padding</td>
                <td className="py-3 text-muted-foreground">string</td>
                <td className="py-3 text-muted-foreground">"lg"</td>
                <td className="py-3">none | sm | md | lg | xl | 2xl</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 font-mono">align</td>
                <td className="py-3 text-muted-foreground">string</td>
                <td className="py-3 text-muted-foreground">"left"</td>
                <td className="py-3">left | center | right</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 font-mono">maxWidth</td>
                <td className="py-3 text-muted-foreground">string</td>
                <td className="py-3 text-muted-foreground">"2xl"</td>
                <td className="py-3">sm | md | lg | xl | 2xl | full</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 font-mono">className</td>
                <td className="py-3 text-muted-foreground">string</td>
                <td className="py-3 text-muted-foreground">-</td>
                <td className="py-3">Additional CSS classes for the section</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 font-mono">as</td>
                <td className="py-3 text-muted-foreground">ElementType</td>
                <td className="py-3 text-muted-foreground">"section"</td>
                <td className="py-3">HTML element to render</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
}
