class Todo {
    id: string;
    content: string;
    status: boolean;

    constructor(id: string, content: string, status: boolean = false){
        this.id = id;
        this.content = content;
        this.status = status;
    }

    describe() {
        console.log(`Todo: ${this.content} with id: ${this.id}`);
    }
}

class TodoListManager {
    todos: Todo[] = [];
    addTodo(content: string): void {
        const id = (this.todos.length + 1).toString();
        let Todo1 = new Todo(id, content);
        this.todos.push(Todo1);
    }

    removeTodo(index: number): void{
        if(index >0 && index < this.todos.length) {
            this.todos.splice(index, 1);
        }
        else {
            console.log("Vị trí không tồn tại, vui lòng nhập lại vị trí phù hợp");
        }
    }

    updateTodo (index: number, content: string):void {
        if(index >= 0 && index < this.todos.length){
            this.todos[index].content = content;
        }
        else {
            console.log("Vị trí không tồn tại, vui lòng nhập lại vị trí phù hợp");
        }
    }

    sortTodo (): void {
        this.todos.sort((a, b) => a.content.localeCompare(b.content));
        this.listTodos();
    }

    findTodo(content: string): void {
        const index = this.todos.findIndex(todo => todo.content === content);
        if(index !== -1){
            console.log("Tìm thấy todo tại vị trí ${index}");
        }
        else {
            console.log("Không tìm thấy");
        }
    }

    listTodos(): void {
        if(this.todos.length === 0) {
            console.log("Hiện không có công việc nào");
            return;
        }
        else {
            this.todos.forEach((todo, index) => {
                console.log(`${index}. ${todo.content} : ${todo.status ? "Hoàn thành" : "Chưa hoàn thành"}`);
            });
        }
    }
}

class Main {
    run(): void {
        let todoListManager= new TodoListManager();
        while (true) {
            console.log("Danh sách các công việc");
            console.log("1. ADD");
            console.log("2. REMOVE");
            console.log("3. UPDATE");
            console.log("4. LIST");
            console.log("5. TodoFind");
            let input = prompt("Chọn thao tác");
        }
    }
}

