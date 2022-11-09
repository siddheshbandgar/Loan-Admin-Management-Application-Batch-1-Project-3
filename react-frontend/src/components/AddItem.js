import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ItemService from "../services/ItemService";

const AddItem = () => {
  const [item_id, setItemId] = useState("");
  const [description, setDescription] = useState("");
  const [issue_status, setIssueStatus] = useState("Y");
  const [item_make, setItemMake] = useState("Wooden");
  const [item_category, setItemCategory] = useState("Furniture");
  const [item_valuation, setItemValuation] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateItem = (e) => {
    e.preventDefault();

    const item = {
      item_id,
      description,
      issue_status,
      item_make,
      item_category,
      item_valuation,
    };
    console.log(item);
    if (id) {
      ItemService.updateItem(id, item)
        .then((response) => {
          
          navigate("/items");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      ItemService.createItem(item)
        .then((response) => {
          console.log(response.data);

          navigate("/items");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    console.log(item);
  };

  useEffect(() => {
    ItemService.getItemById(id)
      .then((response) => {
        setItemId(response.data.item_id);
        setDescription(response.data.description);
        setIssueStatus(response.data.issue_status);
        setItemMake(response.data.item_make);
        setItemCategory(response.data.item_category);
        setItemValuation(response.data.item_valuation);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Item</h2>;
    } else {
      return <h2 className="text-center">Add Item</h2>;
    }
  };

  return (
    <div>
      <br />
      <br />
      <div className="container" style={{ marginBottom: "30px" }}>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            {/* <h2 className="text-center">Add Item</h2> */}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> Item Id :</label>
                  <input
                    type="text"
                    placeholder="Enter item id"
                    name="item_id"
                    className="form-control"
                    value={item_id}
                    onChange={(e) => setItemId(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Description :</label>
                  <input
                    type="text"
                    placeholder="Enter description"
                    name="description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Issue Status: </label>
                  <br></br>
                  {/* <input
                    type="text"
                    placeholder="Enter Designation"
                    name="designation"
                    className="form-control"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  ></input> */}

                  <select
                    onChange={(e) => setIssueStatus(e.target.value)}
                    value={issue_status}
                  >
                    <option value="Y">Y</option>
                    <option value="N">N</option>
                  </select>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Item Make :</label>
                  <br></br>

                  <select
                    onChange={(e) => setItemMake(e.target.value)}
                    value={item_make}
                  >
                    <option value="wooden">Wooden</option>
                    <option value="glass">Glass</option>
                    <option value="plastic">Plastic</option>
                  </select>
                  {/* <input
                    type="text"
                    placeholder="Enter department"
                    name="department"
                    className="form-control"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  ></input> */}
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Item Category :</label>
                  <br></br>

                  <select
                    onChange={(e) => setItemCategory(e.target.value)}
                    value={item_category}
                  >
                    <option value="furniture">Furniture</option>
                    <option value="crockery">Crockery</option>
                    <option value="stationary">Stationary</option>
                  </select>
                  {/* <input
                    type="dropdown"
                    placeholder="Enter gender"
                    name="gender"
                    className="form-control"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  ></input> */}
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Item Valuation :</label>
                  <input
                    type="number"
                    placeholder="Enter Item Valuation"
                    name="item_valuation"
                    className="form-control"
                    value={item_valuation}
                    onChange={(e) => setItemValuation(e.target.value)}
                  ></input>
                </div>

                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateItem(e)}
                >
                  Submit{" "}
                </button>
                <Link to="/items" className="btn btn-danger">
                  {" "}
                  Cancel{" "}
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default AddItem;
