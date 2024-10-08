import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Paper, Box, Container, Button } from '@mui/material';
import { categoryDetails, categoryIds } from '../data/categoryData'; // Asegúrate de tener esta importación correcta

const CategoryDetailPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const details = categoryDetails[categoryId];

  if (!details) {
    return <p>Cargando detalles...</p>; // Manejo de carga o de no encontrado
  }

  const handleNext = () => {
    const currentIndex = categoryIds.indexOf(categoryId);
    const nextIndex = (currentIndex + 1) % categoryIds.length;
    navigate(`/categories/${categoryIds[nextIndex]}`);
  };

  const handlePrev = () => {
    const currentIndex = categoryIds.indexOf(categoryId);
    const prevIndex = (currentIndex - 1 + categoryIds.length) % categoryIds.length;
    navigate(`/categories/${categoryIds[prevIndex]}`);
  };

  const goBack = () => {
    navigate('/categories'); // Navegar de regreso a la lista principal de categorías
  };

  // Extracción segura de las descripciones con verificación
  const splitDescription = (text) => text ? text.split('\n').map((part, index) => (
    <Typography key={index} component="span" variant="body1" style={{ display: 'block', fontStyle: 'italic' }}>
      {part}
    </Typography>
  )) : null;

  return (
    <Container className='detail category-detail-container' component="main" maxWidth="md">
      <Button variant="contained" onClick={goBack}>Regresar</Button>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography className='title1' variant="h4" gutterBottom>
          {details.title}
        </Typography>
        <Typography className='title2' variant="h4" gutterBottom>
          {details.title2}
        </Typography>
        <Container className='orden'>
          <Box component="img" src={details.imageUrl} alt={details.title} sx={{ width: '100%', height: 'auto', marginBottom: 2 }} />
          <Typography variant="body1" component="div">
            {splitDescription(details.description)}
            {splitDescription(details.description2)}
            {splitDescription(details.description3)}
          </Typography>
        </Container>
      </Paper>
      <Button className='next' variant="contained" onClick={handleNext}>Siguiente</Button>
    </Container>
  );
};

export default CategoryDetailPage;
