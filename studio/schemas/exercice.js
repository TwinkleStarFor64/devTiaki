export default {
    name: 'exercice',
    type: 'document',
    title: 'Exercices',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'titre',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'photo',
        type: 'image',
        title: 'photo',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'video',
        type: 'string',
        title: 'vidéo'
      },
      {
        name: 'description',
        type: 'string',
        title: 'description'
      },
      {
        name: 'duree',
        type: 'number',
        title: 'durée (en minutes)'
      },
      {
        name: 'materiel',
        type: 'string',
        title: 'materiel'
      },
            
    ]
  }