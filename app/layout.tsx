import './globals.css';

export const metadata = {
  title: '4U Coworking | Salas privativas e coworking flexivel',
  description:
    'Landing page da 4U Coworking para divulgar salas privativas, reuniao, estacoes e contato por WhatsApp.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
