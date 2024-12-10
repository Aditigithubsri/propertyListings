import React from "react";
import ListingList from "./components/ListingList";
import Navbar from "./components/Navbar";
import "./App.css"


function App() {
  
  const listings = [
    {
      address: "7742 REDLANDS STREET",
      date: "Sunday, Sep 29th",
      time: "TPM-4PM",
      price: "695,000",
      highlights: "Exp Realty Of Cantor 5824144572",
      agent: {
        name: "Brittany Avale",
        phone: "1310/854-8212",
        email: "brittany@itzsoist.com",
      },
    },
    {
      address: "7742 REDLANDS STREET",
      date: "Sunday, Sep 29th",
      time: "TPM-4PM",
      price: "695,000",
      highlights: "Exp Beatty Of Cal",
      agent: {
        name: "Ed Kaminsky",
        phone: "(310) 307-2224",
        email: "eltzsold.com",
      },
    },
    {
      address: "7742 REDLANDS STREET",
      date: "Sunday, Sep 29th",
      time: "TPM-4PM",
      price: "695,000",
      highlights: "Exp Beatty Of Cal",
      agent: {
        name: "Ed Kaminsky",
        phone: "(310) 307-2224",
        email: "eltzsold.com",
      },
    },
    {
      address: "7742 REDLANDS STREET",
      date: "Sunday, Sep 29th",
      time: "TPM-4PM",
      price: "695,000",
      highlights: "Exp Beatty Of Cal",
      agent: {
        name: "Ed Kaminsky",
        phone: "(310) 307-2224",
        email: "eltzsold.com",
      },
    },
    {
      address: "7742 REDLANDS STREET",
      date: "Sunday, Sep 29th",
      time: "TPM-4PM",
      price: "695,000",
      highlights: "Exp Beatty Of Cal",
      agent: {
        name: "Ed Kaminsky",
        phone: "(310) 307-2224",
        email: "eltzsold.com",
      },
    },
  ];
  const handleAddNewListing = () => {
    alert("Add new listing functionality coming soon!");
    // Add your logic here (e.g., open a form or modal for a new listing)
  };

  return (
    <div className="App">
       <button className="add-listing-btn" onClick={handleAddNewListing}>
        + Add New Listing
      </button>
     
      <Navbar/>
     <h1>Property Listings</h1>
      <ListingList listings={listings} />
    </div>
  );
}

export default App;
