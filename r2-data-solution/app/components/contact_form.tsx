'use client';

import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact_form.module.scss';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'seu_service_id',       // 👉 troque pelo seu ID do EmailJS
        'seu_template_id',      // 👉 troque pelo seu template ID
        form.current,
        'sua_public_key'        // 👉 troque pela sua public key
      )
      .then(
        () => {
          alert('Mensagem enviada com sucesso! 💌');
          form.current?.reset();
        },
        () => {
          alert('Erro ao enviar. Tente novamente 😢');
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <input
        type="text"
        name="user_name"
        placeholder="Nome"
        required
        className={styles.input}
      />
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        required
        className={styles.input}
      />
      <textarea
        name="message"
        placeholder="Digite uma mensagem"
        required
        className={styles.textarea}
      />
      <button type="submit" className={styles.button}>
        Enviar
      </button>
    </form>
  );
}
