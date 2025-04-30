import SwiperClient from '../components/swiper_component/swiper_client';

export default function ServicosPage() {
  const services = [
    {
      id: 1,
      title: "Consultoria Especializada",
      description: "Soluções personalizadas para o seu negócio com nossos especialistas",
      image: "Service-Image-1.svg"
    },
    {
      id: 2,
      title: "Desenvolvimento Web",
      description: "Criação de sites e aplicações web de alta performance"
    },
    {
      id: 3,
      title: "Design UX/UI",
      description: "Interfaces intuitivas e experiências de usuário excepcionais",
      image: "Service-Image-2.svg"
    }
  ];

  return (
    <main className="services-page" >
      <h1 className="page-title">Nossos Serviços</h1>
      <div style={{ 
  width: '100vw', 
  height: '100vh',
  position: 'relative'
}}>
  <SwiperClient slides={services} />
</div>
    </main>
  );
}