import ProposalForm from './ProposalForm';

const services = [
  {
    icon: 'briefcase',
    title: 'Salas privativas',
    text: 'Espacos reservados para profissionais, duplas e pequenas equipes que precisam de foco e imagem profissional.',
  },
  {
    icon: 'meeting',
    title: 'Sala de reuniao',
    text: 'Ambiente preparado para apresentacoes, alinhamentos, entrevistas e reunioes presenciais com clientes.',
  },
  {
    icon: 'desk',
    title: 'Estacoes de trabalho',
    text: 'Opcoes flexiveis para quem precisa de uma base profissional por algumas horas, dias ou no mes.',
  },
  {
    icon: 'pin',
    title: 'Endereco comercial',
    text: 'Mais credibilidade para sua empresa, com suporte para correspondencias e presenca comercial.',
  },
  {
    icon: 'coffee',
    title: 'Apoio no dia a dia',
    text: 'Recepcao, copa, internet e areas compartilhadas para manter sua operacao simples e organizada.',
  },
  {
    icon: 'wifi',
    title: 'Infraestrutura inclusa',
    text: 'Internet, climatizacao, limpeza e ambiente pronto para voce chegar, sentar e trabalhar.',
    featured: true,
  },
];

export default function App() {
  return (
    <>
      <header className="site-header" id="topo">
        <a className="brand" href="#topo" aria-label="4U Coworking">
          <img src="/assets/logo-4u.svg" alt="4U Coworking" width={74} height={74} />
          <span>
            <strong>4U</strong>
            <small>coworking</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Navegacao principal">
          <a href="#servicos">Servicos</a>
          <a href="#salas">Salas</a>
          <a href="#planos">Planos</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="header-cta" href="#contato">
          Solicitar proposta
        </a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="/assets/hero-coworking.png"
            alt="Interior moderno de coworking com salas privativas"
          />
          <div className="hero-overlay" aria-hidden="true" />

          <div className="hero-content">
            <p className="eyebrow">Salas privativas + coworking flexivel</p>
            <h1 id="hero-title">
              <span className="line">4U</span>
              <span className="line">Coworking</span>
            </h1>
            <p className="hero-copy">
              Um endereco profissional para trabalhar, reunir clientes e crescer com
              estrutura pronta, atendimento proximo e planos sob medida.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contato">
                <span>Quero conhecer</span>
                <ArrowIcon />
              </a>
              <a className="button button-secondary" href="#servicos">
                Ver servicos
              </a>
            </div>

            <div className="hero-metrics" aria-label="Destaques da 4U Coworking">
              <div>
                <strong>2</strong>
                <span>salas privativas</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>estrutura pronta</span>
              </div>
              <div>
                <strong>Flex</strong>
                <span>planos mensais</span>
              </div>
            </div>
          </div>
        </section>

        <section className="intro section">
          <div className="section-kicker">Para empresas, autonomos e equipes enxutas</div>
          <div className="intro-grid">
            <h2>Trabalhe em um ambiente profissional sem montar um escritorio do zero.</h2>
            <p>
              A 4U Coworking combina privacidade, localizacao conveniente e servicos
              compartilhados para quem precisa de presenca profissional com custo
              previsivel.
            </p>
          </div>
        </section>

        <section className="services section" id="servicos" aria-labelledby="services-title">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Servicos</span>
              <h2 id="services-title">Tudo pronto para sua rotina render.</h2>
            </div>
            <p>
              Escolha o formato ideal para trabalhar, receber clientes ou formalizar
              sua empresa.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article
                className={`service-card${service.featured ? ' featured' : ''}`}
                key={service.title}
              >
                <span className="service-icon" aria-hidden="true">
                  <ServiceIcon name={service.icon} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rooms section" id="salas" aria-labelledby="rooms-title">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Nossas salas</span>
              <h2 id="rooms-title">
                Duas salas privativas para diferentes momentos do seu negocio.
              </h2>
            </div>
            <p>
              Use como base fixa, ponto de atendimento ou sala estrategica para
              encontros presenciais.
            </p>
          </div>

          <div className="room-list">
            <article className="room-card">
              <div className="room-number">01</div>
              <div>
                <h3>Sala privativa compacta</h3>
                <p>
                  Ideal para atendimento individual, consultorias, vendas, reunioes
                  rapidas ou uma operacao de ate 3 pessoas.
                </p>
                <ul>
                  <li>Mobiliario profissional</li>
                  <li>Ambiente climatizado</li>
                  <li>Uso mensal ou recorrente</li>
                </ul>
              </div>
            </article>

            <article className="room-card room-card-dark">
              <div className="room-number">02</div>
              <div>
                <h3>Sala privativa para equipe</h3>
                <p>
                  Mais espaco para pequenos times, trabalho com foco e encontros
                  comerciais com uma presenca mais robusta.
                </p>
                <ul>
                  <li>Configuracao flexivel</li>
                  <li>Atendimento a clientes</li>
                  <li>Possibilidade de plano dedicado</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="experience" aria-label="Beneficios da 4U Coworking">
          <div className="experience-inner">
            <span className="section-kicker">Experiencia</span>
            <h2>Privacidade quando voce precisa. Estrutura compartilhada quando faz sentido.</h2>
            <div className="benefit-row">
              <span>Internet estavel</span>
              <span>Recepcao profissional</span>
              <span>Ambiente climatizado</span>
              <span>Contratacao flexivel</span>
            </div>
          </div>
        </section>

        <section className="plans section" id="planos" aria-labelledby="plans-title">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Planos</span>
              <h2 id="plans-title">Escolha pelo uso, nao pela burocracia.</h2>
            </div>
            <p>
              Os formatos abaixo servem como ponto de partida. A proposta final e
              ajustada conforme rotina, frequencia e necessidade.
            </p>
          </div>

          <div className="plan-grid">
            <article className="plan-card">
              <h3>Uso pontual</h3>
              <p>Para reunioes, atendimentos e dias especificos de trabalho presencial.</p>
              <a href="#contato">Consultar disponibilidade</a>
            </article>
            <article className="plan-card plan-card-highlight">
              <h3>Mensal privativo</h3>
              <p>
                Sala reservada para quem quer previsibilidade, foco e presenca
                profissional todos os dias.
              </p>
              <a href="#contato">Pedir proposta</a>
            </article>
            <article className="plan-card">
              <h3>Empresa flex</h3>
              <p>
                Para equipes que alternam entre trabalho remoto, reunioes presenciais
                e base comercial.
              </p>
              <a href="#contato">Montar plano</a>
            </article>
          </div>
        </section>

        <section className="contact section" id="contato" aria-labelledby="contact-title">
          <div className="contact-copy">
            <span className="section-kicker">Contato</span>
            <h2 id="contact-title">Agende uma visita ou peca uma proposta.</h2>
            <p>
              Conte rapidamente o que voce precisa e retornaremos com a melhor opcao
              de sala, plano e horario para visita.
            </p>
            <div className="contact-note">
              <strong>4U Coworking</strong>
              <span>Salas privativas, reuniao e endereco comercial.</span>
            </div>
          </div>

          <ProposalForm />
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 4U Coworking. Todos os direitos reservados.</p>
        <a href="#topo">Voltar ao topo</a>
      </footer>
    </>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function ServiceIcon({ name }: { name: string }) {
  if (name === 'briefcase') {
    return (
      <svg viewBox="0 0 24 24">
        <path d="M4 9h16v10H4z" />
        <path d="M8 9V6h8v3" />
        <path d="M4 13h16" />
      </svg>
    );
  }

  if (name === 'meeting') {
    return (
      <svg viewBox="0 0 24 24">
        <path d="M3 11h18" />
        <path d="M5 11V7h14v4" />
        <path d="M6 11v6" />
        <path d="M18 11v6" />
        <path d="M9 17h6" />
      </svg>
    );
  }

  if (name === 'desk') {
    return (
      <svg viewBox="0 0 24 24">
        <path d="M4 5h16v12H4z" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    );
  }

  if (name === 'pin') {
    return (
      <svg viewBox="0 0 24 24">
        <path d="M12 21s7-5.2 7-12a7 7 0 0 0-14 0c0 6.8 7 12 7 12z" />
        <circle cx="12" cy="9" r="2.3" />
      </svg>
    );
  }

  if (name === 'coffee') {
    return (
      <svg viewBox="0 0 24 24">
        <path d="M4 10h11v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
        <path d="M15 11h2.5a2.5 2.5 0 0 1 0 5H15" />
        <path d="M6 4v2" />
        <path d="M10 4v2" />
        <path d="M14 4v2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24">
      <path d="M2 8.5a15 15 0 0 1 20 0" />
      <path d="M5 12a10.5 10.5 0 0 1 14 0" />
      <path d="M8.5 15.5a5.5 5.5 0 0 1 7 0" />
      <path d="M12 19h.01" />
    </svg>
  );
}
