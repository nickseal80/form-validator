export interface Config
{
    validateDuringFormCompletion?: boolean,
    showErrorsUnderField?: boolean,
    showErrorsAlerts?: boolean,
    throwValidationErrors?: boolean,
    disableSubmitWhereHasErrors?: boolean,
    validateByFormChange?: boolean,
}

export const config: Config = {
    validateDuringFormCompletion: true,
    showErrorsAlerts: false,
    showErrorsUnderField: false,
    throwValidationErrors: true,
    disableSubmitWhereHasErrors: false,
    validateByFormChange: false,
}

export const getConfig = (extConfig: Config): Config => {
    const keys = Object.keys(config);
    const res = { ...config };
    keys.forEach((key: string) => {
        if (extConfig.hasOwnProperty(key)) {
            res[key as keyof Config] = extConfig[key as keyof Config];
        }
    });

    return res;
}

export const getDefaultConfig = (): Config => {
    return config;
}