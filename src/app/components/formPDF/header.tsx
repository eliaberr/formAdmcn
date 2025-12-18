import Image from "next/image";

export function Header() {
  return (
    <header className="flex justify-center items-center gap-2">
      <div className="w-[150px] h-[150px] bg-[url('/logoADMCN.png')] bg-cover cover" />

      <div className="leading-4 text-[10px] text-start md:text-sm">
        <h1 className="font-semibold md:text-xl">
          ASSEMBLEIA DE DEUS MINISTÉRIO CIDADE NOVA
        </h1>
        <p>Sede: Rua Iperó, 50 Cidade Nova | ITU/SP | CEP 13308-114</p>
        <p>Contatos: admcnitu@gmail.com</p>
        <p>CNPJ: 03.202.865/0001-29 </p>
      </div>
    </header>
  );
}
