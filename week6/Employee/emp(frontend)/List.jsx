import { useState, useEffect } from "react";
import { useNavigate } from "react-router"
import axios from'axios'

function List() {
  const [emps, setEmps] = useState([]);
  const navigate=useNavigate()

  const gotoEmp =(empObj)=>{
    //navigate to employee
    navigate("/employee", { state: empObj })
  }

  const gotoEdit =(empObj)=>{
    navigate("/edit-emp",{state:empObj})
  }
 

  const deleteid = async(empObj)=>{
    let res = await axios.delete(`http://localhost:2525/emp-api/employees/${empObj._id}`)
    if(res.status === 200)
        getEmps()
    }

   async function getEmps() {
      let res = await fetch("http://localhost:2525/emp-api/employees");
      if (res.status === 200) {
        let resObj = await res.json();
        setEmps(resObj.payload);
      }
  }
  

 useEffect(() => {
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5">
            <p>{empObj.email}</p>
            <p>{empObj.name}</p>
            <div className="flex p-5   justify-around ">
                <button onClick= {()=>gotoEmp(empObj)} className=" bg-amber-300 rounded-2xl text-1xl p-3">View</button>
                <button onClick= {()=>gotoEdit(empObj)} className=" bg-green-300 rounded-2xl text-1xl p-3">Edit</button>
                <button onClick= {()=>deleteid(empObj)}className=" bg-cyan-300 rounded-2xl text-1xl p-3">Delete</button>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;