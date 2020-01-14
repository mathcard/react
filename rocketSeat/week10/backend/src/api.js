import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});
/*
{	
	"github_username": "mathcard",
	"techs": "React Js, React Native, Node JS",
	"latitude": -16.6851817 ,
	"longitude": -49.2686083	
}

*/
export default api;