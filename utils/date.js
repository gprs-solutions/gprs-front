export function convertDateFormat(dateString, fromFormat, toFormat) {
  const formatMap = {
    YYYY: 'year',
    MM: 'month',
    DD: 'day',
  };

  function extractDateParts(format, dateString) {
    const formatRegex = format
      .replace('YYYY', '(\\d{4})')
      .replace('MM', '(\\d{2})')
      .replace('DD', '(\\d{2})');

    const match = new RegExp(formatRegex).exec(dateString);
    if (!match) {
      throw new Error('Invalid date or format');
    }

    return {
      year: match[format.indexOf('YYYY') / 2 + 1],
      month: match[format.indexOf('MM') / 2 + 1],
      day: match[format.indexOf('DD') / 2 + 1],
    };
  }

  const { year, month, day } = extractDateParts(fromFormat, dateString);

  const date = new Date(year, month - 1, day); // JavaScript months are 0-based

  if (isNaN(date.getTime())) {
    return 'Invalid date';
  }

  return toFormat
    .replace('YYYY', date.getFullYear())
    .replace('MM', String(date.getMonth() + 1).padStart(2, '0'))
    .replace('DD', String(date.getDate()).padStart(2, '0'));
}
