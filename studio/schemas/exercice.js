export default {
    name: 'exercice',
    type: 'document',
    title: 'Exercices',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Titre',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'photo',
        type: 'image',
        title: 'Photo',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'video',
        type: 'string',
        title: 'Vidéo'
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description'
      },
      {
        name: 'duree',
        type: 'number',
        title: 'Durée (en minutes)'
      },
      {
        name: 'materiel',
        type: 'string',
        title: 'Materiel'
      },
    ]
  }