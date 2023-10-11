import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import axios from 'axios';

function About() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
      console.log("red",res);
      setData(res.data)
    })
  },[])


  return (
    <>
      <Typography variant='h3' style={{ textAlign: "center" }}>About Us</Typography>

      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
        <Avatar alt="Sonam" src="/static/images/avatar/1.jpg" />
      </Stack>


      <br></br>
      <h2>hiiii</h2>

      <div className='row'>

        {data.map((item) => (
          <div>
            <div>
              <strong>Title- {item.title}</strong>
              <p>UserID- {item.userId}</p>
              <p>Body- {item.body}</p>
            </div>
          </div>
        ))}

      </div>


    </>
  );
}

export default About;
