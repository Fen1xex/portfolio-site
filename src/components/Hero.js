import styled from 'styled-components'

const Hero = () => {
  return (
    <Wrapper className='section-center center'>
      <h3>Hero</h3>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Hero
