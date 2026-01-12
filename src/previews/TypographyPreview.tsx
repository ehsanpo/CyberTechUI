import { Typography } from '../components/core/Typography';

export function TypographyPreview() {
  return (
    <div className="space-y-12 p-8">
      {/* Font Information Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <Typography.Eyebrow>Font System</Typography.Eyebrow>
          <Typography.H2>Typography Fonts</Typography.H2>
          <Typography.Muted>
            CyberTech UI uses two premium fonts for a modern, tech-forward aesthetic
          </Typography.Muted>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Bai Jamjuree */}
          <div className="space-y-4 rounded-lg border border-border bg-card p-6">
            <div className="space-y-2">
              <Typography.Label>Primary Font</Typography.Label>
              <Typography.H3 className="font-bai">Bai Jamjuree</Typography.H3>
              <Typography.Muted>
                Used for headings (H1-H4), body text, and most UI elements
              </Typography.Muted>
            </div>

            <div className="space-y-3 rounded-md bg-muted/50 p-4">
              <div className="space-y-1">
                <Typography.BodySmall className="text-muted-foreground">Weights Available:</Typography.BodySmall>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="font-bai font-extralight">200 - ExtraLight</span>
                  <span className="font-bai font-light">300 - Light</span>
                  <span className="font-bai font-normal">400 - Regular</span>
                  <span className="font-bai font-medium">500 - Medium</span>
                  <span className="font-bai font-semibold">600 - SemiBold</span>
                  <span className="font-bai font-bold">700 - Bold</span>
                </div>
              </div>

              <div className="space-y-1">
                <Typography.BodySmall className="text-muted-foreground">Sample:</Typography.BodySmall>
                <p className="font-bai text-lg">
                  The quick brown fox jumps over the lazy dog
                </p>
                <p className="font-bai text-sm text-muted-foreground">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
                </p>
              </div>
            </div>

            <Typography.Code>font-family: 'Bai Jamjuree'</Typography.Code>
          </div>

          {/* Chakra Petch */}
          <div className="space-y-4 rounded-lg border border-border bg-card p-6">
            <div className="space-y-2">
              <Typography.Label>Accent Font</Typography.Label>
              <Typography.H3 className="font-chakra">Chakra Petch</Typography.H3>
              <Typography.Muted>
                Used for H5 headings and special tech-focused elements
              </Typography.Muted>
            </div>

            <div className="space-y-3 rounded-md bg-muted/50 p-4">
              <div className="space-y-1">
                <Typography.BodySmall className="text-muted-foreground">Weights Available:</Typography.BodySmall>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="font-chakra font-light">300 - Light</span>
                  <span className="font-chakra font-normal">400 - Regular</span>
                  <span className="font-chakra font-medium">500 - Medium</span>
                  <span className="font-chakra font-semibold">600 - SemiBold</span>
                  <span className="font-chakra font-bold">700 - Bold</span>
                </div>
              </div>

              <div className="space-y-1">
                <Typography.BodySmall className="text-muted-foreground">Sample:</Typography.BodySmall>
                <p className="font-chakra text-lg">
                  The quick brown fox jumps over the lazy dog
                </p>
                <p className="font-chakra text-sm text-muted-foreground">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
                </p>
              </div>
            </div>

            <Typography.Code>font-family: 'Chakra Petch'</Typography.Code>
          </div>
        </div>

        {/* Font Usage Guide */}
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
          <div className="space-y-3">
            <Typography.Label className="text-primary">Font Usage Guide</Typography.Label>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-2">
                <Typography.BodySmall className="font-semibold">Bai Jamjuree is used for:</Typography.BodySmall>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• H1, H2, H3, H4 headings</li>
                  <li>• All body text variants</li>
                  <li>• Labels and eyebrow text</li>
                  <li>• Most UI components</li>
                </ul>
              </div>
              <div className="space-y-2">
                <Typography.BodySmall className="font-semibold">Chakra Petch is used for:</Typography.BodySmall>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• H5 headings (tech accent)</li>
                  <li>• Special cyberpunk elements</li>
                  <li>• Can be applied via className</li>
                  <li>• Available as font-chakra utility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Headings Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <Typography.Eyebrow>Typography System</Typography.Eyebrow>
          <Typography.H2>Headings</Typography.H2>
          <Typography.Muted>
            All heading components with proper hierarchy and theming
          </Typography.Muted>
        </div>

        <div className="space-y-6 rounded-lg border border-border bg-card p-6">
          <div className="space-y-2">
            <Typography.Label>H1 - Main Title</Typography.Label>
            <Typography.H1>The quick brown fox jumps</Typography.H1>
            <Typography.Code>{'<Typography.H1>...</Typography.H1>'}</Typography.Code>
          </div>

          <div className="space-y-2">
            <Typography.Label>H2 - Section Title</Typography.Label>
            <Typography.H2>The quick brown fox jumps</Typography.H2>
            <Typography.Code>{'<Typography.H2>...</Typography.H2>'}</Typography.Code>
          </div>

          <div className="space-y-2">
            <Typography.Label>H3 - Subsection Title</Typography.Label>
            <Typography.H3>The quick brown fox jumps</Typography.H3>
            <Typography.Code>{'<Typography.H3>...</Typography.H3>'}</Typography.Code>
          </div>

          <div className="space-y-2">
            <Typography.Label>H4 - Minor Heading</Typography.Label>
            <Typography.H4>The quick brown fox jumps</Typography.H4>
            <Typography.Code>{'<Typography.H4>...</Typography.H4>'}</Typography.Code>
          </div>

          <div className="space-y-2">
            <Typography.Label>H5 - Small Heading (Chakra Petch)</Typography.Label>
            <Typography.H5>The quick brown fox jumps</Typography.H5>
            <Typography.Code>{'<Typography.H5>...</Typography.H5>'}</Typography.Code>
          </div>
        </div>
      </section>

      {/* Body Text Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <Typography.Eyebrow>Content</Typography.Eyebrow>
          <Typography.H2>Body Text</Typography.H2>
          <Typography.Muted>
            Various body text styles for different content types
          </Typography.Muted>
        </div>

        <div className="space-y-6 rounded-lg border border-border bg-card p-6">
          <div className="space-y-2">
            <Typography.Label>Lead Text</Typography.Label>
            <Typography.Lead>
              This is a lead paragraph that introduces the main content. It's larger and lighter to draw attention.
            </Typography.Lead>
            <Typography.Code>{'<Typography.Lead>...</Typography.Lead>'}</Typography.Code>
          </div>

          <div className="space-y-2">
            <Typography.Label>Body Large</Typography.Label>
            <Typography.BodyLarge>
              This is large body text, perfect for important paragraphs or introductory content that needs emphasis.
            </Typography.BodyLarge>
            <Typography.Code>{'<Typography.BodyLarge>...</Typography.BodyLarge>'}</Typography.Code>
          </div>

          <div className="space-y-2">
            <Typography.Label>Body Regular</Typography.Label>
            <Typography.Body>
              This is regular body text, the standard size for most content. It's designed for optimal readability with proper line height and spacing.
            </Typography.Body>
            <Typography.Code>{'<Typography.Body>...</Typography.Body>'}</Typography.Code>
          </div>

          <div className="space-y-2">
            <Typography.Label>Body Small</Typography.Label>
            <Typography.BodySmall>
              This is small body text, useful for captions, footnotes, or secondary information that doesn't need as much emphasis.
            </Typography.BodySmall>
            <Typography.Code>{'<Typography.BodySmall>...</Typography.BodySmall>'}</Typography.Code>
          </div>

          <div className="space-y-2">
            <Typography.Label>Muted Text</Typography.Label>
            <Typography.Muted>
              This is muted text with reduced emphasis, perfect for helper text or less important information.
            </Typography.Muted>
            <Typography.Code>{'<Typography.Muted>...</Typography.Muted>'}</Typography.Code>
          </div>
        </div>
      </section>

      {/* Special Elements Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <Typography.Eyebrow>Special Elements</Typography.Eyebrow>
          <Typography.H2>Labels & Accents</Typography.H2>
          <Typography.Muted>
            Special typography elements for specific use cases
          </Typography.Muted>
        </div>

        <div className="space-y-6 rounded-lg border border-border bg-card p-6">
          <div className="space-y-2">
            <Typography.Label>Eyebrow Text</Typography.Label>
            <Typography.Eyebrow>Premium Feature</Typography.Eyebrow>
            <Typography.Code>{'<Typography.Eyebrow>...</Typography.Eyebrow>'}</Typography.Code>
          </div>

          <div className="space-y-2">
            <Typography.Label>Label Text</Typography.Label>
            <Typography.Label>Important Label</Typography.Label>
            <Typography.Code className="ml-4">{'<Typography.Label>...</Typography.Label>'}</Typography.Code>
          </div>

          <div className="space-y-2">
            <Typography.Label>Inline Code</Typography.Label>
            <Typography.Body>
              Use the <Typography.Code>Typography</Typography.Code> component for consistent styling.
            </Typography.Body>
            <Typography.Code>{'<Typography.Code>...</Typography.Code>'}</Typography.Code>
          </div>

          <div className="space-y-2">
            <Typography.Label>Blockquote</Typography.Label>
            <Typography.Blockquote>
              "Design is not just what it looks like and feels like. Design is how it works."
              <Typography.BodySmall className="mt-2 not-italic">— Steve Jobs</Typography.BodySmall>
            </Typography.Blockquote>
            <Typography.Code>{'<Typography.Blockquote>...</Typography.Blockquote>'}</Typography.Code>
          </div>
        </div>
      </section>

      {/* Polymorphic Example */}
      <section className="space-y-6">
        <div className="space-y-2">
          <Typography.Eyebrow>Advanced Usage</Typography.Eyebrow>
          <Typography.H2>Polymorphic Components</Typography.H2>
          <Typography.Muted>
            All typography components accept an "as" prop to change the underlying HTML element
          </Typography.Muted>
        </div>

        <div className="space-y-6 rounded-lg border border-border bg-card p-6">
          <div className="space-y-2">
            <Typography.Label>Semantic HTML</Typography.Label>
            <Typography.Body>
              You can render any typography style with different HTML elements:
            </Typography.Body>
            <div className="mt-4 space-y-2 rounded-md bg-muted p-4 font-mono text-sm">
              <div>{'<Typography.H1 as="div">Styled as H1, but a div</Typography.H1>'}</div>
              <div>{'<Typography.Body as="span">Body text as span</Typography.Body>'}</div>
              <div>{'<Typography.Eyebrow as="h3">Eyebrow as h3</Typography.Eyebrow>'}</div>
            </div>
          </div>

          <div className="space-y-2">
            <Typography.Label>Custom Classes</Typography.Label>
            <Typography.Body>
              All components accept a className prop for additional styling:
            </Typography.Body>
            <Typography.H3 className="text-primary">
              This heading uses the primary color
            </Typography.H3>
            <Typography.Body className="italic">
              This body text is italicized
            </Typography.Body>
            <Typography.Code>{'<Typography.H3 className="text-primary">...</Typography.H3>'}</Typography.Code>
          </div>
        </div>
      </section>

      {/* Theme Demonstration */}
      <section className="space-y-6">
        <div className="space-y-2">
          <Typography.Eyebrow>Theme Integration</Typography.Eyebrow>
          <Typography.H2>Color Variants</Typography.H2>
          <Typography.Muted>
            Typography components automatically adapt to your theme colors
          </Typography.Muted>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-4 rounded-lg border border-border bg-card p-6">
            <Typography.H4>Default Colors</Typography.H4>
            <Typography.Body>Uses foreground color</Typography.Body>
            <Typography.Muted>Uses muted-foreground</Typography.Muted>
          </div>

          <div className="space-y-4 rounded-lg border border-primary/20 bg-primary/5 p-6">
            <Typography.H4 className="text-primary">Primary Accent</Typography.H4>
            <Typography.Body className="text-primary/80">Custom primary color</Typography.Body>
            <Typography.Muted className="text-primary/60">Muted primary</Typography.Muted>
          </div>

          <div className="space-y-4 rounded-lg border border-secondary/20 bg-secondary/5 p-6">
            <Typography.H4 className="text-secondary-foreground">Secondary Style</Typography.H4>
            <Typography.Body className="text-secondary-foreground/80">Secondary colors</Typography.Body>
            <Typography.Muted className="text-secondary-foreground/60">Muted secondary</Typography.Muted>
          </div>

          <div className="space-y-4 rounded-lg border border-accent/20 bg-accent/5 p-6">
            <Typography.H4 className="text-accent-foreground">Accent Style</Typography.H4>
            <Typography.Body className="text-accent-foreground/80">Accent colors</Typography.Body>
            <Typography.Muted className="text-accent-foreground/60">Muted accent</Typography.Muted>
          </div>
        </div>
      </section>

      {/* Real-world Example */}
      <section className="space-y-6">
        <div className="space-y-2">
          <Typography.Eyebrow>Example</Typography.Eyebrow>
          <Typography.H2>Real-World Usage</Typography.H2>
          <Typography.Muted>
            A complete example showing typography in context
          </Typography.Muted>
        </div>

        <article className="space-y-6 rounded-lg border border-border bg-card p-8">
          <div className="space-y-3">
            <Typography.Eyebrow>Product Launch</Typography.Eyebrow>
            <Typography.H1>Introducing CyberTech UI</Typography.H1>
            <Typography.Lead>
              A premium React component library built with Tailwind CSS and Shadcn theming for modern web applications.
            </Typography.Lead>
          </div>

          <div className="space-y-4">
            <Typography.H3>Built for Developers</Typography.H3>
            <Typography.Body>
              CyberTech UI provides a comprehensive set of components designed with developer experience in mind. 
              Each component is fully typed, accessible, and customizable to fit your needs.
            </Typography.Body>

            <Typography.Body>
              With built-in support for <Typography.Code>dark mode</Typography.Code> and 
              <Typography.Code>theme customization</Typography.Code>, you can create stunning interfaces 
              that match your brand perfectly.
            </Typography.Body>

            <Typography.Blockquote>
              "The best component library I've used. Clean, fast, and incredibly flexible."
            </Typography.Blockquote>

            <div className="flex gap-4 pt-4">
              <Typography.Label>Version 1.0.0</Typography.Label>
              <Typography.Label className="text-primary">Now Available</Typography.Label>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
