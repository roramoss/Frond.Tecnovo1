import React, { useState } from 'react';

function Crund() {
  // Estado para almacenar la lista de teléfonos
  const [telefonos, setTelefonos] = useState([]);
  // Estado para el teléfono que se está editando (o nuevo teléfono)
  const [telefonoSeleccionado, setTelefonoSeleccionado] = useState({
    id: null,
    marca: '',
    modelo: '',
    precio: ''
  });
  // Estado para controlar si estamos en modo edición
  const [modoEdicion, setModoEdicion] = useState(false);

  // Colores principales para el tema oscuro
  const COLOR_PRIMARIO = '#2563eb'; // Azul oscuro/brillante (para botones principales)
  const COLOR_SECUNDARIO = '#1f2937'; // Gris oscuro (Fondo)
  const COLOR_FONDO_CLARO = '#111827'; // Negro muy oscuro (Fondo principal)
  const COLOR_TEXTO = '#f3f4f6'; // Blanco roto/gris claro

  // Crear/Agregar un nuevo teléfono
  const agregarTelefono = (e) => {
    e.preventDefault();
    if (!telefonoSeleccionado.marca || !telefonoSeleccionado.modelo || !telefonoSeleccionado.precio) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (modoEdicion) {
      setTelefonos(telefonos.map(tel =>
        tel.id === telefonoSeleccionado.id ? telefonoSeleccionado : tel
      ));
      setModoEdicion(false);
    } else {
      const nuevoTelefono = {
        ...telefonoSeleccionado,
        id: telefonos.length > 0 ? Math.max(...telefonos.map(t => t.id)) + 1 : 1,
      };
      setTelefonos([...telefonos, nuevoTelefono]);
    }
    setTelefonoSeleccionado({ id: null, marca: '', modelo: '', precio: '' });
  };

  // Seleccionar teléfono para editar
  const seleccionarParaEditar = (telefono) => {
    setTelefonoSeleccionado({ ...telefono });
    setModoEdicion(true);
  };

  // Eliminar un teléfono
  const eliminarTelefono = (id) => {
    const confirmacion = window.confirm('¿Estás seguro de que quieres eliminar este teléfono?');
    if (confirmacion) {
      setTelefonos(telefonos.filter(telefono => telefono.id !== id));
    }
  };

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTelefonoSeleccionado({
      ...telefonoSeleccionado,
      [name]: value
    });
  };

  return (
    <div style={{ 
        fontFamily: 'Roboto, sans-serif', 
        maxWidth: '900px', 
        margin: '40px auto', 
        padding: '30px', 
        backgroundColor: COLOR_FONDO_CLARO, // Fondo principal oscuro
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)' // Sombra oscura profunda
    }}>
      <h1 style={{ 
          textAlign: 'center', 
          color: '#38bdf8', // Título azul brillante/cian
          fontSize: '2.5em', 
          marginBottom: '30px' 
      }}>
        Gestión de Teléfonos 
      </h1>

      {/* Formulario para agregar/editar teléfonos */}
      <div style={{ 
          marginBottom: '40px', 
          padding: '25px', 
          border: `1px solid ${COLOR_SECUNDARIO}`, 
          borderRadius: '8px', 
          backgroundColor: COLOR_SECUNDARIO // Fondo del formulario más claro que el principal
      }}>
        <h2 style={{ color: COLOR_TEXTO, marginBottom: '20px', borderBottom: '2px solid #374151', paddingBottom: '10px' }}>
          {modoEdicion ? 'Editar Teléfono' : 'Agregar Nuevo Teléfono'}
        </h2>
        
        <form onSubmit={agregarTelefono} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {/* Campos de entrada */}
          {['marca', 'modelo', 'precio'].map(field => (
            <div key={field}>
              <label htmlFor={field} style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontWeight: 'bold', 
                  color: COLOR_TEXTO 
              }}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}:
              </label>
              <input
                type={field === 'precio' ? 'number' : 'text'}
                id={field}
                name={field}
                value={telefonoSeleccionado[field]}
                onChange={handleChange}
                required
                style={{ 
                    width: '100%', 
                    padding: '10px', 
                    border: '1px solid #4b5563', 
                    borderRadius: '6px', 
                    backgroundColor: '#374151', 
                    color: COLOR_TEXTO 
                }}
              />
            </div>
          ))}

          {/* Botones de acción */}
          <button
            type="submit"
            style={{
              gridColumn: 'span 3',
              padding: '12px 20px',
              backgroundColor: modoEdicion ? '#10b981' : COLOR_PRIMARIO, // Verde para editar, Azul para agregar
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '18px',
              fontWeight: 'bold',
              marginTop: '10px',
              transition: 'background-color 0.3s'
            }}
          >
            {modoEdicion ? 'Actualizar Teléfono' : 'Agregar Teléfono'}
          </button>
          
          {modoEdicion && (
            <button
              type="button"
              onClick={() => {
                setModoEdicion(false);
                setTelefonoSeleccionado({ id: null, marca: '', modelo: '', precio: '' });
              }}
              style={{
                gridColumn: 'span 3',
                padding: '12px 20px',
                backgroundColor: '#ef4444', // Rojo para Cancelar
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                marginTop: '5px',
                transition: 'background-color 0.3s'
              }}
            >
              Cancelar Edición
            </button>
          )}
        </form>
      </div>

      {/* Lista de teléfonos */}
      <div style={{ borderTop: `1px solid ${COLOR_SECUNDARIO}`, paddingTop: '30px' }}>
        <h2 style={{ color: COLOR_TEXTO, marginBottom: '20px', borderBottom: '2px solid #374151', paddingBottom: '10px' }}>
          Listado de Teléfonos
        </h2>
        {telefonos.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: '1.1em' }}>No hay teléfonos registrados. ¡Añade uno!</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {telefonos.map(telefono => (
              <li key={telefono.id} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px 20px',
                border: '1px solid #374151',
                marginBottom: '15px',
                borderRadius: '8px',
                backgroundColor: COLOR_SECUNDARIO, // Fondo de la tarjeta
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
              }}>
                <div>
                  <h3 style={{ margin: '0', color: '#38bdf8', fontSize: '1.4em', fontWeight: 'bold' }}>
                      {telefono.marca} {telefono.modelo}
                  </h3>
                  <p style={{ margin: '5px 0 0', color: COLOR_TEXTO }}>
                      Precio: <span style={{ fontWeight: 'bold', color: '#fcd34d' }}>${parseFloat(telefono.precio).toLocaleString('es-AR')}</span>
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => seleccionarParaEditar(telefono)}
                    style={{
                      padding: '10px 15px',
                      marginRight: '10px',
                      backgroundColor: '#fcd34d', // Amarillo (Énfasis)
                      color: COLOR_FONDO_CLARO, // Texto oscuro en botón claro
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      transition: 'background-color 0.3s'
                    }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => eliminarTelefono(telefono.id)}
                    style={{
                      padding: '10px 15px',
                      backgroundColor: '#dc2626', // Rojo
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      transition: 'background-color 0.3s'
                    }}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Crund;