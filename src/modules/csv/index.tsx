import http from "@/http";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { FieldValues, SubmitHandler } from "react-hook-form";

const CSVModule = () => {
  const states = {
    NOT_LOADED: "NOT_LOADED",
    LOADING: "LOADING",
    LOADED: "LOADED",
  };
  const [csvState, setCsvState] = useState(states.NOT_LOADED);

  var msg = "";
  switch (csvState) {
    case states.LOADING:
      msg = "El archivo está siendo enviado";
      break;
    case states.LOADED:
      msg = "El archivo ha sido enviado correctamente";
      break;
  }

  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setCsvState(states.LOADING);
    const file = data["csv-file"][0];
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await http.post("/upload-csv/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex flex-col w-full items-center">
      <section className="w-full flex flex-2 items-center justify-center flex-col my-10">
        <h2 className="font-bold text-lg mb-3">Subir un archivo CSV</h2>
        <p>Puedes subir un archivo CSV </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="inline-flex flex-col items-center justify-center ">
          <input
            type="file"
            multiple={false}
            className="file-input file-input-bordered file-input-primary w-fit my-3 color-primary"
            {...register("csv-file")}
          />
          <button type="submit" className="btn btn-primary px-6 mt-2">
            Enviar archivo
          </button>
        </form>
        {csvState !== states.NOT_LOADED && (
          <div className="flex justify-center items-center mt-5 h-32 bg-slate-200 w-1/3 rounded-xl">
            {csvState === states.LOADING ? (
              <p className="text-sm font-bold ">
                El archivo está siendo enviado
              </p>
            ) : (
              <p className="text-sm font-bold">
                El archivo ha sido enviado correctamente
              </p>
            )}
          </div>
        )}
      </section>
      <hr className="border-1 border-primary w-5/6 rounded-full" />
      <section className="w-full flex flex-col items-center justify-center my-5 px-8">
        <h2 className="font-bold text-lg mb-3">Descargar archivo CSV</h2>
        <p>
          Puedes descargar el archivo CSV asociado a los datos que se usaron
          para la construcción del aplicativo.
        </p>
        <button className="btn btn-primary px-6 mt-6">Descargar Archivo</button>
      </section>
    </main>
  );
};

export default CSVModule;
