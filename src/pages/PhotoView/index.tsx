import { useLocation } from "react-router-dom"

import { Photo } from "../../models/Photo"

import { BackButton, Container, img } from "./styles"

type location ={
    state:{
        Photo:Photo

    }
}



const PhotoView = () =>{
     const location: location = useLocation()
     const {Photo} = location.state
     return(
        <>
  <BackButton to='/'>{'back'}</BackButton>
      <Container>
      <img src={Photo.regularUrl}/>
      </Container>
        </>
     )
}

<h1>Photo View</h1>

export default PhotoView
