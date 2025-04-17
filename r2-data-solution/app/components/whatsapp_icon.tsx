import { FaWhatsapp } from 'react-icons/fa';  // Importando o ícone do WhatsApp
import styles from './whatsapp_icon.module.scss'; // Estilo para o componente (vai criar o arquivo CSS)

export default function WhatsAppIcon() {
  return (
    <a 
      href="https://api.whatsapp.com/send/?phone=5511992391941&text=Ol%C3%A1%21+Quero+saber+mais+sobre+os+servi%C3%A7os.&type=phone_number&app_absent=0" // Substitua pelo número desejado
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.whatsAppIcon}
    >
      <FaWhatsapp size={40} color="#ffffff" /> {/* Tamanho do ícone e cor do WhatsApp */}
    </a>
  );
}
