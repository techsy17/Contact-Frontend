import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import './index.css'
import Api from "./Api";

const ContactList = (props)=>{

    const contact = props.contact;
    const title = props.title;
    const navigateRedirect = useNavigate();

   const { data, isPending, error } = useFetch("/contacts");

if (isPending) return <p>Loading...</p>;
if (error) return <p>{error}</p>;


const handleUpdateContact = (contactId)=>{
    try {
        navigateRedirect(`/edit/${contactId}`)
        
    } catch (error) {
        console.error(err.message);
    }
}

const handleDeleteContact = async(contactId)=>{
    try {
        await Api(`contact/${contactId}`,{
            method: "DELETE"
        });
        console.log("Contact Deleted Successfully");
        navigateRedirect('/');
    } catch (err) {
        console.error(err.message);
    }
}


return (
  <>
    {data.map(contact => (
      <div key={contact._id}>
        <Link to={`/contact/${contact._id}`}>
        <h1>{contact.name}</h1>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        </Link>
        <button onClick={()=>handleUpdateContact(contact._id)}>Edit</button>
        <button onClick={()=>handleDeleteContact(contact._id)}>Delete</button>
      </div>
    ))}
  </>
);

}

export default ContactList;