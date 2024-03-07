const ROOMS_DATA = Array(15)
  .fill(1)
  .map((index) => ({
    id: Math.floor(Math.random() * 10) + 1,
    cost: Math.floor(Math.random() * 15) + 10,
    isReserved: false,
    roomNumber: index,
  }));

const USER_DATA = {
  firstName: "Aastha",
  lastName: "Kalra",
  credits: Math.floor(Math.random() * 10) + 1,
};

export const fetchUserDetails = () => {
  return new Promise((resolve) => setInterval(() => resolve(USER_DATA), 1000));
};
export const fetchRoomDetails = () => {
    return new Promise((resolve) => setInterval(() => resolve(ROOMS_DATA), 1000));
  };
  
