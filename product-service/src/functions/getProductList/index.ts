import { handlerPath } from '@libs/handler-resolver';

export default {
    events: [{
        http: {
            method: 'get',
            path: 'products',
            cors: true,
        },
    }],
    handler: `${handlerPath(__dirname)}/handler.main`,
};
