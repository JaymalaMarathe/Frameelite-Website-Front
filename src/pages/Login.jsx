import styled from "styled-components";

import {mobile} from "../responsive";

const Logo = styled.h1`
background: #121FCF;
background: linear-gradient(to right, #121FCF 0%, #CF1512 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
flex: 1;
align-items: center;
justify-content:center;
display: flex;
width: 35vmin;
height: 4vmin;
border: 0.9rem solid;
border-image: linear-gradient(var(--angle), #12c2e9, #c471ed, #f64f59) 1;
animation: 1s rotate linear infinite;
  font-weight: bold;
  font-size: 35px;
  ${mobile({ fontSize: "24px" })}
  @keyframes rotate {
    to {
      --angle: 360deg;
    }
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:
    url("https://us.123rf.com/450wm/ravennka/ravennka1508/ravennka150800091/44429785-abstract-low-polygonal-frame-in-rainbow-spectrum-colors.jpg?ver=6")
     center;
  background-size:100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
      <div class="module-border-wrap"><div class="module">
          <Logo> FRAMEELITE </Logo>
        </div>
        </div>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>FORGOT PASSWORD</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
