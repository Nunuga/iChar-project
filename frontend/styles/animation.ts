import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Card,
  CardProps,
  Flex,
  FlexProps,
  Image,
  ImageProps,
  Menu,
  MenuProps,
  Progress,
  ProgressProps,
  SimpleGrid,
  SimpleGridProps,
  Text,
  TextProps,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const itemAnimationImg = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 0,
    scale: 1,
    transition: {
      duration: 2.8,
      delay: 1,
      ease: [0, 0.1, 0.2, 1.01],
    },
  },
};

export const opasBox = {
  hidden: { opacity: 0, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2.8,
      delay: 1,
      ease: [0, 0.1, 0.2, 1],
    },
  },
};

// @ts-ignore
export const MotionMenu = motion<MenuProps>(Menu);
//@ts-ignore
export const MotionFlex = motion<FlexProps>(Flex);
export const MotionProgres = motion<ProgressProps>(Progress);
export const MotionImg = motion<ImageProps>(Image);
export const MotionText = motion<TextProps>(Text);
export const MotionButton = motion<ButtonProps>(Button);
export const MotionImges = motion<ImageProps>(Image);
export const MotionBox = motion<BoxProps>(Box);
export const MotionSimpleGrid = motion<SimpleGridProps>(SimpleGrid);
export const MotionCard = motion<CardProps>(Card);
