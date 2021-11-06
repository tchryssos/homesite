import { createUseStyles } from 'react-jss';

import { white } from '~/constants/styles/colors';
import { monoFont } from '~/constants/styles/fonts';

const useStyles = createUseStyles({
  fourOhFourContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fourOhFour: {
    color: white,
    fontSize: 72,
    fontFamily: monoFont,
  },
});

const FourOhFour = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.fourOhFourContainer}>
        <span className={classes.fourOhFour}>404</span>
      </div>
    </>
  );
};

export default FourOhFour;
