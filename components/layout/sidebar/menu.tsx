import { LogOut } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import ApiService from "@/hooks/serviceGetWays";
import { useState, useEffect } from "react";
import Image from "next/image";

interface MenuProps {
  isOpen: boolean | undefined;
}

export function Menu({ isOpen }: MenuProps) {
  const apiService = new ApiService();
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    const getMenu = () => {
      apiService
        .get("/configs/menuList")
        .then(({ data }) => {
          setMenuList(data.menu);
        })
        .catch((error) => console.log(error));
    };
    getMenu();
  }, []);

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="[&>div>div[style]]:!block flex-grow px-2">
        <ul className="flex flex-col space-y-1">
          {menuList.map(({ title, icon }, index) => (
            <li className="w-full pt-4" key={index}>
              <TooltipProvider disableHoverableContent>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start h-10 mb-1"
                      asChild
                    >
                      <Link href="#">
                        <span className={cn(isOpen === false ? "" : "mr-4")}>
                          <Image
                            src={`http://localhost:5000${icon}`}
                            width={25}
                            height={25}
                            alt="menu icon"
                          />
                        </span>
                        <p
                          className={cn(
                            "max-w-[200px] truncate",
                            isOpen === false
                              ? "-translate-x-96 opacity-0 hidden"
                              : "translate-x-0 opacity-100"
                          )}
                        >
                          {title}
                        </p>
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  {isOpen === false && (
                    <TooltipContent side="right">{title}</TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </ScrollArea>

      <div className="px-2 mt-auto">
        <TooltipProvider disableHoverableContent>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <Button
                onClick={() => {}}
                variant="outline"
                className="w-full border-slate-300 justify-center h-10 mb-5"
              >
                <span className={cn(isOpen === false ? "" : "mr-4")}>
                  <LogOut size={18} />
                </span>
                <p
                  className={cn(
                    "whitespace-nowrap",
                    isOpen === false ? "opacity-0 hidden" : "opacity-100"
                  )}
                >
                  Çıkış Yap
                </p>
              </Button>
            </TooltipTrigger>
            {isOpen === false && (
              <TooltipContent side="right">Çıkış Yap</TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
