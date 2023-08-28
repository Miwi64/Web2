import Link from "next/link";
import { Lato } from 'next/font/google'

const titulo = Lato({ subsets: ['latin'], weight: ["700"]})
const texto = Lato({ subsets: ['latin'], weight: ["300"]})

const menuRoutes = [
    {
        ruta: '/',
        nombre: 'Inicio'
    },
    {
        ruta: '/composicion',
        nombre: 'Composicion Corporal'
    },
    {
        ruta: '/about',
        nombre: 'Acerca de'
    }
]

function Menu() {
    return(
        <div className="w-[20%] bg-black h-screen p-10">
            <h1 className={`${texto.className} text-[#807980] mt-5 mb-5 text-4xl`}>Menu</h1>
            <ol>
                {
                    menuRoutes.map((menu,index) => (
                        <li key={index} className="text-white hover:text-[#ef0e9d] mb-10 hover:scale-125 hover:translate-x-6 transition ease-in duration-75">
                            <Link href={menu.ruta} className={`${titulo.className} text-2xl`}>{menu.nombre}</Link></li>
                    ))
                }
            </ol>
        </div>
    );
}
export default Menu;