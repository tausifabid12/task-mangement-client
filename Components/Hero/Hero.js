import { Button } from "@material-tailwind/react";
import React from "react";

const Hero = () => {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <div className="pt-16 flex justify-between">
        <h1 className="text-3xl font-bold">Today's Tasks</h1>
        <div>
          <Button color="blue">Create Task</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
