import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mariana Silva",
      location: "São Gonçalo",
      event: "Festa de 3 anos do meu filho",
      rating: 5,
      text: "Lugar perfeito para festa infantil! As crianças se divertiram muito na piscina e no campo. A Deise foi super atenciosa e nos ajudou em tudo. Super recomendo!",
      date: "Dezembro 2024"
    },
    {
      name: "Roberto Costa",
      location: "Niterói",
      event: "Churrasco da empresa",
      rating: 5,
      text: "Fizemos a confraternização da empresa aqui e foi um sucesso! Espaço amplo, churrasqueira excelente e preço justo. Todos os funcionários adoraram. Já estamos pensando no próximo evento.",
      date: "Novembro 2024"
    },
    {
      name: "Ana Paula Santos",
      location: "Rio de Janeiro",
      event: "Aniversário de 50 anos",
      rating: 4,
      text: "Comemorei meus 50 anos aqui com a família toda. O espaço é lindo e bem cuidado. A piscina é um diferencial. Só sugiro melhorar um pouco a iluminação noturna, mas no geral foi ótimo!",
      date: "Outubro 2024"
    },
    {
      name: "Carlos Eduardo",
      location: "Itaboraí",
      event: "Festa de casamento civil",
      rating: 5,
      text: "Lugar incrível para eventos! Fizemos nossa festa de casamento civil aqui e foi perfeito. A natureza ao redor é linda e as fotos ficaram maravilhosas. Deise muito prestativa.",
      date: "Setembro 2024"
    },
    {
      name: "Juliana Ferreira",
      location: "Maricá",
      event: "Festa infantil",
      rating: 4,
      text: "Muito bom o espaço! As crianças aproveitaram bastante a piscina e o campo. Só achei que poderia ter mais sombra na área da piscina para os pais. Mas voltaremos com certeza!",
      date: "Agosto 2024"
    },
    {
      name: "Fernando Oliveira",
      location: "Niterói",
      event: "Confraternização familiar",
      rating: 5,
      text: "Excelente lugar! Fomos em família e todos adoraram. O campo de futebol foi sucesso com as crianças e adolescentes. Ambiente familiar e seguro. Preço muito bom também.",
      date: "Julho 2024"
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  const averageRating = testimonials.reduce((acc, testimonial) => acc + testimonial.rating, 0) / testimonials.length

  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
            Avaliações dos Clientes
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              {renderStars(Math.round(averageRating))}
              <span className="text-lg font-semibold">{averageRating.toFixed(1)}/5</span>
            </div>
            <div className="text-muted-foreground">
              Baseado em 33+ avaliações no Facebook
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            76% dos nossos clientes recomendam nosso espaço. 
            Veja o que eles falam sobre suas experiências conosco.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate" data-testid={`testimonial-card-${index}`}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Quote className="w-8 h-8 text-primary/20" />
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                </div>
                
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      <p className="text-sm text-primary font-medium">{testimonial.event}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-primary/5 rounded-full px-6 py-3">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold">4.6/5 estrelas</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="text-muted-foreground">
              33+ avaliações verificadas
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials