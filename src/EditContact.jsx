import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Api from "./Api";

const EditContact = ()=>{

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const {id} = useParams();
    const navigateRedirect = useNavigate();

    useEffect(() => {
    const getContactData = async () => {
      try {
        const contact = await Api(`/contact/${id}`, { method: "GET" });
        setName(contact.name);
        setEmail(contact.email);
        setPhone(contact.phone);
      } catch (err) {
        console.error(err.message);
      }
    };

    getContactData();
  }, [id]);

    const handleUpdate = async(e)=>{

        e.preventDefault();

       const contactData = {name,email,phone};
        await Api(`/contact/${id}`,{
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactData)
        })
        .then(()=>{
             console.log("Contact Updated Successfully");
                navigateRedirect('/')
        })

        
    }

    return (
        <div className="addContact">
            <h1>Edit Contact</h1>

            <form>
                <label>Name: </label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />

                <label>Email: </label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>PhoneNumber: </label>
                <input type="text" required value={phone} onChange={(e) => setPhone(e.target.value)} />

                <button onClick={handleUpdate}>Update Contact</button>
            </form>

        </div>
    )
}

export default EditContact;