import { gql } from '@apollo/client';

export const SUMMONERS = gql`
    query getSummonerInfo($name: String!){
        summoner(name: $name) {
            id
            name
            puuid
        }
    }
`;