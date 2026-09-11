import { useEffect, useState } from 'react';
import ProposalForm from './ProposalForm';
import {
  advantages,
  buildWhatsAppUrl,
  fiscalPlans,
  galleryImages,
  googleReviewsUrl,
  heroSlides,
  instagramUrl,
  locationInfo,
  navItems,
  processSteps,
  serviceCards,
  servicePricing,
  testimonials,
  trustedCompanies,
} from './content';
import { ArrowIcon, icons } from './icons';

const defaultWhatsAppMessage =
  'Olá, vim pelo site da 4U Coworking e quero falar sobre as opções disponíveis.';

export default function App() {
  return (
    <>
      <Header />
      <div className="content-shell">
        <main>
          <Hero />
          <Intro />
          <Services />
          <Advantages />
          <Process />
          <Testimonials />
          <Pricing />
          <LocationSection />
          <Contact />
          <Gallery />
        </main>
        <Footer />
      </div>
      <FloatingWhatsApp />
    </>
  );
}

function Header() {
  const InstagramIcon = icons.instagram;

  return (
    <header className="site-header" id="topo">
      <a className="brand" href="#topo" aria-label="4U Coworking">
        <img src={`${import.meta.env.BASE_URL}assets/logo-4u.svg`} alt="4U Coworking" width={74} height={74} />
        <span>
          <strong>4U</strong>
          <small>coworking</small>
        </span>
      </a>

      <nav className="main-nav" aria-label="Navegação principal">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a
          className="icon-link"
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram da 4U Coworking"
        >
          <InstagramIcon />
        </a>
        <a
          className="header-cta"
          href={buildWhatsAppUrl('Olá, vim pelo topo do site e quero solicitar uma proposta.')}
          target="_blank"
          rel="noreferrer"
        >
          Solicitar proposta
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(preference.matches);
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title" aria-roledescription="carrossel">
      <div className="hero-carousel">
        {heroSlides.map((slide, index) => (
          <img
            className={`hero-slide${activeSlide === index ? ' is-active' : ''}`}
            src={slide.image}
            alt={slide.alt}
            key={slide.alt}
            aria-hidden={activeSlide !== index}
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        ))}
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <p className="eyebrow">Coworking em Niterói</p>
        <h1 id="hero-title">
          <span className="line">4U</span>
          <span className="line">Coworking</span>
        </h1>
        <p className="hero-copy">
          Um espaço para criar, crescer, se destacar e economizar com estações de
          trabalho, salas privativas, consultório de saúde e endereço fiscal.
        </p>

        <div className="hero-actions">
          <a
            className="button button-primary"
            href={buildWhatsAppUrl('Olá, quero conhecer a 4U Coworking e agendar uma visita.')}
            target="_blank"
            rel="noreferrer"
          >
            <span>Agendar visita</span>
            <ArrowIcon />
          </a>
          <a className="button button-secondary" href="#servicos">
            Ver serviços
          </a>
        </div>

        <div className="hero-controls">
          <div className="hero-dots" role="group" aria-label="Escolher foto em destaque">
            {heroSlides.map((slide, index) => (
              <button
                type="button"
                key={slide.alt}
                aria-label={`Mostrar foto ${index + 1}: ${slide.alt}`}
                aria-pressed={activeSlide === index}
                onClick={() => { setActiveSlide(index); setPaused(true); }}
              ><span /></button>
            ))}
          </div>
          {!reducedMotion && <button className="carousel-toggle" type="button" onClick={() => setPaused(!paused)}>
            {paused ? 'Reproduzir fotos' : 'Pausar fotos'}
          </button>}
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro section" aria-labelledby="intro-title">
      <div className="section-kicker">Planos flexíveis para empresas e profissionais</div>
      <div className="intro-grid">
        <h2 id="intro-title">Estrutura completa sem montar um escritório do zero.</h2>
        <p>
          A 4U reúne ambientes de trabalho, atendimento e formalização em uma unidade
          prática no Shopping Pendotiba. Você escolhe o formato, agenda a visita e usa
          a estrutura pronta para o seu ritmo.
        </p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services section" id="servicos" aria-labelledby="services-title">
      <SectionHeading
        kicker="Serviços"
        title="Ambientes pensados para sua rotina e seus projetos."
        text="Opções para trabalhar, reunir clientes, formalizar a empresa ou atender na área da saúde."
        titleId="services-title"
      />

      <div className="service-grid">
        {serviceCards.map((service) => {
          const Icon = icons[service.icon];

          return (
            <article className="service-card" key={service.title}>
              <div className="service-card-media">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}
                />
                <span className="service-card-badge" aria-hidden="true">
                  <Icon />
                </span>
              </div>
              <div className="service-card-body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a
                  href={buildWhatsAppUrl(`Olá, tenho interesse em ${service.title} na 4U Coworking.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Consultar <ArrowIcon />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Advantages() {
  return (
    <section className="advantages" id="vantagens" aria-labelledby="advantages-title">
      <div className="section advantages-inner">
        <SectionHeading
          kicker="Vantagens"
          title="O que você encontra na 4U."
          text="Benefícios para reduzir atrito na operação e melhorar a experiência de clientes, equipes e profissionais autônomos."
          titleId="advantages-title"
        />

        <div className="advantage-grid">
          {advantages.map((advantage) => {
            const Icon = icons[advantage.icon];

            return (
              <article className="advantage-item" key={advantage.title}>
                <span className="advantage-icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3>{advantage.title}</h3>
                <p>{advantage.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="process section" id="processo" aria-labelledby="process-title">
      <SectionHeading
        kicker="Processo de adesão"
        title="Rápido, fácil e prático."
        text="Da escolha do plano ao primeiro dia de uso, o caminho é direto e acompanhado pela equipe."
        titleId="process-title"
      />

      <div className="process-grid">
        {processSteps.map((step) => (
          <article className="process-step" key={step.number}>
            <strong>{step.number}</strong>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials section" id="depoimentos" aria-labelledby="testimonials-title">
      <SectionHeading
        kicker="Depoimentos"
        title="Veja o que nossos clientes falam sobre nós."
        text="Avaliações ajudam novos clientes a entender a experiência real de quem já utiliza a estrutura."
        titleId="testimonials-title"
      />

      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.author}>
            <span className="quote-mark" aria-hidden="true">“</span>
            <blockquote>{testimonial.quote}</blockquote>
            <strong>{testimonial.author}</strong>
            <span>{testimonial.role}</span>
            <a className="testimonial-source" href={testimonial.sourceUrl} target="_blank" rel="noreferrer">Depoimento publicado no site da 4U <ArrowIcon /></a>
          </article>
        ))}
        <article className="google-review-card">
          <span className="section-kicker">No Google</span>
          <h3>Conheça outras experiências.</h3>
          <p>Confira as avaliações e descubra o que os clientes contam sobre a 4U Coworking.</p>
          <a className="button button-outline" href={googleReviewsUrl} target="_blank" rel="noreferrer">Ver avaliações no Google <ArrowIcon /></a>
        </article>
      </div>

      <div className="companies-panel">
        <h3>Empresas que confiam na 4U</h3>
        <p className="companies-note">Marcas ilustrativas. A lista de empresas será atualizada em breve.</p>
        <div className="logo-viewport" aria-label="Exemplos ilustrativos de marcas">
          <div className="logo-track">
            {trustedCompanies.map((company) => (
              <div className={`client-logo ${company.tone}`} key={company.name}>
                <span>{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="pricing section" id="valores" aria-labelledby="pricing-title">
      <SectionHeading
        kicker="Valores"
        title="Planos claros para cada momento do seu negócio."
        text="Escolha como deseja usar a 4U e fale com a nossa equipe para confirmar horários e disponibilidade."
        titleId="pricing-title"
      />

      <div className="pricing-highlight">
        <div className="pricing-board">
          {servicePricing.map((plan) => {
            return (
              <article className="pricing-card" key={plan.title}>
                <img className="pricing-photo" src={plan.image} alt={plan.imageAlt} loading="lazy" />
                <div className="pricing-details">
                  <header className="pricing-card-header">
                    <h3>{plan.title}</h3>
                    <p>{plan.text}</p>
                  </header>

                  <ul className="pricing-list">
                    {plan.items.map((item) => (
                      <li key={`${plan.title}-${item.label}`}>
                        <div>
                          <strong>{item.label}</strong>
                          {'note' in item && item.note && <small>{item.note}</small>}
                        </div>
                        <span>{item.value}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    className="pricing-link"
                    href={buildWhatsAppUrl(`Olá, quero consultar valores para ${plan.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fale conosco
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="fiscal-pricing">
        <div className="fiscal-copy">
          <span className="section-kicker">Endereço fiscal e comercial</span>
          <h3>Formalize sua empresa com uma presença profissional.</h3>
          <p>
            Escolha a vigência que faz sentido para o seu negócio e conte com o suporte da
            4U para receber correspondências.
          </p>
          <a
            className="button button-outline"
            href={buildWhatsAppUrl('Olá, quero saber mais sobre endereço fiscal e comercial.')}
            target="_blank"
            rel="noreferrer"
          >
            Consultar endereço fiscal
            <ArrowIcon />
          </a>
        </div>

        <div className="fiscal-grid">
          {fiscalPlans.map((plan) => (
            <article className={`fiscal-card${plan.popular ? ' fiscal-card-featured' : ''}`} key={plan.title}>
              {plan.popular && <span className="fiscal-badge">Plano anual</span>}
              <h4>{plan.title}</h4>
              <strong>{plan.price}</strong>
              <span>{plan.detail}</span>
              <p>{plan.discount}</p>
              <a className="fiscal-link" href={buildWhatsAppUrl(`Olá, tenho interesse no plano ${plan.title.toLowerCase()} de endereço fiscal e comercial, no valor de ${plan.price}.`)} target="_blank" rel="noreferrer">Consultar plano <ArrowIcon /></a>
            </article>
          ))}
        </div>
      </div>

      <article className="pricing-consultation">
        <div>
          <span>Para equipes e projetos especiais</span>
          <h3>Escritórios sob demanda</h3>
          <strong className="consultation-price">Valor sob consulta</strong>
          <p>Conte para a equipe o que você precisa e montamos uma solução compatível com a sua operação.</p>
        </div>
        <a
          className="button button-secondary"
          href={buildWhatsAppUrl('Olá, quero conversar sobre um escritório sob demanda.')}
          target="_blank"
          rel="noreferrer"
        >
          Falar com a equipe
          <ArrowIcon />
        </a>
      </article>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="location section" id="localizacao" aria-labelledby="location-title">
      <SectionHeading
        kicker={locationInfo.unit}
        title={locationInfo.name}
        text="Estamos no Shopping Pendotiba, com serviços para quem precisa trabalhar, atender e formalizar a empresa em Niterói."
        titleId="location-title"
      />

      <div className="location-grid">
          <article className="location-card">
            <h3>Endereço</h3>
            <address>{locationInfo.address}</address>
            <div className="location-services">
              {locationInfo.services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
            <div className="route-actions">
              <a className="button button-primary" href={locationInfo.wazeUrl} target="_blank" rel="noreferrer">
                Ir com Waze
              </a>
              <a className="button button-outline" href={locationInfo.mapsUrl} target="_blank" rel="noreferrer">
                Ir com Maps
              </a>
            </div>
          </article>

          <iframe
            className="map-frame"
            src={locationInfo.mapEmbedUrl}
            title="Mapa da 4U Coworking no Shopping Pendotiba"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="location-video">
            <video controls preload="metadata" poster={locationInfo.poster} aria-label="Vídeo do ambiente de trabalho">
              <source src={locationInfo.videoUrl} type="video/mp4" />
            </video>
            <p>Vídeo ilustrativo • Conheça a unidade em uma visita.</p>
          </div>
        </div>
    </section>
  );
}

function Contact() {
  const InstagramIcon = icons.instagram;

  return (
    <section className="contact section" id="contato" aria-labelledby="contact-title">
      <div className="contact-inner">
        <div className="contact-copy">
          <span className="section-kicker">Contato</span>
          <h2 id="contact-title">Agende uma visita ou peça uma proposta.</h2>
          <p>
            Conte rapidamente o que você precisa e retornaremos com a melhor opção de
            sala, plano, consultório ou endereço fiscal.
          </p>
          <div className="contact-note">
            <strong>4U Coworking</strong>
            <span>Salas privativas, reuniões, consultório, coworking e endereço fiscal.</span>
          </div>
          <a className="instagram-link" href={instagramUrl} target="_blank" rel="noreferrer">
            <InstagramIcon />
            <span>Instagram</span>
          </a>
        </div>

        <ProposalForm />
      </div>
    </section>
  );
}


function Gallery() {
  return (
    <section className="gallery section" id="galeria" aria-labelledby="gallery-title">
      <SectionHeading
        kicker="Galeria"
        title="Conheça espaços pensados para acelerar o crescimento da sua empresa."
        text="Ambientes de trabalho, reunião e atendimento organizados para receber sua equipe e seus clientes com conforto."
        titleId="gallery-title"
      />

      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <img
            className={image.wide ? 'wide' : ''}
            src={image.image}
            alt={image.alt}
            loading="lazy"
            key={image.alt}
          />
        ))}
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  const WhatsAppIcon = icons.whatsapp;
  const [message, setMessage] = useState(defaultWhatsAppMessage);

  useEffect(() => {
    const messages: Record<string, string> = {
      servicos: 'Olá, estou vendo os serviços da 4U e gostaria de saber qual atende melhor à minha necessidade.',
      vantagens: 'Olá, quero saber mais sobre a estrutura e as vantagens da 4U Coworking.',
      processo: 'Olá, quero conhecer os planos da 4U e agendar uma visita.',
      depoimentos: 'Olá, vi os depoimentos no site e quero conhecer a 4U Coworking.',
      valores: 'Olá, estou consultando os valores no site da 4U e gostaria de uma proposta.',
      localizacao: 'Olá, quero agendar uma visita à unidade Shopping Pendotiba, em Niterói.',
      contato: 'Olá, vim pela seção de contato da 4U e gostaria de falar com a equipe.',
      galeria: 'Olá, vi a galeria no site da 4U e quero conhecer os espaços pessoalmente.',
    };
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setMessage(messages[visible.target.id] ?? defaultWhatsAppMessage);
    }, { rootMargin: '-35% 0px -35% 0px' });
    document.querySelectorAll('main > section').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <a
      className="floating-whatsapp"
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a 4U Coworking pelo WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; 2026 4U Coworking. Todos os direitos reservados.</p>
      <div className="footer-links">
        <a href={instagramUrl} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href={buildWhatsAppUrl(defaultWhatsAppMessage)} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <a href="#topo">Voltar ao topo</a>
      </div>
    </footer>
  );
}

function SectionHeading({
  kicker,
  title,
  text,
  titleId,
}: {
  kicker: string;
  title: string;
  text: string;
  titleId: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="section-kicker">{kicker}</span>
        <h2 id={titleId}>{title}</h2>
      </div>
      <p>{text}</p>
    </div>
  );
}
