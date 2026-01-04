import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PoliticaDePrivacidade() {
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
          <h1 className="text-4xl font-bold text-navy mb-2">🔐 Política de Privacidade</h1>
          <p className="text-muted-foreground mb-8">Última atualização: 23/12/2025</p>

          <div className="prose prose-lg max-w-none text-foreground/80">
            <p className="lead">
              A sua privacidade é importante para nós. Esta Política de Privacidade explica como coletamos, 
              utilizamos e protegemos os dados pessoais dos usuários deste site, em conformidade com a 
              Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).
            </p>

            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">1. Controlador dos dados</h2>
            <p>O controlador dos dados pessoais tratados neste site é:</p>
            <div className="bg-muted/50 p-4 rounded-lg mt-4">
              <p className="font-semibold">KZ TECNOLOGIA E SOLUÇÕES LTDA – ME</p>
              <p>CNPJ: 34.280.836/0001-09</p>
              <p>E-mail para assuntos de privacidade: <a href="mailto:privacidade@confereaqui.com.br" className="text-emerald hover:underline">privacidade@confereaqui.com.br</a></p>
            </div>

            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">2. Coleta de dados pessoais</h2>
            <p>Podemos coletar dados pessoais fornecidos voluntariamente pelo usuário, tais como:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome;</li>
              <li>E-mail;</li>
              <li>Telefone;</li>
              <li>Informações enviadas por formulários;</li>
              <li>Dados de navegação (endereço IP, navegador, páginas acessadas).</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">3. Finalidade do uso dos dados</h2>
            <p>Os dados coletados poderão ser utilizados para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder solicitações e contatos;</li>
              <li>Melhorar a experiência do usuário;</li>
              <li>Comunicação institucional;</li>
              <li>Cumprimento de obrigações legais e regulatórias.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">4. Compartilhamento de dados</h2>
            <p>Os dados pessoais não são vendidos ou comercializados. O compartilhamento poderá ocorrer apenas quando:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Exigido por lei ou autoridade competente;</li>
              <li>Necessário para a operação do site (ex.: hospedagem, ferramentas de análise).</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">5. Cookies</h2>
            <p>
              Este site pode utilizar cookies e tecnologias semelhantes para fins estatísticos e de melhoria da navegação. 
              O usuário pode desativar os cookies diretamente nas configurações do seu navegador.
            </p>

            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">6. Segurança das informações</h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acessos 
              não autorizados, vazamentos, perdas ou usos indevidos.
            </p>

            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">7. Direitos do titular dos dados</h2>
            <p>Nos termos da LGPD, o usuário poderá solicitar:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmação da existência de tratamento de dados;</li>
              <li>Acesso, correção ou exclusão dos dados;</li>
              <li>Portabilidade dos dados, quando aplicável;</li>
              <li>Revogação do consentimento.</li>
            </ul>
            <p className="mt-4">
              As solicitações deverão ser encaminhadas para o e-mail: 
              <a href="mailto:privacidade@confereaqui.com.br" className="text-emerald hover:underline ml-1">📧 privacidade@confereaqui.com.br</a>
            </p>

            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">8. Retenção dos dados</h2>
            <p>
              Os dados pessoais serão armazenados somente pelo período necessário para cumprir as finalidades 
              desta política ou conforme exigido por lei.
            </p>

            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">9. Alterações desta política</h2>
            <p>
              Esta Política de Privacidade pode ser atualizada a qualquer momento. Recomendamos a revisão periódica 
              deste documento.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
