let express = require("express");
let mongoose = require("mongoose");
let port = process.env.PORT || 4500;
let app = express();
app.use(express.json());
let user = require("./routes/user");
app.use("/api/user",user);
let auth = require("./routes/auth");
app.use("/api/user",auth);
let config =  require("config");

if(!config.get("ENV_PASSWORD")){
        console.log("GIVE ENV_PASSWORD");
        process.exit(1);
}
mongoose.connect("mongodb://localhost/CoordinateMongodb&Express",{ useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>console.log("database got connected"))
        .catch((error)=>console.log(`something went wrong!! ${error.message}`));

app.listen(port,()=>console.log(`port is working on ${port}`));
