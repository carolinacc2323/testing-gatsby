// import * as React from "react"
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import { graphql } from 'gatsby';
// const ConsejoGraphql = ({ data }) => (
//     <div>
//       {data.allDataJson.edges.map(({ node }) => {
//         const image = getImage(node.image);
//         return (
//           <div key={node.id}>
//             <h2>{node.nombre}</h2>
//             <p>{node.descripcion}</p>
//             <GatsbyImage image={image} alt={node.nombre} />
//           </div>
//         );
//       })}
//     </div>
// )
// export const query = graphql`
//   query  {
//     allDataJson {
//       edges {
//         node {
//           descripcion
//           id
//           nombre
//           image {
//             childImageSharp {
//               gatsbyImageData(
//               width: 300
//                aspectRatio: 1.77777777778
//                placeholder: BLURRED
//               formats: WEBP
//               )
//             }
//           }
//         }
//       }
//     }
//   }
// `;
// export default ConsejoGraphql