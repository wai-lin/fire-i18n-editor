import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { CgGoogle, CgLogOut } from "react-icons/cg";

import { useAuth, useAuthSubscriber } from "@hooks/useAuth";
import { useUser } from "@/hooks/useUser";

const GoogleLogin: React.FC = () => {
  const history = useHistory();
  const { signIn, signOut } = useAuth();
  const { createUser } = useUser();

  const user = useAuthSubscriber(createUser);

  React.useEffect(() => {
    if (user !== null) history.push("/projects");
    else history.replace("/");
  }, [history, user]);

  return user ? (
    <Button rightIcon={<CgLogOut />} onClick={() => signOut()}>
      Sign Out
    </Button>
  ) : (
    <Button rightIcon={<CgGoogle />} onClick={() => signIn()}>
      Sign In with
    </Button>
  );
};

export { GoogleLogin };
