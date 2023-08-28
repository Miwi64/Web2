"use client";
import { Lato } from 'next/font/google'
import React, { useState } from "react"

const titulo = Lato({ subsets: ['latin'], weight: ["700"]})
const texto = Lato({ subsets: ['latin'], weight: ["300"]})

function Composicion(){
  const [genero,setGenero] = useState('');
  const [peso, setPeso] = useState('');
  const [talla, setTalla] = useState('');
  const [edad, setEdad] = useState('');
  const [bicipital, setBicipital] = useState('');
  const [tricipital, setTricipital] = useState('');
  const [subescapular, setSubescapular] = useState('');
  const [cresta, setCresta] = useState('');
  const [composicion, setComposicion] = useState({});
  const [error, setError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if([genero.trim(),peso.trim(),talla.trim(),edad.trim(),bicipital.trim(),tricipital.trim(),subescapular.trim(),cresta.trim()].includes('')){
      setError(true);
      return;
    }
    if(isNaN(bicipital) || isNaN(tricipital) || isNaN(subescapular) || isNaN(cresta)){
      return;
    }
    setError(false);
    setComposicion({});
    const pliegues = parseFloat(bicipital) + parseFloat(tricipital) + parseFloat(subescapular) + parseFloat(cresta);
    if(genero === 'M'){
      const dc = 1.1765 - 0.0744 * Math.log10(pliegues);
      const comp = {grasa: Math.round((495/dc - 450)*100)/100}
      setComposicion(comp)
    }
    if(genero === 'F'){
      const dc = 1.1567 - 0.0717 * Math.log10(pliegues);
      const comp = {grasa: Math.round((495/dc - 450)*100)/100}
      setComposicion(comp)
    }
    limpiar();
  }

  const limpiar = () =>{
    setGenero('');
    setPeso('');
    setEdad('');
    setTalla('');
    setBicipital('');
    setTricipital('');
    setSubescapular('');
    setCresta('');
  }

  return(
  <div className="bg-[#211a1f] w-full p-20">
    <h1 className={`${titulo.className} text-transparent bg-clip-text bg-gradient-to-t from-[#ef0e9d] to-[#f15417] text-8xl`}>
        Composicion corporal</h1>
    <form onSubmit={handleSubmit}>
    {error && (<div className='p-5 bg-red-900 border-2 border-[#857f84] rounded-xl text-center mt-4'><p className={`${titulo.className} text-2xl text-white`}>Llenar todos los campos</p></div>)}
      <div className='flex flex-col lg:flex-row flex-wrap gap-8 p-10 justify-start'>
        <div className='basis-[30%]'>
          <label className={`${texto.className} text-[#635d63] text-3xl block mb-2`}>Genero</label>
          <select className={`${texto.className} bg-[#50414c] border-2 text-white border-[#857f84] w-full px-4 py-2 ml-1 rounded-lg`}
           value={genero} onChange={e => setGenero(e.target.value)}>
            <option value=""></option>
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
        </div>
        <div className='basis-[30%]'>
          <label className={`${texto.className} text-[#635d63] text-3xl block mb-2`}>Peso</label>
          <input className={`${texto.className} bg-[#50414c] border-2 text-white border-[#857f84] w-full px-4 py-2 ml-1 rounded-lg`}
           type="text" name="peso" value={peso} onChange={(e) => setPeso(e.target.value)}/>
          {isNaN(peso) && (<p className={`${titulo.className} text-yellow-300 text-xl`}>El valor introducido no es numerico</p>)}
        </div>
        <div className='basis-[30%]'>
          <label className={`${texto.className} text-[#635d63] text-3xl block mb-2`}>Talla</label>
          <input className={`${texto.className} bg-[#50414c] border-2 text-white border-[#857f84] w-full px-4 py-2 ml-1 rounded-lg`}
           type="text" name="talla" value={talla} onChange={(e) => setTalla(e.target.value)}/>
        </div>
        <div className='basis-[30%]'>
          <label className={`${texto.className} text-[#635d63] text-3xl block mb-2`}>Edad</label>
          <input className={`${texto.className} bg-[#50414c] border-2 text-white border-[#857f84] w-full px-4 py-2 ml-1 rounded-lg`}
           type="text" name="edad" value={edad} onChange={(e) => setEdad(e.target.value)}/>
          {isNaN(edad) && (<p className={`${titulo.className} text-yellow-300 text-xl`}>El valor introducido no es numerico</p>)}
        </div>
        <div className='basis-[30%]'>
          <label className={`${texto.className} text-[#635d63] text-3xl block mb-2`}>Bicipital</label>
          <input className={`${texto.className} bg-[#50414c] border-2 text-white border-[#857f84] w-full px-4 py-2 ml-1 rounded-lg`}
           type="text" name="bicipital" value={bicipital} onChange={(e) => setBicipital(e.target.value)}/>
          {isNaN(bicipital) && (<p className={`${titulo.className} text-yellow-300 text-xl`}>El valor introducido no es numerico</p>)}
        </div>
        <div className='basis-[30%]'>
          <label className={`${texto.className} text-[#635d63] text-3xl block mb-2`}>Tricipital</label>
          <input className={`${texto.className} bg-[#50414c] border-2 text-white border-[#857f84] w-full px-4 py-2 ml-1 rounded-lg`}
           type="text" name="tricipital" value={tricipital} onChange={(e) => setTricipital(e.target.value)}/>
          {isNaN(tricipital) && (<p className={`${titulo.className} text-yellow-300 text-xl`}>El valor introducido no es numerico</p>)}
        </div>
        <div className='basis-[30%]'>
          <label className={`${texto.className} text-[#635d63] text-3xl block mb-2`}>Subescapular</label>
          <input className={`${texto.className} bg-[#50414c] border-2 text-white border-[#857f84] w-full px-4 py-2 ml-1 rounded-lg`}
           type="text" name="subescapular" value={subescapular} onChange={(e) => setSubescapular(e.target.value)}/>
          {isNaN(subescapular) && (<p className={`${titulo.className} text-yellow-300 text-xl`}>El valor introducido no es numerico</p>)}
        </div>
        <div className='basis-[30%]'>
          <label className={`${texto.className} text-[#635d63] text-3xl block mb-2`}>Cresta Iliaca</label>
          <input className={`${texto.className} bg-[#50414c] border-2 text-white border-[#857f84] w-full px-4 py-2 ml-1 rounded-lg`}
           type="text" name="cresta" value={cresta} onChange={(e) => setCresta(e.target.value)}/>
          {isNaN(cresta) && (<p className={`${titulo.className} text-yellow-300 text-xl`}>El valor introducido no es numerico</p>)}
        </div>
      </div>
      <div className='text-center'>
          <button className={`${texto.className} bg-#50414c border-2 border-[#857f84] rounded-xl text-white text-2xl 
          px-4 py-2 hover:bg-gradient-to-r from-[#ef0e9d] to-[#f15417]`}
           type="submit">Aceptar</button>
        </div>
    </form>
    {!error && composicion.grasa && (
      <div className='p-5 bg-[#f15417] border-2 border-[#857f84] rounded-xl text-center my-5'>
        <p className={`${titulo.className} text-2xl text-white`}>Grasa Corporal</p>
        <p className={`${titulo.className} text-4xl text-white`}>{composicion.grasa}%</p>
      </div>
    )}
  </div>);
}
export default Composicion;