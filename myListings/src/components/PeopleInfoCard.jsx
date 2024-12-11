import React from "react";

const PeopleInfoCard = ({ name, contact, email, options }) => {
  return (
    <div className="people-info-card">
      <h3>{name}</h3>
      <p>
        <strong>Contact:</strong> {contact} <br />
        <strong>Email:</strong> {email}
      </p>
      {options && options.length > 0 && (
        <ul>
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PeopleInfoCard;
