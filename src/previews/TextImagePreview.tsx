import { useState } from 'react';
import { TextImage } from '../components/core/TextImage';
import { DocPage } from '../components/DocPage';

const componentCode = `import { Button } from './Button';
import { cn } from '@/lib/utils';

interface TextImageLink {
  id: number | string;
  text: string;
  url: string;
  color?: 'default' | 'primary' | 'danger' | 'secondary' | 'accent';
  shape?: 'bu1' | 'bu2' | 'bu3' | 'bu4' | 'bu5' | 'bu6' | 'bu7';
}

interface TextImageProps {
  headline?: string;
  bodyText?: string;
  image?: string;
  imageOnLeft?: boolean;
  links?: TextImageLink[];
  backgroundColor?: string;
  className?: string;
}

export function TextImage({
  headline,
  bodyText,
  image,
  imageOnLeft = false,
  links = [],
  backgroundColor,
  className = '',
}: TextImageProps) {
  const clip2 = 'shape(...)';
  const clip3 = 'shape(...)';

  return (
    <section className={cn("py-12 md:py-20 lg:py-24", className)} style={{ backgroundColor }}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className={cn("relative min-h-[400px] overflow-hidden group", imageOnLeft ? "md:order-1" : "md:order-2")}>
            {image && (
              <img src={image} className="absolute inset-0 h-full w-full object-cover" style={{ clipPath: imageOnLeft ? clip3 : clip2 }} />
            )}
          </div>
          <div className={cn("flex flex-col justify-center", imageOnLeft ? "md:order-2" : "md:order-1")}>
            <h2 className="mb-6 text-4xl font-bold text-foreground uppercase tracking-tight">{headline}</h2>
            <div className="text-lg text-muted-foreground leading-relaxed mb-8">{bodyText}</div>
            <div className="flex flex-wrap gap-4">
              {links.map((link) => (
                <Button key={link.id} color={link.color} shape={link.shape}>{link.text}</Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`;

const usageCode = `import { TextImage } from '@/components/core/TextImage'

export default function Example() {
  return (
    <TextImage 
      headline="Welcome to the Future"
      bodyText="Neural-linked infrastructure and autonomous transport systems define the new urban landscape."
      image="https://images.unsplash.com/photo-1614728263952-84ea256f9679"
      imageOnLeft={true}
      links={[
        { id: 1, text: 'Initialize', url: '#', color: 'primary', shape: 'bu1' },
        { id: 2, text: 'Explore', url: '#', color: 'secondary', shape: 'bu2' }
      ]}
    />
  )
}`;

const apiProps = [
  { name: 'headline', type: 'string', description: 'Large uppercase headline text.' },
  { name: 'bodyText', type: 'string', description: 'Descriptive paragraph text.' },
  { name: 'image', type: 'string', description: 'URL of the image to display.' },
  { name: 'imageOnLeft', type: 'boolean', defaultValue: 'false', description: 'Whether the image should appear on the left side.' },
  { name: 'links', type: 'TextImageLink[]', description: 'Array of link objects to render as buttons.' },
  { name: 'backgroundColor', type: 'string', description: 'Optional custom background color.' },
];

export function TextImagePreview() {
  const [data, setData] = useState({
    headline: 'NEURAL INTERFACE ACTIVATE',
    bodyText: 'Experience the next generation of direct-link technologies. High-bandwidth synaptic connections allowing for seamless data transfer between biological and synthetic systems.',
    imageOnLeft: true,
  });

  return (
    <DocPage
      name="TextImage"
      description="A large content block for storytelling, combining high-impact visuals with bold typography and calls to action."
      code={componentCode}
      installationCode={componentCode}
      usageCode={usageCode}
      apiProps={apiProps}
      sampleData={data}
      onSampleDataChange={setData}
      controls={
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <input 
              type="checkbox" 
              checked={data.imageOnLeft} 
              onChange={(e) => setData({ ...data, imageOnLeft: e.target.checked })} 
              className="mr-2"
            />
            Image on Left
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Headline</label>
            <input
              type="text"
              value={data.headline}
              onChange={(e) => setData({ ...data, headline: e.target.value })}
              className="bg-background border border-border rounded px-2 py-1 text-xs focus:ring-1 focus:ring-primary outline-none w-48"
            />
          </div>
        </div>
      }
    >
      <div className="py-4">
        <TextImage
          headline={data.headline}
          bodyText={data.bodyText}
          image="https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=1000"
          imageOnLeft={data.imageOnLeft}
          links={[
            { id: 1, text: 'Initialize Link', url: '#', color: 'primary', shape: 'bu1' },
            { id: 2, text: 'Download Data', url: '#', color: 'secondary', shape: 'bu2' }
          ]}
        />
      </div>
    </DocPage>
  );
}
