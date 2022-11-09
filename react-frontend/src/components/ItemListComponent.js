import { Button } from 'bootstrap';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ItemService from '../services/ItemService';

function ItemListComponent() {


    const [items, setItems] = useState([]);


    useEffect(() => {
      
        getAllItems();

    }, [])
    
    const getAllItems = () =>{
        ItemService.getAllItems()
          .then((response) => {
            setItems(response.data);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    }

    const deleteItem = (id) =>{
        // console.log(id);

        ItemService.deleteItem(id).then((response) =>{
            getAllItems();
        }).catch(e=>{
            console.log(e);
        })
    }

    return (
      <div className="container">
        <h2 className='text-center'>Item Master Data Details</h2>
        <Link to='/add-item' className='btn btn-primary mb-2'>Add Item</Link>
        <table className="table table-bordered table-striped">
          <thead>
            <th>Item Id</th>
            <th>Description</th>
            <th>Issue Status</th>
            <th>Item Make</th>
            <th>Item Category</th>
            <th>Item Valuation</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.item_id}>
                <td>{item.item_id}</td>
                <td>{item.description}</td>
                <td>{item.issue_status}</td>
                <td>{item.item_make}</td>
                <td>{item.item_category}</td>
                <td>{item.item_valuation}</td>
                <td>
                    <Link className='btn btn-light' to={`/edit-item/${item.item_id}`}>Update</Link>
                    <button className='btn btn-dark' onClick={()=>deleteItem(item.item_id)}
                    style = {{marginLeft:"10px"}}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default ItemListComponent