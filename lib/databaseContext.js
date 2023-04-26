import { createContext, useContext, Context } from 'react'
import useFirestore from './firebase/useFirestore';

const firestoreContext = createContext({
    loading: true,
  setProject: async () => {},
    getAllProjects: async () => {},
    getCreativeProjects: async () => {},
    getStudioProjects: async () => {},
    getZoomProjects: async () => {},
    uploadPhotos: () => {},
    getPhoto: async () => {}
});

export function FirestoreProvider({ children }) {
  const firestore = useFirestore();
  return <firestoreContext.Provider value={firestore}>{children}</firestoreContext.Provider>;
}

export const useDB = () => useContext(firestoreContext);