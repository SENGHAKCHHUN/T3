let afterRequest = (Response) => {
  let users = Response.data;
  console.log(users);
};
let errorAfterRequest = (Response) => {
  console.log(Response);
};

axios.get("https://jsonplaceholder.typicode.com/posts").then(afterRequest).catch(errorAfterRequest);
