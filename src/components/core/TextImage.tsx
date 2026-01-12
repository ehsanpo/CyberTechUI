import { Button } from './Button';
import { cn } from '../../lib/utils';

// ============================================
// TextImage Component Props
// ============================================

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

// ============================================
// TextImage - Side-by-side content block
// ============================================

export function TextImage({
  headline,
  bodyText,
  image,
  imageOnLeft = false,
  links = [],
  backgroundColor,
  className = '',
}: TextImageProps) {
  // Original clip paths from index.css
  const clip2 = 'shape(nonzero from 4.76% 6.96%, line to 95.24% 6.96%, line to 95.24% 93.04%, line to 4.76% 93.04%, line to 4.76% 6.96%, close, move to 4.76% 0%, line to 4.76% 6.96%, line to 0% 6.96%, line to 4.76% 0%, close, move to 0% 93.04%, line to 4.76% 93.04%, line to 4.76% 100%, line to 0% 93.04%, close, move to 95.24% 0%, line to 100% 6.96%, line to 95.24% 6.96%, line to 95.24% 0%, close, move to 95.24% 93.04%, line to 100% 93.04%, line to 95.24% 100%, line to 95.24% 93.04%, close, move to 95.24% 0%, line to 83.93% 0%, line to 82.74% 1.74%, line to 62.5% 1.74%, line to 61.31% 0%, line to 4.76% 0%, line to 4.76% 6.96%, line to 95.24% 6.96%, line to 95.24% 0%, close, move to 4.76% 100%, line to 14.29% 100%, line to 15.48% 98.26%, line to 84.52% 98.26%, line to 85.71% 100%, line to 95.24% 100%, line to 95.24% 93.04%, line to 4.76% 93.04%, line to 4.76% 100%, close, move to 0% 6.96%, line to 4.76% 6.96%, line to 4.76% 93.04%, line to 0% 93.04%, line to 0% 50%, line to 1.19% 48.37%, line to 1.19% 19.35%, line to 0% 17.72%, line to 0% 6.96%, close, move to 100% 6.96%, line to 95.24% 6.96%, line to 95.24% 93.04%, line to 100% 93.04%, line to 100% 6.96%, close)';
  const clip3 = 'shape(nonzero from 95.24% 6.96%, line to 4.76% 6.96%, line to 4.76% 93.04%, line to 95.24% 93.04%, line to 95.24% 6.96%, close, move to 95.24% 0%, line to 95.24% 6.96%, line to 100% 6.96%, line to 95.24% 0%, close, move to 100% 93.04%, line to 95.24% 93.04%, line to 95.24% 100%, line to 100% 93.04%, close, move to 4.76% 0%, line to 0% 6.96%, line to 4.76% 6.96%, line to 4.76% 0%, close, move to 4.76% 93.04%, line to 0% 93.04%, line to 4.76% 100%, line to 4.76% 93.04%, close, move to 4.76% 0%, line to 16.07% 0%, line to 17.26% 1.74%, line to 37.5% 1.74%, line to 38.69% 0%, line to 95.24% 0%, line to 95.24% 6.96%, line to 4.76% 6.96%, line to 4.76% 0%, close, move to 95.24% 100%, line to 85.71% 100%, line to 84.52% 98.26%, line to 15.48% 98.26%, line to 14.29% 100%, line to 4.76% 100%, line to 4.76% 93.04%, line to 95.24% 93.04%, line to 95.24% 100%, close, move to 100% 6.96%, line to 95.24% 6.96%, line to 95.24% 93.04%, line to 100% 93.04%, line to 100% 50%, line to 98.81% 48.37%, line to 98.81% 19.35%, line to 100% 17.72%, line to 100% 6.96%, close, move to 0% 6.96%, line to 4.76% 6.96%, line to 4.76% 93.04%, line to 0% 93.04%, line to 0% 6.96%, close)';

  return (
    <section
      className={cn("py-12 md:py-20 lg:py-24 overflow-hidden", className)}
      style={{ backgroundColor }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:items-center gap-8 md:gap-12 lg:gap-16">
          {/* Image Column */}
          <div className={cn(
            "relative min-h-[350px] md:min-h-[450px] lg:min-h-[600px] overflow-hidden group",
            imageOnLeft ? "md:order-1" : "md:order-2"
          )}>
            {image && (
              <img
                src={image}
                alt={headline || ''}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-transform duration-[3000ms] group-hover:scale-105"
                )}
                style={{ clipPath: imageOnLeft ? clip3 : clip2 }}
              />
            )}
          </div>

          {/* Text Column */}
          <div className={cn(
            "flex flex-col justify-center text-left",
            imageOnLeft ? "md:order-2" : "md:order-1"
          )}>
            {headline && (
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl text-foreground uppercase leading-tight font-bai">
                {headline}
              </h2>
            )}
            
            {bodyText && (
              <div className="text-lg text-muted-foreground leading-relaxed mb-8 font-bai">
                {bodyText}
              </div>
            )}
            
            {links.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {links.map((link) => (
                  <Button
                    key={link.id}
                    color={link.color}
                    shape={link.shape}
                    onClick={() => { if (link.url) window.location.href = link.url; }}
                  >
                    {link.text}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
