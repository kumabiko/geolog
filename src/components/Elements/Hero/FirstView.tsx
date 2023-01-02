import { createStyles, Container, Title, Text, Button } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: 'url(/image/gael-gaborel-orbisterrae-G_MCcG2YqPQ-unsplash.jpg)',
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 40,
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.black,
    opacity: 0.75,
    fontSize: 24,
    maxWidth: 500,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 24,

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

export const FirstView = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>次は、どこに行こう</Title>

            <Text className={classes.description} mt={30}>
              世界遺産を探すならGeolog
            </Text>

            <Button color="dark" size="xl" className={classes.control} mt={40}>
              探しにいく
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
