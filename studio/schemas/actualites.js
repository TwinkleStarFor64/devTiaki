export default {
    name: 'Actualites',
    type: 'document',
    title: 'Actualités',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Titre',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'description',
        type: 'string',
        title: 'description',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'image',
        type: 'string',
        title: 'Photo'
      },
     
    ]
}