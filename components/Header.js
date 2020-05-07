import styled from '@emotion/styled'
import { rem } from 'polished'
import { Flex, Box } from 'reflexbox'
import Navigation from 'components/Navigation'
import Link from 'next/link'

function Header() {
    return (
        <HeaderStyled>
            <Box variant="container">
                <Flex justifyContent="space-between" alignItems="center">
                    <div className="logo">
                        <Link href="/">
                            <a>
                                <img src="/images/logo.svg" alt="Sites logo" />
                                <span className="logo-text">Next Movies</span>
                            </a>
                        </Link>
                    </div>
                    <Navigation />
                </Flex>

            </Box>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    background: ${props => props.isDark ? '#000000' : '#efefef'} ; 
    
    .logo {
        display: flex;
        align-items: center;

        .logo-text {
            color: #333333;
            font-weight: bold;
            font-size: 20px;
            margin-left: 20px;
        }
    }
`

export default Header