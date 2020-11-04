import { useMutation, gql } from '@apollo/client';
import { client } from '../client';

const INIT_PROJECT = gql`
  mutation initProject($name: String!) {
    initProject(name: $name) {
        projectName
    }
  }
`;

export async function InitProject() {
    const [initProject, {data}] = useMutation(INIT_PROJECT, {client: client});
    const d = await initProject('asd');
  }