import { nanoid } from "nanoid";
import React from "react";
// import 
const header = ["first_name", "last_name", "Age", "contact", "email"];
export default function TableForm() {
  const [data, setData] = React.useState([
    { first_name: "", last_name: "", Age: "", contact: "", email: "", id: nanoid() },
  ]);
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const  pdateUser = data.map((user, i) => 
    index === i ? Object.assign(user, { [name]: value }) : user
    );
    console.log(pdateUser, "updateUser");
    setData(pdateUser);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    setData([
      ...data,
      { id:nanoid(),first_name: "", last_name: "", Age: "", contact: "", email: "" }
    ]);
  };
  console.log(data, "data");
const handleDelete = (e, id) => {
    e.preventDefault(); 
    let indexOfDelete = -1;
    let newData = data
    newData.forEach((user, index) => {
        if (user.id === id) {
            indexOfDelete = index;
            
        }
    });
    newData.splice(indexOfDelete, 1);
    console.log(newData, "newData");
    setData([...newData]);


    };
  return (
    <div>
      <table>
        <thead>
          <tr>
            {header.map((item, index) => {
              return <th key={index}>{item}</th>;
            })}
            <th onClick={handleAdd}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 && data.map((item, index) => {
            return (
              <tr key={item.id}>
                {header.map((item2, index2) => {
                  ///input
                  return (
                    <td key={index2}>
                      <input
                      key={index2}
                        type="text"
                        name={item2}
                        defaultValue={item[item2] || ""}
                        onChange={(e) => handleChange(e, index)}
                      />
                    </td>
                  );
                })}
                <td onClick={(e)=>handleDelete(e,item.id)}>Delete</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
