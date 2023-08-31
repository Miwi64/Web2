"use client";
import { Lato } from 'next/font/google'
import React, { useState } from "react"

const titulo = Lato({ subsets: ['latin'], weight: ["700"]})
const texto = Lato({ subsets: ['latin'], weight: ["300"]})

function Composicion(){
  const [genero,setGenero] = useState('');
  const [peso, setPeso] = useState('');
  const [estatura, setEstatura] = useState('');
  const [edad, setEdad] = useState('');
  const [bicipital, setBicipital] = useState('');
  const [tricipital, setTricipital] = useState('');
  const [subescapular, setSubescapular] = useState('');
  const [cresta, setCresta] = useState('');
  const [biestiloideo, setBiestiloideo] = useState('');
  const [femur, setFemur] = useState('');
  const [composicion, setComposicion] = useState({});
  const [error, setError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if([genero.trim(),peso.trim(),estatura.trim(),edad.trim(),bicipital.trim(),tricipital.trim(),subescapular.trim(),
      cresta.trim(),biestiloideo.trim(),femur.trim()].includes('')){
      setError(true);
      return;
    }
    if(isNaN(estatura) || isNaN(bicipital) || isNaN(tricipital) || isNaN(subescapular) || isNaN(cresta) || isNaN(femur) 
      || isNaN(biestiloideo)){
      return;
    }
    setError(false);
    setComposicion({});

    const pliegues = parseFloat(bicipital) + parseFloat(tricipital) + parseFloat(subescapular) + parseFloat(cresta);
    const logpligues = Math.log10(pliegues);
    const dc = genero === 'M'? 1.1765 - 0.0744 * logpligues: 1.1567 - 0.0717 * logpligues;
    const grasa = 495/dc - 450

    const oseocm = [parseFloat(estatura), parseFloat(estatura), parseFloat(femur), parseFloat(biestiloideo), 40000];
    const oseom = oseocm.map((cm) => cm * 0.01);
    const prod = oseom.reduce((ac, num)=> ac * num, 1);
    const osea = Math.pow(prod, 0.712) * 3.02;

    const resconst = genero === 'M'? 0.24: 0.21;
    const residual = peso * resconst;

    const posea = osea*100/peso;
    const presidual = residual*100/peso;
    const grasakilo = grasa*.01*peso;
    const pmuscular = 100 - posea - presidual - grasa;
    const muscular = peso * .01 * pmuscular;

    const comp = {dc, grasa, osea, residual, posea, presidual, grasakilo, pmuscular, muscular}
    setComposicion(comp)
    //limpiar();
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

  const redondear = (num) => Math.round(num*100)/100

  return(
  <div className="bg-back w-full p-20">
    <h1 className={`${titulo.className} text-transparent bg-clip-text bg-gradient-to-t from-primary to-secondary text-8xl`}>
        Composicion corporal</h1>
    <form onSubmit={handleSubmit}>
    {error && (<div className='p-5 bg-boxback border-2 border-line rounded-xl text-center mt-4'><p className={`${titulo.className} text-2xl text-white`}>Llenar todos los campos</p></div>)}
      <div className='flex flex-col lg:flex-row flex-wrap gap-8 p-10 justify-start'>
        <div className='basis-[30%]'>
          <label className={`${texto.className} text-subtitle text-3xl block mb-2`}>Genero</label>
          <select className={`${texto.className} bg-boxback border-2 text-white border-line w-full px-4 py-2 ml-1 rounded-lg`}
           value={genero} onChange={e => setGenero(e.target.value)}>
            <option value=""></option>
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
        </div>
        <div className='basis-[30%]'>
          <label className={`${texto.className} text-subtitle text-3xl block mb-2`}>Peso (kg)</label>
          <input className={`${texto.className} bg-boxback border-2 text-white border-line w-full px-4 py-2 ml-1 rounded-lg`}
           type="text" name="peso" value={peso} onChange={(e) => setPeso(e.target.value)}/>
          {isNaN(peso) && (<p className={`${titulo.className} text-yellow text-xl`}>El valor introducido no es numerico</p>)}
        </div>
        <div className='basis-[30%]'>
          <label className={`${texto.className} text-subtitle text-3xl block mb-2`}>Estatura (cm)</label>
          <input className={`${texto.className} bg-boxback border-2 text-white border-line w-full px-4 py-2 ml-1 rounded-lg`}
           type="text" name="talla" value={estatura} onChange={(e) => setEstatura(e.target.value)}/>
           {isNaN(estatura) && (<p className={`${titulo.className} text-yellow text-xl`}>El valor introducido no es numerico</p>)}
        </div>
        <div className='basis-[30%]'>
          <label className={`${texto.className} text-subtitle text-3xl block mb-2`}>Edad</label>
          <input className={`${texto.className} bg-boxback border-2 text-white border-line w-full px-4 py-2 ml-1 rounded-lg`}
           type="text" name="edad" value={edad} onChange={(e) => setEdad(e.target.value)}/>
          {isNaN(edad) && (<p className={`${titulo.className} text-yellow text-xl`}>El valor introducido no es numerico</p>)}
        </div>
        <div className='basis-[30%]'>
          <label className={`${texto.className} text-subtitle text-3xl block mb-2`}>Bicipital (mm)</label>
          <input className={`${texto.className} bg-boxback border-2 text-white border-line w-full px-4 py-2 ml-1 rounded-lg`}
           type="text" name="bicipital" value={bicipital} onChange={(e) => setBicipital(e.target.value)}/>
          {isNaN(bicipital) && (<p className={`${titulo.className} text-yellow text-xl`}>El valor introducido no es numerico</p>)}
        </div>
        <div className='basis-[30%]'>
          <label className={`${texto.className} text-subtitle text-3xl block mb-2`}>Tricipital (mm)</label>
          <input className={`${texto.className} bg-boxback border-2 text-white border-line w-full px-4 py-2 ml-1 rounded-lg`}
           type="text" name="tricipital" value={tricipital} onChange={(e) => setTricipital(e.target.value)}/>
          {isNaN(tricipital) && (<p className={`${titulo.className} text-yellow text-xl`}>El valor introducido no es numerico</p>)}
        </div>
        <div className='basis-[30%]'>
          <label className={`${texto.className} text-subtitle text-3xl block mb-2`}>Subescapular (mm)</label>
          <input className={`${texto.className} bg-boxback border-2 text-white border-line w-full px-4 py-2 ml-1 rounded-lg`}
           type="text" name="subescapular" value={subescapular} onChange={(e) => setSubescapular(e.target.value)}/>
          {isNaN(subescapular) && (<p className={`${titulo.className} text-yellow text-xl`}>El valor introducido no es numerico</p>)}
        </div>
        <div className='basis-[30%]'>
          <label className={`${texto.className} text-subtitle text-3xl block mb-2`}>Cresta Iliaca (mm)</label>
          <input className={`${texto.className} bg-boxback border-2 text-white border-line w-full px-4 py-2 ml-1 rounded-lg`}
           type="text" name="cresta" value={cresta} onChange={(e) => setCresta(e.target.value)}/>
          {isNaN(cresta) && (<p className={`${titulo.className} text-yellow text-xl`}>El valor introducido no es numerico</p>)}
        </div>
        <div className='basis-[30%]'>
          <label className={`${texto.className} text-subtitle text-3xl block mb-2`}>Biestiloideo (cm)</label>
          <input className={`${texto.className} bg-boxback border-2 text-white border-line w-full px-4 py-2 ml-1 rounded-lg`}
           type="text" name="biestiloideo" value={biestiloideo} onChange={(e) => setBiestiloideo(e.target.value)}/>
          {isNaN(biestiloideo) && (<p className={`${titulo.className} text-yellow text-xl`}>El valor introducido no es numerico</p>)}
        </div>
        <div className='basis-[30%]'>
          <label className={`${texto.className} text-subtitle text-3xl block mb-2`}>Femur (cm)</label>
          <input className={`${texto.className} bg-boxback border-2 text-white border-line w-full px-4 py-2 ml-1 rounded-lg`}
           type="text" name="femur" value={femur} onChange={(e) => setFemur(e.target.value)}/>
          {isNaN(femur) && (<p className={`${titulo.className} text-yellow text-xl`}>El valor introducido no es numerico</p>)}
        </div>
      </div>
      <div className='text-center'>
          <button className={`${texto.className} bg-boxback border-2 border-line rounded-xl text-white text-2xl 
          px-4 py-2 hover:bg-gradient-to-r from-primary to-secondary`}
           type="submit">Aceptar</button>
        </div>
    </form>
    {
    !error && composicion.grasa && (
      <div className='p-5 bg-boxback border-2 border-line rounded-xl my-5'>
        <div>
          <table className={`${titulo.className} text-white w-full`}>
            <tr className='text-left'>
              <th className='text-xl'>Componente</th>
              <th className='text-xl'>%</th>
              <th className='text-xl'>kg</th>
            </tr>
            <tr>
              <td>Masa Grasa</td>
              <td>{redondear(composicion.grasa)}</td>
              <td>{redondear(composicion.grasakilo)}</td>
            </tr>
            <tr>
              <td>Masa Osea</td>
              <td>{redondear(composicion.posea)}</td>
              <td>{redondear(composicion.osea)}</td>
            </tr>
            <tr>
              <td>Masa Residual</td>
              <td>{redondear(composicion.presidual)}</td>
              <td>{redondear(composicion.residual)}</td>
            </tr>
            <tr>
              <td>Masa Muscular</td>
              <td>{redondear(composicion.pmuscular)}</td>
              <td>{redondear(composicion.muscular)}</td>
            </tr>
          </table>
        </div>
      </div>
    )}
  </div>);
}
export default Composicion;