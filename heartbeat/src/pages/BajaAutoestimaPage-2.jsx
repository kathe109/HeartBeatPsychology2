import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Paper,
  Container,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  FormControlLabel,
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
    <Container className='amor amor-2'  maxWidth="md" style={{ marginTop: '300px', marginBottom: '0', paddingTop: '20px' }}>
      <Button
        className="regresar"
        variant="contained"
        onClick={handlePrev}
      >
        Regresar
      </Button>
      <Paper style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Baja Autoestima.
        </Typography>
        <Typography
              variant="h5"
              style={{ color: "#4A90E2", marginBottom: "20px" }}
            >
              Inseguridad.
            </Typography>
        <Container className="orden-list">
          <Container className="primer-conteiner">
            <Typography style={{fontSize: '14px'}} paragraph>
            Todos tenemos inseguridades.
            </Typography>
            <Typography style={{fontSize: '14px'}} paragraph>
            Hablemos de cómo nos sentimos ya una vez aceptamos la realidad. ¿Qué sigue ahora? 
            Quizá llegues a pensar que la solución más sencilla para escapar del sentimiento de melancolía sería acabar todo el helado para después acostarte en tu cama, llorar por horas hasta quedarse seco y terminar en un sueño profundo con la excusa de dormir para no pensar. 
            </Typography>
            <Typography style={{fontSize: '14px'}} paragraph>
            (Posiblemente termines soñando con tu ex y te levantes llorando otra vez).
            </Typography>
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
            <Typography style={{fontSize: '14px', marginBottom:'0'}} paragraph>
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