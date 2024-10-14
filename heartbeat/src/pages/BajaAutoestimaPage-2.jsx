import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Paper,
  Container,
  Button,
  List,
  ListItem,
  Checkbox,
  FormControlLabel,
  CardMedia,
} from "@mui/material";

const RupturaAmorosaPage3 = () => {
  const navigate = useNavigate();

  const [checked, setChecked] = React.useState({});

  const handleToggle = (value) => {
    // Cambia el estado de cada checkbox
    const newState = { ...checked, [value]: !checked[value] };
    setChecked(newState);
  };


  const handlePrev = () => {
    navigate("/categories/baja-autoestima"); // Regresa a la página anterior
  };

  const handleNext = () => {
    navigate("/categories/baja-autoestima-3"); // Avanza a la siguiente categoría relevante
  };

  const imageUrl = "../assets/sun-baja.jpeg"; 

  const reasons = [
    "Peso",
    "Cara",
    "Torso",
    "Piernas",
    "Brazos",
    "Pelo",
    "Nariz",
    "Color de piel",
    "Estatura",
    "Otros...",
  ];

  return (
    <Container className='amor amor-2'  maxWidth="md" style={{ marginTop: '210px', marginBottom: '0', paddingTop: '20px', paddingBottom:'20px' }}>
      <Button
        className="regresar"
        variant="contained"
        onClick={handlePrev}
      >
        Regresar
      </Button>
      <Paper style={{ padding: "20px", marginBottom: "0", marginTop: '20px'  }}>
        <Typography variant="h4" gutterBottom>
          Baja Autoestima.
        </Typography>
        <Typography
              variant="h5"
              style={{ color: "#4A90E2", marginBottom: "10px", color:'#342c6d' }}
            >
              Inseguridad.
            </Typography>
        <Container className="orden-list">
          <Container className="primer-conteiner">
            <Typography style={{fontSize: '14px'}} paragraph>
            Todos tenemos inseguridades.
            </Typography>
            <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="baja"
          style={{ width: '100%', height: 'auto', marginBottom: '0', maxWidth: '400px' }}
        />
          </Container>
          <Container className="segundo-container">
            <Typography style={{fontSize: '14px'}} paragraph>
            Todos tenemos inseguridades, ¿te identificas con alguna de estas?:
            </Typography>
            <List className="lista">
          {reasons.map((reason, index) => (
            <ListItem style={{fontSize: '14px'}} key={index}>
              <FormControlLabel
                control={<Checkbox checked={checked[reason] || false} onChange={() => handleToggle(reason)} />}
                label={reason}
              />
            </ListItem>
          ))}
        </List>
            <Typography style={{fontSize: '14px', marginTop: '20px'}} paragraph>Selección múltiple</Typography>
            <Typography style={{fontSize: '13px', marginBottom:'0',fontStyle: 'italic'}} paragraph>
            Estas son algunas inseguridades de forma general, pues no especifican exactamente cada cosa, pero seguro que alguna vez en tu vida te has sentido inseguro por alguna de estas. Dejame decirte que es completamente válido, siempre las personas suelen decir frases como : “amate a ti mismo” o “eres perfecto tal y como eres” cuando son comentarios que realmente no ayudan al problema. Tener una inseguridad es difícil, no es cuestión de quitarla o eliminarla de nuestra vida es más bien saber cómo vivir con ella..
            </Typography>
          </Container>
        </Container>
      </Paper>
      <Button className='anterior' variant="contained" onClick={handlePrev} style={{ marginRight: '10px' }}>Anterior</Button>
      <Button
        className="siguiente"
        variant="contained"
        onClick={handleNext}
        style={{ marginRight: "10px" }}
      >
        Siguiente
      </Button>
    </Container>
  );
};

export default RupturaAmorosaPage3;