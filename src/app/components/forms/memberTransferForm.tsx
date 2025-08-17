"use client";

import { Input } from "../Ui/input";
import { CardForm } from "./cardForm";
import { Member } from "@/app/types/memberType";
import { IoTrashBinSharp } from "react-icons/io5";
import { infoCongregations } from "@/app/utils/congregations";
import { MemberFormProps } from "@/app/types/MemberRegistrationFormType";

export function MemberTransferForm({ member, setMembers }: MemberFormProps) {
  const addMember = () => {
    setMembers((prev) =>
      prev.length < 50
        ? [...prev, { code: "", name: "", destinationChurch: "" }]
        : prev
    );
  };
  const removeMember = (index: number) => {
    setMembers((prev) => prev.filter((_, i) => i !== index));
  };
  const updateMember = (i: number, field: keyof Member, value: string) => {
    setMembers((prev) => {
      const clone = [...prev];
      clone[i] = { ...clone[i], [field]: value };
      return clone;
    });
  };
  return (
    <CardForm title="transferência em congregações">
      {member.map((item, index) => (
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
            <label htmlFor="">Igreja</label>
            <select
              onChange={(e) =>
                updateMember(index, "destinationChurch", e.target.value)
              }
              className="bg-gray-200 border w-full"
            >
              <option value=""></option>
              {infoCongregations.map((item) => (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          {member.length > 1 ? (
            <button
              type="button"
              onClick={() => removeMember(index)}
              disabled={member.length >= 50}
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
        disabled={member.length >= 50}
        className="text-start col-span-10 col-start-2 -mt-3 text-sm underline text-blue-700 w-fit"
      >
        + Adicionar Outro Membro
      </button>
    </CardForm>
  );
}
