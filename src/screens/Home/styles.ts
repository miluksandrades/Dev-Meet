import styled from 'styled-components/native';

export const Container = styled.View `
    flex: 1;
    background-color: #282828;
    justify-content: center;
    align-items: center;
    text-align: justify;
    padding: 50px;
`

export const Content = styled.View`
    text-align: justify;
    align-items: flex-start;
    margin-bottom: 15px;
`

export const Title = styled.Text`
    color: #fff;
    font-size: 40px;
    font-weight: bold;
`
export const Subtitle = styled.Text`
    color: #c6c6c6;
    font-size: 24px;
    padding: 25px 65px 25px 0px;
    line-height: 40px;
`

export const Detail = styled.Text`
    color: #FF5100;
`
export const Subdetail = styled.Text`
    background-color: #FF5100;
    color: #fff;
`

export const Button = styled.TouchableOpacity`
    background-color: #FF5100;
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 25px
    
`