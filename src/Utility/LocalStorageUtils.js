export const getTaskListFromLocalStorage = () => {
    const taskList = localStorage.getItem('taskList');
    return taskList ? JSON.parse(taskList) : [];
  };
  
export const saveTaskListToLocalStorage = (taskList) => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
};
  