import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Chart from "../Charts/Chart";

const ChartCard = ({ color, data }) => {
  return (
    <div>
      <Card className="w-80 shadow-md border-2 border-gray-100 mx-auto">
        <div className="w-full   rounded-2xl p-3">
          <Chart color={color}></Chart>
        </div>

        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2 text-gray-900">
            {data}
          </Typography>
          <p>10% increase than last week</p>
        </CardBody>
        {/* <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">$899/night</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
            Barcelona, Spain
          </Typography>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default ChartCard;
