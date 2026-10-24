
import { useState, useMemo, useRef, useReducer, useId } from 'react'

// Función para controlar el contador
function contadorReducer(estado, accion) {
  switch (accion.type) {
    case 'sumar':
      return estado + 1

    case 'restar':
      return estado - 1

    case 'reiniciar':
      return 0

    default:
      return estado
  }
}

function HooksPage() {

  // useMemo
  const [numero, setNumero] = useState(0)

  const resultado = useMemo(() => {
    return numero * numero
  }, [numero])

  // useRef
  const inputRef = useRef(null)

  function enfocarInput() {
    inputRef.current.focus()
  }

  // useReducer
  const [contador, dispatch] = useReducer(contadorReducer, 0)
  // useId
const idFormulario = useId()

  return (
    <div>
      <h1>Laboratorio de Hooks</h1>

      <p>
        En esta página practicamos
        diferentes Hooks de React.
      </p>

      {/* EJEMPLO DE useMemo */}
      <h2>Ejemplo de useMemo</h2>

      <p>
        useMemo permite memorizar un resultado
        y calcularlo nuevamente solo cuando
        cambian sus dependencias.
      </p>

      <label>Ingresá un número: </label>

      <input
        type="number"
        value={numero}
        onChange={(e) =>
          setNumero(Number(e.target.value))
        }
      />

      <p>El cuadrado del número es: {resultado}</p>

      <hr />

      {/* EJEMPLO DE useRef */}
      <h2>Ejemplo de useRef</h2>

      <p>
        useRef permite acceder directamente
        a un elemento del DOM.
      </p>

      <input
        type="text"
        ref={inputRef}
        placeholder="Escribí tu nombre"
      />

      <button onClick={enfocarInput}>
        Enfocar campo
      </button>

      <hr />

      {/* EJEMPLO DE useReducer */}
      <h2>Ejemplo de useReducer</h2>

      <p>
        useReducer permite administrar el estado
        mediante diferentes acciones.
      </p>

      <h3>Contador: {contador}</h3>

      <button onClick={() => dispatch({ type: 'sumar' })}>
        Sumar +1
      </button>

      <button onClick={() => dispatch({ type: 'restar' })}>
        Restar -1
      </button>

      <button onClick={() => dispatch({ type: 'reiniciar' })}>
        Reiniciar
      </button>
      
<hr />

{/* EJEMPLO DE useId */}
<h2>Ejemplo de useId</h2>

<p>
  useId permite generar identificadores únicos
  para relacionar las etiquetas con los
  campos de un formulario.
</p>

<div>
  <label htmlFor={`${idFormulario}-nombre`}>
    Nombre:
  </label>

  <input
    id={`${idFormulario}-nombre`}
    type="text"
    placeholder="Ingresá tu nombre"
  />
</div>

    <div>
    <label htmlFor={`${idFormulario}-correo`}>
        Correo electrónico:
    </label>

    <input
        id={`${idFormulario}-correo`}
        type="email"
        placeholder="Ingresá tu correo"
    />
    </div>


    </div>
  )
}

export default HooksPage

