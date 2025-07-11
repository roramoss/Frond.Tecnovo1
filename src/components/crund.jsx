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

 

  // Crear/Agregar un nuevo teléfono
  const agregarTelefono = (e) => {
    e.preventDefault(); // Prevenir el recargo de la página
    if (!telefonoSeleccionado.marca || !telefonoSeleccionado.modelo || !telefonoSeleccionado.precio) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (modoEdicion) {
      // Si estamos en modo edición, actualizamos el teléfono existente
      setTelefonos(telefonos.map(tel =>
        tel.id === telefonoSeleccionado.id ? telefonoSeleccionado : tel
      ));
      setModoEdicion(false);
    } else {
      // Si no estamos en modo edición, agregamos un nuevo teléfono
      const nuevoTelefono = {
        ...telefonoSeleccionado,
        id: telefonos.length > 0 ? Math.max(...telefonos.map(t => t.id)) + 1 : 1, // Generar ID único
      };
      setTelefonos([...telefonos, nuevoTelefono]);
    }
    // Limpiar el formulario
    setTelefonoSeleccionado({ id: null, marca: '', modelo: '', precio: '' });
  };

  // Leer/Mostrar teléfonos (se hace directamente en el renderizado)

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
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Gestión de Teléfonos Celulares</h1>

      {/* Formulario para agregar/editar teléfonos */}
      <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #eee', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ color: '#555', marginBottom: '15px' }}>{modoEdicion ? 'Editar Teléfono' : 'Agregar Nuevo Teléfono'}</h2>
        <form onSubmit={agregarTelefono} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <label htmlFor="marca" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: 'black' }}>Marca:</label>
            <input
              type="text"
              id="marca"
              name="marca"
              value={telefonoSeleccionado.marca}
              onChange={handleChange}
              required
              style={{ width: 'calc(100% - 10px)', padding: '8px', border: '1px solid #ddd', borderRadius: '4px', color: 'black' }}
            />
          </div>
          <div>
            <label htmlFor="modelo" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: 'black' }}>Modelo:</label>
            <input
              type="text"
              id="modelo"
              name="modelo"
              value={telefonoSeleccionado.modelo}
              onChange={handleChange}
              required
              style={{ width: 'calc(100% - 10px)', padding: '8px', border: '1px solid #ddd', borderRadius: '4px', color: 'black' }}
            />
          </div>
          <div style={{ gridColumn: 'span 2' }}>
            <label htmlFor="precio" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: 'black' }}>Precio:</label>
            <input
              type="number"
              id="precio"
              name="precio"
              value={telefonoSeleccionado.precio}
              onChange={handleChange}
              required
              style={{ width: 'calc(100% - 10px)', padding: '8px', border: '1px solid #ddd', borderRadius: '4px', color: 'black' }}
            />
          </div>
          <button
            type="submit"
            style={{
              gridColumn: 'span 2',
              padding: '10px 20px',
              backgroundColor: modoEdicion ? '#28a745' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              marginTop: '10px'
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
                gridColumn: 'span 2',
                padding: '10px 20px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                marginTop: '5px'
              }}
            >
              Cancelar Edición
            </button>
          )}
        </form>
      </div>

      {/* Lista de teléfonos */}
      <div style={{ borderTop: '1px solid #ccc', paddingTop: '20px' }}>
        <h2 style={{ color: '#555', marginBottom: '15px' }}>Listado de Teléfonos</h2>
        {telefonos.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#777' }}>No hay teléfonos registrados.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {telefonos.map(telefono => (
              <li key={telefono.id} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 15px',
                border: '1px solid #eee',
                marginBottom: '10px',
                borderRadius: '5px',
                backgroundColor: '#fff'
              }}>
                <div>
                  <h3 style={{ margin: '0', color: '#333' }}>{telefono.marca} {telefono.modelo}</h3>
                  <p style={{ margin: '5px 0 0', color: '#666' }}>Precio: ${parseFloat(telefono.precio).toLocaleString('es-AR')}</p>
                </div>
                <div>
                  <button
                    onClick={() => seleccionarParaEditar(telefono)}
                    style={{
                      padding: '8px 12px',
                      marginRight: '10px',
                      backgroundColor: '#ffc107',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => eliminarTelefono(telefono.id)}
                    style={{
                      padding: '8px 12px',
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
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

export default Crund ;