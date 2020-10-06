enum HandType {
  HOURS,
  MINUTES,
  SECONDS
}

enum Second {
  PAR_HALF_DAY = 12 * 3600,
  PAR_HOUR = 3600,
  PAR_MINUTE = 60
}

enum Degree {
  HOURS = 360 / Second.PAR_HALF_DAY,
  MINUTES = 360 / Second.PAR_HOUR,
  SECONDS = 360 / Second.PAR_MINUTE,
  OFFSET = -90
}

enum Theme {
  DEFAULT = 'default',
  NEW_MORPHISM = 'neumorphism',
  DOTTED = 'dotted'
}

enum Shape {
  CIRCLE = 'circle',
  SQUARE = 'square'
}

export { HandType, Degree, Theme, Shape };