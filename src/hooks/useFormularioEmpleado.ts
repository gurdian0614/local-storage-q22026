import React, { useEffect, useState } from "react";
import type { Empleado } from "../types/Empleado";
import type { FormularioDatos } from "../types/FormularioDatos";
import type { empleadoType } from "../types/Props";
import Swal from "sweetalert2";

/**
 * [ES] Hook personalizado que maneja el estado y la lógica del formulario de empleados.
 *      Sincroniza los campos del formulario con el empleado seleccionado para editar.
 * [EN] Custom hook that manages the state and logic of the employee form.
 *      Syncs form fields with the employee selected for editing.
 *
 * @param empleadoEditar      [ES] Empleado seleccionado para editar, o null si es uno nuevo.
 *                            [EN] Employee selected for editing, or null if creating a new one.
 * @param setEmpleadoEditar   [ES] Función para actualizar el empleado en edición.
 *                            [EN] Function to update the employee being edited.
 * @param guardarEmpleado     [ES] Función para guardar o actualizar un empleado.
 *                            [EN] Function to save or update an employee.
 * @returns [ES] Estado del formulario y funciones para manejarlo.
 *          [EN] Form state and functions to manage it.
 */
const useFormularioEmpleado = (
    empleadoEditar: empleadoType,
    setEmpleadoEditar: (e: empleadoType) => void,
    guardarEmpleado: (e: Empleado) => void,
) => {
    const empleadoObj = {
        nombre: "",
        cargo: "",
        departamento: "",
    };

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

    /**
     * [ES] Maneja el envío del formulario. Valida que todos los campos estén completos
     *      y llama a guardarEmpleado con los datos ingresados.
     * [EN] Handles form submission. Validates that all fields are filled
     *      and calls guardarEmpleado with the entered data.
     *
     * @param e [ES] Evento de envío del formulario.
     *          [EN] Form submission event.
     */
    const manejarEnvio = (e: React.ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (!formularioDatos.nombre.trim()) {
            Swal.fire("Nombre del empleado requerido", "", "warning");
            return;
        }

        if (!formularioDatos.cargo.trim()) {
            Swal.fire("Cargo del empleado requerido", "", "warning");
            return;
        }

        if (!formularioDatos.departamento.trim()) {
            Swal.fire("Departamento requerido", "", "warning");
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
    };

    /**
     * [ES] Maneja los cambios en los campos del formulario actualizando el estado de forma dinámica.
     * [EN] Handles changes in form fields by dynamically updating the state.
     *
     * @param e [ES] Evento de cambio del input.
     *          [EN] Input change event.
     */
    const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        setFormularioDatos((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    /**
     * [ES] Cancela la edición o creación de un empleado y limpia el formulario.
     * [EN] Cancels editing or creating an employee and clears the form.
     */
    const manejarCancelar = (): void => {
        setFormularioDatos(empleadoObj);
        setEmpleadoEditar(null);
    };

    return {
        formularioDatos,
        manejarCambio,
        manejarEnvio,
        manejarCancelar,
    };
};

export default useFormularioEmpleado;
