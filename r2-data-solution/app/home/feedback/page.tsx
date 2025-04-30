import styles from './feedback.module.scss';

const opinion = [
  { name: 'Joias Charme', text: 'Automatização de Processos' },
  { name: 'Joias Charme', text: 'Automatização de Processos' },
  { name: 'Joias Charme', text: 'Automatização de Processos' }
];

export default function Home() {
  return (
    <div className={styles.feedbackContainer}>
      <div className={styles.title}>
        Feedback de Clientes
      </div>

      <div className={styles.clientContainer}>
        {opinion.map((opinion, index) => (
          <div key={index} className={styles.clientCard}>
            <div className={styles.nameTextContainer}>
              <div className={styles.nameClient}>{opinion.name}</div>
              <div className={styles.textClient}>{opinion.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
