export type StaticServiceRow = {
  readonly id: number;
  readonly departureLabel: string;
  readonly serviceName: string;
  readonly brandKey: string | null;
  readonly cycleLabel: string;
  readonly fareLabel: string;
  readonly isFlagged: boolean;
};

export const staticServiceRows: readonly StaticServiceRow[] = [
  {
    id: 1,
    departureLabel: '11 Sep',
    serviceName: 'Spotify Premium',
    brandKey: 'spotify',
    cycleLabel: 'Monthly',
    fareLabel: '$11.99',
    isFlagged: false,
  },
  {
    id: 2,
    departureLabel: '12 Sep',
    serviceName: 'Notion Plus',
    brandKey: 'notion',
    cycleLabel: 'Monthly',
    fareLabel: '$10.00',
    isFlagged: false,
  },
  {
    id: 3,
    departureLabel: '15 Sep',
    serviceName: 'Figma Professional',
    brandKey: 'figma',
    cycleLabel: 'Monthly',
    fareLabel: '$15.49',
    isFlagged: false,
  },
  {
    id: 4,
    departureLabel: '19 Sep',
    serviceName: 'ClassPass 30',
    brandKey: null,
    cycleLabel: 'Monthly',
    fareLabel: '$79.00',
    isFlagged: true,
  },
  {
    id: 5,
    departureLabel: '24 Sep',
    serviceName: 'Adobe Creative Cloud',
    brandKey: null,
    cycleLabel: 'Annual',
    fareLabel: '$659.88',
    isFlagged: false,
  },
  {
    id: 6,
    departureLabel: '29 Sep',
    serviceName: 'iCloud+ 2 TB',
    brandKey: 'icloud',
    cycleLabel: 'Monthly',
    fareLabel: '$9.99',
    isFlagged: false,
  },
];
