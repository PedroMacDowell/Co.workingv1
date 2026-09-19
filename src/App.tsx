import { useEffect, useRef, useState } from 'react';
import ProposalForm from './ProposalForm';
import {
  advantages,
  buildWhatsAppUrl,
  galleryImages,
  googleReviewsUrl,
  heroSlides,
  instagramUrl,
  locationInfo,
  navItems,
  planGroups,
  processSteps,
  serviceCards,
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
        <img
          src={`${import.meta.env.BASE_URL}assets/logo-4u-full.png`}
          alt="4U Coworking"
          className="brand-logo"
        />
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
                <div className="service-card-actions">
                  <a className="service-card-btn service-card-btn-values" href="#valores">
                    Consultar valores
                  </a>
                  <a
                    className="service-card-btn service-card-btn-whatsapp"
                    href={buildWhatsAppUrl(`Olá, gostaria de saber mais sobre ${service.title} na 4U Coworking.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Saber mais</span>
                    <ArrowIcon />
                  </a>
                </div>
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

// Depoimentos acima deste tamanho aparecem resumidos, com opção de ler tudo.
const longQuote = 260;

// Distância entre o início de dois cards vizinhos do carrossel.
function carouselStep(track: HTMLElement) {
  const card = track.firstElementChild as HTMLElement | null;
  if (!card) return 0;
  return card.offsetWidth + parseFloat(getComputedStyle(track).columnGap || '0');
}

function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [positionCount, setPositionCount] = useState(1);
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const step = carouselStep(track);
      if (!step) return;
      setPositionCount(Math.round((track.scrollWidth - track.clientWidth) / step) + 1);
      setPosition(Math.round(track.scrollLeft / step));
    };
    update();
    track.addEventListener('scroll', update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => {
      track.removeEventListener('scroll', update);
      observer.disconnect();
    };
  }, []);

  function goTo(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollTo({ left: index * carouselStep(track), behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  return (
    <section className="testimonials section" id="depoimentos" aria-labelledby="testimonials-title">
      <div className="testimonials-header-wrap">
        <SectionHeading
          kicker="Depoimentos"
          title="Veja o que nossos clientes falam sobre nós."
          text="Avaliações de quem já utiliza a estrutura e os serviços da 4U Coworking no Shopping Pendotiba."
          titleId="testimonials-title"
        />
        <a
          className="google-rating-badge"
          href={googleReviewsUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Avaliações 5 estrelas no Google"
        >
          <svg className="google-icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
            <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
          </svg>
          <div className="google-rating-info">
            <div className="google-rating-top">
              <strong>5.0</strong>
              <span className="google-stars">★★★★★</span>
            </div>
            <small>Avaliações no Google</small>
          </div>
        </a>
      </div>

      <div className="review-carousel" role="region" aria-roledescription="carrossel" aria-label="Depoimentos de clientes">
        <div className="review-track" ref={trackRef} tabIndex={0}>
          {testimonials.map((testimonial, index) => (
            <article
              className="review-card"
              key={`${testimonial.author}-${testimonial.role}`}
              aria-label={`Depoimento ${index + 1} de ${testimonials.length}`}
            >
              <div className="review-card-top">
                <span className="quote-mark" aria-hidden="true">“</span>
                <div className="review-google-indicator">
                  <span className="review-stars-gold">★★★★★</span>
                  <span className="review-google-pill">Google</span>
                </div>
              </div>
              <div className="review-body">
                <blockquote className={testimonial.quote.length > longQuote && expanded !== index ? 'is-clamped' : ''}>
                  {testimonial.quote}
                </blockquote>
                {testimonial.quote.length > longQuote && (
                  <button
                    className="review-more"
                    type="button"
                    aria-expanded={expanded === index}
                    onClick={() => setExpanded(expanded === index ? null : index)}
                  >
                    {expanded === index ? 'Mostrar menos' : 'Ler depoimento completo'}
                  </button>
                )}
              </div>
              <footer className="review-author">
                <span className="review-avatar" aria-hidden="true">{testimonial.author.charAt(0)}</span>
                <div>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>

        <div className="review-controls">
          <a className="button button-outline" href={googleReviewsUrl} target="_blank" rel="noreferrer">
            Ver avaliações no Google <ArrowIcon />
          </a>
          <div className="review-nav">
            <div className="review-dots" role="group" aria-label="Escolher depoimentos">
              {Array.from({ length: positionCount }, (_, index) => (
                <button
                  type="button"
                  key={index}
                  aria-label={`Mostrar depoimentos a partir do ${index + 1}º`}
                  aria-pressed={position === index}
                  onClick={() => goTo(index)}
                ><span /></button>
              ))}
            </div>
            <button
              className="review-arrow review-arrow-prev"
              type="button"
              aria-label="Depoimentos anteriores"
              disabled={position === 0}
              onClick={() => goTo(position - 1)}
            >
              <ArrowIcon />
            </button>
            <button
              className="review-arrow"
              type="button"
              aria-label="Próximos depoimentos"
              disabled={position >= positionCount - 1}
              onClick={() => goTo(position + 1)}
            >
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="companies-panel">
        <h3>Empresas que confiam na 4U</h3>
        <p className="companies-note">Marcas ilustrativas. A lista de empresas será atualizada em breve.</p>
        <div className="logo-viewport" aria-label="Exemplos ilustrativos de marcas">
          <div className="logo-track">
            {[false, true].map((isDuplicate) => (
              <div
                className="logo-group"
                aria-hidden={isDuplicate ? 'true' : undefined}
                key={isDuplicate ? 'duplicate' : 'original'}
              >
                {trustedCompanies.map((company) => (
                  <div
                    className={`client-logo ${company.tone}`}
                    key={`${isDuplicate ? 'duplicate' : 'original'}-${company.name}`}
                  >
                    <span>{company.name}</span>
                  </div>
                ))}
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

      <div className="plan-groups">
        {planGroups.map((group) => (
          <div className={`plan-group plan-group-${group.tone}`} key={group.name}>
            <div className="plan-group-intro">
              <h3>
                <span>4U</span> {group.name}
              </h3>
              <p>{group.audience}</p>
            </div>

            <div className="plan-group-services">
              {group.services.map((service) => (
                <article className="plan-card" key={service.title}>
                  <div className="plan-card-media">
                    <img src={service.image} alt={service.imageAlt} loading="lazy" />
                  </div>

                  <div className="plan-card-body">
                    <header className="plan-card-header">
                      <h4>{service.title}</h4>
                      <a
                        className="plan-card-cta"
                        href={buildWhatsAppUrl(`Olá, quero consultar valores para ${service.title}.`)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Fale conosco
                        <ArrowIcon />
                      </a>
                    </header>
                    <p className="plan-card-text">{service.text}</p>
                    {service.promoBadge && (
                      <div className="plan-promo-badge">
                        <span>⚡ {service.promoBadge}</span>
                      </div>
                    )}

                    <ul className="pricing-list">
                      {service.items.map((item) => (
                        <li key={item.label} className={item.featured ? 'is-featured' : undefined}>
                          <div>
                            <strong>{item.label}</strong>
                            {item.note && <small>{item.note}</small>}
                          </div>
                          <span>{item.value}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="plan-card-meta">Disponível na Unidade Pendotiba</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
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
      <div className="footer-brand">
        <img
          src={`${import.meta.env.BASE_URL}assets/logo-4u-full.png`}
          alt="4U Coworking"
          className="footer-logo"
        />
        <p>&copy; 2026 4U Coworking. Todos os direitos reservados.</p>
      </div>
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
