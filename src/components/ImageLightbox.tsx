import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageLightbox = ({ src, alt, className = '' }: ImageLightboxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img 
        src={src} 
        alt={alt}
        className={`cursor-pointer hover:opacity-90 transition-opacity ${className}`}
        onClick={() => setIsOpen(true)}
      />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 z-50 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <img 
            src={src} 
            alt={alt}
            className="w-full h-full object-contain rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};
