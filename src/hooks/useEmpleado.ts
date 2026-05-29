import { useEffect, useState } from "react";
import type { Empleado } from "../types/Empleado";
import type { empleadoType } from "../types/Props";
import Swal from "sweetalert2";

const useEmpleado = () => {
    const [empleados, setEmpleados] = useState<Empleado[]>(() => {
        const empleadosGuardados = localStorage.getItem("empleados");
        return empleadosGuardados ? JSON.parse(empleadosGuardados) : [];
    });

    const [empleadoEditar, setEmpleadoEditar] = useState<empleadoType>(null);

    useEffect(() => {
        localStorage.setItem("empleados", JSON.stringify(empleados));
    }, [empleados]);

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
    }

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
                setEmpleados(empleados.filter(emp => emp.id !== id));
                Swal.fire({
                    title: "Eliminado",
                    text: "El empleado ha sido eliminado",
                    icon: "success",
                });
            }
        });
    }

    return {
        empleados,
        empleadoEditar,
        setEmpleadoEditar,
        guardarEmpleado,
        eliminarEmpleado,
    }
}

export default useEmpleado;