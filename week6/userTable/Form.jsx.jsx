import { useForm } from "react-hook-form"
import { useState } from "react";

function FormDemo(){

    const {register, //to register form fields
        handleSubmit, //to handle form submission
        formState:{errors} //to handle validations
    }=useForm();
    const [List,setList]= useState([])  


    //on submit function
    const onFormSubmit=(obj)=>{
    
        setList([...List,obj])
    };

    return (
    <div>
        <div className="bg-orange-500  text-black">
            <h1 className="text-center text-5xl">Create User Form</h1>
           
            <form className="max-w-md mx-auto mt-12" onSubmit={handleSubmit(onFormSubmit)}>
              <div className="mb-3">
                <label htmlFor="Firstname">FirstName</label>
                <input type="text" {...register("Firstname",
                    {
                        required:"Username Required",
                        minLength:6,
                        maxLength:12,
                        validate:(value)=>value.trim().length!==0 || "White space is not valid"
                    }
                )} 
                id="Firstname" className="border w-full p-3 bg-amber-50"/>

                {errors.Firstname?.type==="required" && <p className="text-red-600">{errors.Firstname.message}</p>}
                {errors.Firstname?.type==="minLength" && <p className="text-red-600">Min length of username is 6</p>}
                {errors.Firstname?.type==="maxLength" && <p className="text-red-600">Username is too long</p>}
                {errors.Firstname?.type==="validate" && <p className="text-red-600">White space is not valid</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input type="text" {...register("email",
                       { required:"email is required" }
                )} id="email" autoComplete="enter email..?" className="border w-full p-3 bg-amber-50"/>

                {errors.email?.type=="required" && <p className="text-red-600">email is to be filled</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="dob">DateOfBirth</label>
                <input type="date"{...register("dob",
                    { required:"enter date to continue" }
                )}
                id="dob" className="border w-full p-3 bg-amber-50"/>
            </div>

            {/* remove onClick - handleSubmit on form already handles submission */}
            <button type="submit" className="bg-red-400 block mx-auto p-2">Add User</button>
            </form>
        </div>

    {/* table to display list  */}
       <div>
    <table className="mt-5 mx-auto text-3xl border-2 border-collapse">
        <thead className="border-2">
            <tr>
                <th className="border-2 px-4 py-2">First name</th>
                <th className="border-2 px-4 py-2">Email</th>
                <th className="border-2 px-4 py-2">Date of Birth</th>
            </tr>
        </thead>
        <tbody>
            {List.map((Obj, index) => (
                <tr key={index}>
                    <td className="border-2 px-4 py-2">{Obj.Firstname}</td>
                    <td className="border-2 px-4 py-2">{Obj.email}</td>
                    <td className="border-2 px-4 py-2">{Obj.dob}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

     </div>
    )
}

export default FormDemo