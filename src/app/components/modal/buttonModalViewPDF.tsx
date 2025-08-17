"use client";

import { useState } from "react";
import { ModalViewFDP } from "./modalViewPDF";
import { ButtonModalViewPDFProps } from "@/app/types/ButtonModalViewPDFType";

export function ButtonModalViewPDF({
  idCongregation,
  arrayMemberRegistration,
  arrayMemberTransfer,
  arrayMemberCancellation,
}: ButtonModalViewPDFProps) {
  const [isModal, setIsModal] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setIsModal(true)}
        disabled={idCongregation > 0 ? false : true}
        className={`w-full max-w-md text-white font-semibold py-3 px-6 rounded 
               shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 ${
                 idCongregation
                   ? "bg-gradient-to-r from-blue-500 to-blue-700 cursor-pointer"
                   : "bg-gray-300 cursor-not-allowed"
               }`}
      >
        Visualizar Relatório
      </button>
      {isModal && (
        <div className="relative flex items-center justify-center">
          <ModalViewFDP
            onClick={() => setIsModal(false)}
            idCongregation={idCongregation}
            arrayMemberRegistration={arrayMemberRegistration}
            arrayMemberTransfer={arrayMemberTransfer}
            arrayMemberCancellation={arrayMemberCancellation}
          />
        </div>
      )}
    </div>
  );
}
