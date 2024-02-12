
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://img.freepik.com/free-photo/high-angle-desktop-with-laptop-copy-space_23-2148430882.jpg?w=900&t=st=1707303447~exp=1707304047~hmac=fb4e9421c796cd1f1e42cffc8ede4fffc770e11076ee3defec69454cbef8e1d9) center/100% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 50px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading> BLOGS MoneyMindset24 </Heading>
            
            <SubHeading>Investment. Wealth. Finance</SubHeading>
        </Image>
    )
}

export default Banner;