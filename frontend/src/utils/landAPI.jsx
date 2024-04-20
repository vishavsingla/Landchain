import axios from "axios";

const API_URL = "http://localhost:3000/land";

export const getUserLands = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}/all`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getOneLand = async (vehicleId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}/${vehicleId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addLand = async (land) => {
  try {
    const response = await axios.post(`${API_URL}/create`, land);
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateLand = async (userId, LandId, land) => {
  try {
    const response = await axios.post(
      `${API_URL}/${userId}/${vehicleId}`,
      vehicle
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// export const deleteVehicle = async (userId, vehicleId) => {
//     try {
//         const response = await axios.post(
//             `${API_URL}/${userId}/vehicles/${vehicleId}`
//         );
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };
