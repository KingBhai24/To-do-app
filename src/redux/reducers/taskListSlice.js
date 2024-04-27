import {createSlice} from '@reduxjs/toolkit';
import {
  replaceTaskListAction,
  addTaskAction,
  updateTaskCompletedAction,
  removeTaskAction,
} from '../actions';

const initialState = [];

const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    replaceTaskList: replaceTaskListAction,
    addTask: addTaskAction,
    updateTaskCompleted: updateTaskCompletedAction,
    removeTask: removeTaskAction,
  },
});

export const {replaceTaskList, addTask, updateTaskCompleted, removeTask} =
  taskListSlice.actions;
export default taskListSlice.reducer;

export const selectTaskList = state => state.taskList;
