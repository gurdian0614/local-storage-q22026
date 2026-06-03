/**
 * [ES] Representa los campos editables del formulario de empleado.
 *      No incluye el ID ya que este se asigna al momento de guardar.
 * [EN] Represents the editable fields of the employee form.
 *      Does not include the ID since it is assigned when saving.
 */
export interface FormularioDatos {
    /** [ES] Nombre del empleado ingresado en el formulario. / [EN] Employee name entered in the form. */
    nombre: string;
    /** [ES] Cargo del empleado ingresado en el formulario. / [EN] Employee position entered in the form. */
    cargo: string;
    /** [ES] Departamento ingresado en el formulario. / [EN] Department entered in the form. */
    departamento: string;
}
