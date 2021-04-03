/**
 * Return completed percent
 * @param {number} completed - Number of completed tasks.
 * @param {number} total - Total number of tasks.
 * @returns {string} - Percent of completed on total, rounded to whole number.
 */

export const calculateCompletedPercent = (completed, total) =>
  ((completed / total) * 100).toFixed(0);
