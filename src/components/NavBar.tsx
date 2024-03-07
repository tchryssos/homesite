import { IconLink } from '~/components/IconLink';
import { HOME_PATH } from '~/constants/routes';

import { Link } from './Link';
import { SubTitle } from './typography/SubTitle';

export function NavBar() {
  return (
    <div className="flex flex-1 justify-center">
      <div className="flex w-full max-w-breakpoint-lg flex-col">
        <div className="flex items-center justify-between p-4">
          <Link className="no-underline" href={HOME_PATH} isInternal>
            <SubTitle italic shadowed>
              Troy Chryssos
            </SubTitle>
          </Link>
          <div className="flex items-center">
            <IconLink
              altText="Email me"
              href="mailto:troychryssos@gmail.com"
              icon="email"
            />
            <IconLink
              altText="Go to my Github profile"
              href="https://github.com/tchryssos"
              icon="github"
            />
            <IconLink
              altText="View my Spotify profile"
              href="https://open.spotify.com/user/tchryssos?si=7ff8a5dcdae64508"
              icon="spotify"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
