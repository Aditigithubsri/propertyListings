import React from "react";

function ListingCard({ listing }) {
  return (
    <div className="listing-list">
    {listing.map((listing, index) => (
      <div className="card" key={index}>
        <img src={listing.image} alt={`Image for ${listing.address}`} className="card-image" />
        <div className="card-content">
          <h3>{listing.address}</h3>
          <p>
            <strong>Date:</strong> {listing.date} <br />
            <strong>Time:</strong> {listing.time} <br />
            <strong>Price:</strong> ${listing.price} <br />
            <strong>Highlights:</strong> {listing.highlights}
          </p>
          <div>
            <strong>Agent:</strong> {listing.agent.name} <br />
            <strong>Phone:</strong> {listing.agent.phone} <br />
            <strong>Email:</strong> {listing.agent.email}
          </div>
        </div>
      </div>
    ))}
  </div>
  
  );
}

export default ListingCard;
