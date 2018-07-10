import axios from "axios"



export  var getnewslist = () => {

    return  axios.get("../../static/newslist.json")
          .then(res =>res.data)
}
