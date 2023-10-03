import http, { IncomingMessage, ServerResponse } from "http"

const Port: number = 5000
interface iData {
    Id: number
    Name: string
    Class: string
    Age: number
    Gender: string
    Height: string
}

interface iMessage{
    message: string
    success: boolean
    Grade: string
    data: null|{}[]
}

let StudentInfo:{}[] =[
    {
        Id: 1,
        Name: "Khalid",
        Class: "SSS3",
        Age: 17,
        Gender: "Male",
        Height: "Tall"
    },{
        Id: 2,
        Name: "Esther",
        Class: "SSS2",
        Age: 14,
        Gender: "Female",
        Height: "Average"
    },{
        Id: 3,
        Name: "Usman",
        Class: "SSS3",
        Age: 18,
        Gender: "Male",
        Height: "Tall"
    },{
        Id: 4,
        Name: "Sara",
        Class: "JSS2",
        Age: 9,
        Gender: "Female",
        Height: "Short"
    },{
        Id: 5,
        Name: "Debby",
        Class: "SSS1",
        Age: 12,
        Gender: "Female",
        Height: "Tall"
    },{
        Id: 6,
        Name: "Joan",
        Class: "SSS3",
        Age: 19,
        Gender: "Female",
        Height: "Tall"
    },
]

const server = http.createServer((req:IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.setHeader("Content-Type", "Application/JSON")
    const {url, method} = req

    let status = 404;

    let reply:iMessage = {
        message: "failed",
        success: false,
        Grade:"F9",
        data: null
    }
    let student: any = []
    req.on("data", (chunk: any) => {
        student.pudh(chunk)
    }).on("end", () => {
        
        //GET METHOD

        if (url === "/home" && method === "GET") {
            status = 200;
            reply.message = "Successful";
            reply.success = true;
            reply.Grade = "A1"
            reply.data = StudentInfo;
            res.write(JSON.stringify({ reply,status}));

            res.end();
        }


    })
})
server.listen(Port, () => {
    console.log("Server isup and running");
})