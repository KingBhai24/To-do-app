export const removeTaskAction = (state, action) => {
  const {modifiedDate, date} = action.payload;

  const modifiedDateIndex = state.findIndex(
    item => item.modifiedDate === modifiedDate,
  );

  if (modifiedDateIndex !== -1) {
    const dateIndex = state[modifiedDateIndex].taskList.findIndex(
      task => task.date === date,
    );

    if (dateIndex !== -1) {
      state[modifiedDateIndex].taskList.splice(dateIndex, 1);

      if (state[modifiedDateIndex].taskList.length === 0) {
        state.splice(modifiedDateIndex, 1);
      }
    }
  }
};
