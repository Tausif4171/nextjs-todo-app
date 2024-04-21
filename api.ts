

// import ITodo from ''
const apiUrl = "http://localhost:3001"
const getTodo = async () => {
    const res = await fetch(`${apiUrl}/tasks`)
    const data = await res.json();
    return data;
}

export default getTodo;