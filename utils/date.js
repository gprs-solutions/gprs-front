export function convertDateFormat(date) {
  try {
    if (date === null) {
      return ""
    }
    const dateObj = new Date(date)
    return dateObj.toLocaleDateString();
  } catch (err) {
    return false;
  }
}
