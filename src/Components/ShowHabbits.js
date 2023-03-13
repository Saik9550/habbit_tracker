// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addHabbits, deletehabbit } from "../actions"
import "../index.css"

const ShowHabbits = () => {
  const [inputTask, setInputTask] = useState("")
  const habbits = useSelector((state) => state.Habbits.habbits);

  // const habbitsss = useSelector((state) => state.Habbits.habitStatus)
  // console.log("habitstatus from redux"+habbitsss)
  
  // console.log("hello")
  const dispatch = useDispatch()

  

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter Task Details"
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
          />
          

          <button
            type="button"
            onClick={() => {dispatch(addHabbits(inputTask)); setInputTask("")}}
          >
            Add The Task
          </button>
        </form>
      </div>

      <div>
        <h1>MY HABBITS</h1>

        <ul>
          {habbits.map((habit) => (
            <div key={habit.id} className="habbits">
             
              <h5>{habit.taskname}</h5>
             
              
              <h4 className="datetag">{habit.date}</h4>
              {/* <p>{habit.id}</p> */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                alt="deleteicon"
                className="editImage"
                onClick={() => dispatch(deletehabbit(habit.id))}
              />

              {/* <select name ="Status">
                <option value="done">DONE</option>
                <option value="none">NONE</option>
                <option value="not done">NOT DONE</option>
                
              </select> */}
            </div>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ShowHabbits
