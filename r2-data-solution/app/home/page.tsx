import styles from './home.module.scss';

export default function Home(){
    return (
        <div className={styles.homeContainer}>
            <h1>Página Inicial</h1>
            <p>Bem-vindo</p>
        </div>
    )
};
