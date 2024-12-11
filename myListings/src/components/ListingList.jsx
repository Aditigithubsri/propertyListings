import React, { useState } from "react";
import "../styles/ListingList.css";

function ListingList({ listings }) {
  const [updatedListings, setUpdatedListings] = useState(listings);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedListingIndex, setSelectedListingIndex] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");

  const openModal = (index) => {
    setSelectedListingIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewDate("");
    setNewTime("");
  };

  const handleSaveDate = () => {
    if (newDate && newTime) {
      const updated = [...updatedListings];
      updated[selectedListingIndex] = {
        ...updated[selectedListingIndex],
        date: newDate,
        time: newTime,
      };
      setUpdatedListings(updated);
      closeModal();
      alert(`Date and time updated for ${updated[selectedListingIndex].address}`);
    } else {
      alert("Please provide both date and time.");
    }
  };

  return (
    <div className="listing-list">
      {updatedListings.map((listing, index) => (
        <div className="listing-card" key={index}>
          <h2>{listing.address}</h2>
          <p>
            <strong>Date:</strong> {listing.date || "N/A"}
          </p>
          <p>
            <strong>Time:</strong> {listing.time || "N/A"}
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
        </div>
      ))}

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Date and Time</h3>
            <label>
              Date (YYYY-MM-DD):
              <input
                type="date"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
              />
            </label>
            <label>
              Time (HH:MM):
              <input
                type="time"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
              />
            </label>
            <div className="modal-actions">
              <button onClick={handleSaveDate} className="save-btn">
                Save
              </button>
              <button onClick={closeModal} className="cancel-btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListingList;
