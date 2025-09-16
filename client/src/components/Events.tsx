import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Cake, Building2, Heart } from 'lucide-react'
import kidsPartyImage from '@assets/No Recanto do Jacaré a diversão é garantida!!Nosso amplo espaço aberto te possibilita opções al_1758039731271.webp'
import churrascoBBQImage from '@assets/Dezembro chegou!! É a época das confraternizações das turmas, empresas, amigos! Tempo de celebr_1758039726627.webp'
import corporateImage from '@assets/No Recanto do Jacaré a diversão é garantida!!Nosso amplo espaço aberto te possibilita opções al (1)_1758039733976.webp'
import familyImage from '@assets/Dezembro chegou!! É a época das confraternizações das turmas, empresas, amigos! Tempo de celebr (1)_1758039728589.webp'

const Events = () => {
  const handleWhatsApp = (eventType: string) => {
    const message = `Olá! Gostaria de mais informações sobre ${eventType} no Sítio Recanto do Jacaré.`
    window.open(`https://wa.me/5521999850196?text=${encodeURIComponent(message)}`, '_blank')
  }

  const eventTypes = [
    {
      icon: Cake,
      title: 'Festas Infantis',
      description: 'Muito lazer e diversão para as crianças com segurança e comodidade para os adultos. Espaço amplo e seguro.',
      image: kidsPartyImage,
      features: ['Piscina supervisionada', 'Área de jogos', 'Espaço para brinquedos infláveis']
    },
    {
      icon: Users,
      title: 'Churrascos',
      description: 'Ambiente descontraído integrado à natureza com churrasqueira completa e diversas opções de lazer.',
      image: churrascoBBQImage,
      features: ['Churrasqueira completa', 'Mesas e cadeiras', 'Área coberta']
    },
    {
      icon: Building2,
      title: 'Eventos Corporativos',
      description: 'Traga seus colaboradores para um dia de integração em espaços perfeitos para confraternizações.',
      image: corporateImage,
      features: ['Espaço para apresentações', 'Área de networking', 'Catering disponível']
    },
    {
      icon: Heart,
      title: 'Confraternizações',
      description: 'Celebre momentos especiais em família ou com amigos em nosso ambiente acolhedor e completo.',
      image: familyImage,
      features: ['Ambiente familiar', 'Todas as idades', 'Decoração personalizada']
    }
  ]

  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
            Nossos Eventos
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Realizamos todos os tipos de eventos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nosso espaço versátil é perfeito para diferentes ocasiões, 
            sempre com a infraestrutura completa que você precisa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {eventTypes.map((event, index) => (
            <Card key={index} className="overflow-hidden hover-elevate" data-testid={`event-card-${index}`}>
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2">
                    <event.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {event.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={() => handleWhatsApp(event.title)}
                  className="w-full"
                  data-testid={`button-contact-${index}`}
                >
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events