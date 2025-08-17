import { RiCloseLargeLine } from "react-icons/ri";
import { ModalViewPDFProps } from "@/app/types/modalViewPDFType";
import RelatorioPage from "@/app/htmlToPDF/convertPage";

export function ModalViewFDP({ onClick, idCongregation, arrayMemberRegistration, arrayMemberTransfer, arrayMemberCancellation }: ModalViewPDFProps) {
  return (
    <div className="bg-gray-200 fixed top-3 w-[98%] h-[95%] mx-auto z-30 overflow-auto rounded border md:top-5 md:w-4/5 md:h-11/12">
      <h2 className="font-semibold p-5 md:text-2xl">
        Visualização do Relatório{" "}
      </h2>
      <button onClick={onClick}>
        <RiCloseLargeLine className="text-red-700 absolute top-5 right-2 md:right-28 border border-black rounded-full w-7 h-7 p-1" />
      </button>
      <RelatorioPage
        idCongregation={idCongregation}
        arrayMemberRegistration={arrayMemberRegistration}
        arrayMemberTransfer={arrayMemberTransfer}
        arrayMemberCancellation={arrayMemberCancellation}
      />
    </div>
  );
}
