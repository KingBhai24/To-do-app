export const updateTaskCompletedAction = (state, action) => {
  const {modifiedDate, date, completed} = action.payload;
  const modifiedDateIndex = state.findIndex(
    item => item.modifiedDate === modifiedDate,
  );

  if (modifiedDateIndex !== -1) {
    const dateIndex = state[modifiedDateIndex].taskList.findIndex(
      task => task.date === date,
    );

    if (dateIndex !== -1) {
      state[modifiedDateIndex].taskList[dateIndex].completed = completed;
    }
  }
};
