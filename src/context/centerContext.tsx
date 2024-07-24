// BranchContext.tsx
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { Centers } from "../data/fakeData";

// Definimos la interfaz para el contexto
interface BranchContextProps {
  selectedBranch: Centers | null;
  setSelectedBranch: Dispatch<SetStateAction<Centers | null>>;
}

// Definimos la interfaz para las props del proveedor
interface BranchProviderProps {
  children: ReactNode;
}

const BranchContext = createContext<BranchContextProps | undefined>(undefined);

const BranchProvider = ({ children }: BranchProviderProps) => {
  const [selectedBranch, setSelectedBranch] = useState<Centers | null>(() => {
    const savedBranch = sessionStorage.getItem("selectedBranch");
    return savedBranch !== null ? JSON.parse(savedBranch) : null;
  });

  useEffect(() => {
    sessionStorage.setItem("selectedBranch", JSON.stringify(selectedBranch));
  }, [selectedBranch]);

  return (
    <BranchContext.Provider value={{ selectedBranch, setSelectedBranch }}>
      {children}
    </BranchContext.Provider>
  );
};

// Hook personalizado para usar el contexto
const useBranch = () => {
  const context = useContext(BranchContext);
  if (!context) {
    throw new Error("useBranch debe ser usado dentro de un BranchProvider");
  }
  return context;
};

// Exportamos el proveedor y el hook
export { BranchProvider, useBranch };
