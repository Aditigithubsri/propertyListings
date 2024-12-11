import React, { useState } from "react";
import ListingList from "./components/ListingList";
import Navbar from "./components/Navbar";
import "./App.css";
import SelectSeries from "./components/SelectSeries";
import PeopleInfoCard from "./components/PeopleInfoCard";
import DateCard from "./components/DateCard";
import Kit from "./components/kit";

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
      image: "https://www.google.com/imgres?q=images%20of%20hotels&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F119926339%2Fphoto%2Fresort-swimming-pool.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3D9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fluxury-hotel-exterior&docid=gZMMtISC_n_22M&tbnid=5fOLZTxG4oyxXM&vet=12ahUKEwjZj7HJmp-KAxUEyzgGHaqCOe4QM3oECBUQAA..i&w=612&h=410&hcb=2&ved=2ahUKEwjZj7HJmp-KAxUEyzgGHaqCOe4QM3oECBUQAA", // Replace with actual image URL
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
      image: "https://www.google.com/imgres?q=images%20of%20hotels&imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F261102%2Fpexels-photo-261102.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-pixabay-261102.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fhotel%2F&docid=gjP6S51M4rEGhM&tbnid=dwZ6FKYAgxspCM&vet=12ahUKEwjZj7HJmp-KAxUEyzgGHaqCOe4QM3oECGQQAA..i&w=7360&h=4912&hcb=2&ved=2ahUKEwjZj7HJmp-KAxUEyzgGHaqCOe4QM3oECGQQAA", // Replace with actual image URL
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
      image: "https://www.google.com/imgres?q=images%20of%20hotels&imgurl=https%3A%2F%2F3.imimg.com%2Fdata3%2FJV%2FKJ%2FMY-15827078%2Fhotels-booking.jpg&imgrefurl=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Fhotels-booking-9236381788.html&docid=faScx0k6pvIPqM&tbnid=59B4NXtob0KKzM&vet=12ahUKEwjZj7HJmp-KAxUEyzgGHaqCOe4QM3oECBgQAA..i&w=1920&h=1080&hcb=2&ved=2ahUKEwjZj7HJmp-KAxUEyzgGHaqCOe4QM3oECBgQAA", // Replace with actual image URL
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
  const handleEditDate = (index) => {
    const newTime = prompt("Enter the new time:", listings[index].time);
    if (newTime) {
      setListings((prev) =>
        prev.map((listing, i) =>
          i === index ? { ...listing, time: newTime } : listing
        )
      );
    }
  };

  const handleDeleteDate = (index) => {
    if (window.confirm("Are you sure you want to delete this date?")) {
      setListings((prev) => prev.filter((_, i) => i !== index));
    }
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
      <div className="display">
      <ListingList listings={listings} />
       {/* Display DateCard between the two cards */}
       <div className="date-cards">
        {listings.map((listing, index) => (
          <DateCard
            key={index}
            date={listing.date}
            day={new Date(listing.date).toLocaleDateString("en-US", {
              weekday: "long",
            })}
            time={listing.time}
            onEdit={() => handleEditDate(index)}
            onDelete={() => handleDeleteDate(index)}
          />
          
        ))}
          
      </div>
      <div className="people-info-cards">
  {listings.map((listing, index) => (
    <PeopleInfoCard
      key={index}
      name={listing.agent.name}
      contact={listing.agent.phone}
      email={listing.agent.email}
      options={["Remove Agent"]}
    />
  ))}

    </div>
    <div className="kit-cards-container">
  {/* KitCard */}
  {listings.map((listing, index) => (
    <Kit
      key={index}
      kitLink
      basicKitLink
      onRegenerate={() => console.log("Regenerate Kit for listing:", index)}
    />
  ))}
</div>
    </div>
    </div>
  );
}

export default App;
