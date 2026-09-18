import type { IconName } from './icons';

export const WHATSAPP_NUMBER = '5521998554243';
export const instagramUrl = 'https://www.instagram.com/4ucoworking/';
export const googleReviewsUrl =
  'https://www.google.com/search?q=4UCoworking+Shopping+Pendotiba+avalia%C3%A7%C3%B5es';

const locationQuery = encodeURIComponent(
  '4UCoworking Estrada Caetano Monteiro 818 Shopping Pendotiba Niterói RJ',
);

const officeImages = {
  sharedOffice:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
  privateOffice:
    'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80',
  meetingRoom:
    'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1000&q=80',
  healthOffice:
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
  lounge:
    'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1000&q=80',
  notebook:
    'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80',
  fiscal:
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
  demandOffice:
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80',
};

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const navItems = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Vantagens', href: '#vantagens' },
  { label: 'Valores', href: '#valores' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
];

export const heroSlides = [
  {
    image: '/assets/hero-coworking.png',
    alt: 'Interior moderno de coworking com salas privativas',
  },
  {
    image: officeImages.sharedOffice,
    alt: 'Ambiente ilustrativo com estações compartilhadas de trabalho',
  },
  {
    image: officeImages.meetingRoom,
    alt: 'Sala de reunião equipada para apresentações e treinamentos',
  },
];

export const serviceCards: Array<{
  icon: IconName;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
}> = [
  {
    icon: 'desk',
    title: 'Estação de trabalho e estudo',
    text: 'Posições compartilhadas para trabalhar, estudar e manter uma rotina produtiva com flexibilidade.',
    image: officeImages.sharedOffice,
    imageAlt: 'Bancadas compartilhadas com cadeiras de escritório',
  },
  {
    icon: 'meeting',
    title: 'Escritórios privativos',
    text: 'Salas reservadas para equipes pequenas que precisam de foco, privacidade e presença profissional.',
    image: officeImages.privateOffice,
    imageAlt: 'Sala privativa com mesa e cadeiras',
  },
  {
    icon: 'presentation',
    title: 'Salas para reuniões e treinamentos',
    text: 'Ambientes preparados para encontros comerciais, entrevistas, apresentações e workshops.',
    image: officeImages.meetingRoom,
    imageAlt: 'Mesa de reunião com televisão e cadeiras',
  },
  {
    icon: 'pin',
    title: 'Endereço fiscal e comercial',
    text: 'Formalize sua empresa com um endereço profissional e gestão organizada de correspondências.',
    image: officeImages.fiscal,
    imageAlt: 'Edifício comercial ilustrando uma presença profissional',
  },
  {
    icon: 'building',
    title: 'Escritórios sob demanda',
    text: 'Estrutura sob consulta para empresas que precisam de uma solução dedicada e escalável.',
    image: officeImages.demandOffice,
    imageAlt: 'Ambiente amplo de escritório sob demanda',
  },
  {
    icon: 'heartPulse',
    title: 'Consultório para área da saúde',
    text: 'Consultório moderno para atendimentos com conforto, privacidade, estacionamento e acessibilidade.',
    image: officeImages.healthOffice,
    imageAlt: 'Consultório equipado para profissionais da saúde',
  },
];

export const advantages: Array<{
  icon: IconName;
  title: string;
  text: string;
}> = [
  {
    icon: 'wifi',
    title: 'Internet profissional',
    text: 'Conexão estável para chamadas, sistemas e rotina de trabalho.',
  },
  {
    icon: 'users',
    title: 'Serviço de recepção',
    text: 'Acolhimento aos visitantes e suporte no fluxo de chegada.',
  },
  {
    icon: 'briefcase',
    title: 'Mobiliário completo',
    text: 'Mesas, cadeiras e estrutura pronta para começar sem obra.',
  },
  {
    icon: 'pin',
    title: 'Localização estratégica',
    text: 'Shopping Pendotiba, em Niterói, com acesso simples para clientes.',
  },
  {
    icon: 'network',
    title: 'Comunidade colaborativa',
    text: 'Networking natural entre profissionais e negócios da região.',
  },
  {
    icon: 'spark',
    title: 'Espaços inspiradores',
    text: 'Ambientes pensados para foco, reuniões e crescimento.',
  },
  {
    icon: 'car',
    title: 'Estacionamento gratuito',
    text: 'Mais praticidade para quem chega de carro ou recebe clientes.',
  },
  {
    icon: 'support',
    title: 'Suporte da equipe',
    text: 'Atendimento próximo para deixar sua operação mais leve.',
  },
];

export const processSteps = [
  {
    number: '1',
    title: 'Escolha seu plano',
    text: 'Veja as opções de sala, estação, consultório ou endereço fiscal e escolha o formato ideal.',
  },
  {
    number: '2',
    title: 'Faça uma visita',
    text: 'Agende um horário para conhecer a estrutura, tirar dúvidas e alinhar a melhor solução.',
  },
  {
    number: '3',
    title: 'Comece a utilizar',
    text: 'Formalize a contratação e use o espaço com tudo pronto desde o primeiro dia.',
  },
];

export const testimonials = [
  {
    quote: 'Locação simples, rápida, sem burocracia, local sempre limpo e agradável.',
    author: 'Cristiane Pires',
    role: 'Cliente de consultório • trecho do depoimento',
    sourceUrl: 'https://www.4ucoworking.com.br/',
  },
];

