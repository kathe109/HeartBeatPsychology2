import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Container, Paper, Button, Box, CardMedia } from '@mui/material';

const BajaAutoestimaPage = () => {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate('/categories/BajaAutoestima-3');  // Página previa
  };

  const handleNext = () => {
    navigate('/categories/perdi-a-mi-mejor-amigo-2');  // Siguiente página
  };

  const goBack = () => {
    navigate('/categories');  // Regresar al listado principal
  };

  const imageUrl = "../assets/amistad.jpg";  // Ruta de la imagen

  return (
    <Container className='amor' maxWidth="md" style={{ padding: '20px' }}>
      <Button className='regresar' variant="contained" onClick={goBack} style={{ marginBottom: '20px' }}>Regresar</Button>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Malas amistades - Episodio 1.
        </Typography>
        <Typography variant="h4" gutterBottom>
          La Sombra del grupo 
        </Typography>
        
        {/* Mueve la imagen aquí, antes del texto */}
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="Ruptura Amorosa"
          style={{ width: '100%', height: 'auto', marginBottom: '20px', maxHeight: '200px' }}
        />

        <Container className='position'>
          <Box style={{ marginBottom: '20px' }}>
            <Typography paragraph>
              Alguna vez te has sentido como una sombra detrás de tus “amigos”. Sientes que estás ahí pero no eres parte, es decir, solo existes…
              Por más que lo intentes, nunca te van a tomar en cuenta para nada, ni serás suficiente. Eres el amigo menos importante, el más reemplazable, la última opción….

              TE ENTIENDO, te lo puede decir con certeza, TE ENTIENDO DEMASIADO. Es uno de los dolores más feos y profundos que una persona puede sentir. El sentimiento de no ser elegido ni por tus propios “amigos” es horrible.

              Cuando no eres importante para tus amigos, estas podrían ser algunas señales: constantemente te excluyen, cuando van a hacer trabajos grupales eres el último que escogen, hacen planes a escondidas o incluso AL FRENTE TUYO en los que no estás invitado, tienden a ignorarte o no mostrar emoción en las cosas que te pasan. 
              Sí, lamento mucho si te ha pasado alguna de estas cosas, pero déjame decirte que ese tipo de amistades no valen la pena.

              ¡¡¡Debes salir de ahí!!!
            </Typography>
          </Box>
        </Container>
        {/* Aquí podrías añadir más contenido multimedia o interactivo si lo deseas */}
      </Paper>
      <Button className='siguiente' variant="contained" onClick={handleNext}>Siguiente</Button>
    </Container>
  );
};

export default BajaAutoestimaPage;

