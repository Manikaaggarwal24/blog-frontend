
import { Box, styled, Typography, Link } from '@mui/material';
import { Instagram, LinkedIn, Facebook } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
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
    color:#000000;
    text-align: justify;
    font-weight: 60;
    text-align: center;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">MoneyMindset24</Typography>
                <Text variant="h5">
                At MoneyMindset24, we're passionate about empowering individuals to achieve financial freedom and security. We believe that knowledge is power, and that's why we provide accessible and practical information on a wide range of financial topics, including:
                <br/><ul>
<li>Portfolio Management: Learn how to build and manage a diversified portfolio that aligns with your goals and risk tolerance.</li>
<br/><li>Tax Optimization: Understand the ins and outs of taxes and discover strategies to minimize your tax burden.</li>
<br/><li>Investment Strategies: Explore various investment options, from stocks and bonds to real estate and alternative investments.</li>
<br/><li>Share Market Insights: Stay informed about the latest market trends and analysis to make informed investment decisions.</li>
<br/><li>Financial Planning: Get guidance on budgeting, saving, debt management, retirement planning, and more.</li> </ul>
<br/>Our team of experienced financial professionals and passionate writers are committed to delivering clear, concise, 
and actionable content that you can use to improve your financial situation. We believe that financial literacy should be accessible to everyone, regardless of their background or experience.

<br/>Whether you're a seasoned investor or just starting out on your financial journey, MoneyMindset24 is your one-stop shop for reliable information, insightful analysis, and practical tips to help you achieve your financial goals.
<br/><br/>
Join our community of financially savvy individuals today and unlock your financial potential!
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.linkedin.com/in/kanika-aggarwal-7a723a2a7/" color="#0077B5" target="_blank"><LinkedIn /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on Instagram
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/moneymindest24/?igsh=MWhqMWJkZWZtcnR4ZA%3D%3D" color="#833AB4" target="_blank">
                            <Instagram /> 
                        </Link>
                       Or On Facebook
                        <Link href="https://www.facebook.com/people/Moneymindset24/61555887807146/?mibextid=ZbWKwL" color="#1877f2" target="_blank">
                            <Facebook />
                        </Link>
                        
                    </Box>  
                        
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;