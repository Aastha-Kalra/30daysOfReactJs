export const ROOMS_DATA = Array(15)
  .fill(null)
  .map((_, index) => ({
    id: index,
    cost: Math.floor(Math.random() * 22) + 1,
    isReserved: false,
  }));

export const USER_DATA = {
  lastName: 'Mr. Kalra',
  credits: Math.floor(Math.random() * 25) + 5,
};