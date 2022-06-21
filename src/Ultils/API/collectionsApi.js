import instance from "../../Helpers/axios";

const getCollections = async (linkAPI) => {
  const res = await instance.get(linkAPI);
  return res.data;
};

const getCollection = async (collectionID) => {
  const res = await instance.get(`api/categories/${collectionID}`);
  return res.data;
};

export { getCollections, getCollection };
