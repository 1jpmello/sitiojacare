import { Button } from '@/components/ui/button'
import { Phone, MapPin } from 'lucide-react'
import heroImage from '@assets/sitiorecantodojacare_1710105651_3320929361573928366_16955783730_1758039629997.webp'

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5521999850196', '_blank')
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Sítio Recanto do Jacaré - Vista externa" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
          Sítio Recanto do Jacaré
        </h1>
        <h2 className="text-xl md:text-2xl mb-4 text-white/90">
          Espaço para Eventos
        </h2>
        <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto">
          Um local incrível em Niterói/RJ com piscina, churrasqueira e campo de futebol. 
          O espaço perfeito para tornar seu evento inesquecível.
        </p>

        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">Piratininga, Niterói - RJ</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={handleWhatsApp}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white backdrop-blur-sm"
            data-testid="button-whatsapp-hero"
          >
            <Phone className="w-5 h-5 mr-2" />
            WhatsApp (21) 99985-0196
          </Button>
          <Button 
            onClick={scrollToContact}
            variant="outline"
            size="lg"
            className="bg-white/20 hover:bg-white/30 text-white border-white/40 backdrop-blur-sm"
            data-testid="button-contact-hero"
          >
            Ver Mais Informações
          </Button>
        </div>

        {/* Contact Person */}
        <p className="mt-6 text-white/70">
          Contato: Deise
        </p>
      </div>
    </section>
  )
}

export default Hero