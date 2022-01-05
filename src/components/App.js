import Contacts from './contacts'
import Card from './card'



function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {Contacts.map(contact => <Card key={contact.id} id={contact.id} name={contact.name} imgURL={contact.imgURL} phone={contact.phone} email={contact.email} />)}
    </div> 
  );
}

export default App;
