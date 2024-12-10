import React from "react";
import "../styles/ListingList.css";

function ListingList({ listings }) {
  const handleAddDate = (address) => {
    alert(`Add date functionality for ${address} coming soon!`);
    // Add your logic here for adding a date
  };

  return (
    <div className="listing-list">
      {listings.map((listing, index) => (
        <div className="listing-card" key={index}>
          <h2>{listing.address}</h2>
          <p>
            <strong>Date:</strong> {listing.date}
          </p>
          <p>
            <strong>Time:</strong> {listing.time}
          </p>
          <p>
            <strong>Price:</strong> ${listing.price}
          </p>
          <p>
            <strong>Highlights:</strong> {listing.highlights}
          </p>
          <p>
            <strong>Agent:</strong> {listing.agent.name} - {listing.agent.phone}
          </p>
          <button
            className="add-date-btn"
            onClick={() => handleAddDate(listing.address)}
          >
            + Add Date
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListingList;
