import {Server} from "socket.io"
import { createServer } from "http"
const io= (app)=>{
    const httpServsr=createServer(app);
    const io= new Server(httpServsr,{
        cors:{origin:"*"}
    });
    return {
        socket:io,
        fun :function listen(port){
        httpServsr.listen(port);

    }}
}
export default io 