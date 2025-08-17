"use client";

import { forwardRef } from "react";
import { Header } from "./header";
import { InfoCongregations } from "./infoCongregations";
import { MemberSection } from "./memberSection";
import { ApprovalSignature } from "./approvalSignatureSection";
import { PDFMinisterialMeetingReportProps } from "@/app/types/PDFMinisterialMeetingReportType";

export const PDFMinisterialMeetingReport = forwardRef<
  HTMLDivElement,
  PDFMinisterialMeetingReportProps
>(
  (
    {
      idCongregation,
      arrayMemberRegistration,
      arrayMemberTransfer,
      arrayMemberCancellation,
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className="bg-white flex flex-col gap-10 mx-auto pt-5 px-1 md:px-[85px] md:w-[794px] md:h-[1000px]"
      >
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
);

PDFMinisterialMeetingReport.displayName = "PDFMinisterialMeetingReport";
