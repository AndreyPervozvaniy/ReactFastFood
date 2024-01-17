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
const AccordionTemplate = () => {
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      p={5}
    >
      <Text fontSize={"3xl"} fontWeight={"bold"} mb={10}>
        Ответы на вопросы
      </Text>
      <Accordion defaultIndex={[0]} allowMultiple w={"95%"}>
        <AccordionItem borderRadius={"5px"} backgroundColor={"white"}>
          <h2>
            <AccordionButton
              border={"1px solid black"}
              borderRadius={"5px"}
              p={4}
            >
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                Как можно оплатить заказ ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Оплата курьеру наличными при получении заказа или Online оплата с
            помощью сервиса быстрых платежей при онлайн заказе
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem backgroundColor={"white"} borderRadius={"5px"} my={2}>
          <h2>
            <AccordionButton
              borderRadius={"5px"}
              border={"1px solid black"}
              p={4}
            >
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                Когда я могу сделать заказ в Burger Lord?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>С 10:00 до 21:00</AccordionPanel>
        </AccordionItem>{" "}
        <AccordionItem backgroundColor={"white"}>
          <h2>
            <AccordionButton
              borderRadius={"5px"}
              border={"1px solid black"}
              p={4}
            >
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                Сколько ждать доставку заказа ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Доставляем заказы от 60 до 90 минут)
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};
export default AccordionTemplate;
