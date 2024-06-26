import React, { useState } from "react";

const Expense = () => {
  const [expense, setExpense] = useState([]);
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [total, setTotal] = useState(0);
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (amount.trim() !== "") {
      const expenses = {
        amount: parseInt(amount),
        description: description,
        id: expense.length,
        date:new Date().toLocaleDateString()
      };


      setExpense([...expense, expenses]);
      setTotal(total + expenses.amount);
      setAmount("");
      setDescription("");
    } else {
      alert("Enter the values first");
    }
  };

  const HandleDelete = (id) => {
    const filteredExpense = expense.filter((ex) => ex.id !== id);
    const UpdatedTotal = expense.find((ex) => ex.id === id);
    if (UpdatedTotal) {
      setTotal(total - UpdatedTotal.amount);
    }
    setExpense(filteredExpense);
  };

  return (
    <div className="bg-black min-h-screen text-white text-xl flex flex-col justify-center items-center gap-12 ">
      <div>
        <label htmlFor="">Amount</label>
        <input
          inputMode="number"
          name=""
          id=""
          style={{}}
          className="text-black mx-4 bg-slate-300 focus:outline-none rounded-md p-2"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="flex items-start">
        <label htmlFor="" className="text-start">Description</label>
        <textarea
        rows={3}
        cols={25}
          className="text-black mx-4 bg-slate-300 focus:outline-none rounded-md p-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <button className="bg-sky-500 px-4 py-2" onClick={HandleSubmit}>
          Submit{" "}
        </button>
      </div>

      <div>
        <table>
          <tr className="border-2">
            <th className="border-2 px-2">Expense Amount</th>
            <th className="border-2 px-2">Expense Description</th>
            <th>Date</th>
          </tr>

          {expense.map((ex) => {
            return (
              <>
                <tr>
                  <td className="px-4">{ex.amount}</td>
                  <td className="px-4">{ex.description}</td>
                  <td className="px-4">{ex.date}</td>
                  <td
                    className="cursor-pointer"
                    onClick={() => HandleDelete(ex.id)}
                  >
                    Delete
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </div>

      <div>
        <h2>Total amount spent : ${total} </h2>
      </div>
    </div>
  );
};

export default Expense;
