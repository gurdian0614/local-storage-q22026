import type { Empleado } from "./Empleado";

export interface ListaEmpleadoProps {
    empleados: Empleado[];
    setEmpleadoEditar: (empleado: Empleado) => void;
    eliminarEmpleado: (id: string) => void;
}