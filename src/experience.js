// Single source of truth for the current role's start date.
export const EXPERIENCE_START = { year: 2025, month: 2 };
export const EXPERIENCE_START_LABEL = "Feb 2025";

export const getExperienceDuration = (
  startYear = EXPERIENCE_START.year,
  startMonth = EXPERIENCE_START.month
) => {
  const today = new Date();
  const startDate = new Date(startYear, startMonth - 1, 1);

  let totalMonths =
    (today.getFullYear() - startDate.getFullYear()) * 12 +
    (today.getMonth() - startDate.getMonth());

  if (today.getDate() < startDate.getDate()) {
    totalMonths -= 1;
  }

  if (totalMonths < 0) {
    totalMonths = 0;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years > 0 && months > 0) {
    return `${years}y ${months}m`;
  }

  if (years > 0) {
    return `${years}y`;
  }

  return `${months}m`;
};
