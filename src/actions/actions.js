import { SET_CHARACTERS } from "./action-types";

export function setCharacters(response){
	return {
		type : SET_CHARACTERS,
		payload : {
			list : response.results
		}
	}
}