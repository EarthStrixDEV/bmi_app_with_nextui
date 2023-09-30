import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Input, Button } from "@nextui-org/react";

const MySwal = withReactContent(Swal)

export default function InputUser({
  weight,
  height,
  setWeight,
  setHeight,
  setCalculate,
  calculate
}) {
  const HandleSetHeight = (event) => {
    setHeight(event.target.value);
  };

  const HandleSetWeight = (event) => {
    setWeight(event.target.value);
  };

  const calculate_bmi = () => {
    // declare variables
    let weight_int = parseInt(weight);
    let height_int = parseInt(height);
    if (isNaN(weight_int) || isNaN(height_int)) {
      MySwal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please enter your weight or height ,Don't blank your input"
      })
    } else {
      // bmi calculation
      let result = weight_int / Math.pow(height_int / 100, 2);
      setCalculate(result.toFixed(2));
      let bmi_value = parseFloat(result);
      let bmi_meaning = "";

      if (bmi_value < 1) {
        bmi_meaning = "";
      } else if (bmi_value < 18.50) {
        bmi_meaning = "Underweight";
      } else if (bmi_value >= 18.50 && bmi_value < 25) {
        bmi_meaning = "Healthy Weight";
      } else if (bmi_value >= 25 && bmi_value < 30) {
        bmi_meaning = "Overweight";
      } else if (bmi_value >= 30) {
        bmi_meaning = "Obesity 1";
      }

      MySwal.fire({
        icon: "success",
        title: `Your BMI: ${result.toFixed(2)}`,
        text: bmi_meaning
      })
    }

  };

  return (
    <div className="w-96 rounded-2xl bg-slate-900 p-10">
      <Input
        type="number"
        label="Enter your weight"
        onChange={HandleSetWeight}
        value={weight}
        className="mb-8 text-lg"
      />
      <Input
        type="number"
        label="Enter your height"
        onChange={HandleSetHeight}
        value={height}
        className="mb-8 text-lg"
      />
      <div>
        <Button color="primary" className="mb-8" onClick={calculate_bmi}>
          Calculate
        </Button>
        <Button color="danger" className="mb-8 mx-3" onClick={() => window.location.reload()}>
          Reset
        </Button>
      </div>
      <Input
        key="outside-left"
        type="text"
        variant="bordered"
        className="max-w-xs"
        labelPlacement="outside-left"
        description="Your BMI"
        value={calculate}
      />
    </div>
  );
}
