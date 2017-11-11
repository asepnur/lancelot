import development from './development.json'
import production from './production.json'

export const Dev = development.webserver.base_url + development.webserver.host + ":" + development.webserver.port
export const Pro = production.webserver.base_url + production.webserver.port + production.webserver.host