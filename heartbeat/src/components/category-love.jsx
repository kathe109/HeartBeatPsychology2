import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Paper, Box, Container } from '@mui/material';

// Datos de ejemplo
const categoryDetails = {
  'ruptura-amorosa': {
    title: "Ruptura amorosa",
    episode: "Episodio 1. Terminar una relación.",
    description: `Perdí al Amor de mi vida? o ¿Solo un amor en mi vida?
El otro día desperté en la mañana, se sintió diferente, un hueco en mi estomago que me invadió, no sabía la causa, no la recordaba, hasta que decidí mirar mi celular para ver el mensaje que solía tener todas las mañanas, un cálido y dulce "Buenos días mi amor" de aquella persona, compañera de vida que aunque le acompañé por meses, años o incluso pudo haber sido alguien con quien nunca formalice pero significó tanto para mi, que después de rearmar y separar este ser especial ya no está, me tumbo en un llanto purificador. 
Así suelen sentirse las primeras mañanas no es así?`,
    imageUrl: '/assets/ruptura.jpg' // Asegúrate de que esta ruta es correcta
  },
  // Agrega más categorías según necesites
};

const CategoryDetailPage = () => {
  const { categoryId } = useParams();
  const details = categoryDetails[categoryId];

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          {details.title}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {details.episode}
        </Typography>
        <Box component="img" src={details.imageUrl} alt={details.title} sx={{ width: '100%', height: 'auto', marginBottom: 2 }} />
        <Typography variant="body1">
          {details.description}
        </Typography>
      </Paper>
    </Container>
  );
};

export default CategoryDetailPage;
