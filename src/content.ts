import type { IconName } from './icons';

export const navItems = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Salas', href: '#salas' },
  { label: 'Planos', href: '#planos' },
  { label: 'Contato', href: '#contato' },
];

export const metrics = [
  { value: '2', label: 'salas privativas' },
  { value: '100%', label: 'estrutura pronta' },
  { value: 'Flex', label: 'planos mensais' },
];

export const services: Array<{
  icon: IconName;
  title: string;
  text: string;
  featured?: boolean;
}> = [
  {
    icon: 'briefcase',
    title: 'Salas privativas',
    text: 'Espaços reservados para profissionais, duplas e pequenas equipes que precisam de foco e imagem profissional.',
  },
  {
    icon: 'meeting',
    title: 'Sala de reunião',
    text: 'Ambiente preparado para apresentações, alinhamentos, entrevistas e reuniões presenciais com clientes.',
  },
  {
    icon: 'desk',
    title: 'Estações de trabalho',
    text: 'Opções flexíveis para quem precisa de uma base profissional por algumas horas, dias ou no mês.',
  },
  {
    icon: 'pin',
    title: 'Endereço comercial',
    text: 'Mais credibilidade para sua empresa, com suporte para correspondências e presença comercial.',
  },
  {
    icon: 'coffee',
    title: 'Apoio no dia a dia',
    text: 'Recepção, copa, internet e áreas compartilhadas para manter sua operação simples e organizada.',
  },
  {
    icon: 'wifi',
    title: 'Infraestrutura inclusa',
    text: 'Internet, climatização, limpeza e ambiente pronto para você chegar, sentar e trabalhar.',
    featured: true,
  },
];

export const rooms = [
  {
    number: '01',
    title: 'Sala privativa compacta',
    text: 'Ideal para atendimento individual, consultorias, vendas, reuniões rápidas ou uma operação de até 3 pessoas.',
    items: ['Mobiliário profissional', 'Ambiente climatizado', 'Uso mensal ou recorrente'],
  },
  {
    number: '02',
    title: 'Sala privativa para equipe',
    text: 'Mais espaço para pequenos times, trabalho com foco e encontros comerciais com uma presença mais robusta.',
    items: ['Configuração flexível', 'Atendimento a clientes', 'Possibilidade de plano dedicado'],
    dark: true,
  },
];

export const benefits = [
  'Internet estável',
  'Recepção profissional',
  'Ambiente climatizado',
  'Contratação flexível',
];

export const plans = [
  {
    title: 'Uso pontual',
    text: 'Para reuniões, atendimentos e dias específicos de trabalho presencial.',
    cta: 'Consultar disponibilidade',
  },
  {
    title: 'Mensal privativo',
    text: 'Sala reservada para quem quer previsibilidade, foco e presença profissional todos os dias.',
    cta: 'Pedir proposta',
    highlight: true,
  },
  {
    title: 'Empresa flex',
    text: 'Para equipes que alternam entre trabalho remoto, reuniões presenciais e base comercial.',
    cta: 'Montar plano',
  },
];

export const trustedCompanies = [
  { name: 'Macedo', subline: 'consultoria', tone: 'ink-logo' },
  { name: 'Atlas', subline: 'arquitetura', tone: 'black-logo' },
  { name: 'Nexo', subline: 'digital', tone: 'green-logo' },
  { name: 'Vitta', subline: 'saúde', tone: 'blue-logo' },
  { name: 'Prime', subline: 'invest', tone: 'orange-logo' },
  { name: 'Studio 21', subline: 'design', tone: 'black-logo' },
  { name: 'Lima & Co.', subline: 'jurídico', tone: 'ink-logo' },
  { name: 'Flow', subline: 'tech', tone: 'green-logo' },
  { name: 'Rio Norte', subline: 'negócios', tone: 'blue-logo' },
  { name: 'Conta+', subline: 'financeiro', tone: 'orange-logo' },
];
