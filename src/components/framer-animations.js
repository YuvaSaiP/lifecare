export const container = {
    hidden: { opacity: 1, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
      //   duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.28,
      },
    },
  };
  
  export const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
      },
    },
  };
  