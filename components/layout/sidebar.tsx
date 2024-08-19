
// import { cn } from "https://shadcn-ui.veryfront.com/@components/lib/utils";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
export function Sidebar() {
  return (
    <div className={"pb-12"}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            <Button
              variant="secondary"
              size="sm"
              className="w-full justify-start"
            >
              Listen Now
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              Browse
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              Radio
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Library
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              Playlists
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              Songs
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              Made for You
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              Artists
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              Albums
            </Button>
          </div>
        </div>
       
      </div>
    </div>
  );
}

<Sidebar />;
