import { useState } from 'react';
import { X, ArrowLeft, ArrowRight, Camera } from 'lucide-react';

type GalleryImage = {
  imageSrc: string;
  caption?: string;
};

type ImageGalleryProps = {
  images: GalleryImage[];
  theme: "barber" | "mechanic" | "nutritionist" | "photographer" | "dentist" | "personal";
};

export default function ImageGallery({ images, theme }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!images || images.length === 0) {
    return null;
  }

  const themeClasses = {
    barber: {
      title: "text-barber-accent",
      button: "bg-barber-primary hover:bg-barber-primary/90",
    },
    mechanic: {
      title: "text-mechanic-accent",
      button: "bg-mechanic-primary hover:bg-mechanic-primary/90",
    },
    nutritionist: {
      title: "text-nutritionist-accent",
      button: "bg-nutritionist-primary hover:bg-nutritionist-primary/90",
    },
    photographer: {
      title: "text-photographer-accent",
      button: "bg-photographer-primary hover:bg-photographer-primary/90",
    },
    dentist: {
      title: "text-dentist-accent",
      button: "bg-dentist-primary hover:bg-dentist-primary/90",
    },
    personal: {
      title: "text-personal-accent",
      button: "bg-personal-primary hover:bg-personal-primary/90",
    },
  };

  const classes = themeClasses[theme];

  const handlePrev = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
  };

  return (
    <div className="mb-8">
      <h2 className={`${classes.title} text-xl font-semibold mb-4 text-center flex items-center justify-center`}>
        <Camera className="w-5 h-5 mr-2" />
        Galeria de Trabalhos
      </h2>
      
      <div className="grid grid-cols-2 gap-2 mb-2">
        {images.slice(0, 4).map((image, index) => (
          <div 
            key={index}
            className="aspect-square overflow-hidden rounded-lg cursor-pointer relative"
            onClick={() => setSelectedImage(index)}
          >
            <img 
              src={image.imageSrc} 
              alt={image.caption || `Imagem ${index + 1}`}
              className="object-cover w-full h-full transition-transform hover:scale-110"
            />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-1 px-2">
                <p className="text-white text-xs truncate">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Modal de visualização em tela cheia */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
          
          <button
            onClick={handlePrev}
            className="absolute left-4 text-white p-2 rounded-full bg-black/50 hover:bg-black"
            aria-label="Imagem anterior"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black"
            aria-label="Próxima imagem"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
          
          <div className="max-w-4xl max-h-full">
            <img 
              src={images[selectedImage].imageSrc} 
              alt={images[selectedImage].caption || `Imagem ${selectedImage + 1}`}
              className="max-h-[80vh] max-w-full object-contain"
            />
            
            {images[selectedImage].caption && (
              <div className="bg-black/70 p-4 text-center">
                <p className="text-white">{images[selectedImage].caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
      
      {images.length > 4 && (
        <button
          onClick={() => setSelectedImage(0)}
          className={`w-full ${classes.button} text-white py-2 rounded-md text-sm font-medium mt-2`}
        >
          Ver mais fotos
        </button>
      )}
    </div>
  );
}