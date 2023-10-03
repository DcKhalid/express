import express, { Application, Request, Response } from "express"

const Port: number = 3000;

const app: Application = express();

app.use(express.json());

const info = [
    {
        id: 1,
        name: "Khalid",
        email: "adekunlekhlaid@gmail.com"
    },{
        id: 2,
        name: "BJ",
        email: "BJ@gmail.com"
    },{
        id: 3,
        name: "Esther",
        email: "esther@gmail.com"
    },{
        id: 4,
        name: "Sylvia",
        email: "sylvia@gmail.com"
    },{
        id: 5,
        name: "Samuel",
        email: "samuel@gmail.com"
    },
];



//DEFAULT GET
app.get("/", (req:Request, res:Response) => {
    res.send("My First Express Server Tutorial");
});

//GET METHOD
app.get("/info", (req:Request, res:Response) =>{
    res.send(info);
});

// POST METHOD:

app.post("/post", (req:Request, res:Response) =>{
    let newInfo = req.body;
    console.log(newInfo);
    info.push(newInfo)
    res.json(info)
})

app.listen(Port, () =>{
    console.log(""); 
    console.log("server is up and running", Port);
});