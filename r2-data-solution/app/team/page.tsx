import styles from './team.module.scss'
import Image from 'next/image';
import ImageTeam1 from '../../public/Image-Team-1.svg';

const team = [
    { image: ImageTeam1, name: 'Regina Pompeo', text: 'Regina Pompeo' },
    { image: ImageTeam1, name: 'Reginaldo Alves', text: 'Reginaldo Alves' }
];

export default function Team(){
    return (
        <div className={styles.teamContainer}>
            <div className={styles.title}>
                aaaaa
            </div>
            <div className={styles.blockSpace}>
                {team.map((team, index) => (
                    <div key={index} className={styles.blockContainer}>
                        <div className={styles.imageSpace}>
                        <Image 
                            className={styles.teamImage}
                            src={team.image} 
                            alt={team.text} 
                            fill // Faz a imagem preencher todo o container
                            objectFit="cover"
                        />
                        </div>
                        <div className={styles.nameTeam}>
                            <h1>{team.name}</h1>
                        </div>
                        <div className={styles.textTeam}>
                            <h1>{team.text}</h1>
                        </div>    
                    </div>
                ))}
            </div>
        </div>
    )
};