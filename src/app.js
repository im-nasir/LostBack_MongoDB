import express from 'express';
import cors from "cors";
import cookieParse from "cookie-parser"


const app = express ()

app.use(cors({
    origin: process.env.CORSE_ORIGIN,
    credentials: true
}))

app.use(express.json({
    limit: "16kb"
}))

app.use()

export { app }