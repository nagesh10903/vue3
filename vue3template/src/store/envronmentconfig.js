export const VUE_APP_ENVIRONMENT = process.env.VUE_APP_ENVIRONMENT || '';
export const VUE_APP_TITLE = process.env.VUE_APP_TITLE || '';
export const NODE_ENV = process.env.NODE_ENV || '';

const variables = Object.freeze({   
    VUE_APP_ENVIRONMENT,   
    VUE_APP_TITLE,
    NODE_ENV,
});
export default variables;