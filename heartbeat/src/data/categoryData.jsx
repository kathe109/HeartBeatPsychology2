// En data/categoryData.js
export const categoryDetails = {
  'ruptura-amorosa': {
    title: "Episodio 1.",
    title2: "Terminar una relación.",
    description: "¿Perdí al amor de mi vida? ¿O solo un amor en mi vida?", 
    description2: "El otro día desperté en la mañana, se sintió diferente, un hueco en mi estómago que me invadió, no sabía la causa, no la recordaba, hasta que decidí mirar mi celular para ver el mensaje que solía tener todas las mañanas, un cálido y dulce Buenos días mi amor de aquella persona, compañera de vida que aunque le acompañé por meses, años o incluso pudo haber sido alguien con quien nunca formalicé pero significó tanto para mí, que después de rearmar y separar este ser especial ya no está, me tumbó en un llanto purificador.",
    description3: "Así suelen sentirse las primeras mañanas, ¿no es así?",
    imageUrl: "/assets/ruptura.jpg"
  },
  'ruptura-amorosa-2': {
    description: "Conozco un poema el cual relata un poco el sentimiento de perder a quien alguna vez fue tu amor, tu lugar seguro, tu hogar.",
    description2: "Puedo escribir los versos más tristes esta noche. Escribir, por ejemplo: 'La noche está estrellada, y tiritan, azules, los astros, a lo lejos.'El viento de la noche gira en el cielo y canta. Puedo escribir los versos más tristes esta noche. Yo la quise, y a veces ella también me quiso. En las noches como ésta la tuve entre mis brazos. La besé tantas veces bajo el cielo infinito.",
    description3: "Este poema “Poema 20” escrito por Pablo Neruda, expresa el desgarro emocional, mezclando el dolor del recuerdo con la belleza de las imágenes nocturnas. Es una reflexión sobre lo que fue y ya no es, encapsulando la melancolía de los primeros días de una separación.",
    imageUrl: "/assets/ruptura.jpg"
  },
  'baja-autoestima': {
    title: "Baja autoestima",
    description: "Descripción extensa de lo que implica esta categoría...",
    imageUrl: "/assets/baja.jpg"
  },
  // Más categorías aquí...
};

// Asegúrate también de exportar cualquier otra cosa que necesites
export const categoryIds = Object.keys(categoryDetails);  // Exporta los IDs
