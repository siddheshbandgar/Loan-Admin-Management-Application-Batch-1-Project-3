import axios from 'axios';

const ITEMS_BASE_REST_API_URL = 'http://localhost:8080/api/v1/items';

class ItemService{
    getAllItems(){
        return axios.get(ITEMS_BASE_REST_API_URL);
    }

    createItem(item){
        return axios.post(ITEMS_BASE_REST_API_URL, item)
    }

    getItemById(id){
        return axios.get(ITEMS_BASE_REST_API_URL + '/' + id);
    }

    updateItem(id, item){
        return axios.put(ITEMS_BASE_REST_API_URL+'/'+id, item);
    }

    deleteItem(id){
        return axios.delete(ITEMS_BASE_REST_API_URL+'/'+id);
    }
}

export default new ItemService();