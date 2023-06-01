'use client';
import Head from 'next/head'
import { Body, Container, Column, Titulo, Paragrafo, Buttons, TextButton, Box} from './style/style';
import Typography from '@/components/typography';
import { SocialIcon } from "react-social-icons"

export default function Home() {

  const title = "Felipe Antonio Estácio de Morais"
  const paragrafo = "Desenvolvedor Web e Analista de Dados"
  const labelButton = "Visualizar Projetos"
  const urlInstagram = "https://www.instagram.com/fellipe.tech"
  const urlWhatsapp = "https://api.whatsapp.com/send?phone=5538999531523"
  const urlLinkedin = "https://www.linkedin.com/in/felipe-ant%C3%B4nio-7430261b9/"
  



  return (
    <>
    <Head>
      <title>Portifólio</title>
    </Head>
    <Body>
    <Container>
      <Column>
        <Titulo>
          <Typography title={title}/>
        </Titulo >
      </Column>
      <Column>
       <Paragrafo> 
       <Typography title={paragrafo}/>
       </Paragrafo>
      </Column>
    <Column>
      <Buttons>
      
        <TextButton>
        <Typography title={labelButton}/>
        </TextButton>
      </Buttons>
    </Column>
    <Column>
       <Box>
       <SocialIcon url={urlInstagram} target="_blank" id="Instagram"/>
       <SocialIcon url={urlWhatsapp} target="_blank"/>
       <SocialIcon url={urlLinkedin} target="_blank"/>
       </Box>
    </Column>
    <Column>
       <Box>
       Sou Felipe Antonio Estácio de Morais, estudante de Engenharia de Software(Instituto Federal do Goiás). 
       </Box>
    </Column>
    </Container>
    </Body>
    </>
  )
}
