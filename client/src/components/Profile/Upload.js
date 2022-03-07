import React from "react"
import {Row,Container,Card} from 'react-bootstrap'
import blankprofile from "../../assets/blankprofile.png"


const Upload = () => {
  const uploadImage = React.useRef(null)
  const imageUploader = React.useRef(null)

  const handleImageUpload = e =>{
    const [file] = e.target.files
    if (file) {
      const reader = new FileReader()
      const {current} = uploadImage
      current.file= file
      reader.onload=(e)=>{
        current.src= e.target.result
      }
      reader.readAsDataURL(file)
    }
  }
  const uploadStyle ={
    width: '19rem',
    height:'19.4rem',
    border: '10px solid rgba(0, 0, 0, 0.05)',
  }
  return (
    <Container>
      <Row style={uploadStyle}>
        <Card  onClick={(()=> imageUploader.current.click())}>
          <img ref={uploadImage} variant="top" src={blankprofile} alt="" style={{ height: '18rem' }} />
          <input ref={imageUploader} type="file" accept="image" multiple={false} onChange={handleImageUpload} style={{display: "none"}}/>
        </Card>
      </Row>
    </Container>

  );
}


export default Upload;