export const trustedCompanies = [
  { name: 'MAQ', tone: 'blue-logo' },
  { name: 'LRQA', tone: 'green-logo' },
  { name: 'Bread Maker', tone: 'orange-logo' },
  { name: 'iFriend', tone: 'blue-logo' },
  { name: 'Tecverde', tone: 'green-logo' },
  { name: 'XP', tone: 'black-logo' },
  { name: 'Royal IHC', tone: 'orange-logo' },
  { name: 'Abra', tone: 'green-logo' },
];

const workspacePricing = [
  { label: 'Hora', value: 'R$ 39,90' },
  { label: 'Período (4h)', value: 'R$ 99,90' },
  { label: 'Diária (8h)', value: 'R$ 179,90' },
  { label: 'Semanal (24h)', value: 'R$ 249,90' },
  { label: 'Mensal (24h)', value: 'R$ 489,90', note: 'com endereço fiscal incluso' },
];

const meetingPricing = [
  { label: 'Capacidade base', value: 'até 04 pessoas' },
  { label: 'Hora', value: 'R$ 99,90' },
  { label: 'Período (4h)', value: 'R$ 199,90' },
  { label: 'Extra por pessoa', value: 'R$ 49,90' },
];

type PricingItem = {
  label: string;
  value: string;
  note?: string;
};

export const servicePricing: Array<{
  title: string;
  text: string;
  items: PricingItem[];
  image: string;
  imageAlt: string;
}> = [
  {
    title: 'Estação de trabalho e estudo',
    text: 'Para uso pontual, semanal ou mensal com estrutura pronta.',
    items: workspacePricing,
    image: officeImages.sharedOffice,
    imageAlt: 'Ambiente ilustrativo de estações de trabalho',
  },
  {
    title: 'Salas de reunião e treinamento',
    text: 'Para reuniões, entrevistas, apresentações e workshops.',
    items: meetingPricing,
    image: officeImages.meetingRoom,
    imageAlt: 'Ambiente ilustrativo de sala para reuniões',
  },
  {
    title: 'Escritórios privativos',
    text: 'Salas reservadas para atendimento e rotina de pequenos times.',
    items: meetingPricing,
    image: officeImages.privateOffice,
    imageAlt: 'Ambiente ilustrativo de escritório privativo',
  },
  {
    title: 'Consultório para área da saúde',
    text: 'Para atendimentos com privacidade e agenda flexível.',
    image: officeImages.healthOffice,
    imageAlt: 'Ambiente ilustrativo de consultório de saúde',
    items: [
      { label: 'Hora', value: 'R$ 99,90' },
      { label: 'Período (4h)', value: 'R$ 249,90' },
      {
        label: 'Mensal com endereço fiscal',
        value: 'R$ 1.398,90',
        note: 'até 12 períodos mensais',
      },
    ],
  },
];

export const fiscalPlans = [
  {
    title: 'Mensal',
    price: 'R$ 149,70',
    detail: 'pagamento mensal',
    discount: 'Valor mensal',
    popular: false,
  },
  {
    title: 'Anual',
    price: 'R$ 1.616,76',
    detail: '12 meses • equivalente a R$ 134,73/mês',
    discount: '10% de desconto',
    popular: true,
  },
  {
    title: 'Bienal',
    price: 'R$ 2.874,24',
    detail: '24 meses • equivalente a R$ 119,76/mês',
    discount: '20% de desconto',
    popular: false,
  },
  {
    title: 'Trienal',
    price: 'R$ 3.772,44',
    detail: '36 meses • equivalente a R$ 104,79/mês',
    discount: '30% de desconto',
    popular: false,
  },
];

export const locationInfo = {
  unit: 'Unidade Pendotiba',
  name: 'Shopping Pendotiba / Niterói',
  address: 'Estrada Caetano Monteiro, 818 - Salas 204, 209 e 225 - Pendotiba, Niterói - RJ',
  services: [
    'Estações de trabalho',
    'Salas de reunião',
    'Escritórios privativos',
    'Consultório de saúde',
    'Endereço fiscal',
  ],
  mapEmbedUrl: `https://www.google.com/maps?q=${locationQuery}&output=embed`,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${locationQuery}`,
  wazeUrl: `https://waze.com/ul?q=${locationQuery}&navigate=yes`,
  videoUrl: 'https://assets.mixkit.co/videos/918/918-720.mp4',
  poster: officeImages.sharedOffice,
};

export const galleryImages = [
  {
    image: officeImages.lounge,
    alt: 'Área de convivência com poltronas e iluminação natural',
  },
  {
    image: officeImages.notebook,
    alt: 'Pessoa trabalhando em notebook em mesa clara',
  },
  {
    image: officeImages.meetingRoom,
    alt: 'Sala de reunião equipada para eventos e apresentações',
    wide: true,
  },
  {
    image: officeImages.fiscal,
    alt: 'Arquitetura de um edifício comercial',
    wide: true,
  },
  {
    image: officeImages.healthOffice,
    alt: 'Consultório para profissionais da saúde',
  },
  {
    image: officeImages.sharedOffice,
    alt: 'Estações de trabalho compartilhadas',
  },
];

export const serviceOptions = [
  'Estação de trabalho e estudo',
  'Salas de reunião e treinamento',
  'Escritórios privativos',
  'Consultório para área da saúde',
  'Endereço fiscal e comercial',
  'Escritórios sob demanda',
  'Agendar visita',
];
