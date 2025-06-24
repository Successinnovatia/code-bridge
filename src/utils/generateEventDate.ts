export function getFutureDate(offsetInDays: number): string {
  const date = new Date();
  date.setDate(date.getDate() + offsetInDays);
  return date.toISOString().split('T')[0];; // or use toLocaleDateString() if needed
}
