import styles from './footer.module.scss';
import MarketingButton from '@/components/marketing_button';
import ContactForm from '@/components/contact_form';

export default function Footer(){
    return(
        <div className={styles.footerWrapper}>
            <div className={styles.footerContainer}>
                <div className={styles.leftSide}>
                    <div className={styles.top}>
                        <h1 className={styles.title}>Deixe-nos te ajudar</h1>
                        <h2 className={styles.subtitle}>Fale conosco e descubra como transformar seu negócio.</h2>
                        <div className={styles.buttonContainer}>
                            <MarketingButton phone="5511992391941" message="Olá! Quero saber mais sobre os serviços." />
                        </div>
                    </div>
                    <div className={styles.low}>
                        <h1 className={styles.titleContact}>TELEFONE</h1>
                        <h2 className={styles.subtitleContact}>(11) 94529-2874</h2>
                        <h1 className={styles.titleContact}>EMAIL</h1>
                        <h2 className={styles.subtitleContact}>regisdatasolution@gmail.com</h2>                
                        <h1 className={styles.titleContact}>REDES SOCIAIS</h1>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.titleForms}>Contato</div>
                    <ContactForm />
                </div>
            </div>
            <div className={styles.footerCopyright}>
                © {new Date().getFullYear()} R² Data Solution - Regina Pompeo. Todos os direitos reservados.
            </div>
        </div>
    );
}
