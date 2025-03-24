import styles from './team.module.scss'

const team = [
    { image: '🔧', text: 'Regina Pompeo' },
    { image: '💡', text: 'Reginaldo Alves' }
];

export default function Team(){
    return (
        <div className={styles.teamContainer}>
            <div className={styles.title}>
                aaaaa
            </div>
            <div className={styles.blockSpace}>
                <div className={styles.blockContainer}>
                    {Array.from({ length: 2 }).map((_, index) => (
                        <div key={index} className={styles.blockContainer}>
                            <div className={styles.imageSpace}>
                            <h1>{team[index % 2].image}</h1>
                            </div>
                        <div className={styles.textTeam}>
                            <h1>{team[index % 2].text}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};