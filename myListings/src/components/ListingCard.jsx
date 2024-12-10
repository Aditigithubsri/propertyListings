import React from "react";

function ListingCard({ listing }) {
  return (
    <div className="listing-card">
      <h2>{listing.address}</h2>
      <p><strong>Date:</strong> {listing.date}</p>
      <p><strong>Time:</strong> {listing.time}</p>
      <p><strong>Price:</strong> {listing.price}</p>
      <p><strong>Highlights:</strong> {listing.highlights}</p>
      <div>
        <h3>Agent Information:</h3>
        <p><strong>Name:</strong> {listing.agent.name}</p>
        <p><strong>Phone:</strong> {listing.agent.phone}</p>
        <p><strong>Email:</strong> {listing.agent.email}</p>
      </div>
    </div>
  );
}

export default ListingCard;
