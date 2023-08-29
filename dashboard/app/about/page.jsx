import { Lato } from 'next/font/google'
const titulo = Lato({ subsets: ['latin'], weight: ["700"]})
const texto = Lato({ subsets: ['latin'], weight: ["300"]})

function About(){
  return(
  <div className="bg-[#211a1f] h-full w-full">
      <header className='w-full h-[500px] bg-cover bg-no-repeat bg-center bg-fixed' style={{backgroundImage: 'url(https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg)'}}>
        <div className='w-full h-full bg-[rgba(0,0,0,0.7)] flex justify-center items-center'>
          <h1 className={`${titulo.className} text-transparent bg-clip-text bg-gradient-to-t from-[#ef0e9d] to-[#f15417] text-8xl`}>Acerca de</h1>
        </div>
      </header>
      <section className= 'p-20 flex items-center text-center justify-center flex-wrap'>
            <h2 className={`${texto.className} text-[#807980] text-5xl mb-8`}>Nuestra Mision</h2>
            <p className={`${texto.className} text-white text-3xl`}>Nuestra misión es transformar ideas en realidades digitales a través de soluciones de software innovadoras. 
            Estamos comprometidos con la excelencia en el desarrollo de aplicaciones y sistemas que impulsen el progreso 
            tecnológico y mejoren la vida de las personas y las empresas en todo el mundo.</p>
      </section>
      <hr className='w-[45%] m-auto border-[#635d63]'/>
      <section className= 'p-10 text-center'>
      <h2 className={`${texto.className} text-[#807980] text-5xl mb-8`}>Lo que ofrecemos</h2>
        <div className='lg:flex flex-row gap-8 flex-wrap'>
          <div className='flex-1 text-center bg-[#ef0e9d]'>
            <h3 className={`${titulo.className} text-white text-2xl m-4`}>Desarrollo de Aplicaciones Móviles</h3>
            <img className='object-cover w-full h-[300px]' src="https://images.pexels.com/photos/7350911/pexels-photo-7350911.jpeg" alt="app-movil" />
            <p className={`${texto.className} text-white text-xl m-4`}>Transformamos tus ideas en aplicaciones móviles atractivas y funcionales. 
            Creamos soluciones que brindan experiencias de usuario excepcionales y cumplen con tus objetivos.</p>
          </div>
          <div className='flex-1 text-center bg-[#ef0e9d]'>
            <h3 className={`${titulo.className} text-white text-2xl m-4`}>Desarrollo Web Personalizado para ti</h3>
            <img className='object-cover w-full h-[300px]' src="https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg" alt="app-movil" />
            <p className={`${texto.className} text-white text-xl m-4`}>Desde sitios web informativos hasta plataformas de comercio electrónico, creamos sitios web 
            personalizados que se adaptan a las necesidades únicas de tu negocio. Nuestro enfoque en el diseño intuitivo y el rendimiento garantiza que tus visitantes
            tengan una experiencia web excepcional.</p>
          </div>
          <div className='flex-1 text-center bg-[#ef0e9d]'>
            <h3 className={`${titulo.className} text-white text-2xl m-4`}>Desarrollo de Software Empresarial</h3>
            <img className='object-cover w-full h-[300px]' src="https://images.pexels.com/photos/3862373/pexels-photo-3862373.jpeg" alt="app-movil" />
            <p className={`${texto.className} text-white text-xl m-4`}>Optimiza tus operaciones comerciales con software personalizado. Creamos soluciones de 
            software empresarial que automatizan procesos, mejoran la eficiencia y permiten un mejor control de los datos.</p>
          </div>
        </div>
      </section>
      <hr className='w-[45%] m-auto border-[#635d63]'/>
      <section className= 'p-20 bg-[#211a1f] flex items-center text-center justify-center flex-wrap'>
            <h2 className={`${texto.className} text-[#807980] text-5xl mb-8`}>Colabora con nosotros</h2>
            <p className={`${texto.className} text-white text-3xl`}>Si compartes nuestra pasión y te gustaría contribuir, 
            ¡nos encantaría saber de ti! Visita nuestra página para obtener más información sobre cómo puedes involucrarte.</p>
      </section>
      <footer className='bg-[#130810] p-8 flex flex-row gap-20 w-full'>
        <div className='flex-1'>
          <h2 className={`${texto.className} text-[#635d63] text-4xl mb-5`}>Contacto</h2>
          <address className={`${texto.className} text-white text-2xl`}>          
            Dirección: 123 Calle Ficticia, Ciudad Imaginaria, País Inexistente <br />
            Teléfono: +123 456 7890 <br />
            Correo Electrónico: info@sitioficticio.com 
          </address>
        </div>
        <div className='flex-1'>
          <h2 className={`${texto.className} text-[#635d63] text-4xl mb-5`}>Horario de atencion</h2>
          <address className={`${texto.className} text-white text-2xl`}>
            Lunes - Viernes: 9:00 AM - 6:00 PM <br />
            Sábados: 10:00 AM - 2:00 PM <br />
            Domingos: Cerrado <br />
          </address>
        </div>
      </footer>
  </div>);
}
export default About;