import useFormularioEmpleado from "../hooks/useFormularioEmpleado";
import type { Props } from "../types/Props";

/**
 * [ES] Componente de formulario para agregar o editar un empleado.
 *      Muestra campos de texto para nombre, cargo y departamento, y adapta
 *      su título y botón de acción según si hay un empleado en edición o no.
 * [EN] Form component for adding or editing an employee.
 *      Displays text fields for name, position, and department, and adapts
 *      its title and action button depending on whether an employee is being edited.
 *
 * @param props.empleadoEditar            [ES] Empleado seleccionado para editar, o null.
 *                                        [EN] Employee selected for editing, or null.
 * @param props.setEmpleadoEditar         [ES] Función para cambiar el empleado en edición.
 *                                        [EN] Function to change the employee being edited.
 * @param props.agregarActualizarEmpleado [ES] Función para guardar o actualizar un empleado.
 *                                        [EN] Function to save or update an employee.
 */
const FormularioEmpleado: React.FC<Props> = ({
    empleadoEditar,
    setEmpleadoEditar,
    agregarActualizarEmpleado,
}) => {
    const {
        formularioDatos,
        manejarCambio,
        manejarEnvio,
        manejarCancelar,
    } = useFormularioEmpleado(empleadoEditar, setEmpleadoEditar, agregarActualizarEmpleado);

    return (
        <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                {empleadoEditar ? "Editar Empleado" : "Agregar Empleado"}
            </h2>

            <form onSubmit={manejarEnvio}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Nombre:</label>
                    <input className="w-full border px-3 py-2 rounded" name="nombre" value={formularioDatos.nombre} onChange={manejarCambio} />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Cargo:</label>
                    <input className="w-full border px-3 py-2 rounded" name="cargo" value={formularioDatos.cargo} onChange={manejarCambio} />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Departamento:</label>
                    <input className="w-full border px-3 py-2 rounded" name="departamento" value={formularioDatos.departamento} onChange={manejarCambio} />
                </div>

                <div className="flex gap-2 justify-end">
                    <button type="button" onClick={manejarCancelar} className="px-4 py-2 bg-gray-200">Cancelar</button>
                    <button type="submit" className="px-4 py-2 bg-gray-800 text-white rounded">{empleadoEditar ? "Actualizar" : "Agregar"}</button>
                </div>
            </form>
        </div>
    );
};

export default FormularioEmpleado;
