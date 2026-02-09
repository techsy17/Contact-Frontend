import ContactList from "./ContactList";
import useFetch from "./useFetch";
import './index.css'

const Home = ()=>{

    const {data: contact,isPending,error} = useFetch('/contacts');

    return(

        <div className="home">
            
            {error && <div>{error}</div>}
            {isPending && <div> Loading... </div>}
            {contact && <ContactList contact={contact} title="All Contacts"/>}
            
        </div>
    )
}

export default Home;