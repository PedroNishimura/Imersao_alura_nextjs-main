import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackGround';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Head from 'next/head';
import { useRouter } from 'next/router';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>CS:GO - Quiz - Base</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>CS:GO</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (event) {

              event.preventDefault();
              router.push(`/quiz?name=${name}`)
              console.log('submit')
            }}>
            <Input 
              name="nomeDoUsuario"
              onChange={(event) => setName(event.target.value)} 
              placeholder="Coloque seu nome"
              value={name}/>
            <Button type="submit" disabled={name.length === 0}>{`Jogar ${name}`}</Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <a>{db.external[0]}</a>
            {' '}
            <a>{db.external[1]}</a>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/PedroNishimura" />
    </QuizBackground>
  );
}
