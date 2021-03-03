export interface IPlayer {
	identifier: string,
	name: string,
	wins: number
}

export interface IGame {
	code: string,
	playerA: IPlayer,
	playerB: IPlayer,
	xSign: 'A' | 'B',
	currentTurn: 'A' | 'B',
	board: Array<Array<string>>,
}
