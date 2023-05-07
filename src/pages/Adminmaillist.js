import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from "axios";

const Adminmaillist = () => {

    let [emailList, setEmailList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/allsubemail");
        setEmailList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  
  //To delete one entry
  const deleteemail = async (id, e) => {
    
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this entry?")) {
      try {
        // const response = 
        await axios.delete(`/deletesubemail/${id}`);
        alert("Entry Deleted");
        window.location.reload();
      } catch (error) {
        console.log(error);
        alert("Error deleting Email");
      }
    }
  };
  return (
    <div>

<table className="table table-striped table-hover mt-3">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Operations</th>
        </tr>
        </thead>

        <tbody>
          {emailList.map((value, index) => (
            <tr key={index}>
              <td className='align-middle'>{index+1}</td>
              <td className='align-middle'>{value.user}</td>
              <td className='align-middle'>{value.email}</td>
              <td className='align-middle'>
              
                <button className='btn btn-danger' id='delete_button' onClick={(e) => deleteemail(value._id, e)} title='Delete'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default Adminmaillist
