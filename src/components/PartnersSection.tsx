import { motion } from "framer-motion";

const partners = [
  { name: "Cielo", logo: "https://confereaqui.com.br/wp-content/uploads/2025/03/cielocartao.png" },
  { name: "Stone", logo: "https://confereaqui.com.br/wp-content/uploads/2025/03/stonelogo.png" },
  { name: "PagSeguro", logo: "https://confereaqui.com.br/wp-content/uploads/2025/03/paglogo.png" },
  { name: "Rede", logo: "https://confereaqui.com.br/wp-content/uploads/2025/03/redepng.png" },
  { name: "InfinitePay", logo: "https://confereaqui.com.br/wp-content/uploads/2025/03/infinity.png" },
];

export function PartnersSection() {
  return (
    <section className="py-16 bg-card overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-xl font-semibold text-navy mb-2">
            Integramos com as principais operadoras
          </h3>
          <p className="text-muted-foreground">
            Tiramos a complexidade do seu dia para você focar no que realmente importa
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative">
        <div className="flex gap-12 animate-scroll">
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-160px * 5 - 48px * 5));
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
