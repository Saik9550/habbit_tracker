import { useState } from "react";
import { useSelector } from "react-redux";

import "../PreviousUpdates.css";

const PreviousUpdates = () => {
  const habbits = useSelector((state) => state.Habbits.habbits);

  // Create a state to store the status of habits for each date
  const [status, setStatus] = useState(
    JSON.parse(localStorage.getItem("status")) || {}
  );
  
  console.log(status)

  // Generate an array of dates for the previous 6 days
  const dates = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    dates.push(d.toLocaleDateString());
  }

  // Handler function to update the status of a habit for a given date
  const handleStatusChange = (date, habitId, newStatus) => {
    // Make a copy of the current status state
    const newStatusState = { ...status };
  
    // Update the status for the given date and habit ID
    newStatusState[date] = newStatusState[date] || {};
    newStatusState[date][habitId] = newStatus;
  
    // Update the status state
    setStatus(newStatusState);
  
    // Store the status in localStorage
    localStorage.setItem("status", JSON.stringify(newStatusState));
  };
  

  return (
    <>
      <h1>My Status of Habbits</h1>
      <div className="tableContainer">
        {habbits.map((habit) => (
          <table className="tabledetails" key={habit.id}>
            <tbody>
              <tr className="taskName">
                <td className="habbitDetails" colSpan="7">
                  {habit.taskname}
                </td>
              </tr>
              <tr>
                {dates.map((date) => (
                  <th key={date}>{date}</th>
                ))}
              </tr>
              <tr>
                {dates.map((date) => (
                  <td key={date}>
                    <select
                      value={status[date]?.[habit.id] || "None"}
                      onChange={(e) =>
                        handleStatusChange(date, habit.id, e.target.value)
                      }
                    >
                      <option value="None">None</option>
                      <option value="Done">Done</option>
                      <option value="Undone">Undone</option>
                    </select>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        ))}
      </div>
      </>
      )
      }

      export default PreviousUpdates
