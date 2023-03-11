import constants from "./constants"

class Api {
	async getCharacters(){
		let formData = new FormData()
		return await this.fetchWithTimeout(`${constants.api.BASE}/character/?page=1`)
	}
	async fetchWithTimeout(resource, options = {}, timeOut = 10000) {
		console.log(resource)
		try{
			const { timeout = timeOut } = options;
			const controller = new AbortController();
			const id = setTimeout(() => controller.abort(), timeout);
			const response = await fetch(resource, {
					...options, signal: controller.signal  
			});
			clearTimeout(id);
			try{
				const data = await response.json()
				if(!data.return_code){
					if(data.message == 'Unauthorized'){
						return {
							return_code : 403,
							msg : 'Correo o contraseña incorrectos'
						}
					}else{
						return {
							return_code : 500,
							msg : data.message
						}
					}
				}
				return data
			}catch(err){
				console.log(err)
				return {
					return_code : 999,
					msg : `Error al procesar, revisa tu conexión.`
				}
			}
		}catch(err){
			console.log('err',err)
			return {
				return_code : 900,
				msg : `¡Tiempo excedido! Revisa tu conexión por favor.`
			}
		}
	}
}
export default new Api()