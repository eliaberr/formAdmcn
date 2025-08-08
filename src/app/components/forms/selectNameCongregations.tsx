"use client";

import { infoCongregations } from "@/app/utils/congregations";
import { Input } from "../Ui/input";
import { useState } from "react";
import { CardForm } from "./cardForm";

export default function SelectNameCongregations() {
  const [idConCongregation, setIdCongregation] = useState(0);

  return (
    <CardForm title="Informações da Congregação">
      <div className="flex flex-col mx-auto text-start">
        <label htmlFor="">Congregação</label>
        <select
          className="border bg-gray-200 w-64 md:w-96"
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
            ? infoCongregations[idConCongregation - 1].manager
            : ""
        }
      />
      <Input
        name="Nome Do Secretario local"
        type="text"
        disable
        classNameAdd="cursor-not-allowed"
        value={
          idConCongregation > 0
            ? infoCongregations[idConCongregation - 1].manager
            : ""
        }
      />
    </CardForm>
  );
}
