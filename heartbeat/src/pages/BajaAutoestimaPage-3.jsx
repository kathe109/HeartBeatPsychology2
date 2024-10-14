import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Container, Paper, Button, Box, CardMedia } from '@mui/material';

const BajaAutoestimaPage = () => {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate('/categories/baja-autoestima-2');
  };

  const handleNext = () => {
    navigate('/categories/baja-autoestima-4');
  };

  const goBack = () => {
    navigate('/categories');
  };

  const imageUrl = "../assets/sun4.jpeg";

  return (
    <Container className='amor amor-2'  maxWidth="md" style={{ marginTop: '110px', marginBottom: '0', paddingTop: '20px', paddingBottom: '20px' }}>
      <Button className='regresar' variant="contained" onClick={goBack} style={{ marginBottom: '20px' }}>Regresar</Button>
      <Paper elevation={3} style={{ padding: '20px', position: 'relative' }}>
        <Typography style={{fontSize: '20px'}} variant="h4" gutterBottom>
          ¿Por qué me siento insuficiente?
        </Typography>
        <Container className='position'>
          <Box style={{ marginBottom: '0' }}>
            <Typography style={{fontSize: '14px', maxWidth: '500px', backgroundColor: '#413a84', padding: '20px', fontStyle: 'italic'}} paragraph>
              La verdad esto es muy común cuando estás en el proceso de conocerte a ti mismo y de autoaceptación. Sientes que no eres capaz de cumplir las expectativas propias o más que todo de los demás. Un ejemplo podría ser cuando no eres del todo aceptado o querido en un grupo de amigos. Este sentimiento surge cuando percibes que no encajas, que tus amigos no te valoran o que te excluyen de manera constante. Otro ejemplo muy común es cuando no eres suficiente para tus propios padres. Tus padres esperan cosas inalcanzables, ya sea en lo académico, personal o social. Por más que te esfuerces nunca logras ser suficiente en ningún aspecto. Si has pasado por esto, o por alguna situación parecida, te entiendo, es duro y es algo que te persigue durante un gran periodo…
            </Typography>
          </Box>
          <Container style={{paddingLeft: '80px'}}>
          <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="Inseguridad"
          style={{ width: '100px', height: 'auto', maxWidth: '300px' }}  // Ajusta el tamaño según lo que necesites
        />
          <Box style={{ marginBottom: '0', padding: '10px', borderRadius: '5px' }}>
            <Typography style={{fontSize: '14px'}} variant="body1">
              PERO NO ES TU CULPA, CREEME, estamos tan acostumbrados a pensar que hay algo mal en nosotros y tenemos la necesidad de cambiar y ser aceptados por los demás. Pensamientos como: “si fuera más bonito”, “si fuera más divertido o interesante”, “si no fuera tan inútil” o el típico “si no fuera tan tímido” nos abruman todo el tiempo, pero todos esos pensamientos son mentiras. Cuando encuentras a las personas correctas nunca vas a ser difícil de querer o vas a tener que cambiar para ser valorado, hay muchas personas en este mundo con las que no vas a encajar y otras con las que sí, es cuestión de encontrar en los lugares indicados, porque siempre vas a ser suficiente para las personas indicadas.
            </Typography>
          </Box>
          </Container>
        </Container>
      </Paper>
      <Button className='anterior' variant="contained" onClick={handlePrev} style={{ marginRight: '10px' }}>Anterior</Button>

    </Container>
  );
};

export default BajaAutoestimaPage;


