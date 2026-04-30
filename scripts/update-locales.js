const fs = require('fs');

const enPath = 'src/locales/en.json';
const jaPath = 'src/locales/ja.json';

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const jaData = JSON.parse(fs.readFileSync(jaPath, 'utf8'));

const newKeys = {
  'membershipTier_student_title': 'Student / Young Professional',
  'membershipTier_student_eligibility': 'For students and young professionals under 25 years.',
  'membershipTier_student_benefit1': 'Member event pricing',
  'membershipTier_student_benefit2': 'Website directory listing',
  'membershipTier_student_benefit3': 'Access to networking sessions',

  'membershipTier_individual_title': 'Individual / Professional / Consultant',
  'membershipTier_individual_eligibility': 'For individual professionals, consultants, and freelancers.',
  'membershipTier_individual_benefit1': 'Member event pricing',
  'membershipTier_individual_benefit2': 'Website directory listing',
  'membershipTier_individual_benefit3': 'Access to networking sessions',
  'membershipTier_individual_benefit4': 'Digital certificate',
  'membershipTier_individual_benefit5': 'Eligibility to join thematic groups',
  'membershipTier_individual_benefit6': 'Direct Participation in Indo-Japan Community',
  'membershipTier_individual_benefit7': 'B2B matchmaking (Online & Offline)',

  'membershipTier_startup_title': 'Startup / Emerging SME ★ NEW',
  'membershipTier_startup_eligibility': 'For registered startups and emerging small businesses.',
  'membershipTier_startup_benefit1': 'All Individual benefits',
  'membershipTier_startup_benefit2': 'Startup showcase opportunities',
  'membershipTier_startup_benefit3': 'Eligibility for pitch sessions',
  'membershipTier_startup_benefit4': '2 curated introductions annually',
  'membershipTier_startup_benefit5': 'Startup listing on website directory',
  'membershipTier_startup_benefit6': 'Direct Participation in Indo-Japan Community',
  'membershipTier_startup_benefit7': 'B2B matchmaking (Online & Offline)',

  'membershipTier_smeStandard_title': 'SME Standard',
  'membershipTier_smeStandard_eligibility': 'For established small and medium enterprises.',
  'membershipTier_smeStandard_benefit1': '2 authorised representatives',
  'membershipTier_smeStandard_benefit2': 'Discounted chamber events',
  'membershipTier_smeStandard_benefit3': 'Member directory inclusion',
  'membershipTier_smeStandard_benefit4': 'Referral support',
  'membershipTier_smeStandard_benefit5': 'Access to sector sessions',
  'membershipTier_smeStandard_benefit6': 'Member WhatsApp / mailing groups',
  'membershipTier_smeStandard_benefit7': 'Direct Participation in Indo-Japan Community',
  'membershipTier_smeStandard_benefit8': 'B2B matchmaking (Online & Offline)',

  'membershipTier_smePlus_title': 'SME Plus',
  'membershipTier_smePlus_eligibility': 'For growing SMEs seeking enhanced visibility.',
  'membershipTier_smePlus_benefit1': 'All SME Standard benefits',
  'membershipTier_smePlus_benefit2': 'Priority event invitations',
  'membershipTier_smePlus_benefit3': 'Featured website listing',
  'membershipTier_smePlus_benefit4': '4 curated business introductions annually',
  'membershipTier_smePlus_benefit5': 'Eligibility for speaking at selected events',
  'membershipTier_smePlus_benefit6': 'Direct Participation in Indo-Japan Community',
  'membershipTier_smePlus_benefit7': 'B2B matchmaking (Online & Offline)',

  'membershipTier_corporateStandard_title': 'Corporate Standard',
  'membershipTier_corporateStandard_eligibility': 'For established corporate entities.',
  'membershipTier_corporateStandard_benefit1': '3 authorised representatives',
  'membershipTier_corporateStandard_benefit2': 'Priority registration for chamber events',
  'membershipTier_corporateStandard_benefit3': 'Logo placement in member section',
  'membershipTier_corporateStandard_benefit4': 'Structured business matching support',
  'membershipTier_corporateStandard_benefit5': 'Closed-door roundtable participation',
  'membershipTier_corporateStandard_benefit6': 'Access to select delegation opportunities',
  'membershipTier_corporateStandard_benefit7': 'Direct Participation in Indo-Japan Community',
  'membershipTier_corporateStandard_benefit8': 'B2B matchmaking (Online & Offline)',

  'membershipTier_corporatePremium_title': 'Corporate Premium Club Member',
  'membershipTier_corporatePremium_eligibility': 'For premium corporate partners seeking highest engagement.',
  'membershipTier_corporatePremium_benefit1': 'Up to 5 authorised representatives',
  'membershipTier_corporatePremium_benefit2': 'Premium website visibility',
  'membershipTier_corporatePremium_benefit3': 'Panel & speaking preference',
  'membershipTier_corporatePremium_benefit4': '6 curated introductions annually',
  'membershipTier_corporatePremium_benefit5': 'Co-hosting rights for one chamber session',
  'membershipTier_corporatePremium_benefit6': 'Branding support in chamber communication',
  'membershipTier_corporatePremium_benefit7': 'Direct Participation in Indo-Japan Community',
  'membershipTier_corporatePremium_benefit8': 'B2B matchmaking (Online & Offline)',

  'membershipTier_patron_title': 'Patron Membership',
  'membershipTier_patron_eligibility': 'For distinguished leaders and large organizations.',
  'membershipTier_patron_benefit1': 'Dedicated onboarding',
  'membershipTier_patron_benefit2': 'Cross-border market entry support',
  'membershipTier_patron_benefit3': 'Priority introductions in India & Japan ecosystem',
  'membershipTier_patron_benefit4': 'Reserved seat at exclusive VIP sessions',
  'membershipTier_patron_benefit5': 'Direct participation in Policy Advocacy with Japanese & Indian Govt agencies',
  'membershipTier_patron_benefit6': 'Highest visibility branding',
  'membershipTier_patron_benefit7': 'Logo on Homepage / Newsletters',
  'membershipTier_patron_benefit8': 'Access to special bilateral delegations',
  'membershipTier_patron_benefit9': 'Up to 10 authorised representatives',
  'membershipTier_patron_benefit10': 'Direct Participation in Indo-Japan Community',
  'membershipTier_patron_benefit11': 'B2B matchmaking (Online & Offline)',

  'membershipTier_strategicPlatinum_title': 'Strategic Platinum Club (M&A — T&C applicable)',
  'membershipTier_strategicPlatinum_eligibility': 'For top-tier MNCs and strategic partners.',
  'membershipTier_strategicPlatinum_benefit1': 'Custom partnership package',
  'membershipTier_strategicPlatinum_benefit2': 'Title association with flagship initiatives',
  'membershipTier_strategicPlatinum_benefit3': 'Highest website visibility',
  'membershipTier_strategicPlatinum_benefit4': 'Keynote & thought-leadership opportunities',
  'membershipTier_strategicPlatinum_benefit5': 'Bespoke policy / investment roundtables',
  'membershipTier_strategicPlatinum_benefit6': 'Annual strategic review with chamber leadership',
  'membershipTier_strategicPlatinum_benefit7': 'Priority branding across major chamber property',
  'membershipTier_strategicPlatinum_benefit8': 'Direct Participation in Indo-Japan Community',
  'membershipTier_strategicPlatinum_benefit9': 'B2B matchmaking (Online & Offline)',

  'membershipRules_title': 'Membership Rules',
  'membershipRules_rule1': 'Non-Refundable: Membership fees are strictly non-refundable and non-transferable under any circumstances.',
  'membershipRules_rule2': 'Due Diligence: IJCC reserves the right to review, approve, or reject applications based on internal compliance guidelines.',
  'membershipRules_rule3': 'Code of Conduct: Members are expected to uphold the chamber’s professional standards. Any breach may result in termination without a refund.',
  'membershipRules_rule4': 'Disclaimers: Introductions and matchmaking do not guarantee commercial success. Members must conduct their own due diligence.',
  'membershipRules_rule5': 'Renewals: Membership is valid per financial year and subject to renewal based on active standing.'
};

for (let key in enData) {
  if (key.startsWith('membershipTier_')) {
    delete enData[key];
  }
}
for (let key in jaData) {
  if (key.startsWith('membershipTier_')) {
    delete jaData[key];
  }
}

Object.assign(enData, newKeys);
Object.assign(jaData, newKeys);

fs.writeFileSync(enPath, JSON.stringify(enData, null, 2) + '\\n');
fs.writeFileSync(jaPath, JSON.stringify(jaData, null, 2) + '\\n');
console.log('Successfully updated en.json and ja.json');
