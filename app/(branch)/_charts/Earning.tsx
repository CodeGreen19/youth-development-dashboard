import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Progress } from "@/components/ui/progress";

const BranchEarning = () => {
  let data = new String("this is the new string")[12];
  console.log(data);

  return (
    <div>
      <Card x-chunk="dashboard-05-chunk-1" className="bg-transparent">
        <CardHeader className="pb-2">
          <CardDescription>This Week</CardDescription>
          <CardTitle className="text-4xl">$1,329</CardTitle>
        </CardHeader>
        <CardContent className="">
          <div className="text-xs text-muted-foreground">
            +25% from last week
          </div>
        </CardContent>
        <CardFooter>some text her..</CardFooter>
      </Card>
    </div>
  );
};

export default BranchEarning;
