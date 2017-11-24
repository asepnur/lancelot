import development from './development.json'
import production from './production.json'

const env = ""
const Dev = development.webserver.base_url + development.webserver.host + ":" + development.webserver.port
const Pro = production.webserver.base_url + production.webserver.port + production.webserver.host
const get_env = ()=>( env === "production"? Pro:Dev )

export const base_url = get_env()