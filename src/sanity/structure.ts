import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website Content')
    .items([
      // A singleton for site settings
      S.listItem()
        .title('Global Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Global Site Settings')
        ),

      S.divider(),

      // Regular document types
      S.documentTypeListItem('membershipPricing').title('Membership Prices'),
      S.documentTypeListItem('event').title('Events'),
      S.documentTypeListItem('member').title('Team & Members'),
      S.documentTypeListItem('galleryImage').title('Gallery Images'),
    ]);
