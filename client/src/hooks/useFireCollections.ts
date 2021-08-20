import { fireStore } from "@/firebase";

function useFireCollections() {
  return {
    users: fireStore.collection("users"),
    usersProjects: "projects",
    usersProjectTranslations: "translations",
  };
}

export { useFireCollections };
