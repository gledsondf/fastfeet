import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

//importa promessa async
import { promisify} from 'util';

export default async (req, res, next) => {

  const authHeader = req.headers.authorization;

  if(!authHeader) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  const [, token ] = authHeader.split(' ');

  try {
   const decoded = await promisify(jwt.verify)(token, authConfig.secret );
   //console.log(decoded);
   req.userId = decoded.id;

  return next();
  } catch (err) {
    return res.status(401).json({ erro: 'Token inválido'});
  }
  return next();
}
