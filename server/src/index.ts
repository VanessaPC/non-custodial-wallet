import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { API } from "./constants";
import * as Endpoint from "./endpoints/index";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get(API.CREATE_WALLET, Endpoint.CreateUserWallet);
app.post(API.RESTORE_WALLET, Endpoint.RestoreUserWallet);

app.listen(5000, () => {
  console.log("Listening");
});
