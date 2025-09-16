import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Waves, Flame, Trophy } from 'lucide-react'

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
    {
      icon: Waves,
      title: 'Piscina',
      description: 'Piscina ampla e limpa para diversão de toda a família'
    },
    {
      icon: Flame,
      title: 'Churrasqueira',
      description: 'Área de churrasqueira completa para seus eventos gastronômicos'
    },
    {
      icon: Trophy,
      title: 'Campo de Futebol',
      description: 'Campo gramado para atividades esportivas e recreação'
    }
  ]

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
            Sobre o Recanto do Jacaré
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Diversão garantida para toda família
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Nosso espaço foi pensado para proporcionar momentos únicos e inesquecíveis. 
            Localizado na Estrada Frei Orlando, no Jacaré/Piratininga, Niterói, oferecemos toda a infraestrutura necessária 
            para tornar seu evento um sucesso. Somos especializados em festas infantis e eventos familiares.
          </p>
          <Button onClick={scrollToContact} data-testid="button-contact-about">
            Entre em Contato
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover-elevate" data-testid={`feature-card-${index}`}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-2">1.2K+</h3>
            <p className="text-muted-foreground">Seguidores Instagram</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary mb-2">33+</h3>
            <p className="text-muted-foreground">Avaliações Facebook</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary mb-2">76%</h3>
            <p className="text-muted-foreground">Recomendam nosso espaço</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary mb-2">4.6★</h3>
            <p className="text-muted-foreground">Avaliação média</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About