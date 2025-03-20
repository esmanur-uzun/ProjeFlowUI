import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PieChartComponent } from "@/components/charts/pieChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Incomplete from "@/components/todos/incomplete";
import Completed from "@/components/todos/completed";
const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
      <div className="col-span-2 mt-6 order-1  ">
        <PieChartComponent />
      </div>
      <div className="col-span-3 order-2 justify-center mt-5 flex">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full bg-gray-100 grid-cols-2">
            <TabsTrigger value="account">Pending Tasks</TabsTrigger>
            <TabsTrigger value="password">Completed Tasks</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardContent className="space-y-2">
                <Incomplete />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardContent className="space-y-2">
                <Completed />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
