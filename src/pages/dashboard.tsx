import { GetServerSideProps } from "next";
import { useContext, useEffect } from "react";
import { Can } from "../components/Can";
import { AuthContext } from "../contexts/AuthContext";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext);

  useEffect(() => {
    api.get('me')
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <p>Hello, {user?.email}</p>

      <button type="button" onClick={signOut}>Sign out</button>

      <Can permissions={['metrics.list']}>
        <h2>Métricas</h2>
      </Can>
    </div>
  )
};

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('me');

  return {
    props: {}
  }
});