import { Button } from '@/components/ui/button'
import { Phone, MapPin, Clock } from 'lucide-react'

const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5521999850196', '_blank')
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Contact */}
          <div>
            <h3 className="font-serif text-xl font-bold text-primary mb-4">
              Sítio Recanto do Jacaré
            </h3>
            <p className="text-muted-foreground mb-4">
              Espaço para eventos em Niterói/RJ com piscina, churrasqueira e campo de futebol. 
              O local perfeito para tornar seu evento inesquecível.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>📧</span>
                <span>sitiorecantodojacare@hotmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>📱</span>
                <span>@sitiorecantodojacare</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>🌐</span>
                <span>sitiorecantodojacare.com.br</span>
              </div>
            </div>
            <Button onClick={handleWhatsApp} className="mb-4" data-testid="button-whatsapp-footer">
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-link-home"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-link-about"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="block text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-link-events"
              >
                Eventos
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-link-gallery"
              >
                Galeria
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-link-testimonials"
              >
                Avaliações
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-link-contact"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">(21) 99985-0196</p>
                  <p className="text-sm text-muted-foreground">Deise</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Estrada Frei Orlando, 125</p>
                  <p className="text-sm text-muted-foreground">Piratininga, Niterói - RJ</p>
                  <p className="text-sm text-muted-foreground">24350-20</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Segunda a Domingo</p>
                  <p className="text-sm text-muted-foreground">8h às 20h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Sítio Recanto do Jacaré. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer