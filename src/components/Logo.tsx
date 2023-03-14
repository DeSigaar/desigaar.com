import { FC } from 'react';
import { Logo as BaseLogo } from '@notion-to-mail/ui';
import LogoDev from '@/shared-assets/dev/logo.svg';
import LogoBeta from '@/shared-assets/beta/logo.svg';
import LogoNormal from '@/shared-assets/normal/logo.svg';
import { baseTitle } from '@/pages/_document';

const LogoImage =
  process.env.NEXT_PUBLIC_TYPE === 'dev'
    ? LogoDev
    : process.env.NEXT_PUBLIC_TYPE === 'beta'
    ? LogoBeta
    : LogoNormal;

export const Logo: FC = ({ ...rest }) => {
  return <BaseLogo image={LogoImage} title={baseTitle} {...rest} />;
};

export default Logo;
