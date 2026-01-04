import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Clock, ShieldCheck, AlertTriangle } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: 92,
    suffix: "%",
    label: "Transparência Financeira",
    description: "Clareza total em suas transações",
  },
  {
    icon: Clock,
    value: 60,
    suffix: "%",
    label: "Economia de Tempo",
    description: "Processos automatizados",
  },
  {
    icon: ShieldCheck,
    value: 85,
    suffix: "%",
    label: "Redução de Erros",
    description: "Menos falhas contábeis",
  },
  {
    icon: AlertTriangle,
    value: 78,
    suffix: "%",
    label: "Lojistas com Divergências",
    description: "Enfrentam cobranças indevidas",
  },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold text-emerald">
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-light text-emerald text-sm font-semibold mb-4">
            Nossos Resultados
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Números que fazem a diferença
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ajudamos centenas de empresas a economizar identificando e corrigindo cobranças indevidas
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-emerald-light flex items-center justify-center mb-4 group-hover:bg-emerald/10 transition-colors">
                  <stat.icon className="w-7 h-7 text-emerald" />
                </div>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <h3 className="text-lg font-semibold text-navy mt-2 mb-1">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
