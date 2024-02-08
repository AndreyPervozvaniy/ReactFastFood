import { Fade, Button, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
const Elevator = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    let prevScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
      prevScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fade in={showBtn}>
      <Button
        zIndex="12"
        position="fixed"
        right={{ base: "5px", xl: "10" }}
        bottom="55px"
        w={50}
        opacity="80%"
        h={50}
        borderRadius="full"
        color={"white"}
        backgroundColor={"#decb6a"}
        _hover={{
          opacity: "50%",
        }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Icon as={FaArrowUp} h={6} w={6} color="black" />
      </Button>
    </Fade>
  );
};
export default Elevator;
