import styles from './feedback.module.scss';

const opinion = [
    { name: 'Joias Charme', text: 'Automatização de Processos' },
    { name: 'Joias Charme', text: 'Automatização de Processos' },
    { name: 'Joias Charme', text: 'Automatização de Processos' }
];

export default function Home(){
    return (
        <div className={styles.feedbackContainer}>
            <div className={styles.title}>
                Feedback de Clientes
            </div>
            {opinion.map((opinion, index) => (
                <div key={index} className={styles.clientContainer}>
                    <div className={styles.nameClient}>{item.name}</div>
                    <div className={styles.textClient}>{item.text}</div>
                </div>
            ))}
         </div>
    );
}