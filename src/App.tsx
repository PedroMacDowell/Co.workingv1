import ProposalForm from './ProposalForm';
import ScrollIntro from './ScrollIntro';
import {
  benefits,
  metrics,
  navItems,
  plans,
  rooms,
  services,
  trustedCompanies,
} from './content';
import { ArrowIcon, icons } from './icons';

export default function App() {
  return (
    <>
      <ScrollIntro />
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Rooms />
        <Experience />
        <Plans />
        <CompaniesCarousel />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="site-header" id="topo">
      <a className="brand" href="#topo" aria-label="4U Coworking">
        <img src="/assets/logo-4u.svg" alt="4U Coworking" width={74} height={74} />
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

      <a className="header-cta" href="#contato">
        Solicitar proposta
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img
        className="hero-image"
        src="/assets/hero-coworking.png"
        alt="Interior moderno de coworking com salas privativas"
      />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <p className="eyebrow">Salas privativas + coworking flexível</p>
        <h1 id="hero-title">
          <span className="line">4U</span>
          <span className="line">Coworking</span>
        </h1>
        <p className="hero-copy">
          Um endereço profissional para trabalhar, reunir clientes e crescer com
          estrutura pronta, atendimento próximo e planos sob medida.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#contato">
            <span>Quero conhecer</span>
            <ArrowIcon />
          </a>
          <a className="button button-secondary" href="#servicos">
            Ver serviços
          </a>
        </div>

        <div className="hero-metrics" aria-label="Destaques da 4U Coworking">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro section">
      <div className="section-kicker">Para empresas, autônomos e equipes enxutas</div>
      <div className="intro-grid">
        <h2>Trabalhe em um ambiente profissional sem montar um escritório do zero.</h2>
        <p>
          A 4U Coworking combina privacidade, localização conveniente e serviços
          compartilhados para quem precisa de presença profissional com custo
          previsível.
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
        title="Tudo pronto para sua rotina render."
        text="Escolha o formato ideal para trabalhar, receber clientes ou formalizar sua empresa."
        titleId="services-title"
      />

      <div className="service-grid">
        {services.map((service) => {
          const Icon = icons[service.icon];

          return (
            <article
              className={`service-card${service.featured ? ' featured' : ''}`}
              key={service.title}
            >
              <span className="service-icon" aria-hidden="true">
                <Icon />
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Rooms() {
  return (
    <section className="rooms section" id="salas" aria-labelledby="rooms-title">
      <SectionHeading
        kicker="Nossas salas"
        title="Duas salas privativas para diferentes momentos do seu negócio."
        text="Use como base fixa, ponto de atendimento ou sala estratégica para encontros presenciais."
        titleId="rooms-title"
      />

      <div className="room-list">
        {rooms.map((room) => (
          <article className={`room-card${room.dark ? ' room-card-dark' : ''}`} key={room.number}>
            <div className="room-number">{room.number}</div>
            <div>
              <h3>{room.title}</h3>
              <p>{room.text}</p>
              <ul>
                {room.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience" aria-label="Benefícios da 4U Coworking">
      <div className="experience-inner">
        <span className="section-kicker">Experiência</span>
        <h2>Privacidade quando você precisa. Estrutura compartilhada quando faz sentido.</h2>
        <div className="benefit-row">
          {benefits.map((benefit) => (
            <span key={benefit}>{benefit}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section className="plans section" id="planos" aria-labelledby="plans-title">
      <SectionHeading
        kicker="Planos"
        title="Escolha pelo uso, não pela burocracia."
        text="Os formatos abaixo servem como ponto de partida. A proposta final é ajustada conforme rotina, frequência e necessidade."
        titleId="plans-title"
      />

      <div className="plan-grid">
        {plans.map((plan) => (
          <article
            className={`plan-card${plan.highlight ? ' plan-card-highlight' : ''}`}
            key={plan.title}
          >
            <h3>{plan.title}</h3>
            <p>{plan.text}</p>
            <a href="#contato">{plan.cta}</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function CompaniesCarousel() {
  return (
    <section className="companies" aria-labelledby="companies-title">
      <div className="companies-inner">
        <div className="carousel-dots" aria-hidden="true">
          <span />
          <span className="active" />
          <span />
          <span />
          <span />
        </div>

        <div className="companies-panel">
          <h2 className="companies-kicker" id="companies-title">
            Empresas que confiam na 4U
          </h2>
          <div className="logo-viewport" aria-label="Empresas atendidas pela 4U">
            <div className="logo-track">
              {[...trustedCompanies, ...trustedCompanies].map((company, index) => (
                <div className={`client-logo ${company.tone}`} key={`${company.name}-${index}`}>
                  <span>{company.name}</span>
                  {company.subline && <small>{company.subline}</small>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section" id="contato" aria-labelledby="contact-title">
      <div className="contact-copy">
        <span className="section-kicker">Contato</span>
        <h2 id="contact-title">Agende uma visita ou peça uma proposta.</h2>
        <p>
          Conte rapidamente o que você precisa e retornaremos com a melhor opção de
          sala, plano e horário para visita.
        </p>
        <div className="contact-note">
          <strong>4U Coworking</strong>
          <span>Salas privativas, reunião e endereço comercial.</span>
        </div>
      </div>

      <ProposalForm />
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; 2026 4U Coworking. Todos os direitos reservados.</p>
      <a href="#topo">Voltar ao topo</a>
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
