"use client";

import { infoCongregations } from "@/app/utils/congregations";
import { Input } from "../Ui/input";
import { useState } from "react";
import { CardForm } from "./cardForm";

export default function SelectNameCongregations() {
  const [idConCongregation, setIdCongregation] = useState(0);

  return (
    <CardForm title="Informações da Congregação">
      <div className="col-span-12 grid grid-cols-12">
        <label className="col-span-10 col-start-2 text-start">Congregação</label>
        <select
          className="border bg-gray-200 col-span-10 col-start-2 "
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
