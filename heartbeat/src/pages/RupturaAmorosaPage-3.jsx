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

const RupturaAmorosaPage3 = () => {
  const navigate = useNavigate();
  const [currentSong, setCurrentSong] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
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
      <Button
        className="regresar"
        variant="contained"
        onClick={goBack}
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
            {currentSong && (
          <audio src={currentSong} controls autoPlay={isPlaying} style={{ width: '100%' }}>
            Tu navegador no soporta el elemento de audio.
          </audio>
        )}
          </Container>
          <Container className="segundo-container">
            <Typography style={{fontSize: '14px'}} paragraph>
              Para poder superar a tu ex, primero necesitamos determinar la
              razón por la cual terminaron, aquí dejo una pequeña lista con
              algunas sugerencias.
            </Typography>
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
