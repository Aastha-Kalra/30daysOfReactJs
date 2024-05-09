import React, { useState, useEffect } from "react";
const Room = React.memo(({ room, onroomClick, credits }) => {
  const [status, setStatus] = useState("");
  useEffect(() => {
    if (room.isReserved) {
      setStatus("#1ce8e4");
    } else if (room.cost > credits) {
      setStatus("red");
    } else {
      setStatus("#32e232");
    }
  }, [room.isReserved, room.cost, credits]);
  const BookRoom = () => {
    if (room.isReserved) {
      onroomClick(room); // Unreserve the room
    } else if (!room.isReserved && room.cost <= credits) {
      onroomClick(room); // Reserve the room
    }
  };

  return (
    <div
      className={`mt-6 ${status.toLowerCase()} ${
        room.isReserved ? "bg-green-600" : "bg-slate-600"
      }  justify-end items-end flex shadow-md shadow-orange-500`}
      onClick={BookRoom}
    >
      <div
        className={`w-44 h-44 bg-slate-900 p-4 rounded-sm flex flex-col justify-center items-center font-semibold text-md cursor-pointer`}
      >
        <p className="text-white">R : {room.id + 1}</p>
        <p className="text-white">Cost: {room.cost}</p>
        <p className={`text-center`} style={{ color: status }}>
          Status:{" "}
          {room.isReserved
            ? "Reserved"
            : room.cost > credits
            ? "Not enough credits"
            : "Available"}
        </p>{" "}
      </div>
    </div>
  );
});

export default Room;
