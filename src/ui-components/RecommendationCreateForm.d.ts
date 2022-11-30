/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RecommendationCreateFormInputValues = {
    name?: string;
    description?: string;
    address?: string;
    lat?: number;
    long?: number;
    coverImage?: string;
};
export declare type RecommendationCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    lat?: ValidationFunction<number>;
    long?: ValidationFunction<number>;
    coverImage?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecommendationCreateFormOverridesProps = {
    RecommendationCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    address?: FormProps<TextFieldProps>;
    lat?: FormProps<TextFieldProps>;
    long?: FormProps<TextFieldProps>;
    coverImage?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecommendationCreateFormProps = React.PropsWithChildren<{
    overrides?: RecommendationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RecommendationCreateFormInputValues) => RecommendationCreateFormInputValues;
    onSuccess?: (fields: RecommendationCreateFormInputValues) => void;
    onError?: (fields: RecommendationCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: RecommendationCreateFormInputValues) => RecommendationCreateFormInputValues;
    onValidate?: RecommendationCreateFormValidationValues;
} & React.CSSProperties>;
export default function RecommendationCreateForm(props: RecommendationCreateFormProps): React.ReactElement;
