import { Form } from "./components/forms/form";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center mt-10 text-center ">
      <h1 className="font-bold text-2xl">Formulario ADMCN</h1>
      <p className="font-light text-xs mt-2">Preencha os campos para gerar o relatório da Reunião Ministerial. Siga as instruções de cada campo de preenchimento.</p>
      <Form/>
    </div>
  );
}
