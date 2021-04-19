export const calculateCompletedPercent = (completed: any, total: any) => {
  if (total === 0) {
    return '0';
  }
  return ((completed / total) * 100).toFixed(0);
};
