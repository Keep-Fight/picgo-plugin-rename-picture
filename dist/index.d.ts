declare const _default: (ctx: any) => {
    register: () => void;
    config: (ctx: any) => {
        name: string;
        type: string;
        alias: string;
        default: any;
        message: string;
        required: boolean;
    }[];
};
export = _default;
