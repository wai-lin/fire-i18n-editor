import React from "react";
import { serverTimestamp } from "@/firebase";
import { useAuth } from "./useAuth";
import { useFireCollections } from "./useFireCollections";

function useProject() {
  const { users, usersProjects } = useFireCollections();
  const { getCurrentUser } = useAuth();

  const createProject = () => {
    const owner = getCurrentUser();

    if (owner)
      users.doc(owner.uid).collection(usersProjects).add({
        name: "Untitled",
        createdAt: serverTimestamp(),
      });

    return null;
  };

  return { createProject };
}

function useSubUsersProjects() {
  const { users, usersProjects } = useFireCollections();
  const { authStateListener, getCurrentUser } = useAuth();

  const subStates = React.useRef<{
    authStateListener: typeof authStateListener;
    getCurrentUser: typeof getCurrentUser;
    users: typeof users;
    usersProjects: typeof usersProjects;
  } | null>(null);

  if (subStates.current === null) {
    subStates.current = {
      authStateListener,
      getCurrentUser,
      users,
      usersProjects,
    };
  }

  const [user, setUser] = React.useState(() => getCurrentUser());
  const [projects, setProjects] = React.useState<any[]>([]);

  React.useEffect(() => {
    let unsubscribe: any = null;
    if (subStates.current)
      unsubscribe = subStates.current.authStateListener((u) => setUser(u));
    return () => {
      unsubscribe && unsubscribe();
      subStates.current = null;
    };
  }, [subStates]);

  React.useEffect(() => {
    let unsubscribe: any = null;

    if (user && subStates.current) {
      unsubscribe = subStates.current.users
        .doc(user.uid)
        .collection(subStates.current.usersProjects)
        .onSnapshot((snap) => {
          setProjects([]);
          snap.docs.forEach((doc) => {
            setProjects((prj: any) => [...prj, { id: doc.id, ...doc.data() }]);
          });
        });
    }
    return () => unsubscribe && unsubscribe();
  }, [user, subStates]);

  return projects;
}

export { useProject, useSubUsersProjects };
