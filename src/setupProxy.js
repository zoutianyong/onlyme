const proxy = require("http-proxy-middleware")
module.export=(app)=>{
    app.use("",proxy({
        target:"",
        changeOrigin:true,
    }))
}