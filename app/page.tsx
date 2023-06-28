 'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react';


export default function Home() {

	const numImg = 9

	let [listImgSrc, listSetImgSrc] = useState([] as string[])

	let [imgSrc, setImgSrc] = useState('')
	
	let [descripcion, setDescripcion] =useState('')

	function generardescripcion(event){
		setDescripcion(event.target.value)
	}

	async function generarImagen(){

		listSetImgSrc(listImgSrc = [])

		for (let i=1; i<=numImg; i++){

			setImgSrc(await query(`${descripcion} ${Math.random()}`))
				
		}
	}

	useEffect(()=>{

		if (imgSrc !== '' && listImgSrc.length < numImg){
			listSetImgSrc([
				...listImgSrc, 
				imgSrc
			]) 
		}

	},[imgSrc])


	return (
		<div className='grid grid-cols-1 justify-items-center  content-start gap-y-5  py-6'>
			<input  className='w-80 shadow-md shadow-black pl-1 py-1 rounded-xl ' type='text' value={descripcion} onChange={generardescripcion}></input>
			<button  className='bg-blue-600 w-48 py-2  font-bold rounded-2xl border-2 border-black text-white hover:scale-110 hover:bg-red-600 duration-300' onClick={generarImagen}>Generar Imagenes</button>
			<div className='grid grid-cols-1 gap-5 p-5 bg-black sm:grid-cols-3'>
			{listImgSrc.map((elemento, index) => (
        		<Image key={index} src={elemento} width={300} height={300} alt=''/>
      					))}
			</div>
			
		</div>

	)
}
async function query(data: string) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();

	return window.URL.createObjectURL(result);
}



