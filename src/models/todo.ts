class Todo {
    id: number;
    text: string;

    constructor(todoText: string) {
        this.text = todoText;
        this.id = new Date().getTime() * Math.random() * 10000;
    }
}
export default Todo;