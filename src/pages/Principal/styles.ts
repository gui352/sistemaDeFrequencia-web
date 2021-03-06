import styled, {css} from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 400px;
  background: #3CB371;
  margin-bottom: 300px;
  color: #EEEEE0;

  a{
    color: #EEEEE0;
  }

  h1{
    margin-top: 10%;
    text-align: center;
    font-size: 48px;
    line-height: 56px;
  }

  h5{
    text-align: center;
    font-size: 25px;
    line-height: 56px; 
    font-weight: light;
  }

  .campo_pesquisa{
    margin-top: 40px;
    max-width: 700px;
    display: flex;
    margin-left: 27%;
    input {
      flex: 1;
      height: 46px;
      padding: 0 24px;
      border: 0;
      border-radius: 3px 0 0 3px;
      color: #3a3a3a;
      font-size: 16px;
      background: #EEEEE0;
      border: 2px solid #EEEEE0;

      &::placeholder {
        color: #a8a8b3;
      }

    }

    button {
      width: 210px;
      height: 50px;
      background: #8FBC8F;
      border-radius: 0 3px 3px 0;
      border: 0;
      font-weight: bold;
      transition: 0.3s;
      color: #EEEEE0;
      &:hover {
        background: ${shade(0.3, '#8FBC8F')};
      }
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: white;
  margin-top: 8px;
  margin-left: 365px;
`;

export const Repositories = styled.div`
  height: 300px;
  width: 550px;
  border-radius: 3px;
  padding: 12px;
  margin: 30px 0px 0px 420px;
  background: #2F4F4F;

  .container_dados {
    height: 250px;
    width: 550px;

    #segura_dados{
      display: flex;

      .dados_aluno{
        height: 185px;
        width: 275px;
        margin-top: 45px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-content: flex-start;
        justify-content: space-between;
  
        p {
          font-size: 20px;
        }
      }
    }

    strong {
      font-size: 30px;
    }

    #apagar{
      margin-left: 15px;
    }

    #editar{
      margin-left: 250px;
    }
  }
`;

export const Info = styled.div`
  width: 100%;
  margin-top: 150px;
  
  display: flex;
  justify-content: center;
`;

