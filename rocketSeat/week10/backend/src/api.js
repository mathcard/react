import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});
/*
{	Cadastrar dev: http://localhost:3333/devs -> Body:
	"github_username": "mathcard",
	"techs": "React Js, React Native, Node JS",
	"latitude": -16.6851817 ,
	"longitude": -49.2686083	

    Listar Dev: http://localhost:3333/devs
}

*/
export default api;