import React from "react";
const Sidebar = ({ user, bookedRooms, availableRooms }) => {
  const available = availableRooms.length;
  return (
    <div className=" bg-slate-900 p-4 md:p-14 w-full md:w-3/4 mx-4 mt-5 text-yellow-500 text-xl">
      <div className="flex gap-2">
        Hello,
        <p>
          {user.firstName} &nbsp;
          {user.lastName}
        </p>
      </div>
      Available Credits : {user.credits} <br />
      Available Rooms :{available}
      <div>
        Reserved Rooms :
        <table className="mt-3 border-4 border-orange-500 p-4 w-full">
          <tr>
            <th className=" px-4">Room Number</th>
            <th className=" px-4">Room Cost</th>
          </tr>

          {bookedRooms.map((room) => {
            return (
              <tbody className="mt-3 border-4 border-orange-500 shadow-inner shadow-slate-200 ">
                <tr>
                  <td className="border-4 text-center py-2 border-orange-500 ">
                    {room.id + 1}
                  </td>
                  <td className="border-2 text-center">$ {room.cost}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Sidebar;
