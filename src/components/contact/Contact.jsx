
import { Box, styled, Typography, Link } from '@mui/material';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
        text-align: center;
    }
`;

const Text = styled(Typography)`
    color: #000000;
    text-align: center;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                    Reach out to me on linkedin
                    <Link href="https://www.linkedin.com/in/kanika-aggarwal-7a723a2a7/" color="#0077B5" target="_blank"><LinkedIn /></Link>
                    <br/>or connet on Instagram 
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/moneymindest24/?igsh=MWhqMWJkZWZtcnR4ZA%3D%3D" color="#833AB4" target="_blank">
                            <Instagram /> 
                        </Link><br/>
                         or on Facebook
                        <Link href="https://www.facebook.com/people/Moneymindset24/61555887807146/?mibextid=ZbWKwL" color="#1877f2" target="_blank">
                            <Facebook />
                        </Link>
                        
                    </Box>  .
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;