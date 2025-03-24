import styles from './about.module.scss'
export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.leftContainer}>
                <h1> sobre</h1>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.title}>
                    <h1>Cansado de tarefas repetitivas e manuais?</h1>
                </div>
                <div className={styles.subtitle}>
                    <h2>Conte conosco para simplificar isso!</h2>
                </div>
                <div className={styles.text}>
                    <p>Somos uma empresa especializada em automação de processos e desenvolvimento de sites, oferecendo soluções estratégicas para empresas, escritórios e profissionais que buscam otimizar seu tempo e maximizar a produtividade. Reduzimos o trabalho manual por meio de tecnologia inteligente, permitindo que você direcione seu foco para o que realmente importa: o crescimento e a inovação do seu negócio.</p>
                </div>
            </div>
        </div>

    );
}
