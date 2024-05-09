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
    const roomIndex = roomData.findIndex((r) => r.id === room.id);
    const updatedRoomData = [...roomData];

    if (!room.isReserved && room.cost <= user.credits) {
      // Reserve the room
      updatedRoomData[roomIndex] = { ...room, isReserved: true };
      setBookedRooms((prevRooms) => [...prevRooms, room]);
      setUser((prevUser) => ({
        ...prevUser,
        credits: prevUser.credits - room.cost,
      }));
    } else {
      // Unreserve the room
      updatedRoomData[roomIndex] = { ...room, isReserved: false };
      setBookedRooms((prevRooms) => prevRooms.filter((r) => r.id !== room.id));
      setUser((prevUser) => ({
        ...prevUser,
        credits: prevUser.credits + room.cost,
      }));
    }

    setRoomData(updatedRoomData);
  };

  // available rooms
  const availableRooms = roomData.filter(
    (room) => !room.isReserved && room.cost <= user.credits
  );
  return (
   <div className="flex flex-col justify-center items-center my-4 p-2">
    <div className="text-white  border-b-2 w-full my-4">Book A Room!!</div>
    <div className="flex md:flex-row flex-col my-5 w-full">
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-6 mx-2 md:mx-0  w-full ">
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
   </div>
  );
};

export default RoomBooking;
