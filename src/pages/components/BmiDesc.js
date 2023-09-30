import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

export default function BmiDesc({ calculate }) {
  let bmi_value = parseFloat(calculate);
  let bmi_meaning = "";

  if (bmi_value < 1) {
    bmi_meaning = "";
  } else if (bmi_value < 18.5) {
    bmi_meaning = "Underweight";
  } else if (bmi_value >= 18.5 && bmi_value < 23) {
    bmi_meaning = "Healthy Weight";
  } else if (bmi_value >= 23 && bmi_value < 25) {
    bmi_meaning = "Overweight";
  } else if (bmi_value >= 25 && bmi_value < 30) {
    bmi_meaning = "Obesity 1";
  } else if (bmi_value >= 30) {
    bmi_meaning = "Obesity 2";
  }

  return (
    <Card className="max-w-[400px] mt-10">
      <CardHeader className="flex gap-3">
        <p className="text-md">Your BMI: {bmi_value}</p>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-small">{bmi_meaning}</p>
      </CardBody>
    </Card>
  );
}
