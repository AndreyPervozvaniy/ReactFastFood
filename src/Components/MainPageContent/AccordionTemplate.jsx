import React from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Text,
  Accordion,
} from "@chakra-ui/react";
import CustomText from "../CustomElements/CustomText";
const AccordionTemplate = () => {
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      p={5}
    >
      <CustomText fontSize={"3xl"} mb={10}>
        Ответы на вопросы
      </CustomText>
      <Accordion w={"95%"}>
        <AccordionItem borderRadius={"5px"} backgroundColor={"white"}>
          <h2>
            <AccordionButton
              border={"1px solid #ccc"}
              borderRadius={"5px"}
              p={4}
              _hover={{ backgroundColor: "white", textColor: "#ec9086" }}
            >
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                Как можно оплатить заказ ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            border={"none"}
            borderRadius={"5px"}
            textColor={"grey"}
            fontWeight={"bold"}
          >
            Оплата курьеру наличными при получении заказа или Online оплата с
            помощью сервиса быстрых платежей при онлайн заказе
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem backgroundColor={"white"} borderRadius={"5px"} my={2}>
          <h2>
            <AccordionButton
              borderRadius={"5px"}
              border={"1px solid #ccc"}
              p={4}
              _hover={{ backgroundColor: "white", textColor: "#ec9086" }}
            >
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                Когда я могу сделать заказ в Burger Lord?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            border={"none"}
            borderRadius={"5px"}
            textColor={"grey"}
            fontWeight={"bold"}
          >
            С 10:00 до 21:00
          </AccordionPanel>
        </AccordionItem>{" "}
        <AccordionItem backgroundColor={"white"}>
          <h2>
            <AccordionButton
              borderRadius={"5px"}
              border={"1px solid #ccc"}
              p={4}
              _hover={{ backgroundColor: "white", textColor: "#ec9086" }}
            >
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                Сколько ждать доставку заказа ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            border={"none"}
            borderRadius={"5px"}
            textColor={"grey"}
            fontWeight={"bold"}
          >
            Доставляем заказы от 60 до 90 минут
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};
export default AccordionTemplate;
