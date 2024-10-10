import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Container, Paper, Button, Box, CardMedia } from '@mui/material';

const RupturaAmorosaPage = () => {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate('/categories/baja-autoestima');  // Asumiendo que esta es la página previa
  };

  const handleNext = () => {
    navigate('/categories/ruptura-amorosa-2');  // Asumiendo que esta es la siguiente página
  };

  const goBack = () => {
    navigate('/categories');  // Regresar al listado principal de categorías
  };

  // Asumiendo que tienes una imagen específica para esta página
  const imageUrl = "../assets/ruptura.png";  // Reemplaza esto con la ruta real de tu imagen

  return (
    <Container className='amor' maxWidth="md" style={{ padding: '20px' }}>
      <Button className='regresar' variant="contained" onClick={goBack} style={{ marginBottom: '20px' }}>Regresar</Button>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Ruptura amorosa - Episodio 1.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Terminar una relación.
        </Typography>
        <Typography variant="subtitle1" component="div" style={{ fontStyle: 'italic', marginBottom: '20px' }}>
          ¿Perdí al Amor de mi vida? ¿O solo un amor en mi vida?
        </Typography>
        <Container className='position'>
        <Box style={{ marginBottom: '20px' }}>
          <Typography paragraph>
            El otro día desperté en la mañana, se sintió diferente, un hueco en mi estómago que me invadió, no sabía la causa, no la recordaba...
          </Typography>
          <Typography paragraph>
            Hasta que decidí mirar mi celular para ver el mensaje que solía tener todas las mañanas, un cálido y dulce "Buenos días mi amor" de aquella persona...
          </Typography>
          <Typography paragraph>
          Así suelen sentirse las primeras mañanas, ¿no es así?
        </Typography>
        </Box>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="Ruptura Amorosa"
          style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
        />
        </Container>
        {/* Aquí podrías añadir más contenido multimedia o interactivo si lo deseas */}
      </Paper>
      <Button className='anterior' variant="contained" onClick={handlePrev} style={{ marginRight: '10px' }}>Anterior</Button>
      <Button className='siguiente' variant="contained" onClick={handleNext}>Siguiente</Button>
    </Container>
  );
};

export default RupturaAmorosaPage;
