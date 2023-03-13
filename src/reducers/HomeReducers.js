import { ADD_HABBITS,DELETE_HABBITS,UPDATE_HABIT_STATUS,SET_HABIT_STATUS } from "../actions"


const initialState = {
  habbits: [],
  habitStatus: []
}


const Habbits=(state = initialState, action)=> {
  console.log(action)
  switch (action.type) {
    case ADD_HABBITS:
      // console.log(action.payload)
      const newHabbit = {
        id: action.payload.id,
        taskname: action.payload.taskname,
        status: "None"
      }
      return {
        ...state,
        habbits: [...state.habbits, newHabbit],
        habitStatus: [...state.habitStatus, { date: "", [newHabbit.id]: "None" }]
      }

    case DELETE_HABBITS:
      console.log(action.id)

      const newHabbitList = state.habbits.filter(
        (elem) => elem.id !== action.id
      )
      return {
        ...state,
        habbits: newHabbitList,
      }

      case SET_HABIT_STATUS:
        const setStatus = {
          id: action.payload.habitId,
          date: action.payload.date,
          status: action.payload.status
        }
        return {
          ...state,
          habbits: [...state.habbits],
          habitStatus: [...state.habitStatus, setStatus]
        }


      case UPDATE_HABIT_STATUS:
      // Update the status for the habit and date
      const { habitId, date, status } = action.payload
      console.log("Update is called")
      const index = state.habitStatus.findIndex(item => item.date === date) // Find the index of the status for this date
      console.log(index)
      const updatedStatus = { ...state.habitStatus[index], [habitId]: status } // Update the status for the habit
      const newHabitStatus = [...state.habitStatus] // Create a copy of the status array
      newHabitStatus[index] = updatedStatus // Replace the old status object with the updated one
      return {
        ...state,
        habitStatus: newHabitStatus
      }

    default:
      return state
  }
}

export default Habbits
