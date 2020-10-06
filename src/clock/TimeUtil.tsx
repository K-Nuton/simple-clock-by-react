import { HandType, Degree } from './Enums';

export const getDegreeFromDate = (date: Date, handType: number): number => {
  const seconds = getSecondsFromDate(date, handType);
  return getDegreeFromSeconds(seconds, handType);
};

const getSecondsFromDate = (date: Date, handType: number): number => {
  let result: number = 0;
  switch (handType) {
    case HandType.HOURS:
      result = date.getHours() * 3600 +
        date.getMinutes() * 60 +
        date.getSeconds();
      break;

    case HandType.MINUTES:
      result = date.getMinutes() * 60 +
        date.getSeconds();
      break;

    default:
      result = date.getSeconds();
      break;
  }
  return result;
};

const getDegreeFromSeconds = (seconds: number, handType: number): number => {
  let result: number = 0;
  switch (handType) {
    case HandType.HOURS:
      result = seconds * Degree.HOURS;
      break;

    case HandType.MINUTES:
      result = seconds * Degree.MINUTES;
      break;

    default:
      result = seconds * Degree.SECONDS;
      break;
  }
  return result + Degree.OFFSET;
};
