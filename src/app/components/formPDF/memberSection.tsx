import { MemberSectionProps } from "@/app/types/MemberSectionType";

export function MemberSection({arrayMemberRegistration, arrayMemberTransfer, arrayMemberCancellation}:MemberSectionProps) {
  return (
    <section className="flex flex-col gap-5">
      <div>
        <h2 className="font-medium">Adesão de Membros</h2>
        <div>
          {arrayMemberRegistration.map((item, index) => (
            <div key={index}>
              <span>{item.code} - </span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-medium">Transferência Entre Congregações</h2>
        <div>
          {arrayMemberTransfer.map((item, index) => (
            <div key={index}>
              <span>{item.code} - </span>
              <span>{item.name} - </span>
              <span>{item.destinationChurch}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-medium">Baixa de Membros</h2>
        <div>
          {arrayMemberCancellation.map((item, index) => (
            <div key={index}>
              <span>{item.code} - </span>
              <span>{item.name} - </span>
              <span>{item.reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
