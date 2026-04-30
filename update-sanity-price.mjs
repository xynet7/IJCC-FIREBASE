import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '4j8vl1ls',
  dataset: 'production',
  apiVersion: '2024-04-26',
  useCdn: false,
  token: process.env.SANITY_TOKEN, // will use token if provided
});

// First, fetch all pricing records to see what's there
const data = await client.fetch('*[_type == "membershipPricing"] { _id, tierName, price, currency }');
console.log('Current Sanity membership pricing records:');
console.log(JSON.stringify(data, null, 2));

// Find the individual tier
const individualTier = data.find(d =>
  d.tierName && d.tierName.toLowerCase().includes('individual')
);

if (individualTier) {
  console.log(`\nFound individual tier: ${individualTier.tierName} (${individualTier._id}) - current price: ${individualTier.price}`);
  // Patch price to 11000
  const result = await client.patch(individualTier._id).set({ price: 11000 }).commit();
  console.log('Updated successfully:', result);
} else {
  console.log('\nNo individual tier found in Sanity. Current tiers:', data.map(d => d.tierName));
}
