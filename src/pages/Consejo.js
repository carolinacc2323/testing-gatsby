import React from 'react'

// import MariaDolores from '../images/ImagesTeam/MariaDolores.jpg'
// import { GatsbyImage} from "gatsby-plugin-image"
import Layout from '../components/Layout'

const Consejo = () => {
    return (
        <>
            <Layout>
            <h1>Página del Consejo</h1>
            <div className='cards'>
                
            </div>
            </Layout>
        </>
    )
}

export default Consejo

// {data.map((item) =>(
//     <div className='cardt'>
//     <h2>{item.nombre}</h2>
//     <h3>{item.cargo}</h3>
//     <p>{item.descripcion}</p>
//     <figure>
//         <GatsbyImage
//             image={item.image}
//             alt={item.nombre}
//         />
//         {/* <img alt='María Dolores Menéndez' src={item.image}/> */}
//     </figure>
//     <a href={item.rrss}>Real Decreto de nombramiento</a>
// </div>
// ))}
