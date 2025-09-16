import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import poolImage1 from '@assets/Dezembro chegou!! É a época das confraternizações das turmas, empresas, amigos! Tempo de celebr (1)_1758039728589.webp'
import poolImage2 from '@assets/No Recanto do Jacaré a diversão é garantida!!Nosso amplo espaço aberto te possibilita opções al_1758039731271.webp'
import fieldImage from '@assets/sitiorecantodojacare_1710105651_3320929361573928366_16955783730_1758039629997.webp'
import partyImage from '@assets/Dezembro chegou!! É a época das confraternizações das turmas, empresas, amigos! Tempo de celebr_1758039726627.webp'
import sportsImage from '@assets/No Recanto do Jacaré a diversão é garantida!!Nosso amplo espaço aberto te possibilita opções al (1)_1758039733976.webp'
import funImage from '@assets/No Recanto do Jacaré a diversão é garantida!!Nosso amplo espaço aberto te possibilita opções al (2)_1758039736666.webp'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { src: fieldImage, title: 'Campo de futebol e área de lazer' },
    { src: poolImage2, title: 'Piscina com tobogã inflável' },
    { src: partyImage, title: 'Mesa de festa decorada' },
    { src: sportsImage, title: 'Área de jogos e brincadeiras' },
    { src: funImage, title: 'Mesa de ping-pong e área de eventos' },
    { src: poolImage1, title: 'Piscina e área de deck' }
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  return (
    <section id="gallery" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
            Nossa Galeria
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Conheça nosso espaço
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja as fotos reais do nosso sítio e imagine seu próximo evento aqui. 
            Cada cantinho foi pensado para proporcionar momentos especiais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square cursor-pointer group overflow-hidden rounded-md hover-elevate"
              onClick={() => openLightbox(index)}
              data-testid={`gallery-image-${index}`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-center px-4 font-medium">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={closeLightbox}
              data-testid="button-close-lightbox"
            >
              <X className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              onClick={prevImage}
              data-testid="button-prev-image"
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              onClick={nextImage}
              data-testid="button-next-image"
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            <div className="max-w-4xl max-h-full">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].title}
                className="w-full h-full object-contain"
              />
              <p className="text-white text-center mt-4 text-lg">
                {images[selectedImage].title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery