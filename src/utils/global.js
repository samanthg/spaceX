
import axios from "axios"

import Constants from "./constant"

class Global {

    static getRequest(url) {
        return new Promise((resolve, reject) => {
            axios.get(Constants.BASE_URL + url)
                .then((res) => {
                    console.log(res, 'res')
                    resolve(res)
                })
                .catch((err) => {
                    console.log(err, 'err')
                    reject(err)
                })
        })
    }



}
export default Global