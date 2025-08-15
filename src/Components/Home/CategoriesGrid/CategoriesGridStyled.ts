'use client'
import Link from "next/link";
import styled from "styled-components";


export const CategoriesContainer = styled.div`
display: grid;
margin: 35px 35px 250px 0;
width: 92%;
height: 700px;
grid-template-columns: 33% 33% 33% ;
grid-template-rows: 20% 20% 20% 20% 20% 20%;
grid-gap: 15px;
@media (max-width: 650px) {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0;
margin: 10px 0 0 0;
height: 900px;
}

`

export const Relax = styled(Link)`
display: grid;
justify-content: center;
align-items: center;
width: 100%;
grid-column: 1/2;
grid-row: 1/4;
background-position: center;
background-size: cover;
transition: all ease .5s;
cursor: pointer;
z-index: 100;

&:hover{
    transform: scale(1.06);
    transition: all ease .5s;
    border-radius: 20px;
    box-shadow: 1px 2px 20px black;
    z-index: 400;

}
h3{

    text-align: center;
    color: white;
    opacity: 1;
    font-size: 45px;
    font-weight: 500;
    line-height: 50px;
}

@media (max-width: 1000px) {
    h3{
        font-size: 30px;
    }
}
@media (max-width: 650px) {
height: 200px;
}

`

export const CamasMultiposicion = styled(Relax)`
grid-column: 2/3;
grid-row: 1/5;
background-position: center;

`
export const Comedores = styled(Relax)`
grid-column: 3/4;
grid-row: 1/4;
`
export const MesasExtensibles = styled(Relax)`
grid-column: 1/2;
grid-row: 4/7;
`
export const SofásCama = styled(Relax)`
grid-column: 2/3;
grid-row: 5/7;
`
export const Living = styled(Relax)`
grid-column: 3/4;
grid-row: 4/7;
`