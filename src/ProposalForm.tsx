import { FormEvent, useState } from 'react';
import { buildWhatsAppUrl, serviceOptions } from './content';
import { ArrowIcon } from './icons';

function formatWhatsApp(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11);

  if (digits.length <= 2) {
    return digits ? `(${digits}` : '';
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function ProposalForm() {
  const [status, setStatus] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [messageUrl, setMessageUrl] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get('nome') ?? '').trim();
    const servico = String(data.get('servico') ?? '');
    const mensagem =
      String(data.get('mensagem') ?? '').trim() ||
      'Gostaria de receber uma proposta.';

    if (!nome) {
      setStatus('Informe seu nome.');
      form.querySelector<HTMLInputElement>('[name="nome"]')?.focus();
      return;
    }

    if (whatsapp.replace(/\D/g, '').length < 10) {
      setStatus('Informe um WhatsApp válido com DDD.');
      return;
    }

    const text = [
      'Olá, vim pela seção de contato do site da 4U Coworking.',
      `Meu nome é ${nome}.`,
      `Meu WhatsApp é ${whatsapp}.`,
      `Tenho interesse em: ${servico}.`,
      `Mensagem: ${mensagem}`,
    ].join('\n');

    const url = buildWhatsAppUrl(text);
    setMessageUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');

    setStatus('Sua mensagem está pronta. Confirme o envio no WhatsApp.');
  }

  return (
    <form className="contact-form" id="proposal-form" onSubmit={handleSubmit} onChange={() => { setStatus(''); setMessageUrl(''); }}>
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
          inputMode="numeric"
          placeholder="(00) 00000-0000"
          value={whatsapp}
          onChange={(event) => {
            setWhatsapp(formatWhatsApp(event.target.value));
            setStatus('');
          }}
          required
        />
      </label>

      <label>
        Serviço de interesse
        <select name="servico" required defaultValue="">
          <option value="">Selecione</option>
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
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
      {messageUrl && <a className="form-fallback" href={messageUrl} target="_blank" rel="noreferrer">Se o WhatsApp não abriu, clique aqui.</a>}
    </form>
  );
}
