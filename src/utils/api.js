import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";
const params = {
  key: 'AIzaSyAxH0PS_iHpMigT8iTwJuuqB3wpDtE6ATQ',
  cx: '5227b2d6e17204c71'
}
export const fetchDataFromApi = async (payLoad) => {
    const { data } = await axios.get(BASE_URL, {
      params: { ...params, ...payLoad }
    })
    return data;
  };
