import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { 
  Scissors, 
  Wrench, 
  Apple, 
  Camera, 
  Smile, 
  Dumbbell,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Smartphone,
  CheckCircle
} from "lucide-react";

// Componentes do Shadcn
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

type ProfessionCard = {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  benefits: string[];
  color: string;
  path: string;
};

export default function MenuHub() {
  const [_, navigate] = useLocation();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const professionCards: ProfessionCard[] = [
    {
      id: "barber",
      title: "Barbeiro",
      icon: <Scissors className="w-8 h-8" />,
      description: "Atraia mais clientes para seu salão com uma página profissional que destaca seus serviços e trabalhos.",
      benefits: ["Agende cortes facilmente", "Mostre seu portfólio", "Destaques e promoções"],
      color: "from-amber-500 to-amber-700",
      path: "/barber"
    },
    {
      id: "mechanic",
      title: "Mecânico",
      icon: <Wrench className="w-8 h-8" />,
      description: "Aumente sua clientela com uma página que inspira confiança e demonstra sua experiência.",
      benefits: ["Facilite orçamentos", "Mostre avaliações reais", "Destaque especialidades"],
      color: "from-blue-500 to-blue-700",
      path: "/mechanic"
    },
    {
      id: "nutritionist",
      title: "Nutricionista",
      icon: <Apple className="w-8 h-8" />,
      description: "Conecte-se com mais pacientes usando uma página profissional focada em saúde e bem-estar.",
      benefits: ["Destaque formação", "Agende consultas", "Mostre resultados"],
      color: "from-green-500 to-green-700",
      path: "/nutritionist"
    },
    {
      id: "photographer",
      title: "Fotógrafo",
      icon: <Camera className="w-8 h-8" />,
      description: "Exiba seu trabalho de forma elegante e profissional, atraindo novos clientes para seus serviços.",
      benefits: ["Galeria visual impactante", "Destaque pacotes", "Facilite orçamentos"],
      color: "from-purple-500 to-purple-700",
      path: "/photographer"
    },
    {
      id: "dentist",
      title: "Dentista",
      icon: <Smile className="w-8 h-8" />,
      description: "Conquiste mais pacientes com uma página que transmite profissionalismo e cuidado.",
      benefits: ["Apresente tratamentos", "Marque consultas", "Construa confiança"],
      color: "from-cyan-500 to-cyan-700",
      path: "/dentist"
    },
    {
      id: "personal",
      title: "Personal Trainer",
      icon: <Dumbbell className="w-8 h-8" />,
      description: "Aumente sua base de clientes com uma página que demonstra seus métodos e resultados.",
      benefits: ["Mostre transformações", "Destaque programas", "Agende avaliações"],
      color: "from-red-500 to-red-700",
      path: "/personal"
    }
  ];

  const testimonials = [
    {
      quote: "Depois de criar minha landing page com o LinkTree, aumentei minha agenda em 45% já no primeiro mês!",
      author: "Carlos Silva",
      profession: "Barbeiro",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=80&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI4NzU4NDYw&ixlib=rb-1.2.1&q=80&w=80"
    },
    {
      quote: "Meus pacientes agora marcam consultas diretamente pela minha página. Otimizou meu tempo e aumentou minha conversão!",
      author: "Ana Beatriz",
      profession: "Nutricionista",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=80&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI4NzU4NDYw&ixlib=rb-1.2.1&q=80&w=80"
    },
    {
      quote: "Consegui triplicar minha clientela em apenas 3 meses usando o LinkTree. O retorno do investimento foi incrível!",
      author: "Pedro Almeida",
      profession: "Fotógrafo",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=80&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI4NzU4NDYw&ixlib=rb-1.2.1&q=80&w=80"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: "Aumente Conversões",
      description: "Transforme visitantes em clientes com elementos persuasivos e calls-to-action estratégicos."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Amplie sua Audiência",
      description: "Conecte todas suas redes sociais e canais de contato em um único lugar profissional."
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "Destaque-se da Concorrência",
      description: "Design personalizado que reflete a identidade do seu negócio e transmite profissionalismo."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-purple-500" />,
      title: "100% Responsivo",
      description: "Experiência perfeita em todos os dispositivos, de smartphones a desktops."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#5145E5_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge className="px-4 py-1.5 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 mb-6">
              Transforme seu negócio online
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 mb-6">
              Landing Pages Profissionais para Cada Profissão
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Potencialize seu negócio com páginas altamente convertedoras que destacam seus serviços, 
              atraem mais clientes e impulsionam seus resultados.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white"
                onClick={() => {
                  const demoSection = document.getElementById('demo-section');
                  demoSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver Demonstrações <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/20 backdrop-blur-sm text-white hover:bg-white/10"
                onClick={() => {
                  const benefitsSection = document.getElementById('benefits-section');
                  benefitsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Benefícios
              </Button>
            </div>
          </motion.div>
          
          <div className="mt-12 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center space-x-2 text-sm"
            >
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Já ajudamos <span className="font-semibold text-green-400">1200+</span> profissionais a aumentarem seus resultados</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Tabs Section */}
      <section id="demo-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 mb-3"
            >
              Escolha seu Modelo Profissional
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-gray-400 max-w-3xl mx-auto"
            >
              Páginas otimizadas para conversão, desenvolvidas especificamente para cada tipo de profissional.
              Clique para explorar os modelos.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Tabs defaultValue="barber" className="w-full">
              <TabsList className="flex justify-center flex-wrap mb-8 h-auto bg-transparent border border-white/10 rounded-lg p-1">
                {professionCards.map((card) => (
                  <TabsTrigger 
                    key={card.id} 
                    value={card.id}
                    className="flex items-center gap-2 px-4 data-[state=active]:bg-white/10 data-[state=active]:text-white rounded-md"
                  >
                    {card.icon}
                    <span className="hidden sm:inline">{card.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                {professionCards.map((card) => (
                  <TabsContent key={card.id} value={card.id} className="mt-0">
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-full flex flex-col">
                        <CardHeader className={`bg-gradient-to-r ${card.color} rounded-t-lg`}>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-white/20 rounded-lg">
                                {card.icon}
                              </div>
                              <CardTitle>{card.title}</CardTitle>
                            </div>
                            <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                              +63% Conversão
                            </Badge>
                          </div>
                          <CardDescription className="text-white/90 mt-2">
                            {card.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <div className="mt-4">
                            <h4 className="text-sm font-medium text-white/80 mb-2">Benefícios Principais:</h4>
                            <ul className="space-y-2">
                              {card.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-300">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button 
                            className={`w-full bg-gradient-to-r ${card.color} hover:opacity-90 text-white`}
                            onClick={() => navigate(card.path)}
                            onMouseEnter={() => setHoveredCard(card.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                          >
                            {hoveredCard === card.id ? (
                              <>
                                Ver Demonstração <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
                              </>
                            ) : (
                              "Ver Demonstração"
                            )}
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits-section" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-3"
            >
              Por Que Escolher Nossas Landing Pages?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-gray-400 max-w-3xl mx-auto"
            >
              Páginas desenvolvidas com foco em conversão e projetadas para transformar visitantes em clientes fiéis.
            </motion.p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-full">
                  <CardHeader>
                    <div className="mb-3">{benefit.icon}</div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-3"
            >
              O Que Nossos Clientes Dizem
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-gray-400 max-w-3xl mx-auto"
            >
              Profissionais que transformaram seus resultados com nossas landing pages.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-indigo-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="inline-block w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-medium">{testimonial.author}</p>
                        <p className="text-sm text-gray-400">{testimonial.profession}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-800"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pronto para Potencializar seu Negócio?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Escolha o modelo ideal para sua profissão e comece a transformar visitantes em clientes.
              Aumente suas conversões hoje mesmo!
            </p>
            <Button 
              size="lg" 
              className="bg-white text-indigo-800 hover:bg-white/90 hover:text-indigo-900"
              onClick={() => {
                const demoSection = document.getElementById('demo-section');
                demoSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explorar Modelos <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 bg-gray-950">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2023 LinkTree Professional Landing Pages. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}