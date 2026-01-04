import { motion } from "framer-motion";
import { 
  CreditCard, 
  Search, 
  FileText, 
  RefreshCw, 
  Link2, 
  Lock,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: CreditCard,
    title: "Conciliação de Taxas de Cartão",
    description: "Garanta que as taxas cobradas pelos bancos estejam corretas, evitando cobranças indevidas e otimizando sua margem de lucro.",
  },
  {
    icon: Search,
    title: "Auditoria Financeira Automatizada",
    description: "Nosso sistema analisa automaticamente as transações, identificando divergências e reduzindo erros contábeis de forma precisa.",
  },
  {
    icon: RefreshCw,
    title: "Gestão de Disputas e Chargebacks",
    description: "Controle e acompanhe reembolsos e contestações de forma simplificada, minimizando prejuízos e agilizando processos.",
  },
  {
    icon: FileText,
    title: "Relatórios Inteligentes",
    description: "Visualize informações detalhadas sobre suas taxas e transações em relatórios fáceis de interpretar e personalizados.",
  },
  {
    icon: Link2,
    title: "Integração com Operadoras",
    description: "Compatível com as principais adquirentes do mercado, garantindo conciliação eficiente para todos os seus recebíveis.",
  },
  {
    icon: Lock,
    title: "Segurança e Confiabilidade",
    description: "Dados protegidos com tecnologia de ponta, assegurando a confidencialidade e a integridade das suas informações.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-light text-emerald text-sm font-semibold mb-4">
            O que Fazemos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Soluções completas para seu negócio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos um conjunto completo de ferramentas para garantir que você tenha 
            controle total sobre suas taxas e transações financeiras.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-emerald-light flex items-center justify-center mb-4 group-hover:bg-emerald/10 transition-colors">
                  <service.icon className="w-7 h-7 text-emerald" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <a 
                  href="#contato" 
                  className="inline-flex items-center gap-2 text-emerald font-medium group-hover:gap-3 transition-all"
                >
                  Saiba mais
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 relative rounded-3xl overflow-hidden"
        >
          <div className="bg-gradient-hero p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Pagando taxas indevidas?
                </h3>
                <p className="text-white/80">
                  Não se preocupe, nós ajudamos você a resolver isso.
                </p>
              </div>
              <Button variant="cta" size="xl" asChild>
                <a href="#contato" className="inline-flex items-center gap-2">
                  Fale com um especialista
                  <ArrowRight size={20} />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
