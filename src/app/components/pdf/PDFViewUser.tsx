"use client";

import { PDFMinisterialMeetingReportProps } from "@/app/types/PDFMinisterialMeetingReportType";
import { Header } from "../formPDF/header";
import { InfoCongregations } from "../formPDF/infoCongregations";
import { MemberSection } from "../formPDF/memberSection";
import { ApprovalSignature } from "../formPDF/approvalSignatureSection";

export function PDFViewUser({
  idCongregation,
  arrayMemberRegistration,
  arrayMemberTransfer,
  arrayMemberCancellation,
}: PDFMinisterialMeetingReportProps) {
  return (
    <section className="bg-white flex flex-col gap-10 mx-auto pt-5 px-1 md:px-[85px] md:w-[794px] md:h-[1000px]">
      <Header />
      <h2 className="font-semibold text-xl text-center">
        Relatório Reunião Ministerial
      </h2>
      <div className="flex flex-col gap-7 text-start">
        <InfoCongregations idCongregation={idCongregation} />
        <MemberSection
          arrayMemberRegistration={arrayMemberRegistration}
          arrayMemberTransfer={arrayMemberTransfer}
          arrayMemberCancellation={arrayMemberCancellation}
        />
        <ApprovalSignature />
      </div>
    </section>
  );
}
