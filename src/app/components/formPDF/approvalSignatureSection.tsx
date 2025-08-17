export function ApprovalSignature() {
  return (
    <footer className="flex flex-col gap-10 mt-10 justify-around h-full">
      <div className="flex">
        <div className="flex flex-col text-center leading-1 border-t pt-2 w-[250px] mx-auto">
          <span className="font-medium">Pr. José Ferreira</span>
          <span className="text-sm">Pastor Presidente</span>
        </div>
        <div className="flex flex-col text-center leading-1 border-t pt-2 w-[250px] mx-auto">
          <span className="font-medium">Pr. Enéas Ramos </span>
          <span className="text-sm">Vice Presidente</span>
        </div>
      </div>
      <div className="flex flex-col text-center leading-1 border-t pt-2 w-[250px] mx-auto">
        <span className="font-medium">Pr. Rodney Ramos</span>
        <span className="text-sm">Secretário geral</span>
      </div>
    </footer>
  );
}
