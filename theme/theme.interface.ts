export interface BrandColor {
    primary: string;
    secondary: string;
    success: string;
    danger: string;
    outline: string;
    form: string;
}
export interface TextColor {
    primary: string;
    secondary: string;
    white: string;
}
export interface Colors {
    brand: BrandColor;
    text: TextColor;
}

export interface FontSizesHeights {
    h1: string;
    h2: string;
    h3: string;
    p1: string;
    p2: string;
    s: string;
}

export interface Sizes {
    size0: string;
    size4: string;
    size8: string;
    size16: string;
    size32: string;
    size64: string;
    size128: string;
    [key: string]: string;
}
// export interface Sizes {
//     [key: string]: string;
// }

export interface FontWeights {
    medium: number;
    bold: number;
}

export interface FontFamily {
    interBold: string;
    interMedium: string;
}

export interface Theme {
    fontFamily: FontFamily;
    fontSizes: FontSizesHeights;
    fontWeights: FontWeights;
    lineHeights: FontSizesHeights;
    sizes: Sizes;
    colors: Colors;
}
