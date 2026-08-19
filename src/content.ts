import type { IconName } from './icons';

export const navItems = [
  { label: 'Servicos', href: '#servicos' },
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

export const rooms = [
  {
    number: '01',
    title: 'Sala privativa compacta',
    text: 'Ideal para atendimento individual, consultorias, vendas, reunioes rapidas ou uma operacao de ate 3 pessoas.',
    items: ['Mobiliario profissional', 'Ambiente climatizado', 'Uso mensal ou recorrente'],
  },
  {
    number: '02',
    title: 'Sala privativa para equipe',
    text: 'Mais espaco para pequenos times, trabalho com foco e encontros comerciais com uma presenca mais robusta.',
    items: ['Configuracao flexivel', 'Atendimento a clientes', 'Possibilidade de plano dedicado'],
    dark: true,
  },
];

export const benefits = [
  'Internet estavel',
  'Recepcao profissional',
  'Ambiente climatizado',
  'Contratacao flexivel',
];

export const plans = [
  {
    title: 'Uso pontual',
    text: 'Para reunioes, atendimentos e dias especificos de trabalho presencial.',
    cta: 'Consultar disponibilidade',
  },
  {
    title: 'Mensal privativo',
    text: 'Sala reservada para quem quer previsibilidade, foco e presenca profissional todos os dias.',
    cta: 'Pedir proposta',
    highlight: true,
  },
  {
    title: 'Empresa flex',
    text: 'Para equipes que alternam entre trabalho remoto, reunioes presenciais e base comercial.',
    cta: 'Montar plano',
  },
];
