import React, { useEffect, useState, useRef } from 'react';
import { AppContext } from './AppContext';
import axios from 'axios';
import socket from '../config/socket';

export const AppContextProvider = ({ children }) => {
  // Estados
  const [horarios, setHorarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);

  // Referencia al socket importado
  const socketRef = useRef(socket);

  // OBTENER HORARIOS
  const obtenerHorarios = async () => {

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000"

    try {
      setLoading(true);

      const { data } = await axios.get(`${BACKEND_URL}/api/horarios`);

      // Ordenar los horarios por hora
      const horariosOrdenados = data.sort((a, b) => {
        const [horaA, minA] = a.hora.split(":").map(Number);
        const [horaB, minB] = b.hora.split(":").map(Number);
        return horaA !== horaB ? horaA - horaB : minA - minB;
      });

      setHorarios(horariosOrdenados);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener horarios:", error);
      setError("Error al obtener horarios disponibles");
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerHorarios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Efecto para configurar el socket
  useEffect(() => {
    // Verificar si el socket ya está conectado
    if (socketRef.current.connected) {
      setSocketConnected(true);
      console.log('Socket ya conectado con ID:', socketRef.current.id);
    }

    // Escuchar el evento de conexión
    const handleConnect = () => {
      console.log('Socket conectado con ID:', socketRef.current.id);
      setSocketConnected(true);
    };

    // Escuchar el evento de desconexión
    const handleDisconnect = () => {
      console.log('Socket desconectado');
      setSocketConnected(false);
    };

    // Escuchar el evento 'actualizar-horarios'
    const handleUpdateHorarios = () => {
      console.log('Socket: Recibido evento actualizar-horarios');
      obtenerHorarios();
    };

    // Manejar errores de conexión
    const handleConnectError = (error) => {
      console.error('Error de conexión con el socket:', error);
      setSocketConnected(false);
    };

    // Registrar los listeners
    socketRef.current.on('connect', handleConnect);
    socketRef.current.on('disconnect', handleDisconnect);
    socketRef.current.on('actualizar-horarios', handleUpdateHorarios);
    socketRef.current.on('connect_error', handleConnectError);

    // Limpiar al desmontar
    return () => {
      // Eliminar los listeners para evitar duplicados
      socketRef.current.off('connect', handleConnect);
      socketRef.current.off('disconnect', handleDisconnect);
      socketRef.current.off('actualizar-horarios', handleUpdateHorarios);
      socketRef.current.off('connect_error', handleConnectError);

      // No desconectamos el socket aquí porque podría ser usado por otros componentes
      // La desconexión se maneja en el archivo socket.js o cuando la aplicación se cierra
    };
  }, []);


  // Función para reconectar el socket manualmente
  const reconnectSocket = () => {
    if (socketRef.current) {
      // Usar el método connect() para reconectar el socket existente
      if (!socketRef.current.connected) {
        socketRef.current.connect();
        console.log('Intentando reconectar socket...');
      } else {
        console.log('El socket ya está conectado');
      }
    }
  };

  // CREAR CITA
  const createAppointment = async (appointmentData, horaID) => {
    setLoading(true);
    setError(null);

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000"

    try {
      // Asegurarnos de que estamos enviando los datos correctos
      console.log('Datos enviados a la API:', appointmentData);
      const response = await axios.post(`${BACKEND_URL}/api/citas`, appointmentData);

      await axios.post(
        `${BACKEND_URL}/api/horarios/${horaID}/agregar-fecha`,
        { fecha: appointmentData.fecha }
      );

      obtenerHorarios();

      setLoading(false);
      return {
        success: true,
        data: response.data
      };
    } catch (err) {
      console.error("Error al crear cita:", err);
      setError(err.response?.data?.message || 'Error al crear la cita');
      setLoading(false);
      return {
        success: false,
        error: err.response?.data?.message || 'Error al crear la cita'
      };
    }
  };


  const value = {
    // Estados
    loading,
    error,
    horarios,
    socketConnected,

    // Funciones
    createAppointment,
    obtenerHorarios,
    reconnectSocket
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
