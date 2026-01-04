import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center text-emerald hover:text-emerald/80 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Voltar ao início
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-navy mb-2">📄 Termos de Uso</h1>
          <p className="text-muted-foreground mb-8">Última atualização: 23/12/2025</p>

          <div className="prose prose-lg max-w-none text-foreground/80">
            <p className="lead">
              Ao acessar e utilizar este site, você concorda integralmente com os presentes Termos de Uso. 
              Caso não concorde com algum dos termos aqui descritos, recomendamos que não utilize este site.
            </p>

            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">1. Objetivo do site</h2>
            <p>
              Este site possui caráter institucional, tendo como finalidade apresentar informações sobre a empresa, 
              seus serviços, produtos e conteúdos, não constituindo oferta comercial vinculante.
            </p>

            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">2. Uso do conteúdo</h2>
            <p>
              Todo o conteúdo disponibilizado neste site, incluindo textos, imagens, marcas, logotipos, layouts, 
              gráficos e demais materiais, é protegido por direitos autorais e de propriedade intelectual.
            </p>
            <p className="font-medium mt-4">É proibido:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Copiar, reproduzir ou distribuir conteúdos sem autorização prévia;</li>
              <li>Utilizar o conteúdo para fins ilegais ou não autorizados;</li>
              <li>Tentar acessar áreas restritas ou sistemas do site sem permissão.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">3. Responsabilidades do usuário</h2>
            <p>Ao utilizar este site, o usuário compromete-se a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer informações verdadeiras quando solicitado;</li>
              <li>Não praticar atos que possam comprometer a segurança ou funcionamento do site;</li>
              <li>Respeitar a legislação vigente e estes Termos de Uso.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">4. Limitação de responsabilidade</h2>
            <p>A empresa não se responsabiliza por:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Indisponibilidades temporárias do site;</li>
              <li>Danos decorrentes de falhas técnicas, vírus ou fatores externos;</li>
              <li>Decisões tomadas com base nas informações disponibilizadas no site.</li>
            </ul>
            <p className="mt-4">
              As informações podem ser alteradas, atualizadas ou removidas a qualquer momento, sem aviso prévio.
            </p>

            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">5. Links para sites de terceiros</h2>
            <p>
              Este site pode conter links para páginas externas. A empresa não se responsabiliza pelo conteúdo, 
              políticas de privacidade ou práticas de sites de terceiros.
            </p>

            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">6. Alterações dos termos</h2>
            <p>
              Os presentes Termos de Uso podem ser modificados a qualquer momento. Recomenda-se que o usuário 
              revise este documento periodicamente.
            </p>

            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">7. Legislação aplicável</h2>
            <p>
              Este documento é regido pelas leis da República Federativa do Brasil. Eventuais controvérsias serão 
              dirimidas no foro da comarca do domicílio da empresa, salvo disposição legal em contrário.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
