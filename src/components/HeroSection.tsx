import { motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden"
    >
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-white/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-emerald/20 blur-3xl"
        />
      </div>

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6"
            >
              <Shield size={16} className="text-emerald" />
              Proteção financeira para seu negócio
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Evite cobranças{" "}
              <span className="text-emerald">indevidas</span>
              <br />
              controle suas{" "}
              <span className="relative">
                taxas!
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute bottom-1 left-0 h-3 bg-emerald/40 -z-10"
                />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Monitoramos suas tarifas bancárias para garantir que você não pague nada além do justo. 
              Transparência, segurança e economia ao seu alcance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://wa.me/5543999224379" target="_blank" rel="noopener noreferrer">
                <Button variant="cta" size="xl" className="group">
                  Saiba Mais
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start"
            >
              {[
                "Auditoria Automatizada",
                "100% Seguro",
              ].map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90">
                  <CheckCircle size={18} className="text-emerald" />
                  <span className="text-sm font-medium">{badge}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white rounded-3xl p-8 shadow-soft-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-light flex items-center justify-center">
                    <TrendingUp size={24} className="text-emerald" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Economia recuperada</p>
                    <p className="text-2xl font-bold text-emerald">R$ 47.850</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: "Taxas verificadas", value: "1.247", change: "+12%" },
                    { label: "Inconsistências", value: "23", change: "-45%" },
                    { label: "Valor recuperado", value: "R$ 8.2k", change: "+28%" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-background">
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">{item.value}</span>
                        <span className={`text-xs font-medium ${item.change.startsWith('+') ? 'text-emerald' : 'text-destructive'}`}>
                          {item.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -5, 0], x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 bg-emerald text-white px-4 py-2 rounded-full font-semibold shadow-lg"
              >
                78% dos lojistas
              </motion.div>

              {/* Bottom floating card */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-soft-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-light flex items-center justify-center">
                    <Shield size={20} className="text-emerald" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Divergências encontradas</p>
                    <p className="text-lg font-bold text-navy">Corrigidas ✓</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
