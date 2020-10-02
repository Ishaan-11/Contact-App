import React from "react";
import Card from "./Card";
import Contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact){
  return(
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}
function App() {
  return (
    <div>
        <h1 className="heading">My Contacts</h1>
        <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCd8uzUORlwWw-Z_tM_k1Co0dtChFnmtM4lw&usqp=CAU"  />
        {Contacts.map(createCard)}
    </div>
  );
}

export default App;
