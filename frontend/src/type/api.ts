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
          name
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

export const ONE_CHAMPION = gql`
    query oneChampionInfo($version: String!, $name: String!) {
        oneChampionInfo(version: $version, name: $name) {
            allytips
            blurb
            enemyTips
            id
            image {
                full
                group
                sprite
                x
                y
                w
                h
            }
            key
            lore
            name
            partype
            passive {
                description
                image {
                    full
                    sprite
                    group
                    x
                    y
                    w
                    h
                }
            }
            recommend
            skins {
                id
                name
                chromas
                num
            }
            spells {
                tooltip
                id
                leveltip {
                    effect
                    label
                }
                cooldown
                cooldownBurn
                cost
                costBurn
                costType
                description
                effect
                effectBurn
                maxammo
                maxrank
                range
                rangeBurn
                resource
                image {
                    full
                    sprite
                    group
                    x
                    y
                    w
                    h
                }
            }
            tags
            title
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
