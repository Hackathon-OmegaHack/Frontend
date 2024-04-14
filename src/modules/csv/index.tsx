import http from "@/http";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { json2csv } from "json-2-csv";

function download(fileData: string, fileName: string) {
  const link = document.createElement("a");
  link.download = fileName;
  const blob = new Blob([fileData], { type: "text/csv" });
  link.href = window.URL.createObjectURL(blob);
  link.click();
}
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
      const file1 = json2csv(response.data["csv_predicciones_watts"]);
      const file2 = json2csv(response.data["csv_predicciones_encendidos"]);
      download(file1,"csv_predicciones_watts.csv")
      download(file2,"csv_predicciones_encendidos.csv")
      console.log(response.data);
      setCsvState(states.LOADED);
    } catch (error) {
      console.error(error);
      setCsvState(states.LOADED);
    }
  };

  return (
    <main className="flex flex-col w-full items-center">
      <section className="w-full flex flex-2 items-center justify-center flex-col my-10">
        <h2 className="font-bold text-lg mb-3">Subir un archivo CSV</h2>
        <p>Puedes subir un archivo CSV </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="inline-flex flex-col items-center justify-center "
        >
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
      
    </main>
  );
};

export default CSVModule;
