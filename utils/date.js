export function convertDateFormat(date) {
  try {
    const dateObj = new Date(date)
    return dateObj.toLocaleDateString();
  } catch (err) {
    return false;
  }
}
