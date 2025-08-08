"use client";

import { infoCongregations } from "@/app/utils/congregations";
import { Input } from "./input";
import { useState } from "react";

export default function SelectNameCongregations() {
  const [idConCongregation, setIdCongregation] = useState(0);

  console.log(idConCongregation);
  return (
    <div className="grid gap-4">
      <div className="flex flex-col text-start">
        <label htmlFor="">Congregação</label>
        <select
          className="border bg-gray-200 w-64"
          onChange={(e) => setIdCongregation(Number(e.target.value))}
        >
          <option></option>
          {infoCongregations.map((item) => (
            <option className="ps-2" key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <Input
        name="Nome Do Dirigente Local"
        type="text"
        disable
        classNameAdd="cursor-not-allowed"
        value={
          idConCongregation > 0
            ? infoCongregations[idConCongregation-1].manager
            : ""
        }
      />
    </div>
  );
}
