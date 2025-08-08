import { Form } from "./components/forms/form";
import { MAX_WIDTH } from "./utils/classNames";

export default function Home() {
  return (
    <div
      className={`grid items-center justify-items-center mt-10 text-center ${MAX_WIDTH}`}
    >
      <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl">
        Formulario ADMCN
      </h1>
      <p className="font-light text-xs mt-2 md:text-sm lg:text-base">
        Preencha os campos para gerar o relatório da Reunião Ministerial. Siga
        as instruções de cada campo de preenchimento.
      </p>
      <Form />
    </div>
  );
}
