"use client";

import Link from "next/link";
import { LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
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

interface MenuProps {
  isOpen: boolean | undefined;
}

export function Menu({ isOpen }: MenuProps) {
  const apiService = new ApiService();
  const [menuList, setMenuList] = useState([])
  const pathname = usePathname();

  useEffect(() => {
    const getMenu = () => {
      apiService
        .get("/configs/menuList")
        .then(({ data }) => {
          setMenuList(data[0].menu);
        })
        .catch((error) => console.log(error));
    };
    getMenu();
  }, []);

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="mt-8 h-full w-full">
        <ul className="flex flex-col items-start space-y-1 px-2">
          {menuList.map(({ title, icon: Icon }, index) => (
            <li className="w-full" key={index}>
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
                          <Icon size={18} />
                        </span>
                        <p
                          className={cn(
                            "max-w-[200px] truncate",
                            isOpen === false
                              ? "-translate-x-96 opacity-0"
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
          <li className="w-full grow flex items-end">
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
          </li>
        </ul>
      </nav>
    </ScrollArea>
  );
}
