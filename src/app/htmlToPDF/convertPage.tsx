"use client";

import { useRef } from "react";
import { GenerateReportPageProps } from "../types/GenerateReportPageType";
import { PDFMinisterialMeetingReport } from "./PDFMinisterialMeetingReport";

export default function GenerateReportPage({
  idCongregation,
  arrayMemberRegistration,
  arrayMemberTransfer,
  arrayMemberCancellation,
}: GenerateReportPageProps) {
  const printRef = useRef<HTMLDivElement>(null);
  const gerarPDF = async () => {
    if (!printRef.current) return;
    const html2pdf = (await import("html2pdf.js")).default;
    const opt = {
      margin: 0,
      filename: "relatorio.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: "#fff" },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" as const },
      pagebreak: { mode: ["css", "legacy"] },
    };
    html2pdf().set(opt).from(printRef.current).save();
  };

  return (
    <main className="p-6">
      <PDFMinisterialMeetingReport
        ref={printRef}
        idCongregation={idCongregation}
        arrayMemberRegistration={arrayMemberRegistration}
        arrayMemberTransfer={arrayMemberTransfer}
        arrayMemberCancellation={arrayMemberCancellation}
      />
      <button
        type="button"
        onClick={gerarPDF}
        className="w-44 my-5 max-w-md bg-gradient-to-r from-blue-500 to-blue-700
               text-white font-semibold py-3 px-6 rounded cursor-pointer
               shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
      >
        Gerar Relatorio
      </button>
    </main>
  );
}
