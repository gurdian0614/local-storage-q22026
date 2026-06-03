/**
 * [ES] Representa la estructura de datos de un empleado.
 * [EN] Represents the data structure of an employee.
 */
export interface Empleado {
    /** [ES] Identificador único del empleado. / [EN] Unique employee identifier. */
    id: string;
    /** [ES] Nombre completo del empleado. / [EN] Full name of the employee. */
    nombre: string;
    /** [ES] Cargo o puesto que ocupa el empleado. / [EN] Position or role of the employee. */
    cargo: string;
    /** [ES] Departamento al que pertenece el empleado. / [EN] Department the employee belongs to. */
    departamento: string;
}
