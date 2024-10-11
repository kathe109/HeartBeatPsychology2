import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  Container,
} from "@mui/material";
<style>
@import url('https://fonts.googleapis.com/css2?family=Spicy+Rice&display=swap');
</style>

const categories = [
  {
    id: "ruptura-amorosa",
    title: "Ruptura amorosa",
    description: "Terminaste una relación con una persona la cual amaste con toda tu alma y ahora sientes que no puedes vivir sin esta persona, ¿no?.",
    imageUrl: "/assets/corazones.jpeg",
  },
  {
    id: "baja-autoestima",
    title: "Baja autoestima",
    description: "¿Te sientes inseguro cuando te ves al espejo, sientes que nadie te va querer  y piensas que cualquier persona es mejor que tu?.",
    imageUrl: "/assets/piso.jpeg",
  },
  {
    id: "perdi-a-mi-mejor-amigo",
    title: "Perdí a mi mejor amigo/a",
    description: "Después de años de amistad, una pelea pudo acabar con la amistad, sientes que tienes la culpa y que será complicado solucionar las cosas de nuevo.",
    imageUrl: "/assets/heartbeat.jpeg",
  },
  {
    id: "otros",
    title: "Otros...",
    description: "Problemas familiares, no sabes como salir del closet con sus padres, auto...",
    imageUrl: "/assets/trauma.jpeg",
  },
];

const CategoriesPage = () => {
  return (
    <Container className="boxes">
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ mt: 4, mb: 4, textAlign: "center" }}
      >
        Elige la categoría que más te represente:
      </Typography>
      <Grid className="button" container spacing={2}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={3} key={category.id}>
            <Card sx={{ maxWidth: 345, m: 2 }}>
              <Link
                to={`/categories/${category.id}`}
                style={{ textDecoration: "none" }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography className="spicy-rice-regular" gutterBottom variant="h5" component="div">
                      {category.title}
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    height="140"
                    image={category.imageUrl}
                    alt={category.title}
                  />
                  <CardContent>
                    <Typography className="title" gutterBottom variant="h5" component="div">
                      {category.title}
                    </Typography>
                    <Typography style={{textShadow: '-3px -3px 12px black;'}} variant="body2" color="text.secondary">
                      {category.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoriesPage;
