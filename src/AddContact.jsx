import { useState } from "react";
import Api from "./Api";
import { useNavigate } from "react-router-dom";

const AddContact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState();
    const navigateRedirect = useNavigate();

    const handleAddContact = (e) => {

        e.preventDefault();
        const contact = { name, email, phone };
        setIsPending(true);

        Api('/add', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        })
            .then(() => {
                console.log(contact);
                console.log("Contact Added Successfully");
                navigateRedirect('/');
            })
            .catch(error => {
                setError(error);
                console.log(error.messgae);
            })
    }


    return (
        <div className="addContact">
            <h1>Add Contact</h1>

            <form onSubmit={handleAddContact}>
                <label>Name: </label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />

                <label>Email: </label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>PhoneNumber: </label>
                <input type="text" required value={phone} onChange={(e) => setPhone(e.target.value)} />

                <button>Add Contact</button>
            </form>

        </div>
    )
}

export default AddContact;