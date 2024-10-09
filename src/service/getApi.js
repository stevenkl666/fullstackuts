import axios from "axios";

// MENU API
export const getAItem= () => {
    return axios.get('http://localhost:3001/Item')
    .then(response => response)
}

export const createItem = async (a) => {
    try {
      const response = await axios.post('http://localhost:3001/Item/create', a);
      return response;
    } catch (error) {
      throw error;
    }
  };

export const updateItem = async (data, id) => {
    return await axios.put(`http://localhost:3001/Item/update/` + id, data)
    .then(res => res.data)
}

export const deleteItem = async (id) => {
    return await axios.delete(`http://localhost:3001/Item/delete/${id}`)
    .then(res => res.data)
}