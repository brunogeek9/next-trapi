import styled from '@emotion/styled'
import Link from 'next/link'

function Card({ movie }) {
    const { API_URL } = process.env

    return (
        <CardStyled>
            <div className="poster">
                <img width={255} height={360} src={API_URL + movie.poster.url} alt="" />
            </div>
            <div className="body">
                
                <h3>{movie.title}</h3>

                {/* <p dangerouslySetInnerHTML={{ __html: movie.description }} /> */}
                <Link href="/movies/[id]" as={`movies/${movie.id}`}>
                    <a>More about this movie</a>
                </Link>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    width: 100%;
    /* height: 88%; */
    border: 1px solid #cccccc;
    margin-top: 50px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0, 0.2);
    
    .body {
        padding: 20px;
        
        h3 {
            margin-bottom: 20px;
        }
        
        p {
            color: #666666;
            line-height: 1.5;
        }
    }
`

export default Card
