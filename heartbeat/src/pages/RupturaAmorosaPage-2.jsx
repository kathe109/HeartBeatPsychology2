import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Container, Paper, Button, Box, CardMedia } from '@mui/material';

const RupturaAmorosaPage2 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/categories/ruptura-amorosa-3'); // Navega a la siguiente página específica
  };

  const handlePrev = () => {
    navigate('/categories/ruptura-amorosa'); // Regresa a la página de detalle original o la previa
  };

  const goBack = () => {
    navigate('/categories'); // Regresa al listado de categorías
  };

  const imageUrl = "../assets/amor.jpeg";

  return (
    <Container className='amor amor-2' maxWidth="md" style={{ padding: '20px', width:'1000px' }}>
      <Button className='regresar' variant="contained" onClick={goBack}>Regresar</Button>
      <Paper style={{ padding: '20px', marginTop: '20px', marginBottom: '0' }}>
        <Typography variant="h4" gutterBottom>
          Episodio 1. Terminar una relación.
        </Typography>
        <Typography style={{ fontStyle: 'italic', maxWidth: '300px', fontSize: '14px'}} variant="body1" gutterBottom>
          Conozco un poema el cual relata un poco el sentimiento de perder a quien alguna vez fue tu amor, tu lugar seguro, tu hogar.
        </Typography>
        <Container  style={{marginTop:'20px'}} className='position'>
        <Typography variant="body1" style={{ fontStyle: 'italic', marginBottom: '20px', fontSize: '14px', maxWidth: '225px', backgroundColor:'#413a84', padding: '15px' }}>
          "Puedo escribir los versos más tristes esta noche. Escribir, por ejemplo: 'La noche está estrellada, y tiritan, azules, los astros, a lo lejos.' El viento de la noche gira en el cielo y canta. Puedo escribir los versos más tristes esta noche..."
        </Typography>
        <Typography style={{fontSize: '14px', marginBottom: '0', maxWidth: '275px', padding: '0 20px'
        }} variant="body1">
          Este poema "Poema 20" escrito por Pablo Neruda, expresa el desgarro emocional, mezclando el dolor del recuerdo con la belleza de las imágenes nocturnas. Es una reflexión sobre lo que fue y ya no es, encapsulando la melancolía de los primeros días de una separación.
        </Typography>
        <CardMedia
          component="img"
          image={imageUrl}
          alt="Imagen descriptiva de ruptura amorosa"
          style={{ width: '100%', height: 'auto', marginBottom: '20px', maxWidth: '300px' }}
        />
        </Container>
      </Paper>
      <Button className='anterior' variant="contained" onClick={handlePrev} style={{ marginRight: '10px' }}>Anterior</Button>
      <Button className='siguiente' variant="contained" onClick={handleNext}>Siguiente</Button>
    </Container>
  );
};

export default RupturaAmorosaPage2;
