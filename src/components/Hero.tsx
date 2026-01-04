const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5543999224379', '_blank');
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Soluções Financeiras para o seu Negócio
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Oferecemos as melhores soluções em gestão financeira corporativa, 
            com tecnologia de ponta e atendimento personalizado.
          </p>
          <button
            onClick={handleWhatsApp}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors shadow-soft"
          >
            Saiba Mais
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
