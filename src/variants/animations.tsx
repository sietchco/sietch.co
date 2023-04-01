export const Animations = {
    // motion to each item from navbar
    container: {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.15,
            }
        }
    },
    // fade in to each item from navbar
    item:{
        hidden: {
            y: "100%"
        },
        show: {
            y: "0%",
            transition: {duration: 0.5 }
        }
    },
    // img animation
    image: {
        hidden: {
            height: "0px",
            opacity: 0,
        },
        visible: {
            height: "300px",
            opacity: 1,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1 }
        }
    },

    // motion to bg dark
    bgdark:{
        hidden: {
            height: "100%",
        },
        visible: {
            height: "0%",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.5}
        }
    }
}