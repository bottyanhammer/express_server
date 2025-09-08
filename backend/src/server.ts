import express from "express";
import cors from "cors";
import { json } from "stream/consumers";

const PORT = 8000;
const HOST = "127.0.0.1";

// Szerver indítása:
const server = express();

// Cors problémákra - Csak fejlesztési időben: minden kérést engedélyezünk.
server.use(cors());
server.use(express.json());


server.listen(PORT, () => console.log(`Server is running at http://${HOST}:${PORT}`));


