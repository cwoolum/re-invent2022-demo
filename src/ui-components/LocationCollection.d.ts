/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LocationProps } from "./Location";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type LocationCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => LocationProps;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function LocationCollection(props: LocationCollectionProps): React.ReactElement;
