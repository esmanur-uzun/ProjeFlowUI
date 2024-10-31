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
import ApiService from "@/hooks/serviceGetWays";
import loginImg from "../../public/login-img.jpg";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const apiService = new ApiService();
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    apiService
      .post("/login", { userName, password })
      .then((data) => {
        setCookie("accessToken", data.token);
        router.push("/userPanel");
      })
      .catch((error) => {
        toast({
          className:"bg-red-700 text-white",
          title: "Giriş Başarısız",
          description: error.message,
        });
      });
  };
  return (
    <div className="bg-slate-100 flex items-center justify-center min-h-screen p-4 overflow-y-hidden">
      <Card className="w-[350px] bg-white">
        <div className="justify-center items-center border-b-2 flex">
          <Image src={loginImg} width={150} height={150} alt="" />
        </div>
        <CardHeader>
          <CardTitle className="text-center">Sign in</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Kullanıcı Adı"
                />
              </div>
            </div>
            <div className="grid w-full items-center mt-4 gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Şifre"
                />
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
          <Button
            onClick={handleSubmit}
            className="bg-red-600 text-slate-50"
            variant="outline"
          >
            Giriş Yap
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
