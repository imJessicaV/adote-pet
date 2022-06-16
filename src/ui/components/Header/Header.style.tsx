import { styled } from "@mui/material";

//Nome de componente sempre inicia com letra maiuscula
export const HeaderContainer = styled('header')` 
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgb(240, 240, 240);
    padding: ${({theme}) => theme.spacing(2)};
`;

export const Logo = styled('img')`
    width:230px;

`;