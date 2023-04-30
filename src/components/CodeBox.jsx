import React, { useContext } from 'react';
import Editor from './Editor';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
display: flex;
background: #060606;
height: 60vh;
`
const CodeBox = () => {
    const {html, setHtml, css, setCss, js, setJs}= useContext(DataContext);
    return (<Container>
    <Editor heading="HTML" icon="/" color= "#FF3C41" value={html} onChange={setHtml}></Editor>
    <Editor heading="CSS" icon="*" color="#0EBEFF" value={css} onChange={setCss}></Editor>
    <Editor heading = "javaScript" icon="{}" color="#FCD000" value={js} onChange={setJs}></Editor>
    </Container>)
    
};

export default CodeBox;