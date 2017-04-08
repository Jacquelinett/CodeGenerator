class Function {
    constructor(x, y) {
        this.name = x;
        this.comment = y;
    }
    getName() {
        return this.name;
    }
    getComment() {
        return this.comment;
    }
    setName(name) {
        this.name = name;
    }
    setComment(comment) {
        this.comment = comment;
    }

    //var obj = new function_("test","test");
}