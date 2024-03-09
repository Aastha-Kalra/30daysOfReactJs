import React, { useState } from "react";
import Room from "./Room";
import Sidebar from "./Sidebar";
import { USER_DATA } from "./utils";
import { ROOMS_DATA } from "./utils";
const RoomBooking = () => {
  const [user, setUser] = useState(USER_DATA);
  const [bookedRooms, setBookedRooms] = useState([]);
  const [roomData, setRoomData] = useState(ROOMS_DATA);
  const handleRoomClick = (room) => {
    if (!room.isReserved && room.cost <= user.credits) {
      setUser((prevUser) => ({
        ...prevUser,
        credits: prevUser.credits - room.cost,
      }));
      setBookedRooms((prevRooms) => [...prevRooms, room]);
      setRoomData((prevRooms) =>
        prevRooms.map((item) =>
          item.id === room.id ? { ...item, isReserved: true } : item
        )
      );
    }
  };

  // available rooms
  const availableRooms = roomData.filter(
    (room) => !room.isReserved && room.cost <= user.credits
  );
  return (
    <div className="flex mx-9 my-5 w-full">
      <div className="grid grid-cols-3 gap-6 w-full ">
        {roomData.map((room) => {
          return (
            <div>
              <Room
                room={room}
                credits={user.credits}
                onroomClick={handleRoomClick}
              />
            </div>
          );
        })}
      </div>

      <Sidebar
        bookedRooms={bookedRooms}
        user={user}
        availableRooms={availableRooms}
      />
    </div>
  );
};

export default RoomBooking;
