import React from 'react';
export declare type IconData = {
    height: number;
    width: number;
    paths: string[];
};
declare type IconProps = {
    icon: IconData;
    padded?: boolean;
    large?: boolean;
    props: React.HTMLAttributes<SVGElement>;
};
export declare const Icon: React.FunctionComponent<IconProps>;
export {};
