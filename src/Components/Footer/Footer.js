import React from 'react'
import { Container, InfoContent, Rights, SecondContainer } from './styled'

export default function Footer() {
  return (
    <Container>
      <SecondContainer>
      {/* <InfoContent>
        <section>
          <article>A SEMPRE FINA</article>
        </section>
        <section>
          <article>ATENDIMENTO</article>
        </section>
        <section>
          <article>SUPORTE</article>
        </section>
        <section>
          <article>PERFIS</article>
        </section>
      </InfoContent> */}

      <Rights>
        <p>© 2022 Sempre Fina. Todos os direitos reservados.</p>
      </Rights>

      </SecondContainer>
    </Container>
  )
}
