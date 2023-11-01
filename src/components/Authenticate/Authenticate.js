import jwtDecode from "jwt-decode"

export default function Authenticate(token){
if(token){
    const {exp}=jwtDecode(token)
    if(exp*1000 >new Date.getTime()){
        return true
    }
}
return false
}