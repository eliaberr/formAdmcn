import { Member } from "./memberType";

export interface MemberFormProps {
  member: Member[],
  setMembers: React.Dispatch<React.SetStateAction<Member[]>>;
}