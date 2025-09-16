import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, MapPin } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/5521999850196', '_blank')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-serif text-xl font-bold text-primary">
            Sítio Recanto do Jacaré
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-home"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-about"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-events"
            >
              Eventos
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-gallery"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-testimonials"
            >
              Avaliações
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-contact"
            >
              Contato
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(21) 99985-0196</span>
            </div>
            <Button onClick={handleWhatsApp} size="sm" data-testid="button-whatsapp-header">
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-colors"
                data-testid="link-home-mobile"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors"
                data-testid="link-about-mobile"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="text-left text-foreground hover:text-primary transition-colors"
                data-testid="link-events-mobile"
              >
                Eventos
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-left text-foreground hover:text-primary transition-colors"
                data-testid="link-gallery-mobile"
              >
                Galeria
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-foreground hover:text-primary transition-colors"
                data-testid="link-testimonials-mobile"
              >
                Avaliações
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors"
                data-testid="link-contact-mobile"
              >
                Contato
              </button>
              <div className="pt-4 border-t">
                <Button onClick={handleWhatsApp} className="w-full" data-testid="button-whatsapp-mobile">
                  <Phone className="w-4 h-4 mr-2" />
                  Contato WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header