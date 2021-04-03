import { Link } from "react-router-dom";
import styled, {css} from "styled-components";

const OptionContainerStyles = css`
  padding: 0.6rem 1rem;
  cursor: pointer;
`

export const HeaderContainer = styled.div`
  height: 4.3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`

export const LogoContainer = styled( Link )`
   height: 100%;
   width: 4.3rem;
   padding: 1.5rem;
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
export const OptionLink = styled( Link )`
   ${OptionContainerStyles}
`
export const OptionDiv = styled.div`
   ${OptionContainerStyles}
`