export const addTaskAction = (state, action) => {
  const {modifiedDate, date, title, priority, completed} = action.payload;
  const existingDateIndex = state.findIndex(
    item => item.modifiedDate === modifiedDate,
  );
  if (existingDateIndex !== -1) {
    state[existingDateIndex].taskList.push({
      date,
      title,
      priority,
      completed,
    });
  } else {
    state.push({
      modifiedDate,
      taskList: [{date, title, priority, completed}],
    });
  }
};
