import instance from "../../Helpers/axios";

const createTask = async (data) => {
  let res = await instance.post("api/tasks", data);
  return res.data;
};

const getTasks = async (linkApi) => {
  const res = await instance.get(linkApi);
  return res.data;
};

const getTask = async (id) => {
  const res = await instance.get(`api/tasks/${id}`);
  return res.data;
};

const updateTask = async ({id, data}) => {
  const res = await instance.patch(`api/tasks/${id}`, data);
  return res.data;
};

const deleteTask = async (id) => {
  const res = await instance.delete(`api/tasks/${id}`);
  return res.data;
};

export { createTask, getTasks, getTask, updateTask, deleteTask };
