import React, { useState } from "react";
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
    const [currentSong, setCurrentSong] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
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

  const handleSongChange = (url) => {
    setCurrentSong(url);
    setIsPlaying(true);
  }; 
  
  const songs = [
    { name: "WILDFLOWER - Billie Eilish", url: "https://firebasestorage.googleapis.com/v0/b/heartbeat-ff81e.appspot.com/o/songs%2Fwwd.mp3juice.blog%20-%20Billie%20Eilish%20-%20WILDFLOWER%20(Official%20Lyric%20Video).mp3?alt=media&token=99866907-d304-4fe8-b248-6793dacee58e" },
    { name: "The Other Woman - Lana del Rey", url: "https://firebasestorage.googleapis.com/v0/b/heartbeat-ff81e.appspot.com/o/songs%2Fwwd.mp3juice.blog%20-%20The%20Other%20Woman.mp3?alt=media&token=41d0a479-5b71-488b-8740-16131f1ff6f8" },
    { name: "All too well - Taylor Swift (10 minutes version)", url: "https://firebasestorage.googleapis.com/v0/b/heartbeat-ff81e.appspot.com/o/songs%2Fwwd.mp3juice.blog%20-%20Taylor%20Swift%20-%20All%20Too%20Well%20(10%20Minute%20Version)%20%20Sub%20espa%C3%B1ol%20%2B%20Lyrics%20(Video%20Oficial)%204K.mp3?alt=media&token=c01f9f2f-448d-472a-9b5a-dfb471550ff9" },
    { name: "Glimpse of Us - Joji", url: "https://firebasestorage.googleapis.com/v0/b/heartbeat-ff81e.appspot.com/o/songs%2Fwwd.mp3juice.blog%20-%20Joji%20-%20%20Glimpse%20of%20Us.mp3?alt=media&token=c28f92f5-0db6-40fa-a638-a46512d0c8ba" },
    { name: "Casual - Chappell Roan", url: "https://firebasestorage.googleapis.com/v0/b/heartbeat-ff81e.appspot.com/o/songs%2Fwwd.mp3juice.blog%20-%20Chappell%20Roan%20-%20Casual%20(Official%20Music%20Video).mp3?alt=media&token=f55a25e9-a0f8-499e-8fcc-cb1d7bb82c86" },
    { name: "REM - Humbe", url: "https://firebasestorage.googleapis.com/v0/b/heartbeat-ff81e.appspot.com/o/songs%2Fwwd.mp3juice.blog%20-%20HUMBE%20-%20REM.mp3?alt=media&token=f6626d11-b263-4a75-a65c-020e02a411b2" },
    { name: "Star Shopping - Lil Peep", url: "https://firebasestorage.googleapis.com/v0/b/heartbeat-ff81e.appspot.com/o/songs%2Fwwd.mp3juice.blog%20-%20Lil%20Peep%20-%20Star%20Shopping%20(Official%20Audio).mp3?alt=media&token=78c8d62b-92d9-4fc0-9987-2ab8768203fe" },
    // Añade más canciones aquí
  ];

  return (
    <Container className='amor amor-2'  maxWidth="md" style={{ marginTop: '200px', marginBottom: '0', padding: '20px', maxWidth: '1000px', width: '1000px' }}>
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
        {currentSong && (
          <audio src={currentSong} controls autoPlay={isPlaying} style={{ width: '100%' }}>
            Tu navegador no soporta el elemento de audio.
          </audio>
        )}
     </Container>
        <Container style={{paddingLeft: '50px'}}>
        <List className="lista">
        {songs.map((song, index) => (
                <ListItem key={index} button onClick={() => handleSongChange(song.url)}>
                  <FormControlLabel
                    control={<Checkbox checked={checked[song.name] || false} onChange={() => handleToggle(song.name)} />}
                    label={song.name}
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
