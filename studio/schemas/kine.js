export default {
    name: 'kine',
    type: 'document',
    title: 'Accueil Kinésithérapie',
    fields: [
      {
        name: 'id',
        type: 'number',
        title: 'Id',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'title',
        type: 'string',
        title: 'Titre',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'text',
        type: 'string',
        title: 'Texte',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'button',
        type: 'string',
        title: 'Button'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image'
      },
      {
        name: 'url',
        type: 'string',
        title: 'Url'
      },                  
    ]
  }