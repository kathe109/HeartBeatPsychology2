import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Container, Paper, Button } from '@mui/material';

const RupturaAmorosaPage = () => {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate('/categories/baja-autoestima');  // Cambia esto según la categoría previa que quieras mostrar
  };

  const handleNext = () => {
    navigate('/categories/perdi-a-mi-mejor-amigo');  // Cambia esto por la próxima categoría que quieras mostrar
  };

  const goBack = () => {
    navigate('/categories');  // Regresar al listado principal de categorías
  };

  return (
    <Container maxWidth="md">
      <Button variant="contained" onClick={goBack}>Regresar</Button>
      <Paper style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>Ruptura amorosa</Typography>
        <Typography paragraph>
          Aquí va el contenido específico sobre cómo lidiar con una ruptura amorosa. Este contenido será único y podrá tener su propio diseño.
        </Typography>
        {/* Más contenido y elementos como imágenes, listas, etc. */}
      </Paper>
      <Button variant="contained" onClick={handlePrev} style={{ marginRight: '10px' }}>Anterior</Button>
      <Button variant="contained" onClick={handleNext}>Siguiente</Button>
    </Container>
  );
};

export default RupturaAmorosaPage;
