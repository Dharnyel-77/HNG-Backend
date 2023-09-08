const express = require('express');
const app = express();
let PORT = 9000;


const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const dayOfWeek = today.getDay();
const current_day = daysOfWeek[dayOfWeek];

const github_file_url = "https://github.com/Dharnyel-77/HNG-Backend/blob/main/server.js"

const github_repo_url = "https://github.com/Dharnyel-77/HNG-Backend"

const status_code = 200


//api/info?slack_name=Daniel_&track=backend
app.get('/api', (req,res)=>{
  const currentDate = new Date(); 
  const formattedUtcTime = `${currentDate.getUTCFullYear()}-${(
          currentDate.getUTCMonth() + 1
        )
          .toString()
          .padStart(2, "0")}-${currentDate
          .getUTCDate()
          .toString()
          .padStart(2, "0")}T${currentDate
          .getUTCHours()
          .toString()
          .padStart(2, "0")}:${currentDate
          .getUTCMinutes()
          .toString()
          .padStart(2, "0")}:${currentDate
          .getUTCSeconds()
          .toString()
          .padStart(2, "0")}Z`;
  
  const utc_time = formattedUtcTime;
    const { slack_name, track } = req.query;

    const info = {
        slack_name,
        track,
        current_day,
        utc_time,
        github_file_url,
        github_repo_url,
        status_code
    };

    res.json(info);

})




app.listen(PORT);