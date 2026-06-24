import axios from "axios";

const API = `${process.env.REACT_APP_API_URL}/api/videos`;

export const getVideos = async (
  search = ""
) => {
  const res = await axios.get(
    `${API}/all?search=${search}`
  );

  return res.data;
};

export const getVideo = async (id) => {
  const res = await axios.get(`${API}/${id}`);
  return res.data;
};