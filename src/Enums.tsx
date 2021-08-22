
export type Selection = {
  [prop: string]: string;
};

const HandType = {
  HOURS: "h",
  MINUTES: "m",
  SECONDS: "s"
} as const;
type HandType = typeof HandType[keyof typeof HandType];

const Seconds = {
  PAR_HALF_DAY: 12 * 60**2,
  PAR_HOUR: 60**2,
  PAR_MINUTE: 60
} as const;
type Seconds = typeof Seconds[keyof typeof Seconds];

const Degree = {
  HOURS: 360 / Seconds.PAR_HALF_DAY,
  MINUTES: 360 / Seconds.PAR_HOUR,
  SECONDS: 360 / Seconds.PAR_MINUTE,
  OFFSET: -90
} as const;
type Degree = typeof Degree[keyof typeof Degree];

const Theme: Selection = {
  DEFAULT: 'default',
  NEU_MORPHISM: 'neumorphism',
  DOTTED: 'dotted'
} as const;
type Theme = typeof Theme[keyof typeof Theme];

const Shape: Selection = {
  CIRCLE: 'circle',
  SQUARE: 'square'
} as const;
type Shape = typeof Shape[keyof typeof Shape];

export { HandType, Seconds, Degree, Theme, Shape };