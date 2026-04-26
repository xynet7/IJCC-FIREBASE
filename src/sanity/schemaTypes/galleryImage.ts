import { defineField, defineType } from 'sanity';

export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'Gallery Images',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title / Caption',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventReference',
      title: 'Related Event (Optional)',
      type: 'reference',
      to: [{ type: 'event' }],
    }),
  ],
});
