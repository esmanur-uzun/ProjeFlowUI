import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const userAccount = () => {
  return (
    <div className="px-4 pt-8 space-y-6 md:px-6">
      <header className="space-y-1.5 ">
        <div className="flex items-center space-x-4">
          {/* <Image
        src="/profile.png"
        width={96}
        height={96}
        alt="Picture of the author"
        style={{ aspectRatio: "96/96", objectFit: "cover" }}
      /> */}
          <img
            src=""
            alt="Avatar"
            width="96"
            height="96"
            className="border rounded-full"
            style={{ aspectRatio: "96/96", objectFit: "cover" }}
          />
          <div className="space-y-1.5">
            <h1 className="text-2xl font-bold">Catherine Grant</h1>
            <p className="text-gray-500 dark:text-gray-400">Product Designer</p>
          </div>
        </div>
      </header>
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                defaultValue="Catherine Grant"
                className="border-slate-300"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                className="border-slate-300"
                id="phone"
                placeholder="Enter your phone"
                type="tel"
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Change Password</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="current-password">Current Password</Label>
              <Input
                id="current-password"
                placeholder="Enter your current password"
                type="password"
                className="border-slate-300"
              />
            </div>
            <div>
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                placeholder="Enter your new password"
                type="password"
                className="border-slate-300"
              />
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                placeholder="Confirm your new password"
                type="password"
                className="border-slate-300"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Button className="bg-slate-900 text-white" size="lg">
          Save
        </Button>
      </div>
    </div>
  );
};

export default userAccount;
