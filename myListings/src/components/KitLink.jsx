import React, { useState } from "react";
import Kit from "./components/Kit";

function KitLink() {
  const [kits, setKits] = useState([
    {
      kitName: "Kit 1",
      kitLink: "https://example.com/kit1",
      basicKitLink: "https://example.com/basic-kit1",
    },
    {
      kitName: "Kit 2",
      kitLink: "https://example.com/kit2",
      basicKitLink: "https://example.com/basic-kit2",
    },
    {
      kitName: "Kit 3",
      kitLink: "https://example.com/kit3",
      basicKitLink: "https://example.com/basic-kit3",
    },
  ]);

  const regenerateKit = (index) => {
    // Logic to regenerate the kit (you can update kitLink and basicKitLink or do anything)
    alert(`Regenerating kit: ${kits[index].kitName}`);
    const updatedKits = [...kits];
    updatedKits[index].kitLink = "https://newlink.com/kit" + index; // Example: Update the kit link
    updatedKits[index].basicKitLink = "https://newlink.com/basic-kit" + index; // Example: Update the basic kit link
    setKits(updatedKits);
  };

  return (
    <div className="App">
      <h1>Kit Cards</h1>
      <div className="kit-cards-container">
        {kits.map((kit, index) => (
          <Kit
            key={index}
            kitName={kit.kitName}
            kitLink={kit.kitLink}
            basicKitLink={kit.basicKitLink}
            onRegenerate={() => regenerateKit(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default KitLink;
