import { post } from 'aws-amplify/api';

async function postUserAnswers(test) {
    try {
        const restOperation = post({
            apiName: 'quizsApi',
            path: '/items',
            options: {
                body: {
                    message: 'Mow the lawn'
                }
            }
        });
        const { body } = await restOperation.response;
        const response = await body.json();
        console.log('POST call succeeded');
        console.log(response);
    } catch (e) {
        console.log('POST call failed: ', JSON.parse(e.response.body));
    }
}
export default postUserAnswers