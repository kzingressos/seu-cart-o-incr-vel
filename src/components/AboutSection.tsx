import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

export function AboutSection() {
  return (
    <section id="quem-somos" className="py-24 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-light text-emerald text-sm font-semibold mb-4">
              Quem Somos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Proteção financeira para o seu negócio
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              O <strong className="text-navy">Confere Aqui</strong> nasceu com um propósito claro: 
              fiscalizar e trazer transparência para as empresas, garantindo que bancos e operadoras 
              de cartão não se aproveitem das complexidades do sistema financeiro.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Sabemos que muitas empresas perdem dinheiro sem nem perceber, seja por cobranças 
              indevidas, taxas abusivas ou falhas na conciliação financeira. Nosso compromisso é 
              proteger o seu negócio, identificando inconsistências, corrigindo erros e assegurando 
              que cada centavo seja contabilizado corretamente.
            </p>

            <div className="space-y-4">
              {[
                { icon: Target, title: "Missão", text: "Recuperar valores perdidos e prevenir prejuízos futuros" },
                { icon: Eye, title: "Visão", text: "Ser referência em transparência financeira no Brasil" },
                { icon: Heart, title: "Valores", text: "Integridade, confiança e compromisso com resultados" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background shadow-sm hover:shadow-card transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-light flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-emerald" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square max-w-lg mx-auto">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-hero" />
              
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border-2 border-dashed border-white/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 border-2 border-dashed border-white/20 rounded-full"
              />
              
              {/* Center logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center animate-pulse-glow">
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                    <span className="text-4xl font-bold text-navy">C</span>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 right-8 bg-white rounded-xl p-3 shadow-card"
              >
                <p className="text-xs text-muted-foreground">Clientes ativos</p>
                <p className="text-xl font-bold text-emerald">500+</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-8 left-8 bg-white rounded-xl p-3 shadow-card"
              >
                <p className="text-xs text-muted-foreground">Anos de experiência</p>
                <p className="text-xl font-bold text-navy">5+</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
