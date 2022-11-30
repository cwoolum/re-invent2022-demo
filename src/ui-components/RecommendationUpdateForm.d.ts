/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Recommendation } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RecommendationUpdateFormInputValues = {
    name?: string;
    description?: string;
    address?: string;
    lat?: number;
    long?: number;
    coverImage?: string;
};
export declare type RecommendationUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    lat?: ValidationFunction<number>;
    long?: ValidationFunction<number>;
    coverImage?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecommendationUpdateFormOverridesProps = {
    RecommendationUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    address?: FormProps<TextFieldProps>;
    lat?: FormProps<TextFieldProps>;
    long?: FormProps<TextFieldProps>;
    coverImage?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecommendationUpdateFormProps = React.PropsWithChildren<{
    overrides?: RecommendationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    recommendation?: Recommendation;
    onSubmit?: (fields: RecommendationUpdateFormInputValues) => RecommendationUpdateFormInputValues;
    onSuccess?: (fields: RecommendationUpdateFormInputValues) => void;
    onError?: (fields: RecommendationUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: RecommendationUpdateFormInputValues) => RecommendationUpdateFormInputValues;
    onValidate?: RecommendationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RecommendationUpdateForm(props: RecommendationUpdateFormProps): React.ReactElement;
