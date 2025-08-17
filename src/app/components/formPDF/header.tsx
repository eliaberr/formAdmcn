import Image from "next/image";

export function Header() {
  return (
    <header className="flex justify-center items-center gap-2">
      <Image
        src="/logoADMCN.png"
        alt="logoADMCN"
        width={150}
        height={150}
        className="w-[100px] md:w-[150px]"
      />
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
