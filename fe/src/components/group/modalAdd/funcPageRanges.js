export const generatePageRanges = () => {
  const ranges = [];
  for (let i = 1; i <= 601; i += 4) {
    const start = i;
    const end = Math.min(i + 3, 604);
    ranges.push({ start, end });
  }
  return ranges;
};
