import { defineField, defineType } from 'sanity';

export const membershipPricing = defineType({
  name: 'membershipPricing',
  title: 'Membership Pricing',
  type: 'document',
  fields: [
    defineField({
      name: 'tierName',
      title: 'Tier Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      options: {
        list: ['INR', 'JPY', 'USD'],
      },
      initialValue: 'INR',
    }),
    defineField({
      name: 'duration',
      title: 'Duration (e.g., Annual, Monthly)',
      type: 'string',
      initialValue: 'Annual',
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});
