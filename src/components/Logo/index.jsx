import styled from "styled-components";
import logo from "../../assets/logo-trackit.png";

export function Logo() {
    return (
        <ContentLogo>
            <img src={logo} alt="logo da TrackIt" />
            <h1>TrackIt</h1>
        </ContentLogo>
    )
}

const ContentLogo = styled.section`
    text-align: center;
    margin: 4.25rem 0 2rem;
    font-size: 3.25rem;
    color: var(--primary-ligth);
    img {
        height: 6.5rem;
    }
`;