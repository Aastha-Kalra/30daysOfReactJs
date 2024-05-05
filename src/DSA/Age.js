const Age = (birthDate) => {
  let todayDate = new Date();
  birthDate = new Date(birthDate);
  let age = todayDate.getFullYear() - birthDate.getFullYear();
  let monthDiff = todayDate.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && todayDate.getMonth() < birthDate.getMonth())
  ) {
    age--;
  }
  return age;
};
console.log(Age("2002-11-29"));
