class Class {
    constructor(x, y) {
        this.name = x;
        this.comment = y;
        this.functionList = {};
        this.variableList = {};
    }
    getName() {
        return this.name;
    }
    getComment() {
        return this.comment;
    }
    getFunctionList() {
        return this.functionList;
    }
    getVariableList() {
        return this.variableList;
    }
    setName(name) {
        this.name = name;
    }
    setComment(comment) {
        this.comment = comment;
    }

    //var obj = new Class_("test","test");
}