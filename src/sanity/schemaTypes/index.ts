import { type SchemaTypeDefinition } from 'sanity';
import { siteSettings } from './siteSettings';
import { membershipPricing } from './membershipPricing';
import { event } from './event';
import { member } from './member';
import { galleryImage } from './galleryImage';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, membershipPricing, event, member, galleryImage],
};
