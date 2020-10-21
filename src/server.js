import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
// import * as admin from 'firebase-admin';
// import serviceAccount from './serviceAccount.json';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
// admin.initializeApp({
// 	credential: admin.credential.cert(serviceAccount)
//    });
// const db = admin.firestore();

// var app = express();

polka()
.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
