
import styled from "styled-components";

export const OrdersWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100vw;
min-height: 80vh;
height: auto;
padding-top: 130px;
background-color:  #2c2c2c;
color: white;
h1{
font-size: 48px;
@media (max-width: 600px) {
    font-size: 40px;
}
}
p{
    font-size: 20px;
    letter-spacing: 2px;
    font-style: italic;
    opacity: .7;
}
`

export const OrdersContainer = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: center;
align-items: center;
gap: 20px;
width: 70%;
margin-bottom: 0px;
`

export const OrderCard = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 350px;
height: 60px;
padding: 0px 20px ;
background: linear-gradient(to right, rgb(102, 102, 102), rgb(30, 30, 30)) ;
border-radius: 20px;
transition: all 0.2s ease;
&:hover{
    scale: 1.05;
    transition: all 0.2s ease;
    cursor: pointer;
}
p{
    color: white;
    
}
span{
    font-weight: 800;
    margin-left: 10px;
}
`



export const IconTimer = styled.div`
display: flex;
align-self: center;
color: orange;
font-size: 25px;
`


export const InstructionsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
max-width: 380px;
padding: 20px;
margin-top: 60px;
h3{
    font-size: 23px;
    font-weight: 600;
    letter-spacing: 1.7px;
    font-style: oblique;
}
p{
    margin-top: 0px;
    text-align: center;
    font-size: 17px;
    b {
        color: white;
    }
}
`
