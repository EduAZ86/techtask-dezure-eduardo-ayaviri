'use client'
import { FC } from "react";
import { ITypographyProps, TTypographyVariant } from "./types";
import { TextError, Paragraph, Title, TextButton, Label, SubTitle, SecundaryText } from "./styles.tw";

const TypographySchema: TTypographyVariant = {
    title: (props: ITypographyProps) => (
        <Title {...props}>{props.children}</Title>
    ),
    subTitle: (props: ITypographyProps) => (
        <SubTitle {...props}>{props.children}</SubTitle>
    ),
    paragraph: (props: ITypographyProps) => (
        <Paragraph {...props}>{props.children}</Paragraph>
    ),
    label: (props: ITypographyProps) => (
        <Label {...props}>{props.children}</Label>
    ),
    textButton: (props: ITypographyProps) => (
        <TextButton {...props}>{props.children}</TextButton>
    ),
    secundaryText: (props: ITypographyProps) => (
        <SecundaryText {...props} >{props.children}</SecundaryText>
    ),
    error: (props: ITypographyProps) => (
        <TextError {...props}>{props.children}</TextError>
    ),
}
export const Typography: FC<ITypographyProps> = (props: ITypographyProps) => {
    return TypographySchema[props?.variant](props);
};

