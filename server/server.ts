const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

require("./routes/apiRoutes")(router);

app.use("/api/v1", router);

app.listen(4242, () => console.log("Running on port 4242"));
