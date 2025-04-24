// app/sobre/page.tsx
import styles from './about.module.scss';  // Certifique-se de que o arquivo SCSS exista e tenha o estilo correto
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

export default function About() {
    return (
        <>
            <Navbar />
            <div className={styles.aboutContainer}>
                <div className={styles.title}>
                    <h1>Sobre a Empresa</h1>
                </div>
                <div className={styles.text}>
                    <p>
                        Somos uma empresa focada em tecnologia, automação de processos e desenvolvimento de sites personalizados, criada para ajudar empresas, escritórios e profissionais a tornarem suas rotinas mais eficientes, rápidas e inteligentes.
                        <br /><br />
                        Nosso objetivo é simplificar o seu dia a dia através de soluções digitais sob medida, que eliminam tarefas manuais, aumentam a produtividade e permitem que você concentre seus esforços no que realmente importa: o crescimento do seu negócio.
                        <br /><br />
                        Combinamos conhecimento técnico, criatividade e um olhar estratégico para entregar resultados reais.
                        <br /><br />
                        Estamos aqui para transformar processos em oportunidades e fazer da tecnologia uma aliada no seu sucesso.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}