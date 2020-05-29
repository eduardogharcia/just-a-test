import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
`
export const ProfilePic = styled.img`
  width: 100%;
  display: block;
`
export const DescriptionBox = styled.div`
  padding: 15px;
`
export const Title = styled.h3`
  font-weight: 600;
  color: #333;
  font-size: 1.111em;
  margin: 0  0 3px 0;
`
export const Address = styled.p`
  margin: 3px 0;
  font-size: 1em;
  color: #a5a5a5;
  font-weight: 300;
`
export const Meta = styled.div`
  display: flex;
  > div {
    margin-right: 10px;
  }
`
export const Featured = styled.div`
  padding:8px 15px;
  background-color: #e7e7e7;
  color: #484848;
  font-size: 18px;
  font-weight: 300;
`
export const FeaturedSuccess = styled(Featured)`
  background-color: #39b54a;
  color: #fff;
  font-weight: 600;
`