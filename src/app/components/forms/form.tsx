"use client";

import { MemberRegistrationForm } from "./memberRegistrationForm";
import { useState } from "react";
import { FormProps } from "@/app/types/FormType";
import { ButtonModalViewPDF } from "../modal/buttonModalViewPDF";
import { Member } from "@/app/types/memberType";
import { SelectNameCongregations } from "./selectNameCongregations";
import { MemberCancellationForm } from "./memberCancellationForm";
import { MemberTransferForm } from "./memberTransferForm";

export function Form({}: FormProps) {
  const [idCongregation, setIdCongregation] = useState(0);
  const [membersRegistration, setRegistrationMembers] = useState<Member[]>([
    { code: "", name: "" },
  ]);
  const [memberTransfer, setTransferMembers] = useState<Member[]>([
    { code: "", name: "", destinationChurch: "" },
  ]);
  const [memberCancellation, setCancellationMembers] = useState<Member[]>([
    { code: "", name: "", reason: "" },
  ]);
  return (
    <form className="my-10 grid gap-10 ">
      <SelectNameCongregations
        onChange={(e) => setIdCongregation(Number(e.target.value))}
        idCongregation={idCongregation}
      />
      <MemberRegistrationForm
        member={membersRegistration}
        setMembers={setRegistrationMembers}
      />
      <MemberCancellationForm
        member={memberCancellation}
        setMembers={setCancellationMembers}
      />
      <MemberTransferForm
        member={memberTransfer}
        setMembers={setTransferMembers}
      />
      <ButtonModalViewPDF
        idCongregation={idCongregation}
        arrayMemberRegistration={membersRegistration}
        arrayMemberTransfer={memberTransfer}
        arrayMemberCancellation={memberCancellation}
      />
    </form>
  );
}
