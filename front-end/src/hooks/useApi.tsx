import { useMutation, useQuery } from "@apollo/client";
import { GET_USER } from "../services/queries/userData.query";
import { UPDATE_USER } from "../services/mutations/updateUser.mutation";

export function useApi() {
  const { data, loading, error, client } = useQuery(GET_USER, {
    variables: { userId: 1234 },
  });

  const [updateUser] = useMutation(UPDATE_USER);

  return { data, loading, error, updateUser, client };
}
