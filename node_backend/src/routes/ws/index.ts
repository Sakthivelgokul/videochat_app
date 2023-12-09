import {Server} from "socket.io"
import { createServer } from "http"

const io= (app:any)=>{
    const httpServsr=createServer(app);
    const io= new Server(httpServsr,{
        cors:{origin:"*"}
    });
    return {
        socket:io,
        fun :function listen(port: number,callback:Function){
        httpServsr.listen(port);
        callback()
        }
    }
}
export default io 