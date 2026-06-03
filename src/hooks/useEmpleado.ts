import { useEffect, useState } from "react";
import type { Empleado } from "../types/Empleado";
import type { empleadoType } from "../types/Props";
import Swal from "sweetalert2";

/**
 * [ES] Hook personalizado que gestiona el estado de la lista de empleados
 *      y su persistencia en localStorage.
 * [EN] Custom hook that manages the employee list state
 *      and its persistence in localStorage.
 *
 * @returns [ES] Objeto con el estado y las funciones para manejar empleados.
 *          [EN] Object with state and functions to manage employees.
 */
const useEmpleado = () => {
    const [empleados, setEmpleados] = useState<Empleado[]>(() => {
        const empleadosGuardados = localStorage.getItem("empleados");
        return empleadosGuardados ? JSON.parse(empleadosGuardados) : [];
    });

    const [empleadoEditar, setEmpleadoEditar] = useState<empleadoType>(null);

    useEffect(() => {
        localStorage.setItem("empleados", JSON.stringify(empleados));
    }, [empleados]);

    /**
     * [ES] Guarda un empleado nuevo o actualiza uno existente.
     *      Si el empleado no tiene ID se considera nuevo y se le asigna uno basado en la fecha actual.
     * [EN] Saves a new employee or updates an existing one.
     *      If the employee has no ID it is treated as new and assigned a timestamp-based ID.
     *
     * @param empleado [ES] Datos del empleado a guardar o actualizar.
     *                 [EN] Employee data to save or update.
     */
    const guardarEmpleado = (empleado: Empleado): void => {
        if (!empleado.id) {
            empleado.id = Date.now().toString();
            setEmpleados((prev) => [empleado, ...prev]);
            Swal.fire({
                icon: "success",
                title: "Empleado agregado correctamente",
            });
        } else {
            setEmpleados((prev) => prev.map((e) => (e.id === empleado.id ? empleado : e)));
            setEmpleadoEditar(null);
            Swal.fire({
                icon: "success",
                title: "Empleado actualizado correctamente",
            });
        }
    };

    /**
     * [ES] Elimina un empleado por su ID tras pedir confirmación al usuario.
     * [EN] Deletes an employee by their ID after requesting user confirmation.
     *
     * @param id [ES] Identificador único del empleado a eliminar.
     *           [EN] Unique identifier of the employee to delete.
     */
    const eliminarEmpleado = (id: string): void => {
        Swal.fire({
            title: "¿Está seguro?",
            text: "¡No podrá revertir esto!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Sí, eliminar",
        }).then((result) => {
            if (result.isConfirmed) {
                setEmpleados(empleados.filter((emp) => emp.id !== id));
                Swal.fire({
                    title: "Eliminado",
                    text: "El empleado ha sido eliminado",
                    icon: "success",
                });
            }
        });
    };

    return {
        empleados,
        empleadoEditar,
        setEmpleadoEditar,
        guardarEmpleado,
        eliminarEmpleado,
    };
};

export default useEmpleado;
