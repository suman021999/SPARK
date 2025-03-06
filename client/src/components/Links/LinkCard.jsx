import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Trash2 } from "lucide-react";
import { socialApps } from "../../utils/constants";



const  LinkCard=()=> {
  const [link, setLink] = useState({ title: "", url: "", enabled: false });

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg w-full max-w-lg">
      <div className="flex gap-4 mb-4">
        <Button variant="default" className="bg-green-600 text-white">
          Add Link
        </Button>
        <Button variant="outline">Add Shop</Button>
      </div>
      <h3 className="text-lg font-semibold mb-2">Enter URL</h3>
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="mb-2">
          <Input
            value={link.title}
            onChange={(e) => setLink({ ...link, title: e.target.value })}
            placeholder="Link title"
          />
        </div>
        <div className="mb-2">
          <Input
            value={link.url}
            onChange={(e) => setLink({ ...link, url: e.target.value })}
            placeholder="Link URL"
          />
        </div>
        <div className="flex items-center justify-between">
          <Switch
            checked={link.enabled}
            onCheckedChange={(checked) => setLink({ ...link, enabled: checked })}
          />
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Copy className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Trash2 className="w-5 h-5 text-red-500" />
            </Button>
          </div>
        </div>
      </div>
      <h3 className="text-lg font-semibold mt-4 mb-2">Applications</h3>
      <div className="flex gap-4">
        {socialApps.map((app) => (
          <div
            key={app.name}
            className="flex flex-col items-center bg-gray-200 p-2 rounded-lg w-16 text-center"
          >
            <span className="text-xl">{app.icon}</span>
            <span className="text-xs mt-1">{app.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LinkCard
