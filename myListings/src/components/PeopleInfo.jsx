import React, { useState } from "react";
import PeopleInfoCard from "./PeopleInfoCard";

const Listings = () => {
  const [people, setPeople] = useState([
    {
      name: "Brittany Avale",
      contact: "(310) 854-8212",
      email: "brittany@itzsoist.com",
      options: ["Remove Agent"],
    },
    {
      name: "John Doe",
      contact: "(310) 555-1234",
      email: "john.doe@example.com",
      options: ["Remove Agent"],
    },
    {
      name: "Alice Smith",
      contact: "(310) 987-6543",
      email: "alice.smith@example.com",
      options: ["Remove Agent"],
    },
  ]);

  return (
    <div className="people-info-list">
      {people.map((person, index) => (
        <PeopleInfoCard
          key={index}
          name={person.name}
          contact={person.contact}
          email={person.email}
          options={person.options}
        />
      ))}
    </div>
  );
};

export default Listings;
