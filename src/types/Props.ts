import type { Empleado } from "./Empleado";

export type empleadoType = Empleado | null;

export interface Props {
    agregarActualizarEmpleado: (e: Empleado) => void;
    empleadoEditar: empleadoType;
    setEmpleadoEditar: (e: Empleado) => void;
}