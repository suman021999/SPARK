import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { GripVertical, Trash } from "lucide-react";
import { nanoid } from "nanoid";

const LinkManager = () => {
  // State to manage the list of links
  const [links, setLinks] = useState([
    { id: nanoid(), name: "Instagram", url: "https://www.instagram.com/opopo_08/", active: true, clicks: 0 },
    { id: nanoid(), name: "YouTube", url: "https://www.youtube.com/opopo_08/", active: true, clicks: 0 },
  ]);

  // Function to add a new link with default values
  const addLink = () => {
    setLinks([...links, { id: nanoid(), name: "New Link", url: "", active: true, clicks: 0 }]);
  };

  // Function to update a specific property of a link
  const updateLink = (id, key, value) => {
    setLinks(links.map(link => link.id === id ? { ...link, [key]: value } : link));
  };

  // Function to delete a link by filtering it out of the state array
  const deleteLink = (id) => {
    setLinks(links.filter(link => link.id !== id));
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      {/* Button to add a new link */}
      <Button onClick={addLink} className="w-full bg-green-600 text-white mb-4">+ Add</Button>
      
      {/* Loop through links and render them */}
      {links.map((link) => (
        <Card key={link.id} className="p-4 mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Drag handle icon for potential reordering */}
            <GripVertical className="cursor-pointer" />
            <div>
              {/* Input for editing link name */}
              <Input
                value={link.name}
                onChange={(e) => updateLink(link.id, "name", e.target.value)}
                className="font-bold"
              />
              {/* Input for editing link URL */}
              <Input
                value={link.url}
                onChange={(e) => updateLink(link.id, "url", e.target.value)}
                className="text-sm text-gray-500"
              />
              {/* Display number of clicks */}
              <p className="text-xs text-gray-400">{link.clicks} clicks</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* Toggle switch for activating/deactivating link */}
            <Switch checked={link.active} onCheckedChange={() => updateLink(link.id, "active", !link.active)} />
            {/* Trash icon to delete the link */}
            <Trash className="text-red-500 cursor-pointer" onClick={() => deleteLink(link.id)} />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default LinkManager;


import React, { useState } from "react";
import "./links.css";
import Nav from "../Navbar/Nav";
import logo from "../../../public/logos.svg";
import { presetColors } from "../../utils/constants";
import LiinkCard from "./LinkCard";
const Linkspage = () => {
  const [toggle, setToggle] = useState("link");
  const [bgColor, setBgColor] = useState("#3B2E25");