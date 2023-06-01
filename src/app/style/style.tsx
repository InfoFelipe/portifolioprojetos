
import { styled } from "styled-components";
import {space,  color, layout, flexbox } from 'styled-system'

export const Body = styled.body`
    color: rgb(var(--foreground-rgb));
    background: linear-gradient(
        to bottom,
        transparent,
        rgb(var(--background-end-rgb))
        )
        rgb(var(--background-start-rgb));
    background-color: rgba(234, 235, 244, 0.5);
`;

export const Column = styled.div`
     
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: minmax(250px, 5vh) minmax(50px, 10vh) minmax(20px, 10vh) minmax(30px, 20vh) minmax(20px, 25vh);
    place-items: center;
    background-color: rgba(234, 235, 244, 0.5);
`;

export const Titulo = styled.h1`
    flex-wrap: nowrap | wrap | wrap-reverse;
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
    margin-top: 100px;
    font-size: 45px;
    text-align: center;
    color: rgb(1, 43, 85)
`;

export const Paragrafo = styled.h1`
    flex-wrap: nowrap | wrap | wrap-reverse;
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
    margin-top: auto;
    font-size: 30px;
    text-align: center;
    color: rgb(84, 110, 135)
`;

export const Buttons = styled.button`
    flex-wrap: nowrap | wrap | wrap-reverse;
    justify-content:  flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
    background-color: #012B55;
    border-radius: 25px;
    border: none;
    width: 200px;
    height: 50px;
    margin-top: 10px;
    padding: 0.15em 1em;
    cursor: pointer;
    align-items: center;
`;

export const TextButton = styled.h1`
    flex-wrap: nowrap | wrap | wrap-reverse;
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
    margin-top: auto;
    font-size: 16px;
    font-family: arial, roboto, helvetica;
    font-weight: bold;
    text-align: center;
    color: #FFFFFF
`;

export const Box = styled.div`
display: flex;
gap: 10px;
gap: 10px 20px; /* row-gap column gap */
row-gap: 10px;
column-gap: 20px;
`;

