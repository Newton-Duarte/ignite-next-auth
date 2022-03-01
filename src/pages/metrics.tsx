import { GetServerSideProps } from "next";
import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Metrics() {
  return (
    <h1>Métricas</h1>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {}
  }
}, {
  permissions: ['metrics.list'],
  roles: ['administrator'],
});