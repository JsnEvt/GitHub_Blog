import { HeaderContainer } from './styles';
import logoSrc from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoSrc} alt="" />
    </HeaderContainer>
  )
}