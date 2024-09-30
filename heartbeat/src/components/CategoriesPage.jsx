import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardActionArea, CardContent, Typography, Button, CardMedia, Container } from '@mui/material';


const categories = [
  { id: 1, title: 'Ruptura amorosa', description: 'Terminaste una relación con una persona con la cual ahora sientes que no hay marcha atrás ¿puedes vivir sin esa persona, no?', imageUrl: './assets/ruptura.jpg' },
  { id: 2, title: 'Baja autoestima', description: '¿Te sientes inseguro, cuando ves al espejo cuestionas partes de tu vida y de ti mismo que cualquier persona que te vea piense que eres mejor que tú?', imageUrl: '/assets/baja.jpg' },
  { id: 3, title: 'Perdí a mi mejor amigo/a', description: 'Después de años de amistad, con la muerte o cualquier otra pérdida, sientes que tienes la culpa y quieres los consejos de alguien para empezar de nuevo.', imageUrl: '/assets/amigo.jpg' },
  { id: 4, title: 'Otros...', description: 'Problemas familiares, no sabes cómo salir del bache con tus padres, auto...', imageUrl: '/assets/familia.jpg' }
];

const CategoriesPage = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/categories/${category.id}`);
  };

  return (
    <Container className='boxes'>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
        Elige la categoría que más te represente:
      </Typography>
      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={3} key={category.id}>
            <Card>
              <CardActionArea onClick={() => handleClick(category)}>
                <Button fullWidth>
                  <Typography gutterBottom variant="h5" component="div">
                    {category.title}
                  </Typography>
                </Button>
                <CardMedia
                  component="img"
                  height="140"
                  image={category.imageUrl}
                  alt={category.title}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {category.title} {/* Hace que el título sea visible en el card */}
                </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoriesPage;
