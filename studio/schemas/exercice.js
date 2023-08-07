export default {
    name: 'exercice',
    type: 'document',
    title: 'Exercices',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'title',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'photo',
        type: 'image',
        title: 'photo',
        validation: (Rule) => Rule.required(),
        options: {
          metadata: ['location', 'palette'], // Autres métadonnées disponibles : 'size', 'dimensions', 'lqip', 'hasAlpha', 'duration'
          hotspot: true, // Permet de définir un point chaud (hotspot) sur l'image
          storeOriginalFilename: false, // Ne pas stocker le nom de fichier d'origine
          imageConstraints: {
            // Contraintes de taille des images
            maxWidth: 600,
            maxHeight: 400,
          },
        }
      },
      {
        name: 'video',
        type: 'string',
        title: 'vidéo'
      },
      {
        name: 'description',
        type: 'text',
        title: 'description'
      },
      {
        name: 'dureeIcon',
        type: 'image',
        title: 'Icone de durée'
      },
      {
        name: 'duree',
        type: 'number',
        title: 'Durée (en minutes)'
      },
      {
        name: 'materielIcon',
        type: 'image',
        title: 'Icone de materiel'
      },
      {
        name: 'materiel',
        type: 'string',
        title: 'materiel'
      },
            
    ]
  }