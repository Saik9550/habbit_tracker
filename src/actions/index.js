import { v4 as uuidv4 } from "uuid";

export const ADD_HABBITS = 'ADD_HABBITS';
export const DELETE_HABBITS = 'DELETE_HABBITS';
export const UPDATE_HABIT_STATUS='UPDATE_HABIT_STATUS';
export const SET_HABIT_STATUS='SET_HABIT_STATUS'

export const addHabbits=(task) =>{

    return {
      type: ADD_HABBITS,
      payload:{
        id:uuidv4(),
        taskname:task,
        
       
      
      }
    };
  }

  export const deletehabbit = (id) =>{
    console.log(id)
    return{
        type: DELETE_HABBITS,
        
        id
    }
}

export const setinitialstatus=(habitId, date,status)=>{
  return {
    type: SET_HABIT_STATUS,
    payload: {
      habitId,
      date,
      status
    }
  }
}

export const updateStatus = (habitId, date, status) => {
  console.log("updateStatus called with parameters: habitId=", habitId, "date=", date, "status=", status);
  return {
    type: UPDATE_HABIT_STATUS,
    payload: {
      habitId,
      date,
      status
    }
  }
}

