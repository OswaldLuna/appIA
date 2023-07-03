
import {useEffect, useState } from "react";
import Image from "next/image";

export function ImageIA({descripcion, onButtonClick}){

    let [imgSrc, setImgSrc] = useState('')


    useEffect(() => {


		if(descripcion != ''){
			setImgSrc('')
			const fetchData = async () => setImgSrc(await query(`${descripcion} ${Math.random()}`));
        	fetchData()
			
		}


        
    }, [onButtonClick])


    
    
    return (
        imgSrc === '' ? <p className="text-white">Cargando imagen...</p> : <Image  src={imgSrc} width={300} height={300} alt=''/>
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