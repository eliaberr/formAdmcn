import { MemberSectionProps } from '@/app/types/MemberSectionType';

export interface PDFMinisterialMeetingReportProps extends MemberSectionProps {
  idCongregation: number
  refSection?: React.RefObject<HTMLDivElement>
};