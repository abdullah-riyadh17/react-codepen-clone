import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataProvider';
import { Box, styled } from '@mui/material';


const Container = styled(Box)`
height: 25vh;
`

const Result = () => {
    const [src, setSrc]= useState("");
    const {html, css, js} = useContext(DataContext);
    const srcCode = `
    <html>${html}</html>
    <style>${css}</style>
    <script>${js}</script>
    `
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setSrc(srcCode);

        }, 1000)
        return()=>clearTimeout(timeOut);

    }, [html, css, js])
    return (
        <Container>
          <iframe 
          srcDoc={src}title="Output"
          sandbox='allow-scripts'
          width="100%"
          height="100%"
          ></iframe>
        </Container>
    );
};

export default Result;