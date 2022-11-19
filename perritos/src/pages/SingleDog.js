import React, {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"

export default function SingleDog() {
  const [dog, setDog] = useState([])
  const {name} = useParams()
   
  useEffect(()=>{
    const fetchSingleDogData = async() =>{
      try{
          const res = await fetch (`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
          const data =  await res.json()
          setDog(data)              
          console.log(data)
  
      }catch(error){
          console.error(error)
      }
  }

  fetchSingleDogData()
  }, [name])

  return ( 
  <>
  <section className="max-w-5xl mx-auto flex items-center justify-center h-screen ">
    {dog.map((item) => (
      <div key={item.id} className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:place-items-center">
      <article>
        <img 
        src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
        alt={item.name}

        /> 
    
       
      </article>
      <article>
        <h1 className="tex-3xl font-bold text-black mb-8 lg:text-5xl">{item.name}</h1>
        {item.description && <p className="mb-8 text-sm lg:text-base leading-looose lg:leading-relaxed">{item.description}</p>}         
        
        <ul className="text-m leading-loose lg:text-base lg:leading-relaxed">
          <li><span className="font-bold">Raza:</span> {item.bred_for}</li>
          <li><span className="font-bold">Altura:</span> {item.height.metric} cm</li>
          <li><span className="font-bold">Peso: </span>{item.weight.metric} kgs</li>
          <li><span className="font-bold">Grupo de raza: </span>{item.breed_group}</li>
          <li><span className="font-bold">Duración de vida:</span>{item.life_span}</li>
          <li><span className="font-bold">Temperamento: </span>{item.temperament}</li>
        </ul>

        <Link to="/" className="inline-block  bg-pink-300 py-2 px-6 rounded mt-8 tex-white hover:bg-pink-500 transition-all duration-200">&larr; Regresar</Link>
      </article>
    </div>
    ))}
   </section>
  </>
  )
}
