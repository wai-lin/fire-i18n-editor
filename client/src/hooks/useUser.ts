import { useAuth } from "./useAuth";
import { useFireCollections } from "./useFireCollections";

function useUser() {
  const { users } = useFireCollections();
  const { getCurrentUser } = useAuth();

  const findUserByUid = (id: string) => users.doc(id).get();

  const createUser = () => {
    const currentUser = getCurrentUser();

    if (currentUser)
      return users.doc(currentUser.uid).set({
        displayName: currentUser?.displayName || "",
        email: currentUser.email,
        photoURL: currentUser.photoURL || "",
      });

    return null;
  };

  return { createUser, findUserByUid };
}

export { useUser };
