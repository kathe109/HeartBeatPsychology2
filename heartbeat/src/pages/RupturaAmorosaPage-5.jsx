import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Paper, Container, Button, CardMedia } from "@mui/material";

const RupturaAmorosaPage5 = () => {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate("/categories/ruptura-amorosa-4"); // Ajusta según la ruta adecuada
  };

  const imageUrl = "../assets/amigo.jpeg";

  return (
    <Container className='amor amor-2'  maxWidth="md" style={{ marginTop: '150px', marginBottom: '0', padding: '20px', maxWidth: '1000px' }}>
      <Button className="regresar" variant="contained" onClick={handlePrev} style={{ marginBottom: '0' }}>
        Regresar
      </Button>
      <Paper style={{ padding: "20px", marginTop:'20px', display: 'flex', flexDirection: 'row' }}>
        <Container>
        <Typography variant="h4" gutterBottom>
          Terminar una relación.
        </Typography>
        <Typography variant="h5" style={{ marginBottom: "20px" }}>
          Notita 💔
        </Typography>
        <Typography style={{fontSize:'14px'}} paragraph>
          Aquí te dejo una pequeña nota sacada del libro "Uno siempre cambia al amor de su vida (por otro amor o por otra vida)" por Amalia Andrade.
        </Typography>
        <Typography style={{fontSize:'14px', backgroundColor: '#4f469f'}} paragraph>
          “Amor es difícil, pero es más difícil pasar Super Mario Bros y sin embargo todos lo hicimos en nuestra infancia/adolescencia. Algunos niveles de rabia en el proceso de sanar un corazón roto son justos y necesarios. La rabia es buena porque permite expulsar sentimientos reprimidos o insatisfacciones que no sabemos enunciar. Sin embargo, hay una gran distancia entre hacer comentarios pasivos agresivos y secuestrar el perro a la persona que te rompió el corazón.”
        </Typography>
        <Typography style={{fontSize:'14px'}} paragraph>
          Este tipo de reflexión puede ayudar a entender que es natural sentirse herido y que el proceso de superación lleva su tiempo.
        </Typography>
        </Container>
        <Container>
        <CardMedia
          component="img"
          image={imageUrl}
          alt="Imagen descriptiva de ruptura amorosa"
          style={{ width: '100%', height: 'auto', marginBottom: '20px', maxWidth: '300px' }}
        />
        </Container>
      </Paper>
      <Button className='anterior' variant="contained" onClick={handlePrev} style={{ marginRight: '10px' }}>Anterior</Button>
    </Container>
  );
};

export default RupturaAmorosaPage5;
