import type { Empleado } from "./Empleado";

/**
 * [ES] Props del componente ListaEmpleado.
 * [EN] Props for the ListaEmpleado component.
 */
export interface ListaEmpleadoProps {
    /** [ES] Arreglo de empleados a renderizar en la tabla. / [EN] Array of employees to render in the table. */
    empleados: Empleado[];
    /** [ES] Función para seleccionar un empleado y cargarlo en el formulario de edición. / [EN] Function to select an employee and load it into the edit form. */
    setEmpleadoEditar: (empleado: Empleado) => void;
    /** [ES] Función para eliminar un empleado por su ID. / [EN] Function to delete an employee by their ID. */
    eliminarEmpleado: (id: string) => void;
}
