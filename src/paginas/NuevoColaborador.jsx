import FormularioColaborador from "../components/FormularioColaborador";
import { useEffect } from "react";
import useProyectos from "../hooks/useProyectos";
import { useParams } from "react-router-dom";
import Alerta from "../components/Alertas";

const NuevoColaborador = () => {
  const {
    obtenerProyecto,
    proyecto,
    colaborador,
    cargando,
    agregarColaborador,
    alerta,
  } = useProyectos();
  const params = useParams();

  useEffect(() => {
    obtenerProyecto(params.id);
  }, []);

  if (!proyecto._id) return <Alerta alerta={alerta} />;
  return (
    <>
      <h1 className="text-4xl font-black">
        {" "}
        Añadir Colaboradores(a) al Proyecto : {proyecto.nombre}
      </h1>

      <div className="mt-10 flex justify-center">
        <FormularioColaborador />
      </div>

        {cargando ? (
          <p className="text-center">CARGANDO...</p>
        ) : (
          colaborador?._id && (
            <div className="flex justify-center mt-10">
              <div className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow w-full">
                <h2 className="text-center mb-10 text-2xl font-bold">
                  Resultado:
                </h2>
                <div className="flex justify-between items-center">
                  <p>{colaborador.nombre}</p>
                  <button
                    type="button"
                    className="bg-slate-500 px-5 py-2 rounded-lg uppercase m-2 text-white text-sm font-bold"
                    onClick={() =>
                      agregarColaborador({
                        email: colaborador.email,
                      })
                    }
                  >
                    Agregar Al Proyecto
                  </button>
                </div>
              </div>
            </div>
          )
        )}
    </>
  );
};

export default NuevoColaborador;
