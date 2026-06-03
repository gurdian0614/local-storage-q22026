import type { ListaEmpleadoProps } from "../types/ListaEmpleadoProps";

/**
 * [ES] Componente que muestra la lista de empleados en una tabla.
 *      Si no hay empleados, muestra un mensaje informativo.
 *      Cada fila incluye botones para editar o eliminar al empleado.
 * [EN] Component that displays the employee list in a table.
 *      If there are no employees, it shows an informational message.
 *      Each row includes buttons to edit or delete the employee.
 *
 * @param props.empleados        [ES] Arreglo de empleados a mostrar.
 *                               [EN] Array of employees to display.
 * @param props.setEmpleadoEditar [ES] Función para seleccionar un empleado para editar.
 *                                [EN] Function to select an employee for editing.
 * @param props.eliminarEmpleado  [ES] Función para eliminar un empleado por ID.
 *                                [EN] Function to delete an employee by ID.
 */
const ListaEmpleado: React.FC<ListaEmpleadoProps> = ({
    empleados,
    setEmpleadoEditar,
    eliminarEmpleado,
}) => {

    if (!empleados || empleados.length === 0) {
        return <p className="text-gray-500 text-center">No hay empleados para mostrar.</p>;
    }

    return (
        <div className="bg-white shadow-lg rounded-lg">
            <table className="min-w-full w-full table-auto">
                <thead>
                    <tr>
                        <th className="text-left p-2 font-medium text-gray-700">Nombre</th>
                        <th className="text-left p-2 font-medium text-gray-700">Cargo</th>
                        <th className="text-left p-2 font-medium text-gray-700">Departamento</th>
                        <th className="p-2 font-medium text-gray-700">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {empleados.map((empleado) => (
                        <tr key={empleado.id} className="border-t hover:bg-gray-50">
                            <td className="p-2 align-middle">{empleado.nombre}</td>
                            <td className="p-2 align-middle">{empleado.cargo}</td>
                            <td className="p-2 align-middle">{empleado.departamento}</td>
                            <td className="p-2 align-middle">
                                <div className="flex gap-2 justify-end">
                                    <button onClick={() => setEmpleadoEditar(empleado)} className="px-3 py-1 bg-yellow-200 hover:bg-yellow-300 rounded">
                                        Editar
                                    </button>

                                    <button onClick={() => eliminarEmpleado(empleado.id)} className="px-3 py-1 bg-red-200 hover:bg-red-300 rounded">
                                        Eliminar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaEmpleado;
