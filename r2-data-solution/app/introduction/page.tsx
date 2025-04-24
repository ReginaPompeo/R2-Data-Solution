import styles from './introduction.module.scss';
import Image from "next/image";
import ImageBanner2 from '../../public/photo-banner-2.svg';

export default function Introduction() {
    return (
        <div className={styles.introductionContainer}>
            <div className={styles.leftContainer}>
                <Image src={ImageBanner2} alt="Banner" className={styles.banner} />
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.title}>
                    <h1>Cansado de tarefas repetitivas e manuais?</h1>
                </div>
                <div className={styles.subtitle}>
                    <h2>Conte conosco para simplificar isso!</h2>
                </div>
                <div className={styles.text}>
                    <p>Somos uma empresa especializada em automação de processos e desenvolvimento de sites, oferecendo soluções estratégicas para empresas, escritórios e profissionais que buscam otimizar seu tempo e maximizar a produtividade. <br/> <br/> Reduzimos o trabalho manual por meio de tecnologia inteligente, permitindo que você direcione seu foco para o que realmente importa: o crescimento e a inovação do seu negócio.</p>
                </div>
            </div>
        </div>

    );
}
