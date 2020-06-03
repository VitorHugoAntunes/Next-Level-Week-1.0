import express from 'express';
import cors from 'cors';
import path from 'path';

import routes from './routes'

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

/** CONCEITOS
 * 
 * Rota: Endereco completo da requisicao (http://localhost:3333/users)
 * 
 * Recurso: Qual entidade estamos acessando do sistemas (ex: /users)
 * 
 * GET: Buscar uma ou mais informacoes no back-end
 * POST: Criar uma nova informacao no back-end
 * PUT: Atualizar uma informacao existente no back-end
 * DELETE: Remover uma informacao do back-end
 * 
 * POST http://localhost:3333/users = Criar usuario
 * GET http://localhost:3333/users = Listar usuarios
 * GET http://localhost:3333/users/5 = Buscar dados do usuario com ID 5
 * 
 * Request Param: Parametros que vem na propria rota que indentificam um recurso
 * Query Param: Parametros que vem na propria rota geralmente opcionais para filtros, paginacao, etc
 * Request Body: Parametros para criacao/atualizacao de informacoes (corpo da requisicao)
 */

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);