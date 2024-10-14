import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Container, Paper, Button, Box, CardMedia } from '@mui/material';

const BajaAutoestimaPage = () => {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate('/categories/perdi-a-mi-mejor-amigo');
  };

  const handleNext = () => {
    navigate('/categories/baja-autoestima-4');
  };

  const goBack = () => {
    navigate('/categories');
  };

  const imageUrl = "../assets/sun-3.jpeg";

  return (
     <Container className='amor amor-2'  maxWidth="md" style={{ marginTop: '150px', marginBottom: '0', padding: '20px', maxWidth: '1000px', width: '1000px' }}>
      <Button className='regresar' variant="contained" onClick={goBack} style={{ marginBottom: '20px' }}>Regresar</Button>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Malas amistades
        </Typography>
        <Typography variant="h4" gutterBottom>
          La traición de una amistad
        </Typography>
        <Box display="flex" justifyContent="space-between" style={{ marginBottom: '20px' }}>
          <Box style={{ padding: '10px', borderRadius: '5px', width: '35%' }}>
            <Typography style={{fontSize: '14px', backgroundColor: '#342c6d', padding:'20px', fontStyle: 'italic'}} paragraph>
              Como algunos dicen “la traición nunca viene de un enemigo” es lo más acertado en esta vida. El sentimiento de ser traicionado es horrible y demasiado doloroso pero este se triplica cuando es de alguien que queremos demasiado y es importante para nosotros.
              A veces cuando tenemos una amistad muy cercana y querida, con la que pasamos 24/7 y contamos todo, llegamos a un nivel de confianza muy alto hasta confiarle nuestra vida. Es la última persona en la pensarías cuando escuchas la palabra “traición”.
            </Typography>
          </Box>
          <Box style={{ padding: '10px', borderRadius: '5px', width: '60%' }}>
            <Typography style={{fontSize: '14px'}} paragraph>
              De la nada te acuchillan por la espalda de la manera más hipócrita y dolorosa posible. Como si nunca les hubiera importado la amistad en lo absoluto. Es como que no puedes creer el daño que te hicieron, es algo inexplicable. Solo sientes un hueco en el estómago de tanto dolor que sientes. Vas a sufrir mucho, buscarás explicaciones, luego intentarás odiar a esa persona con todo tu ser pero luego no podrás porque recordarás todos los momentos con esa persona y sentirás que no vas a encontrar una conexión así con nadie. Yo sé, es muy doloroso. Es raro porque en la mayoría de los casos se puede llegar a perdonar pero ojo solo si la persona tenía “razones válidas" o si en verdad se arrepiente y te pide perdón hasta morir. Si es así, se puede considerar más no justificar, ni perdonar en los peores de los casos. Pero bueno, si tu caso es una excepción, como que la persona no le importó en lo absoluto y simplemente te siguió hablando como si nada hubiera pasado, pues no queda de otra que eliminarlo de nuestra vida por completo.
            </Typography>
            <CardMedia
          component="img"
          image={imageUrl}
          alt="Imagen descriptiva de ruptura amorosa"
          style={{ width: '100%', height: '170px', marginBottom: '20px', maxWidth: '500px' }}
        />
          </Box>
        </Box>
      </Paper>
      <Button className='anterior' variant="contained" onClick={handlePrev} style={{ marginRight: '10px' }}>Anterior</Button>
    </Container>
  );
};

export default BajaAutoestimaPage;
