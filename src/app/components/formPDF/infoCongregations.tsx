import { infoCongregations } from "@/app/utils/congregations";

export function InfoCongregations({
  idCongregation,
}: {
  idCongregation: number;
}) {
  const congregation = infoCongregations[idCongregation - 1];
  const data = new Date().toLocaleDateString("pt-BR");
  
  return (
    <section className="">
      <div className="font-medium">
        <h4>
          Filial: <span className="font-normal">{congregation.name}</span>
        </h4>
        <h4>
          Pastor Dirigente:{" "}
          <span className="font-normal">{congregation.manager}</span>
        </h4>
        <h4>
          Secretátio:{" "}
          <span className="font-normal">{congregation.manager}</span>
        </h4>
        <h4>
          Data de Emissão do Relatório:{" "}
          <span className="font-normal">{data}</span>
        </h4>
      </div>
    </section>
  );
}
