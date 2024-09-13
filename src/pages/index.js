import * as React from "react"
import Layout from "../components/Layout"
// import TeamCard from "../components/teamcard/TeamCard"
// import Button from "../components/button/Button"
// import FormularioVariosPasos from "../components/formulariovariospasos/formulariovariospasos"
// import Greeting  from "../components/Greeting"
// import StatusMessage from "../components/StatusMessage/StatusMessage"
// import UserCard from "../components/userCard"
import { graphql } from "gatsby"
import { GatsbyImage} from "gatsby-plugin-image"

const IndexPage = ({data}) => {


  return (
    <>
      <Layout>
      <div className='container-team-card'>
      {
        data.allFile.nodes.map(node => (
          <GatsbyImage
          key={node.childImageSharp.id}
          image={node.childImageSharp.gatsbyImageData}
          alt={node.name}
          />
        ))
      }
      </div>
    </Layout>
    </>
  )
}
export const imagesTeam = graphql`
  query {
  allFile {
    nodes {
      name
      childImageSharp {
        id
        gatsbyImageData(
            width: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
      }
    }
  }
}
`
export default IndexPage
export const Head = () => <title>Home Page</title>

{/* <Button 
        onClick={()=>{alert('hola mundo')}}
        style = {{color: 'red'}}
        >Guardar</Button>
        <Button className='tndm-btn-sucess'>Compartir</Button>
        <Button className='tndm-btn-warning'></Button>
        <hr></hr>
        <FormularioVariosPasos/> */}
{/* <StatusMessage isLoading>
          </StatusMessage>
          <UserCard
            name= 'Manolito'
            age= '25'
            isOnline={true}
          ></UserCard>
          <UserCard
            name= 'Gafotas'
            age= '25'
            isOnline
          ></UserCard> */}