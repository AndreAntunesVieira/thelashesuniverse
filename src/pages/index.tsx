import styled from "styled-components";
import MainView from "../components/MainView";

export default function Home() {
  return (
    <MainView
      title="The Lashes Universe"
      description="The Lashes Universe"
      canonical="https://thelashesuniverse.inteligente.marketing"
      image="https://thelashesuniverse.inteligente.marketing/ogimage.png"
      imageAlt="The Lashes Universe"
    >
      <Section>
        <Header>
          <h1>The Lashes Universe</h1>
        </Header>
        <Main>
          <div>
            <a href="https://www.instagram.com/thelashesuniverse">
              <h2>Instagram</h2>
            </a>
            <a href="https://forms.gle/gX9r3hCFs8ihi8fR7">
              <h2>Quero ser palestrante</h2>
            </a>
            {/*<a href="https://www.youtube.com/channel/UCiKMs1PYH2D4OurZb8lPBog">*/}
            {/*  <h2>Youtube</h2>*/}
            {/*</a>*/}
            {/*<a href="https://www.facebook.com/profile.php?id=100083901067524">*/}
            {/*  <h2>Facebook</h2>*/}
            {/*</a>*/}
          </div>
        </Main>
      </Section>
    </MainView>
  );
}

const Header = styled.div`
  color: white;
`;

const Main = styled.div`
  flex-grow: 1;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div {
    > a {
      display: block;
      background: rgba(0, 0, 0, 0.4);
      text-align: center;
      color: white;
      padding: 0.8em 24px;
      margin: 8px;
      border-radius: 16px;
      transition: all ease 300ms;
      text-transform: uppercase;
      h2 {
        margin: 0;
      }

      &:hover {
        background: rgba(0, 0, 0, 0.8);
      }
    }
  }

  @media (max-width: 360px) {
    h2 {
      font-size: 1.2em;
    }
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    min-width: 760px;
    > div {
      display: flex;
      flex-direction: column;
      flex-basis: 50%;
    }
  }
`;

const Section = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("/background.png");
  min-height: 100vh;
  background-size: cover;
`;
