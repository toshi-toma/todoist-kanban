export const fetchProjects = async (token: any) => {
  return fetch('https://beta.todoist.com/API/v8/projects',
  {
    headers: {
      Authorization: `Bearer ${token}`
     }
   })
   .then(function(response) {
     return response.json();
   })
   .then(function(myJson) {
     console.log(JSON.stringify(myJson));
   });
}