/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Heading, Image, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function Details(props) {
  const { recommendation, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="500px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      boxShadow="0px 4px 100px rgba(0, 0, 0, 0.25)"
      borderRadius="20px"
      padding="0px 0px 10px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Details")}
      {...rest}
    >
      <Image
        width="unset"
        height="194px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={recommendation?.coverImage}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 10px 0px 10px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "NameContainer")}
        >
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="bookmark_border"
            {...getOverrideProps(overrides, "NameIcon")}
          ></MyIcon>
          <Heading
            overflow="hidden"
            grow="1"
            shrink="1"
            basis="0"
            level="3"
            children={recommendation?.name}
            {...getOverrideProps(overrides, "NameHeading")}
          ></Heading>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "AddressContainer")}
        >
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="info"
            {...getOverrideProps(overrides, "AddressIcon")}
          ></MyIcon>
          <Heading
            overflow="hidden"
            grow="1"
            shrink="1"
            basis="0"
            level="6"
            children={recommendation?.address}
            {...getOverrideProps(overrides, "AddressHeading")}
          ></Heading>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={recommendation?.description}
          {...getOverrideProps(overrides, "Description")}
        ></Text>
      </Flex>
    </Flex>
  );
}
