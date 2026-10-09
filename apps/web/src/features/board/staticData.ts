export type BrandKey = 'apple' | 'figma' | 'notion' | 'spotify';

export type StaticServiceRow = {
  readonly id: string;
  readonly departureLabel: string;
  readonly serviceName: string;
  readonly brandKey: BrandKey | null;
  readonly cycleLabel: string;
  readonly fareLabel: string;
  readonly isAnnual: boolean;
  readonly isFlagged: boolean;
};

export type NoticeItem = {
  readonly id: string;
  readonly serviceName: string;
  readonly brandKey: BrandKey | null;
  readonly detail: string;
  readonly amount: string;
  readonly isWarning?: boolean;
};

export type FareLineItem = {
  readonly id: string;
  readonly lineName: string;
  readonly detail: string;
  readonly amount: string;
};

export const boardDate = '09 Oct 2026';

export const annualFare = {
  total: '$2,178',
  monthlyEquivalent: '$181 per month equivalent',
  change: '+$146 from previous fares',
} as const;

export const nextDeparture = {
  serviceName: 'Spotify Premium',
  brandKey: 'spotify' as BrandKey,
  departureSummary: 'Departs in 2 days · 11 Oct',
  cycleSummary: '30-day cycle',
  fareLabel: '$11.99',
} as const;

export const staticServiceRows: readonly StaticServiceRow[] = [
  {
    id: 'spotify-premium',
    departureLabel: '11 Oct',
    serviceName: 'Spotify Premium',
    brandKey: 'spotify',
    cycleLabel: '30 days',
    fareLabel: '$11.99',
    isAnnual: false,
    isFlagged: false,
  },
  {
    id: 'notion-plus',
    departureLabel: '12 Oct',
    serviceName: 'Notion Plus',
    brandKey: 'notion',
    cycleLabel: '30 days',
    fareLabel: '$10.00',
    isAnnual: false,
    isFlagged: false,
  },
  {
    id: 'figma-professional',
    departureLabel: '15 Oct',
    serviceName: 'Figma Professional',
    brandKey: 'figma',
    cycleLabel: '30 days',
    fareLabel: '$15.49',
    isAnnual: false,
    isFlagged: false,
  },
  {
    id: 'classpass-30',
    departureLabel: '19 Oct',
    serviceName: 'ClassPass 30',
    brandKey: null,
    cycleLabel: '30 days',
    fareLabel: '$79.00',
    isAnnual: false,
    isFlagged: true,
  },
  {
    id: 'adobe-creative-cloud',
    departureLabel: '24 Oct',
    serviceName: 'Adobe Creative Cloud',
    brandKey: null,
    cycleLabel: '365 days',
    fareLabel: '$659.88',
    isAnnual: true,
    isFlagged: false,
  },
  {
    id: 'icloud-2tb',
    departureLabel: '29 Oct',
    serviceName: 'iCloud+ 2 TB',
    brandKey: 'apple',
    cycleLabel: '30 days',
    fareLabel: '$9.99',
    isAnnual: false,
    isFlagged: false,
  },
];

export const serviceNotices: readonly NoticeItem[] = [
  {
    id: 'adobe-renewal',
    serviceName: 'Adobe Creative Cloud',
    brandKey: null,
    detail: 'Annual renewal in 15 days.',
    amount: '$659.88',
    isWarning: true,
  },
  {
    id: 'notion-trial',
    serviceName: 'Notion Plus',
    brandKey: 'notion',
    detail: 'Free trial ends in 4 days.',
    amount: '$10.00',
  },
  {
    id: 'figma-revision',
    serviceName: 'Figma Professional',
    brandKey: 'figma',
    detail: 'Fare revised from $12.00 on 3 Oct.',
    amount: '$15.49',
    isWarning: true,
  },
];

export const fareByLine: readonly FareLineItem[] = [
  { id: 'fitness', lineName: 'Fitness', detail: '1 service', amount: '$948.00' },
  { id: 'creative', lineName: 'Creative', detail: '2 services', amount: '$845.76' },
  { id: 'media', lineName: 'Media', detail: '1 service', amount: '$143.88' },
];

export const cancellationCandidates: readonly NoticeItem[] = [
  {
    id: 'classpass-candidate',
    serviceName: 'ClassPass 30',
    brandKey: null,
    detail: 'Not delivered in 3 of last 4 cycles.',
    amount: '$948/yr',
    isWarning: true,
  },
  {
    id: 'adobe-candidate',
    serviceName: 'Adobe Creative Cloud',
    brandKey: null,
    detail: 'Held 14 months.',
    amount: '$660/yr',
  },
  {
    id: 'figma-candidate',
    serviceName: 'Figma Professional',
    brandKey: 'figma',
    detail: 'Held 8 months.',
    amount: '$186/yr',
  },
];
