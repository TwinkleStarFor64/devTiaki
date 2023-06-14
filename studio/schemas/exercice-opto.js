export default {
    name: 'exerciceOpto',
    type: 'document',
    title: 'Exercices Optométrie',
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
        title: 'Materiel'
      },
    ]
  }