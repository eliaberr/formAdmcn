"use client";

import { infoCongregations } from "@/app/utils/congregations";
import { Input } from "../Ui/input";
import { CardForm } from "./cardForm";
import { SelectNameCongregationsProps } from "@/app/types/SelectNameCongregations";

export  function SelectNameCongregations({onChange, idCongregation}:SelectNameCongregationsProps) {
  return (
    <CardForm title="Informações da Congregação">
      <div className="col-span-12 grid grid-cols-12">
        <label className="col-span-10 col-start-2 text-start">Congregação</label>
        <select
          className="border bg-gray-200 col-span-10 col-start-2 "
          onChange={onChange}
          required
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
          idCongregation > 0
            ? infoCongregations[idCongregation - 1].manager
            : ""
        }
      />
      <Input
        name="Nome Do Secretario local"
        type="text"
        disable
        classNameAdd="cursor-not-allowed"
        value={
          idCongregation > 0
            ? infoCongregations[idCongregation - 1].manager
            : ""
        }
      />
    </CardForm>
  );
}
