import styles from './services.module.scss';


const services = [
    { icon: '🔧', text: 'Automatização de Processos' },
    { icon: '💡', text: 'Automatização de Relatórios' },
    { icon: 'b', text: 'Desenvolvimento de Sites'},
    { icon: 'bby', text: 'Gestão e Tratamento de Dados'},
    { icon: 'hjk', text: 'Desenvolvimento de Dashboards'},
    { icon: 'knsdb', text: 'Automatização de Documentos'}
];

export default function Service(){
    return(
        <div className={styles.serviceContainer}>
            <div className={styles.title}>
                Nossos Serviços
            </div>
            <div className={styles.blockSpace}>
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className={styles.blockContainer}>
                        <div className={styles.iconSpace}>
                            <h1>{services[index % 6].icon}</h1>
                        </div>
                        <div className={styles.titleService}>
                            <h1>{services[index % 6].text}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};