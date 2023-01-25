
import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./infoBox.css";

function InfoBox({ title, cases, total, active, isRed, ...props }) {
  console.log(title, active);
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>

{/* tittle ie coronavirus cases and we pass in the tittle attribute */}
        <Typography color="textSecondary" gutterBottom>
          {title}

{/* number of cases and we pass in the cases attribute*/}
        </Typography>
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </h2>

 {/* total population we pass in the total attribute*/}
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;