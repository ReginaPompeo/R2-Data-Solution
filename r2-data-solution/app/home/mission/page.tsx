import styles from './mission.module.scss';


export default function Home(){
    return (
        <div className={styles.missionContainer}>
            <div className={styles.missionText}>
                Nossa missão é transformar negócios por meio da automação de processos e soluções digitais, proporcionando mais eficiência, produtividade e inovação para empresas, escritórios e profissionais.
            </div>
        </div>
    )
};
