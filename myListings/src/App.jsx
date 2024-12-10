import React, { useState } from "react";
import ListingList from "./components/ListingList";
import Navbar from "./components/Navbar";
import "./App.css";
import SelectSeries from "./components/SelectSeries";

function App() {
  const [listings, setListings] = useState([
    {
      address: "7742 REDLANDS STREET",
      date: "Sunday, Sep 29th",
      time: "2PM-4PM",
      price: "695,000",
      highlights: "Exp Realty Of Cantor 5824144572",
      agent: {
        name: "Brittany Avale",
        phone: "(310) 854-8212",
        email: "brittany@itzsoist.com",
      },
    },
    {
      address: "7745 REDLANDS STREET",
      date: "Sunday, Sep 29th",
      time: "2PM-4PM",
      price: "695,000",
      highlights: "Exp Realty Of Cantor 5824144572",
      agent: {
        name: "Brittany Avale",
        phone: "(310) 854-8212",
        email: "brittany@itzsoist.com",
      },
    },
    {
      address: "7746 REDLANDS STREET",
      date: "Sunday, Sep 29th",
      time: "2PM-4PM",
      price: "695,000",
      highlights: "Exp Realty Of Cantor 5824144572",
      agent: {
        name: "Brittany Avale",
        phone: "(310) 854-8212",
        email: "brittany@itzsoist.com",
      },
    },
    {
      address: "7748 REDLANDS STREET",
      date: "Sunday, Sep 29th",
      time: "2PM-4PM",
      price: "695,000",
      highlights: "Exp Realty Of Cantor 5824144572",
      agent: {
        name: "Brittany Avale",
        phone: "(310) 854-8212",
        email: "brittany@itzsoist.com",
      },
    },
    {
      address: "7749 REDLANDS STREET",
      date: "Sunday, Sep 29th",
      time: "2PM-4PM",
      price: "695,000",
      highlights: "Exp Beatty Of Cal",
      agent: {
        name: "Ed Kaminsky",
        phone: "(310) 307-2224",
        email: "eltzsold.com",
      },
    },
  ]);

  const [newListing, setNewListing] = useState({
    address: "",
    date: "",
    time: "",
    price: "",
    highlights: "",
    agent: { name: "", phone: "", email: "" },
  });

  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("agent.")) {
      const agentField = name.split(".")[1];
      setNewListing((prev) => ({
        ...prev,
        agent: { ...prev.agent, [agentField]: value },
      }));
    } else {
      setNewListing((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddListing = () => {
    setListings((prevListings) => [...prevListings, newListing]);
    setNewListing({
      address: "",
      date: "",
      time: "",
      price: "",
      highlights: "",
      agent: { name: "", phone: "", email: "" },
    });
    setShowForm(false);
  };

  return (
    <div className="App">
      <SelectSeries />
      <button
        className="add-listing-btn"
        onClick={() => setShowForm((prev) => !prev)}
      >
        {showForm ? "Close Form" : "+ Add New Listing"}
      </button>
      {showForm && (
        <div className="listing-form">
          <h2>Add New Listing</h2>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={newListing.address}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="date"
            placeholder="Date"
            value={newListing.date}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="time"
            placeholder="Time"
            value={newListing.time}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={newListing.price}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="highlights"
            placeholder="Highlights"
            value={newListing.highlights}
            onChange={handleInputChange}
          />
          <h3>Agent Information</h3>
          <input
            type="text"
            name="agent.name"
            placeholder="Agent Name"
            value={newListing.agent.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="agent.phone"
            placeholder="Agent Phone"
            value={newListing.agent.phone}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="agent.email"
            placeholder="Agent Email"
            value={newListing.agent.email}
            onChange={handleInputChange}
          />
          <button className="submit-btn" onClick={handleAddListing}>
            Add Listing
          </button>
        </div>
      )}

      <Navbar />
      <ListingList listings={listings} />
    </div>
  );
}

export default App;
