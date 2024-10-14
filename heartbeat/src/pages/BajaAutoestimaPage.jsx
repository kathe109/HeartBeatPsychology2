import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Container, Paper, Button, Box, CardMedia } from '@mui/material';

const BajaAutoestimaPage = () => {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate('/categories/ruptura-amorosa-3');  // Asumiendo que esta es la página previa
  };

  const handleNext = () => {
    navigate('/categories/baja-autoestima-2');  // Asumiendo que esta es la siguiente página
  };

  const goBack = () => {
    navigate('/categories');  // Regresar al listado principal de categorías
  };

  // Asumiendo que tienes una imagen específica para esta página
  const imageUrl = "../assets/sun-2.jpeg";  // Reemplaza esto con la ruta real de tu imagen

  return (
    <Container className='amor' maxWidth="md" style={{ padding: '20px',marginTop: '50px', maxWidth: '1000px', width: '1000px' }}>
      <Button className='regresar' variant="contained" onClick={goBack} style={{ marginBottom: '20px' }}>Regresar</Button>
      <Paper elevation={3} style={{ padding: '20px'}}>
        <Typography variant="h4" gutterBottom>
          Baja autoestima - Episodio 1.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Espejos que mienten
        </Typography>
        <Typography variant="subtitle1" component="div" style={{ fontStyle: 'italic', marginBottom: '20px' }}>
          El peso de la inseguridad
        </Typography>
        <Container className='position'>
        <Box style={{ marginBottom: '20px' }}>
          <Typography style={{maxWidth: '500px', fontSize: '14px'}} paragraph>
          Cuando tienes 10 años y vas todos los días a la escuela a ver a tus compañeros y disfrutar los recreos jugando escondido, sin importar cómo te ves físicamente ni qué piensan los demás de ti, que bonitos tiempos. Después de la nada, entras a un infierno llamado “adolescencia” y comienzas a cuestionarte toda tu existencia y eres más sensible que un cristal. Te vuelves tan insoportable que ni te soportas a ti mismo, es normal, pasa diariamente. En esta etapa de cambios, el cuerpo se transforma rápidamente, lo que puede generar una sensación de incomodidad o rechazo hacia tu propia imagen. Es común tener inseguridades por cualquier cosa, hasta el más mínimo detalle como un pelo en la ceja despeinado, no se por alguna razón somos así.
        </Typography>
        </Box>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="baja"
          style={{ width: '100%', height: 'auto', marginBottom: '0', maxWidth: '400px', marginTop: '-70px', position: 'relative', marginTop: '-70px', top: '-25px' }}
        />
        </Container>
        {/* Aquí podrías añadir más contenido multimedia o interactivo si lo deseas */}
      </Paper>

      <Button className='siguiente siguiente-2' variant="contained" onClick={handleNext}>Siguiente</Button>
    </Container>
  );
};

export default BajaAutoestimaPage;
