import { FormEvent, useState } from 'react';
import { ArrowIcon } from './icons';

const WHATSAPP_NUMBER = '5521999999999';

export default function ProposalForm() {
  const [status, setStatus] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get('nome') ?? '').trim();
    const whatsapp = String(data.get('whatsapp') ?? '').trim();
    const servico = String(data.get('servico') ?? '');
    const mensagem =
      String(data.get('mensagem') ?? '').trim() ||
      'Gostaria de receber uma proposta.';

    const text = [
      'Olá, vim pelo site da 4U Coworking.',
      `Meu nome é ${nome}.`,
      `Meu WhatsApp é ${whatsapp}.`,
      `Tenho interesse em: ${servico}.`,
      `Mensagem: ${mensagem}`,
    ].join('\n');

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    );

    setStatus('Abrimos o WhatsApp com sua mensagem pronta.');
    form.reset();
  }

  return (
    <form className="contact-form" id="proposal-form" onSubmit={handleSubmit}>
      <label>
        Nome
        <input name="nome" type="text" autoComplete="name" placeholder="Seu nome" required />
      </label>

      <label>
        WhatsApp
        <input
          name="whatsapp"
          type="tel"
          autoComplete="tel"
          placeholder="(00) 00000-0000"
          required
        />
      </label>

      <label>
        Serviço de interesse
        <select name="servico" required defaultValue="">
          <option value="">Selecione</option>
          <option>Salas privativas</option>
          <option>Sala de reunião</option>
          <option>Estação de trabalho</option>
          <option>Endereço comercial</option>
          <option>Plano personalizado</option>
        </select>
      </label>

      <label>
        Mensagem
        <textarea
          name="mensagem"
          rows={4}
          placeholder="Ex.: preciso de uma sala mensal para 2 pessoas."
        />
      </label>

      <button className="button button-primary form-button" type="submit">
        <span>Enviar pelo WhatsApp</span>
        <ArrowIcon />
      </button>
      <p className="form-status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
