import styled from 'styled-components'

export const Container = styled.div `

    background-color: #0A0A10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    height: 100%;
    min-height: 100vh;

`

export const Image = styled.img `
    margin-top: 11px;
    width: 240px;
`

export const ContainerItem = styled.div `
    display: flex;
    flex-direction: column;
    height: 100%;
    
`

export const H1 = styled.h1 `
    font-size: 28px;
    line-height: 33px;

    text-align: center;

    color: #FFFFFF;
    margin-bottom: 76px;
`

export const InputLabel = styled.label `
    font-weight: bold;
    font-size: 18px;
    font-style: normal;
    line-height: 22px;
    color: #EEEEEE;
    letter-spacing: -0.408px;
    margin-left: 25px;
    margin-bottom: -15px;
`

export const Input = styled.input `
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    margin: 18px 0px;
    padding-left: 15px;
    margin-bottom: 42px;

    border: none;
    outline: none;

    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;

    &::placeholder {
        color: #D0CFCF;
    }

`

export const Button = styled.button `
    display: flex;

    width: 342px;
    height: 68px;
    background: #D93856;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 14px;

    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;

    color: #FFFFFF;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    margin-bottom: 20px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }

    
`

export const ButtonOrder = styled.button `
    display: flex;

    width: 342px;
    height: 68px;
    background: #9BC53D;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 14px;

    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;

    color: #FFFFFF;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    margin-bottom: 20px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }

    
`