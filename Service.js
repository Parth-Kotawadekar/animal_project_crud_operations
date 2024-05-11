import axios from "axios";

const baseUrl = "http://localhost:8080/api";

class Service{

        //EMPLOYEE SERVICES
        static async getAllEmployee(){
                return axios.get(baseUrl + '/showAll');
        }

        static async addEmployee(animal){
                const response = await fetch(baseUrl + '/addNew',{
                        method:'POST',
                        headers:{
                                'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(animal)
                });
                return response.json();
        }

        static async editEmployee(animal){
                return axios.put(baseUrl + '/editEmployee/' + animal.id, animal, {
                        headers:{
                                'Content-Type' : 'application/json',
                        },body: JSON.stringify(animal)
                });
        }

        static async deleteEmployee(id){
                const response = await fetch((baseUrl + '/deleteEmployee/' + id),{
                        method:'DELETE',
                        headers:{
                                'Content-Type' : 'application/json',
                        },
                        body: JSON.stringify(id)
                });
                return response.json();
        
        }

        static async getEmployeeById(id){
                return axios.get(baseUrl + "/employee/" + id);
        }
}

export default Service

