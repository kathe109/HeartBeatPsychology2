// En data/categoryData.js
export const categoryDetails = {
  'ruptura-amorosa': {
    title: "Episodio 1.",
    title2: "Terminar una relación.",
    description: `¿Perdí al amor de mi vida? ¿O solo un amor en mi vida?
      
  El otro día desperté en la mañana, se sintió diferente, un hueco en mi estómago que me invadió, no sabía la causa, no la recordaba, hasta que decidí mirar mi celular para ver el mensaje que solía tener todas las mañanas, un cálido y dulce "Buenos días mi amor" de aquella persona, compañera de vida que aunque le acompañé por meses, años o incluso pudo haber sido alguien con quien nunca formalicé pero significó tanto para mí, que después de rearmar y separar este ser especial ya no está, me tumbó en un llanto purificador.
  
  Así suelen sentirse las primeras mañanas, ¿no es así?`,
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
