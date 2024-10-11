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

const RupturaAmorosaPage4 = () => {
    const navigate = useNavigate();
    const [checked, setChecked] = React.useState({});

  const handleToggle = (value) => {
    const newState = { ...checked, [value]: !checked[value] };
    setChecked(newState);
  };

  const handlePrev = () => {
    navigate("/categories/ruptura-amorosa-3"); // Ajusta la navegación según sea necesario
  };

  const handleNext = () => {
    navigate("/categories/ruptura-amorosa-5"); // Ajusta la navegación según sea necesario
  };

  const goBack = () => {
    navigate('/categories'); // Regresa al listado de categorías
  }; 

  const recoverySteps = [
    "Cortar toda comunicación",
    "Eliminar recuerdos físicos y digitales",
    "Rodearte de amigos y familia",
    "Iniciar nuevas actividades o hobbies",
    "Buscar apoyo profesional si es necesario",
    "Dedicar tiempo a la auto-reflexión",
    "Establecer nuevas metas personales",
    "Evitar las redes sociales por un tiempo",
    "Aprender algo nuevo",
    "Permitirte sentir y luego dejar ir",
  ];

  return (
    <Container className='amor amor-2'  maxWidth="md" style={{ marginTop: '150px', marginBottom: '0', padding: '20px', maxWidth: '1000px', width: '1000px' }}>
      <Button className="regresar" variant="contained" onClick={goBack} style={{ marginBottom: '0' }}>
        Regresar
      </Button>
      <Container className="orden-list">
      <Paper style={{ padding: "20px", marginBottom: "0", marginTop: '20px', display: 'flex', flexDirection: 'row' }}>
      <Container>
        <Typography style={{fontSize:'14px', fontWeight:'bold',marginBottom: '20px' }} variant="h4" gutterBottom>3 simples pasos para superar a tu ex.</Typography>
        <Typography style={{fontSize:'14px', fontWeight:'bold'}} variant="h5">Paso 1: Cortar todo contacto</Typography>
        <Typography style={{fontSize:'14px'}} paragraph>
          Una vez se termina la relación, cortar toda clase de comunicación que pueda haber, es importante el contacto cero, es obligatorio. Nada de que quedamos como amigos. (No sirve).
        </Typography>
        <Typography style={{fontSize:'14px', fontWeight:'bold'}} variant="h5">Paso 2: Escuchar buena música</Typography>
        <Typography style={{fontSize:'14px'}} paragraph>
          Escucharte una buena playlist de las canciones más deprimentes que puedan existir. El objetivo de esto es que llores todo lo mucho y no habrás llorado, importante sacar como una nata espinas las emociones, escucha canciones que te recuerdan a esa persona.
        </Typography>
     </Container>
        <Container style={{paddingLeft: '50px'}}>
        <List className="lista">
          {recoverySteps.map((step, index) => (
            <ListItem key={index}>
              <FormControlLabel
                control={<Checkbox checked={checked[step] || false} onChange={() => handleToggle(step)} />}
                label={step}
              />
            </ListItem>
          ))}
        </List>
        <Typography style={{fontSize:'14px', fontWeight:'bold', marginTop: '20px'}} variant="h5">Paso 3: Glow Up</Typography>
        <Typography style={{fontSize:'14px'}} paragraph>
          Métete a un gym, intenta hacer ejercicios faciales y córtate el cabello para un cambio drástico. También, debieras hacer un cambio de look radical, porque como muchos dicen, el cabello guarda recuerdos. Después cambias tu estilo de vestir, haz nuevos amigos y sube en tus redes sociales todas tus grandes evociones. Demuéstrale a la persona que rompió tu corazón que ya no te interesas (no importa que llores mientras vas al gym y sigues hablando con tu almohada, tu ex no lo tiene que saber).
        </Typography>
        </Container>
      </Paper>
      </Container>
      <Button className='anterior' variant="contained" onClick={handlePrev} style={{ marginRight: '10px' }}>Anterior</Button>
      <Button className='siguiente' variant="contained" onClick={handleNext}>Siguiente</Button>
    </Container>
  );
};

export default RupturaAmorosaPage4;
