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
    navigate("/categories/ruptura-amorosa-2"); // Regresa a la página anterior
  };

  const handleNext = () => {
    navigate("/categories/ruptura-amorosa-4"); // Avanza a la siguiente categoría relevante
  };

  const reasons = [
    "Te dejó por otra persona",
    "Te fue infiel",
    "Conoció a alguien más",
    "La relación era muy tóxica",
    "Relación a distancia",
    "Falta de comunicación",
    "Tu pareja tiene muchos problemas emocionales",
    "Dependencia emocional",
    "Te quiere pero no te elige...",
    "Otra razón...",
  ];

  return (
    <Container className='amor amor-2'  maxWidth="md" style={{ marginTop: '350px', marginBottom: '0', padding: '20px', maxWidth: '1000px' }}>
      <Button
        className="regresar"
        variant="contained"
        onClick={handlePrev}
        style={{ marginBottom: "20px 0" }}
      >
        Regresar
      </Button>
      <Paper style={{ padding: "20px", marginBottom: "0", marginTop:'20px' }}>
        <Typography variant="h4" gutterBottom>
          Terminar una relación.
        </Typography>
        <Typography
              variant="h5"
              style={{ color: "#4A90E2", marginBottom: "20px" }}
            >
              Depresión.
            </Typography>
        <Container className="orden-list">
          <Container className="primer-conteiner">
            <Typography style={{fontSize: '14px'}} paragraph>
              Posiblemente ahora estés en depresión. Hablemos de cómo nos
              sentimos y una vez aceptamos la realidad. ¿Qué sigue ahora?
            </Typography>
            <Typography style={{fontSize: '14px'}} paragraph>
              Hablemos de cómo nos sentimos ya una vez aceptamos la realidad.
              ¿Qué sigue ahora?
            </Typography>
            <Typography style={{fontSize: '14px'}} paragraph>
              Quizá llegues a pensar que la solución más sencilla para escapar
              del sentimiento de melancolía sería acabar todo el helado para
              después acostarte en tu cama, llorar por horas hasta quedarse seco
              y terminar en un sueño profundo con la excusa de dormir para no
              pensar.
            </Typography>
            <Typography style={{fontSize: '14px'}} paragraph>
              (Posiblemente termines soñando con tu ex y te levantes llorando
              otra vez).
            </Typography>
          </Container>
          <Container className="segundo-container">
            <Typography style={{fontSize: '14px'}} paragraph>
              Para poder superar a tu ex, primero necesitamos determinar la
              razón por la cual terminaron, aquí dejo una pequeña lista con
              algunas sugerencias.
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
              Si pasaste por alguna de estas razones, lo siento mucho, vas a
              sufrir, PERO, todo se puede superar. Aunque parezca que no al
              inicio, todo es un duelo, poco a poco irás soltando y cerrarás la
              herida con un recuerdo bonito. (A menos de que te haya puesto el
              cuerno, en ese caso hay que odiarlo porque el asesinato es
              ilegal).
            </Typography>
          </Container>
        </Container>
      </Paper>
      <Button className='anterior' variant="contained" onClick={handlePrev} style={{ marginRight: '10px' }}>Anterior</Button>
      <Button className='siguiente' variant="contained" onClick={handleNext}>Siguiente</Button>
    </Container>
  );
};

export default RupturaAmorosaPage3;
