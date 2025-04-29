import { useContext } from 'react';
import { AppContext } from './AppContext';

// Hook personalizado para usar el contexto
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe ser usado dentro de un AppContextProvider');
  }
  return context;
};
