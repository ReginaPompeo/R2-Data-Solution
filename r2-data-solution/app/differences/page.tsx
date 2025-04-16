import styles from './differences.module.scss';
import Image from 'next/image';
import icon1 from '../../public/Service-Icon-1.svg';
import icon2 from '../../public/Service-Icon-1.svg';
import icon3 from '../../public/Service-Icon-1.svg';

const differences = [
    { icon: icon1, title: 'Soluções Sob Medida', text: 'Cada negócio é único. Por isso, oferecemos soluções de automação e sites sob medida para você.' },
    { icon: icon2, title: 'Eficiência Comprovada', text: 'Nossa automação elimina tarefas manuais, permitindo que você foque no crescimento do seu negócio.' },
    { icon: icon3, title: 'Suporte Contínuo', text: 'Oferecemos soluções e suporte contínuo para garantir operações eficientes e sem interrupções.' },
];

export default function Differences() {
    return(
        <div className={styles.differencesContainer}>
            <div className={styles.title}>
                Nosso Diferencial
            </div>
            <div className={styles.blockContainer}>
                {differences.map ((differences, index) => (
                    <div key={index} className={styles.block}>
                        <div className={styles.iconSpace}>
                            <div className={styles.rotatingBorder}></div>
                            <div className={styles.innerCircle}>
                            <div className={styles.iconWrapper}>
                            <Image
                                src={differences.icon}
                                alt={`Ícone de ${differences.title}`}
                                width={300} 
                                height={300}
                            />
                            </div>
                            </div>
                        </div>
                        <div className={styles.textBlock}>
                            <div className={styles.titleBlock}>
                                <h1>{differences.title}</h1>
                            </div>
                            <div className={styles.textBlock}>
                                <h1>{differences.text}</h1>
                            </div>
                        </div>    
                    </div>
                ))}
            </div>
        </div>

    );
}