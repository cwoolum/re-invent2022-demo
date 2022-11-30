/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, useBreakpointValue } from "@aws-amplify/ui-react";
import AppIcon from "./AppIcon";
export default function TopBar(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: { AppIcon: {}, Title: {}, Button: {}, TopBar: {} },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        AppIcon: {},
        Title: { fontSize: "12px", lineHeight: "14.522727012634277px" },
        Button: { size: "small" },
        TopBar: { width: "458px" },
      },
      variantValues: { breakpoint: "small" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "small",
    small: "small",
    medium: "medium",
  });
  const rest = { style: { transition: "all 0.25s" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1041px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="0px 10px 0px 10px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "TopBar")}
      {...rest}
    >
      <AppIcon
        width="64px"
        height="64px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "AppIcon")}
      ></AppIcon>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="29.045454025268555px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="René’s recommendations for Seattle"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Button
        shrink="0"
        size="default"
        isDisabled={false}
        variation="default"
        children="Sign out"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
