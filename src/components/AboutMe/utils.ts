export const calculateAge = (dateBirth: string): number => {
  const today = new Date();
  const birth = new Date(dateBirth);
  let age = today.getFullYear() - birth.getFullYear();
  const isBirthdayPassed =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() &&
      today.getDate() >= birth.getDate());

  if (!isBirthdayPassed) {
    age--;
  }
  return age;
};
