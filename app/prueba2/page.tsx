"use client"


import { useState } from "react"
import { ImageIA } from "./ImgIa"

export default function Prueba2(){


    let [activador, setActivador] = useState(0)
	
	let [descripcion, setDescripcion] =useState('')

	function generardescripcion(event){
		setDescripcion(event.target.value)
	}

     function generarImagen(){
         
        setActivador(activador + 1)
        
	}

	let classImg = activador === 0 ? 'hidden' : 'grid grid-cols-1 gap-5 p-5 bg-black sm:grid-cols-2 lg:grid-cols-3'

	return (
		<div className='grid grid-cols-1 justify-items-center  content-start gap-y-5  py-6'>
			<input  className='w-80 shadow-md shadow-black pl-1 py-1 rounded-xl ' type='text' value={descripcion} onChange={generardescripcion}></input>
			<button  className='bg-blue-600 w-48 py-2  font-bold rounded-2xl border-2 border-black text-white hover:scale-110 hover:bg-red-600 duration-300' onClick={generarImagen}>Generar Imagenes</button>
			<div className={classImg}>
                <ImageIA descripcion={descripcion} onButtonClick={activador} / >
				<ImageIA descripcion={descripcion} onButtonClick={activador} / >
				<ImageIA descripcion={descripcion} onButtonClick={activador} / >
				<ImageIA descripcion={descripcion} onButtonClick={activador} / >
				<ImageIA descripcion={descripcion} onButtonClick={activador} / >
				<ImageIA descripcion={descripcion} onButtonClick={activador} / >
				<ImageIA descripcion={descripcion} onButtonClick={activador} / >
				<ImageIA descripcion={descripcion} onButtonClick={activador} / >
				<ImageIA descripcion={descripcion} onButtonClick={activador} / >
			</div>
			
		</div>

	)
}