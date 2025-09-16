import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventMonth: '',
    eventYear: '',
    guestCount: '',
    message: ''
  })
  const { toast } = useToast()

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const message = `
Olá! Gostaria de solicitar um orçamento para evento:

Nome: ${formData.name}
Telefone: ${formData.phone}
Email: ${formData.email}
Tipo de Evento: ${formData.eventType}
Mês: ${formData.eventMonth}
Ano: ${formData.eventYear}
Número de Convidados: ${formData.guestCount}
Mensagem: ${formData.message}
    `.trim()

    window.open(`https://wa.me/5521999850196?text=${encodeURIComponent(message)}`, '_blank')
    
    toast({
      title: 'Redirecionando para WhatsApp',
      description: 'Você será direcionado para conversar conosco via WhatsApp.',
    })
  }

  const handleDirectWhatsApp = () => {
    window.open('https://wa.me/5521999850196', '_blank')
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(21) 99985-0196',
      subtitle: 'Deise - WhatsApp disponível'
    },
    {
      icon: MapPin,
      title: 'Localização',
      content: 'Estrada Frei Orlando, 125',
      subtitle: 'Piratininga, Niterói - RJ, 24350-20'
    },
    {
      icon: Clock,
      title: 'Atendimento',
      content: 'Segunda a Domingo',
      subtitle: '8h às 20h'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'sitiorecantodojacare@hotmail.com',
      subtitle: 'Também via WhatsApp'
    }
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
            Vamos planejar seu evento?
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para receber todo tipo de evento. 
            Solicite seu orçamento gratuito e sem compromisso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Informações de Contato</h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover-elevate" data-testid={`contact-info-${index}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className="text-foreground">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="text-center">
                <h4 className="font-semibold mb-2">Prefere falar diretamente?</h4>
                <p className="text-muted-foreground mb-4">
                  Clique no botão abaixo para conversar conosco via WhatsApp
                </p>
                <Button 
                  onClick={handleDirectWhatsApp}
                  className="bg-green-600 hover:bg-green-700"
                  data-testid="button-direct-whatsapp"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp Direto
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Solicite seu Orçamento Gratuito</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nome *</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Seu nome"
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Telefone *</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(21) 99999-9999"
                      required
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="seu@email.com"
                    data-testid="input-email"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Tipo de Evento *</label>
                    <Select value={formData.eventType} onValueChange={(value) => handleInputChange('eventType', value)}>
                      <SelectTrigger data-testid="select-event-type">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="festa-infantil">Festa Infantil</SelectItem>
                        <SelectItem value="churrasco">Churrasco</SelectItem>
                        <SelectItem value="corporativo">Evento Corporativo</SelectItem>
                        <SelectItem value="confraternizacao">Confraternização</SelectItem>
                        <SelectItem value="aniversario">Aniversário</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Número de Convidados</label>
                    <Input
                      type="number"
                      value={formData.guestCount}
                      onChange={(e) => handleInputChange('guestCount', e.target.value)}
                      placeholder="Ex: 50"
                      data-testid="input-guest-count"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Mês do Evento</label>
                    <Select value={formData.eventMonth} onValueChange={(value) => handleInputChange('eventMonth', value)}>
                      <SelectTrigger data-testid="select-event-month">
                        <SelectValue placeholder="Selecione o mês" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="janeiro">Janeiro</SelectItem>
                        <SelectItem value="fevereiro">Fevereiro</SelectItem>
                        <SelectItem value="marco">Março</SelectItem>
                        <SelectItem value="abril">Abril</SelectItem>
                        <SelectItem value="maio">Maio</SelectItem>
                        <SelectItem value="junho">Junho</SelectItem>
                        <SelectItem value="julho">Julho</SelectItem>
                        <SelectItem value="agosto">Agosto</SelectItem>
                        <SelectItem value="setembro">Setembro</SelectItem>
                        <SelectItem value="outubro">Outubro</SelectItem>
                        <SelectItem value="novembro">Novembro</SelectItem>
                        <SelectItem value="dezembro">Dezembro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ano</label>
                    <Select value={formData.eventYear} onValueChange={(value) => handleInputChange('eventYear', value)}>
                      <SelectTrigger data-testid="select-event-year">
                        <SelectValue placeholder="Ano" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                        <SelectItem value="2026">2026</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Mensagem</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Conte-nos mais sobre seu evento, dúvidas ou pedidos especiais..."
                    rows={4}
                    data-testid="textarea-message"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" data-testid="button-submit-form">
                  Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact