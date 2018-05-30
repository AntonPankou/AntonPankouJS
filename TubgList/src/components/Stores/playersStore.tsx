import IPlayer from '../Interfaces'

const player1 ={    
    active: true,    
    deaths: 14,
    kills: 10,
    name: 'MrBigDick'
}

const player2 ={
    active: false,
    deaths: 17,
    kills: 10,
    name: 'NagibaTHOR3513241'    
}

const player3 ={
    active: false,
    deaths: 13,    
    kills: 10,
    name: 'SexyCHICK1914'
}

const player4 ={
    active: false,
    deaths: 13,
    kills: 16,
    name: 'colowrath'
}

const player5 ={
    active: true,
    deaths: 2,
    kills: 25,
    name: 'IDDQD'
}

const player6 ={
    active: true,
    deaths: 4,
    kills: 17,
    name: 'Dovakhin'
}

const playersStore = [player1, player2, player3, player4, player5, player6];

function sortPropertyDeaths(obj1: IPlayer, obj2: IPlayer){
   return obj1.deaths - obj2.deaths
}

function sortPropertyKills(obj1: IPlayer, obj2: IPlayer){
    return obj2.kills - obj1.kills
}

export const killsSort = playersStore.sort(sortPropertyKills);
export const deathsSort = playersStore.sort(sortPropertyDeaths);

export default playersStore