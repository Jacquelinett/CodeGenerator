class Class {
    constructor(x, y) {
        this.name = x;
        this.comment = y;
        this.functionList = [];
        this.variableList = [];
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

    removeFromClass(obj) {
        if (obj instanceof Function) {
            var i = this.functionList.findIndex(function(element) {
                return element == obj;
            });
            if (i > -1) {
                this.functionList.splice(i, 1);
            }
        }
        else if (obj instanceof Variable) {
            var i = this.variableList.findIndex(function(element) {
                return element == obj;
            });
            if (i > -1) {
                this.variableList.splice(i, 1);
            }
        }
    }

    //var obj = new Class_("test","test");
}