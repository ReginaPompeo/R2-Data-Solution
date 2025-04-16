import styles from './team.module.scss'
import Image from 'next/image';
import ImageTeam1 from '../../public/Image-Team-1.svg';

const team = [
    { image: ImageTeam1, name: 'Regina Pompeo', text: 'Formada em Análise e Desenvolvimento de Sistemas' },
    { image: ImageTeam1, name: 'Regina Pompeo', text: 'Formada em Análise e Desenvolvimento de Sistemas' }
];

export default function Team(){
    return (
        <div className={styles.teamContainer}>
            <div className={styles.title}>
                Nossa Equipe
            </div>
            <div className={styles.blockSpace}>
                {team.map((team, index) => (
                    <div key={index} className={styles.blockContainer}>
                        <div className={styles.imageSpace}>
                        <Image
                            src={team.image}
                            alt={team.text}
                            layout="responsive"
                            width={200} // ou o tamanho natural da sua imagem
                            height={200} // pode ser proporcional ao SVG
                            className={styles.teamImage}
                        />
                        </div>
                        <div className={styles.textContainer}>
                            <div className={styles.nameTeam}>
                                <h1>{team.name}</h1>
                            </div>
                            <div className={styles.textTeam}>
                                <h1>{team.text}</h1>
                            </div>  
                        </div>
                    </div>    
                ))}
            </div>
        </div>
    )
};