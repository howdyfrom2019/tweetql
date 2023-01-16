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

export const LOL_PATCH_VERSIONS = gql`
    {
        latestVersion
    }
`

export const ALL_CHAMPIONS = gql`
  query allChampion($version: String!) {
      allChampion(version: $version) {
          id
          key
          version
          title
          blurb
          tags
          partype
          image {
              full
              sprite
              group
              x
              y
              w
              h
          }
          info {
              attack
              defense
              magic
              difficulty
          }
          stats {
              hp
              hpperlevel
              mp
              mpperlevel
              movespeedd
              armor
              armorperlevel
              spellblock
              spellblockperlevel
              attackrange
              hpregen
              hpregenperlevel
              mpregen
              mpregenperlevel
              crit
              critperlevel
              attackdamage
              attackdamageperlevel
              attackspeedperlevel
              attackspeed
          }
      }
  }
`;