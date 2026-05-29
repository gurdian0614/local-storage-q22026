import React, { useEffect, useState } from "react";
import type { Empleado } from "../types/Empleado";
import type { FormularioDatos } from "../types/FormularioDatos";
import type { empleadoType } from "../types/Props";
import Swal from "sweetalert2";

const useFormularioEmpleado = (
    empleadoEditar: empleadoType,
    setEmpleadoEditar: (e: empleadoType) => void,
    guardarEmpleado: (e: Empleado) => void,
) => {
    const empleadoObj = {
        nombre: "",
        cargo: "",
        departamento: "",
    }

    const [formularioDatos, setFormularioDatos] = useState<FormularioDatos>(empleadoObj);

    useEffect(() => {
        if (empleadoEditar) {
            setFormularioDatos({
                nombre: empleadoEditar.nombre,
                cargo: empleadoEditar.cargo,
                departamento: empleadoEditar.departamento,
            });
        }
    }, [empleadoEditar]);

    const manejarEnvio = (e: React.ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (!formularioDatos.nombre.trim()) {
            Swal.fire("Nombre del Empleado Requerido", "", "warning");
            return;
        }
        
        if (!formularioDatos.cargo.trim()) {
            Swal.fire("Cargo del Empleado Requerido", "", "warning");
            return;
        }
        
        if (!formularioDatos.departamento.trim()) {
            Swal.fire("Deprtamento Requerido", "", "warning");
            return;
        }

        const empleado: Empleado = {
            id: empleadoEditar ? empleadoEditar.id : "",
            nombre: formularioDatos.nombre,
            cargo: formularioDatos.cargo,
            departamento: formularioDatos.departamento,
        };

        guardarEmpleado(empleado);
        setFormularioDatos(empleadoObj);
        setEmpleadoEditar(null);
    }

    const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        setFormularioDatos((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    const manejarCancelar = (): void => {
        setFormularioDatos(empleadoObj);
        setEmpleadoEditar(null);
    }

    return {
        formularioDatos,
        manejarCambio,
        manejarEnvio,
        manejarCancelar,
    }
}

export default useFormularioEmpleado;