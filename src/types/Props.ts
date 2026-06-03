import type { Empleado } from "./Empleado";

/**
 * [ES] Tipo que representa un empleado seleccionado o la ausencia de selección.
 * [EN] Type that represents a selected employee or the absence of a selection.
 */
export type empleadoType = Empleado | null;

/**
 * [ES] Props del componente FormularioEmpleado.
 * [EN] Props for the FormularioEmpleado component.
 */
export interface Props {
    /** [ES] Función para agregar o actualizar un empleado. / [EN] Function to add or update an employee. */
    agregarActualizarEmpleado: (e: Empleado) => void;
    /** [ES] Empleado actualmente seleccionado para editar, o null si se crea uno nuevo. / [EN] Employee currently selected for editing, or null when creating a new one. */
    empleadoEditar: empleadoType;
    /** [ES] Función para actualizar el empleado en edición. / [EN] Function to update the employee being edited. */
    setEmpleadoEditar: (e: empleadoType) => void;
}
