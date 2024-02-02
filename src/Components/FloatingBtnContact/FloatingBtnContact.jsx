import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, IconButton, Icon, Link } from "@chakra-ui/react";
import { FaPhone, FaTelegram, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const FloatingBtnContant = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcons = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Box
      position="fixed"
      bottom="55"
      left={{ base: "5px", xl: "10" }}
      zIndex="999"
    >
      <IconButton
        icon={<Icon as={isOpen ? IoClose : FaPhone} />}
        borderRadius="full"
        w={50}
        h={50}
        onClick={toggleIcons}
        backgroundColor="#decb6a"
      />

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ position: "absolute", top: "-50px", left: "5px" }}
            >
              <Link href="https://t.me/AndreyPervozvaniy" isExternal>
                <IconButton
                  icon={<Icon as={FaTelegram} />}
                  borderRadius="full"
                  backgroundColor={"#decb6a"}
                />
              </Link>
            </motion.div>
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ position: "absolute", top: "-100px", left: "5px" }}
            >
              <Link
                href="https://www.instagram.com/andreypervozvaniy?igsh=YndvcDNzOHhtd2E4&utm_source=qr"
                isExternal
              >
                <IconButton
                  icon={<Icon as={FaInstagram} />}
                  borderRadius="full"
                  backgroundColor={"#decb6a"}
                />
              </Link>
            </motion.div>
            <motion.div
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ position: "absolute", top: "-150px", left: "5px" }}
            >
              <Link
                href="https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BA%D1%83%D0%B4%D1%80%D1%8F-24343b168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                isExternal
              >
                <IconButton
                  icon={<Icon as={FaLinkedin} />}
                  borderRadius="full"
                  backgroundColor={"#decb6a"}
                />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default FloatingBtnContant;
