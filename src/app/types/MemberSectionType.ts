import { Member } from "./memberType";

export interface MemberSectionProps {
  arrayMemberRegistration: Array<Member>,
  arrayMemberTransfer: Array<Member>,
  arrayMemberCancellation: Array<Member>
}