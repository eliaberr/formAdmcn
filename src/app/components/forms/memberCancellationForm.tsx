"use client";

import { useState } from "react";
import { Input } from "../Ui/input";
import { CardForm } from "./cardForm";
import { Member } from "@/app/types/memberType";
import { IoTrashBinSharp } from "react-icons/io5";

export function MemberCancellationForm() {
  const [memberCancellation, setCancellationMembers] = useState<Member[]>([
    { code: "", name: "", reason: "" },
  ]);
  const addMember = () => {
    setCancellationMembers((prev) =>
      prev.length < 50 ? [...prev, { code: "", name: "", reason: "" }] : prev
    );
  };
  const removeMember = (index: number) => {
    setCancellationMembers((prev) => prev.filter((_, i) => i !== index));
  };
  const updateMember = (i: number, field: keyof Member, value: string) => {
    setCancellationMembers((prev) => {
      const clone = [...prev];
      clone[i] = { ...clone[i], [field]: value };
      return clone;
    });
  };

  return (
    <CardForm title="Baixa de Membro">
      {memberCancellation.map((item, index) => (
        <div key={index} className="col-span-12 grid grid-cols-12 relative">
          <Input
            name="Cod."
            type="text"
            sizeDiv="col-span-2 col-start-2"
            sizeLabel="col-span-12"
            sizeInput="col-span-12"
            value={item.code}
            onChange={(e) => updateMember(index, "code", e.target.value)}
            maxLength={4}
            required={index > 1 ? true : false}
          />
          <Input
            name="Nome"
            type="text"
            sizeDiv="col-span-6"
            value={item.name}
            onChange={(e) => updateMember(index, "name", e.target.value)}
            required={index > 1 ? true : false}
          />
          <div className="col-span-2 text-start">
            <label htmlFor="">Motivo</label>
            <select className="bg-gray-200 border w-full ">
              <option value=""></option>
              <option value="">Abandono</option>
              <option value="">Falecimento</option>
              <option value="">Desaparecimento</option>
              <option value="">Transferência Ministerial</option>
              <option value="">Outros</option>
            </select>
          </div>

          {memberCancellation.length > 1 ? (
            <button
              type="button"
              onClick={() => removeMember(index)}
              disabled={memberCancellation.length >= 50}
              className="absolute text-red-600 right-3 top-7"
            >
              <IoTrashBinSharp />
            </button>
          ) : (
            ""
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addMember}
        disabled={memberCancellation.length >= 50}
        className="text-start col-span-10 col-start-2 -mt-3 text-sm underline text-blue-700"
      >
        + Adicionar Outro Membro
      </button>
    </CardForm>
  );
}
