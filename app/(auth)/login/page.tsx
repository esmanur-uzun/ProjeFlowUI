"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import loginImg from "../../public/login-img.jpg";

const Login = () => {
  return (
    <div className="bg-slate-100 flex min-h-screen flex-col items-center justify-between p-48">
      <Card className="w-[350px] bg-white">
        <div className="justify-center items-center border-b-2 flex">
          <Image src={loginImg} width={150} height={150} alt="" />
        </div>
        <CardHeader>
          <CardTitle className="text-center">Sign in</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">User Name</Label>
                <Input id="name" placeholder="User name..." />
              </div>
            </div>
          </form>
          <div className="mt-4">
            <a className="text-xs underline" href="">
              Forgotten your password?
            </a>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button className="bg-red-600 text-slate-50" variant="outline">
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
