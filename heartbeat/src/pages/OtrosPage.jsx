// En src/pages/OtrosPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Container, Paper, Button } from '@mui/material';

const OtrosPage = () => {
  const navigate = useNavigate();

const goBack = () => {
  navigate('/categories');
};



  return (
    <Container className='amor amor-2'  maxWidth="md" style={{ marginTop: '40px', marginBottom: '0', padding: '20px', maxWidth: '1000px', width: '1000px' }}>
      <Button className='regresar' variant="contained" onClick={goBack} style={{ marginBottom: '20px' }}>Regresar</Button>
      <Paper style={{ padding: '20px', marginTop: '0' }}>
        <Typography variant="h4" gutterBottom>Otros problemas</Typography>
        <Typography style={{fontSize: '14px'}} paragraph>
          Encuentra ayuda y recursos para una variedad de problemas que pueden no encajar en otras categorías, como problemas familiares, salir del clóset, entre otros.
        </Typography>
        {/* Considera agregar recursos útiles, enlaces a apoyo profesional, etc. */}
      </Paper>
    </Container>
  );
};

export default OtrosPage;
