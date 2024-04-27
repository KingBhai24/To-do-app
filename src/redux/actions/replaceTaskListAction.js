export const replaceTaskListAction = (state, action) => {
  const {taskList} = action.payload;
  return [...taskList];
};
