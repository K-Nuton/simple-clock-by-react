import { HandType, Degree, Seconds } from '../Enums';

export default function getDegreeFromDate(date: Date, handType: HandType): number {
  return getDegreeFromSeconds(
    getSecondsFromDate(date, handType),
    handType
  );
}

function getSecondsFromDate(date: Date, handType: HandType): number {
  switch (handType) {
    case HandType.HOURS:
      return date.getHours() * Seconds.PAR_HOUR +
             date.getMinutes() * Seconds.PAR_MINUTE +
             date.getSeconds();

    case HandType.MINUTES:
      return date.getMinutes() * Seconds.PAR_MINUTE +
             date.getSeconds();

    default:
      return date.getSeconds();
  }
};

function getDegreeFromSeconds(seconds: number, handType: HandType): number {
  switch (handType) {
    case HandType.HOURS:
      return seconds * Degree.HOURS + Degree.OFFSET;

    case HandType.MINUTES:
      return seconds * Degree.MINUTES + Degree.OFFSET;

    default:
      return seconds * Degree.SECONDS + Degree.OFFSET;
  }
};
