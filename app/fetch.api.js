import "regenerator-runtime";

export const getTodosTask = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?&_limit=10');
    const data = await response.json();
    return data;
  };
