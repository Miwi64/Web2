import { Lato } from 'next/font/google'

const titulo = Lato({ subsets: ['latin'], weight: ["700"]})

function Home(){
  return(
    <div className="bg-[#211a1f] h-screen w-full p-20">
    <h1 className={`${titulo.className} text-transparent bg-clip-text bg-gradient-to-t from-[#ef0e9d] to-[#f15417] text-8xl`}>
        Inicio</h1>
    </div>);
}
export default Home;