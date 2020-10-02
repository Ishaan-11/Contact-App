import React from "react";
import Card from "./Card";
import Contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
        <h1 className="heading">My Contacts</h1>
        <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCd8uzUORlwWw-Z_tM_k1Co0dtChFnmtM4lw&usqp=CAU" />
        <Card
          name={Contacts[0].name}
          img={Contacts[0].imgURL}
          tel={Contacts[0].phone}
          email={Contacts[0].email}
        />
        <Card
          name={Contacts[1].name}
          img={Contacts[1].imgURL}
          tel={Contacts[1].phone}
          email={Contacts[1].email}
        />
        <Card
          name={Contacts[2].name}
          img={Contacts[2].imgURL}
          tel={Contacts[2].phone}
          email={Contacts[2].email}
        />
    </div>
  );
}

export default App;
